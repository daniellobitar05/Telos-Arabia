import {useEffect} from "react";
import styled, {keyframes} from "styled-components";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import sushi from "../images/evm/sushi.jfif";
import punks from "../images/evm/punks.jfif";
import news from "../images/news/news6.jpg";


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
    height: 10vh;
    display: inline-flex;
    @media screen and (max-width: 768px){
        height: 5vh;
    }
`;


const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, rgba(44,11,96,1) 0%, rgba(25,25,112,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled(motion.div)`
    width: 100%;
    height: 20vh;
    color: white;
    font-size: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        height: 10vh;
        font-size: 32px;
    }
`;

const ButtonWrapper = styled.div`
    height: 10vh;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled(motion.div)`
    border: 1px solid #ba55d3;
    color: lightblue;
    font-size: 16px;
    padding: 10px 15px;
    display: flex;
    background: transparent;
    width: 150px;
    font-weight: bold;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    cursor: pointer;
    &:hover{
        background: linear-gradient(90deg, rgba(195,93,232,1) 0%, rgba(69,43,161,1) 63%, rgba(4,22,134,1) 100%);
    }
`;

const Grid = styled(motion.div)`
    width: 90%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 75vh;
    }
`;

const Column = styled(motion.a)`
    width: 30%;
    height: 90%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 50%;
        height: 33%;
    }
    
`;

const ImageHolder = styled.div`
    width: 100%;
    height: 50%;
    @media screen and (max-width: 768px){
        height: 60%;
    }
    img{
        width: 100%;
    }
`;

const TextHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    height: 30%;
    font-size: 24px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        height: 20%;
        font-size: 14px;
    }
`;

const EVMLatest = () => {

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
        <Section id="evmlatest" ref={ref}>
            <Title animate={animation}>Latest on Telos EVM</Title>
            <ButtonWrapper>
            <LinkR to="/News"><Button animate={animation} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>SHOW ALL NEWS</Button></LinkR>
            </ButtonWrapper>
            <Grid animate={animationTwo}>
                <Column  whileHover={{transform: 'translate(0%, 5%)'}} transition={{duration: 0.8, type:"tween", ease: 'easeOut'}} href="https://www.telos.net/news/important-telos-ecosystem-update" target="_blank" rel="noreferrer">
                    <ImageHolder><img src={news} alt="" /></ImageHolder>
                    <TextHolder>Important Telos ecosystem update</TextHolder>
                </Column>
                <Column  whileHover={{transform: 'translate(0%, 5%)'}} transition={{duration: 0.8, type:"tween", ease: 'easeOut'}} href="https://www.telos.net/news/sushiswap-partners-with-telos" target="_blank" rel="noreferrer">
                    <ImageHolder><img src={sushi} alt="" /></ImageHolder>
                    <TextHolder style={{transform: 'translate(0, 50%)'}}>SushiSwap partners with Telos and launches on the Telos EVM</TextHolder>
                </Column>
                <Column  whileHover={{transform: 'translate(0%, 5%)'}} transition={{duration: 0.8, type:"tween", ease: 'easeOut'}} href="https://www.telos.net/news/telospunks-come-to-telos-evm" target="_blank" rel="noreferrer">
                    <ImageHolder><img src={punks} alt="" /></ImageHolder>
                    <TextHolder>Telos Punks Comes to the EVM</TextHolder>
                </Column>
            </Grid>
            <Empty>
                <IconColumnLeft to="evmfooter" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="micro" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMLatest;