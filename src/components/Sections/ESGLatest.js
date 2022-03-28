import {useEffect} from "react";
import styled from "styled-components";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Recap from "../images/news/recap.png";
import Nutshell from "../images/news/news1.jpg";
import Board from "../images/news/board.jpg";


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
`;


const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back14};
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
`;

const ButtonWrapper = styled(motion.div)`
    height: 15vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Column = styled(motion.a)`
    width: 30%;
    height: 90%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

const ImageHolder = styled.div`
    width: 100%;
    height: 50%;
    background: orange;
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
    height: 50%;
    font-size: 24px;
    transform: translate(0, -10%);
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const ESGLatest = () => {

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
                x: 0, opacity: 1, 
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '100vw', opacity: 0, 
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
        <Section id="esglatest" ref={ref}>
            <Title animate={animation}>Latest ESG News</Title>
            <ButtonWrapper animate={animationTwo}>
            <LinkR to="/News"><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{duration: 0.2, type: "tween"}}>SHOW ALL NEWS</Button></LinkR>
            </ButtonWrapper>
            <Grid animate={animationTwo}>
                <Column  whileHover={{transform: 'translate(0%, 5%)'}} transition={{duration: 0.8, type:"tween", ease: 'easeOut'}} href="https://www.telos.net/news/meet-telos-foundation-board" target="_blank" rel="noreferrer">
                    <ImageHolder><img src={Board} alt="" /></ImageHolder>
                    <TextHolder>Meet the Telos foundation board</TextHolder>
                </Column>
                <Column whileHover={{transform: 'translate(0%, 5%)'}} transition={{duration: 0.8, type:"tween", ease: 'easeOut'}} href="https://www.telos.net/news/telos-board-elections-summary" target="_blank" rel="noreferrer">
                    <ImageHolder><img src={Nutshell} alt="" /></ImageHolder>
                    <TextHolder>The Telos elections in a nutshell</TextHolder>
                </Column>
                <Column  whileHover={{transform: 'translate(0%, 5%)'}} transition={{duration: 0.8, type:"tween", ease: 'easeOut'}} href="https://www.telos.net/news/telos-monthly-recap-february-2022" target="_blank" rel="noreferrer">
                    <ImageHolder><img src={Recap} alt="" /></ImageHolder>
                    <TextHolder>Telos Monthly Recap - February 2022</TextHolder>
                </Column>
            </Grid>
            <Empty>
                <IconColumnLeft to="footer" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="esgconclusion" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGLatest;