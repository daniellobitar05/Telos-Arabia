import styled from "styled-components"
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Canvas, extend, useFrame, useLoader, useThree} from "@react-three/fiber";
import Circle from "../images/telos_logo.png";
import Logo from "../images/evm_logo.png";
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

    let t = 1;
    let f = 0.002;
    let a = 2;
    const graph = useCallback((x, z) => {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])

    const count = 200
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
               color={'#e6e8fa'}
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
        camera={{position: [100, 20, 0], fov: 75}}
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

const TextContainer = styled.div`
    width: 60%;
    height: 80%;
    position: absolute;
    top: 40%;
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 ${props => props.theme.text};
    backdrop-filter: blur(0.5px);
    display: grid;

    @media screen and (max-width: 768px){
        width: 80%;
        height: 500px;
        top: 45%;
    }
    
    
`;

const Text = styled.h1`
    font-size: 48px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.body};
    @media screen and (max-width: 1100px){
        text-align: center;
    }
    @media screen and (max-width: 768px){
        font-size: 64px;
    }

`;

const Section = styled.div`
    width: 100%;
    height: 20vh;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
`;
const Anim = styled.div`
    width: 100%;
    height: 140vh;
    padding-bottom: 400px;
    background-color: ${props => props.theme.body};
`;

const HeadLine = styled.h1`
    font-size: 72px;
    margin-top: -150px;
    color: white;

    @media screen and (max-width: 660px){
        font-size: 42px;
    }
`;

const HeroSection = () => {
    return(
        <Anim>
            <Suspense fallback={null}>
            
                
            
                <AnimationCanvas />
                <Container>
                    <TextContainer>
                        <HeadLine>
                            موطن أسرع آلة افتراضية إيثريوم          
                        </HeadLine>
                    </TextContainer>
                </Container>
            </Suspense>
        </Anim>
    )
}

export default HeroSection;