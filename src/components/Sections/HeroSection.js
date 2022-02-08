import styled from "styled-components"
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Canvas, extend, useFrame, useLoader, useThree} from "@react-three/fiber";
import Circle from "../images/circleImg.png";
import {Suspense, useMemo, useCallback, useRef} from "react";
extend ({OrbitControls})

function CameraControls(){

    const {
       camera,
        gl: {domElement}
    } = useThree();


    const controlsRef = useRef();
    useFrame(() => controlsRef.current.update())

    return(
        <orbitControls 
            ref={controlsRef}
            args={[camera, domElement]}
            autoRotate
            autoRotateSpeed={-0.2}  
        />
    );
}



function Points(){

    const imgTex = useLoader(THREE.TextureLoader, Circle);
    const bufferRef = useRef();

    let t = 0;
    let f = 0.002;
    let a = 1.5;
    const graph = useCallback((x, z) => {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])

    const count = 100
    const sep = 3

    let positions = useMemo(() => {
        let positions = []

        for(let xi=0; xi < count; xi++) {
            for(let zi=0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                let y =  graph(x, z);
                positions.push(x, y, z);
            }
        }

        return new Float32Array(positions);
    }, [count, sep, graph])

    useFrame(() => {
        t += 15
        const positions = bufferRef.current.array;

        let i = 0;

        for(let xi=0; xi < count; xi++) {
            for(let zi=0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                positions[i + 1] = graph(x, z);
                i += 3;
            }
        }

        bufferRef.current.needsUpdate = true;
    })

    return(
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute 
                    ref={bufferRef}
                    attachObject={['attributes', 'position']}
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial 
               attach="material" 
               map={imgTex}
               color={'#9400d3'}
               size={0.5}
               sizeAttenuation
               transparent={false}
               alphaTest={0.5}
               opacity={1}
            />
        </points>
    );
}

function AnimationCanvas(){
    return(
       <Canvas
        colorManagement={false}
        camera={{position: [100, 10, 0], fov: 75}}
       >
           <Suspense fallback={null}>
                <Points />
           </Suspense>
           <CameraControls />
       </Canvas> 
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
`;

const TextContainerUp = styled.div`
    width: 80%;
    height: 80%;
    
    position: absolute;
    top: 20%;
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 ${props => props.theme.text};
    backdrop-filter: blur(0.5px);
`;

const TextContainer = styled.div`
    width: 80%;
    height: 80%;
    
    position: absolute;
    top: 122%;
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 ${props => props.theme.text};
    backdrop-filter: blur(0.5px);
`;

const Anim = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
`;

const HeroSection = () => {
    return(
        <Anim>
            <Suspense fallback={null}>
                 <Container>
                    <TextContainerUp></TextContainerUp>
                </Container>
                <AnimationCanvas />
                <Container>
                    <TextContainer></TextContainer>
                </Container>
            </Suspense>
        </Anim>
    )
}

export default HeroSection;