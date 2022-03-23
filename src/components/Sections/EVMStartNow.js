import {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";

import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


import Ball3 from "../images/telos_ball3.png";
import EVM3 from "../images/evm3.png";

const ArrowLeft = styled(KeyboardArrowLeftIcon)`
    color: white;
    transform: translate(-450%, 0);
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;

const IconColumnRight = styled(LinkS)`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background: transparent;

`;

const ToggleColumn = styled.div`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
`;

const IconColumnLeft = styled(LinkS)`
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;

`;
const EmptyColumn = styled.div`
   width: 50%;
   height: 100%;
   float: left; 
`;

const Empty = styled.div`
    width: 100%;
    height: 5vh;
    display: inline-flex;
`;

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back5};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;



const Grid = styled.div`
    width: 90%;
    height: 90vh;
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 95vh;
    }
    
`;

const Column = styled.div`
    width: 50%;
    height: 90vh;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 50%;
    }
`;

const Box = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Image = styled(motion.div)`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 95%;
        height: 95%;
        object-fit: contain;
    }
`;

const WalletImage = styled(motion.div)`
   width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    img{
        width: 90%;
        height: 90%;
        object-fit: contain;
    } 
`;

const Text = styled(motion.div)`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 56px;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        justify-content: center;
        font-size: 24px;
    }
`;

const Subtitle = styled(motion.a)`
    width: 80%;
    height: 40%;
    color: white;
    text-align: center;
    display: inline-flex;
    
    justify-content: center;
    font-size: 26px;
    
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        justify-content: center;
        text-align: center;
        font-size: 16px;
    }
`;

const Pulse = {
    start: {
        scale: 0.75
    },
    end: {
        scale: 0.80,
        transition: {
            duration: 1, 
            yoyo: "Infinity"
        }
    }
}


const EVMStartNowTwo = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1, scale: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                opacity: 0, scale: 0.5
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
        <Section id="startnow" ref={ref}>
            <Grid>
                <Column>
                    <Box>
                        <Image animate={animation}><motion.img variants={Pulse} initial="start" animate="end" whileHover={{rotate: 10, scale: 0.85}} transition={{duration: 0.3, type: 'tween'}}  src={EVM3} alt="" /></Image>
                        <Text animate={animation}>محادثة المطور</Text>
                        <Subtitle  animate={animationTwo}><p><t>انضم إلى مجتمع من المطورين المتفانين ، المتحمسين للبناء على تيلوس </t><span>EVM</span></p></Subtitle>
                        <Subtitle href="https://t.me/TelosEVMDevs" target="_blank" rel="noreferrer" animate={animationTwo}><ArrowLeft />تعلم أكثر</Subtitle>
                    </Box>
                </Column>
                <Column>
                    <Box>
                    <WalletImage animate={animation}><motion.img variants={Pulse} initial="start" animate="end" whileHover={{rotate: 10, scale: 0.85}} transition={{duration: 0.3, type: 'tween'}} src={Ball3} alt="" /></WalletImage>
                        <Text animate={animation}>محفظة  تيلوس</Text>
                        <Subtitle animate={animationTwo}><p><t>قم بتوصيل تيلوس الخاص بك بسلاسة وبشكل مجاني بين</t><span>Native</span><t>تيلوس و </t><span>EVM</span></p></Subtitle>
                        <Subtitle href="https://wallet.telos.net/" target="_blank" rel="noreferrer" animate={animationTwo}><ArrowLeft />تعلم أكثر</Subtitle>
                    </Box>
                </Column>
            </Grid>
            <Empty>
                <IconColumnLeft to="startnowtwo" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="evmcards" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMStartNowTwo;