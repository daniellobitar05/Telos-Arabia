import styled from "styled-components"
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Canvas, extend, useFrame, useLoader, useThree} from "@react-three/fiber";
import Circle from "../images/telos_logo.png";
import Logo from "../images/evm_logo.png";
import {Suspense, useMemo, useCallback, useRef} from "react";
import Fast from "../SVG/fast.svg";
import NoGas from "../SVG/nogas.svg";
import NoFront from "../SVG/nofront.svg";
import Decent from "../SVG/decent.svg";
import Eco from "../SVG/eco.svg";
import Comm from "../SVG/comm.svg";
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-rows: 1fr 1fr;
    

    @media screen and (max-width: 768px){
        width: 80%;
        height: 500px;
        top: 45%;
    }

    @media screen and (max-width: 660px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
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
    margin-top: -1600px;
    color: white;

    @media screen and (max-width: 660px){
        font-size: 42px;
    }
`;

const Image = styled.img`
    width: 40%;

    @media screen and (max-width: 660px){
        width: 30%;
    }
`;

const Title = styled.h1`
    font-size: 20px;
    color: aqua;
    @media screen and (max-width: 660px){
        font-size: 14px;
        text-align: center;
    }
`;

const Subtitle = styled.div`
    font-size: 14px;
    color: white;
    text-align: center;
    @media screen and (max-width: 660px){
        font-size: 10px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    
`;

const HeroSection = () => {
    return(
        <Anim>
            <Suspense fallback={null}>
            
                
            
                <AnimationCanvas />
                <Container>
                    <HeadLine>
                            موطن أسرع آلة افتراضية إيثريوم          
                        </HeadLine>
                    <TextContainer>
                        <Column>
                        <Image src={NoFront} alt="" />
                        <Title>
                            No Front Running
                        </Title>
                        <Subtitle>
                        First in, first out transactions functionally eliminate front running
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={NoGas} alt="" />
                        <Title>
                            No Gas Fees
                        </Title>
                        <Subtitle>
                        No gas fees on Native and insignificant fees on EVM to keep spammers away
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Fast} alt="" />
                        <Title>
                            Fast & Scalable
                        </Title>
                        <Subtitle>
                        Battle tested 10 000 transactions per second and 0.5s block
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Comm} alt="" />
                        <Title>
                            Community Governed
                        </Title>
                        <Subtitle>
                        Using our Governance Engine our community decides on everything from proposals to board members
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Eco} alt="" />
                        <Title>
                            Eco-Friendly
                        </Title>
                        <Subtitle>
                        The most energy efficient blockchain, we also aim to offset all of our carbon emissions
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Decent} alt="" />
                        <Title>
                            Decentralized
                        </Title>
                        <Subtitle>
                        Our Block Producers are located around the world and cannot be owned by the same entity
                        </Subtitle>
                        </Column>
                    </TextContainer>
                </Container>
            </Suspense>
        </Anim>
    )
}

export default HeroSection;