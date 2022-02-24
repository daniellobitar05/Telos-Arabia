import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

import Fast from "../SVG/fast.svg";
import NoGas from "../SVG/nogas.svg";
import NoFront from "../SVG/nofront.svg";
import Decent from "../SVG/decent.svg";
import Eco from "../SVG/eco.svg";
import Comm from "../SVG/comm.svg";
import CPLUS from "../SVG/cplusplus.svg";
import SOLID from "../SVG/solidity.svg";

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme.body};
    height: 140vh;
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

const Column = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    
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



const GroundSection = () => {

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
        
    }, [inView])

    return(
        <Section ref={ref}>
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
                        <Subtitle animate={animationTwo} >
                        Our Block Producers are located around the world and cannot be owned by the same entity
                        </Subtitle>
                        </Column>
            </TextContainer>
        </Section>
    )
}

export default GroundSection;