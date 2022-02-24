import styled from "styled-components"
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Canvas, extend, useFrame, useLoader, useThree} from "@react-three/fiber";
import Circle from "../images/telos_logo.png";
import LetterLogo from "../SVG/telos_letter_logo.svg";
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

const Anim = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${LetterLogo});
    background-repeat: no-repeat;
    background-size: 300px 100px;
    background-position: 50% 40%;
    background-color: ${props => props.theme.body};
    @media screen and (max-width: 768px){
        height: 100vh;
        background-size: 200px 75px;
    }
    
`;

const FrontDiv = styled.div`
    background: transparent;
    width: 80%;
    display: flex;
    left: 10%;
    height: 90vh;
    position: absolute;
    top: 10%;
    
`;




const HeroSection = () => {

    return(
        <Anim>
            <Suspense fallback={null}>
                <AnimationCanvas />
                <FrontDiv></FrontDiv>
            </Suspense>
        </Anim>
    )
}

export default HeroSection;