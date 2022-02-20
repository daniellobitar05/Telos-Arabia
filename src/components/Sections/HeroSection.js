import styled, {keyframes} from "styled-components"
import * as THREE from "three";
import {useEffect} from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Canvas, extend, useFrame, useLoader, useThree} from "@react-three/fiber";
import Circle from "../images/telos_logo.png";
import Logo from "../images/telos_logo.png";
import Blub from "../images/telos_blub1.png";
import {Suspense, useMemo, useCallback, useRef} from "react";
import Fast from "../SVG/fast.svg";
import NoGas from "../SVG/nogas.svg";
import NoFront from "../SVG/nofront.svg";
import Decent from "../SVG/decent.svg";
import Eco from "../SVG/eco.svg";
import Comm from "../SVG/comm.svg";
import CPLUS from "../SVG/cplusplus.svg";
import SOLID from "../SVG/solidity.svg";
/* extend ({OrbitControls})

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
    height: 140vh;
    padding-bottom: 400px;
    margin-top: 100vh;
    background-color: ${props => props.theme.body};
    @media screen and (max-width: 768px){
        height: 100vh;
    }
    @media screen and (max-width: 660px){
        height: 200vh;
    }
`;



 */


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme.body};
    height: 250vh;
    background-image: url(${Blub});
    background-repeat: no-repeat;
    background-size: contain;
`;

const HeaderText = styled.div`
    font-size: 52px;
    color: ${props => props.theme.text};
    padding: 80px 50px;
    text-align: center;
    @media screen and (max-width: 660px){
        font-size: 32px;
    }
`;

const TextContainer = styled.div`
    width: 80%;
    height: 90vh;
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 ${props => props.theme.text};
    backdrop-filter: blur(0.5px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 50px;
    @media screen and (max-width: 768px){
        width: 80%;
        height: 500px;
        top: 45%;
        width: 90%;
    }
    @media screen and (max-width: 660px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        top: 80%;
    }
`;

const ColumnWrapper = styled.div`
    z-index: 1100;
    height: 60vh;
    width: 100%;
    
    
`;

const EmptyColumn = styled.div`
    height: 100%;
    width: 10%;
    
    float: left;
    @media screen and (max-width: 660px){
        display: none;
    }
`;

const ColumnLeft = styled.div`
    height: 100%;
    width: 40%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 100px;
        padding: 30px 0 20px 0;
    }
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 50%;
    }
`;

const ColumnRight = styled.div`
    height: 100%;
    width: 40%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 75px;
        padding: 20px 0 20px 0;
    }
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 50%;
    }
`;

const Image = styled(motion.img)`
    width: 40%;

    @media screen and (max-width: 660px){
        width: 30%;
    }

`;

const Title = styled(motion.h1)`
    font-size: 20px;
    color: aqua;
    text-align: center;
    @media screen and (max-width: 660px){
        font-size: 14px;
        
    }
`;

const Subtitle = styled(motion.div)`
    font-size: 14px;
    color: white;
    text-align: center;
    padding: 0 20px;
    @media screen and (max-width: 660px){
        font-size: 10px;
        padding: 0;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    
`;

const BigTitle = styled.div`
    font-size: 24px;
    color: ${props => props.theme.text};
    span{
        font-weight: bold;
    }
`;

const Description = styled.div`
    font-size: 16px;
    color: ${props => props.theme.text};
    padding: 50px 80px;
    text-align: center;
`

const HeroSection = () => {

    const {ref, inView} = useInView();

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                pathLength: 1, scale: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                pathLength: 0, scale: 0.2,
            })
        }
        console.log("use effect hook, inView = " + inView);
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: 0,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, y: '40px',
            })
        }
        console.log("use effect hook, inView = " + inView);
    }, [inView])

    return(
        <>
        {/* <Anim>
            <Suspense fallback={null}>
                <AnimationCanvas /> */}
                <Container ref={ref}>
                    <HeaderText>A ground Breaking Blockchain</HeaderText>
                    <TextContainer>
                        <Column>
                        <Image src={NoFront} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                            No Front Running
                        </Title>
                        <Subtitle animate={animationTwo}>
                        First in, first out transactions functionally eliminate front running
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={NoGas} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                            No Gas Fees
                        </Title>
                        <Subtitle animate={animationTwo}>
                        No gas fees on Native and insignificant fees on EVM to keep spammers away
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Fast} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                            Fast & Scalable
                        </Title>
                        <Subtitle animate={animationTwo}>
                        Battle tested 10 000 transactions per second and 0.5s block
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Comm} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                            Community Governed
                        </Title>
                        <Subtitle animate={animationTwo}>
                        Using our Governance Engine our community decides on everything from proposals to board members
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Eco} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                            Eco-Friendly
                        </Title>
                        <Subtitle animate={animationTwo}>
                        The most energy efficient blockchain, we also aim to offset all of our carbon emissions
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Decent} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                            Decentralized
                        </Title>
                        <Subtitle animate={animationTwo} whileHover={{filter: 'brightness(2)'}}>
                        Our Block Producers are located around the world and cannot be owned by the same entity
                        </Subtitle>
                        </Column>
                    </TextContainer>
                    
                    <ColumnWrapper ref={ref}>
                        <EmptyColumn></EmptyColumn>
                        <ColumnLeft>
                            <Title>TELOS NATIVE</Title>
                            <Image src={CPLUS} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                            <BigTitle><span>Native</span> C++</BigTitle>
                            <Description>Telos natively runs EOSIO C++ smart contract technology. The leading decentralized stack for high throughput decentralized applications.</Description>
                        </ColumnLeft>
                        <ColumnRight>
                            <Title>TELOS EVM</Title>
                            <Image src={SOLID} alt="" animate={animation} whileHover={{scale: 1.1}} />
                            <BigTitle><span>EVM</span> Solidity</BigTitle>
                            <Description>Telos is the first EVM compatible blockchain built on EOSIO. Deploy and run your Ethereum Apps using Telos EVM for the most performant & secure DeFi available today.</Description>
                        </ColumnRight>
                        <EmptyColumn></EmptyColumn>
                    </ColumnWrapper>
                </Container>
           {/*  </Suspense>
        </Anim> */}
        </>
    )
}

export default HeroSection;