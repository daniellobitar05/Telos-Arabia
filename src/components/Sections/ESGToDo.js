import { animateScroll as scroll } from "react-scroll";
import {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import SilverLogo from "../images/plain_silver_logo.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back3};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 160vh;
    }
`;

const Title = styled(motion.div)`
    width: 60%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 52px;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        width: 80%;
        font-size: 24px;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Subtitle = styled(motion.div)`
    font-size: 18px;
    width: 70%;
    color: ${props => props.theme.text};
    text-align: center; 
    float: left;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        width: 90%;
        height: 40vh;
        font-size: 16px;
    }
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
    
    
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
   background: transparent;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
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
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;

const Grid = styled.div`
    width: 90%;
    height: 50vh;
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
`;

const EmptyBoxColumn = styled.div`
    width: 10%;
    height: 100%;
    float: left;
`;

const ColumnLeft = styled(motion.div)`
    width: 45%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 50%;
    }
    img{
        width: 600px;
        transform: translate(5%, 0);
        @media screen and (max-width: 768px){
        width: 300px;
        transform: translate(0, 0);
    }
    }
`;

const BoxRow = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    font-size: 18px;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    transform: translate(0, -10%);
    @media screen and (max-width: 768px){
        font-size: 16px;
    }

`;

const BoxRowBottom = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 22px;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    transform: translate(-25%, 20%);
    @media screen and (max-width: 768px){
        font-size: 16px;
        transform: translate(0%, 20%);
    }

`;



const ESGToDo = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationTwo = useAnimation();
    const animationThree = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw'
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

    useEffect(() => {
        if(inView){
            animationThree.start({
                opacity: 1, scale: 1,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationThree.start({
                opacity: 0, scale: 0.5
            })
        }
        
    }, [inView])

    return(
        <Section id="todo" ref={ref}>
            <Title animate={animation}>So, what does ESG have to do with crypto & blockchain?</Title>
            <Subtitle animate={animationTwo}>One of the biggest growing pains for the blockchain sector has been society’s negative view towards the technology. There are many common misconceptions around the effects that this technology has on the world, and for good reason. With the potential to radically alter how our economies, businesses and relationships operate, there is a level of risk that comes with mass adoption, as with any major technological advancement.</Subtitle>
            <Grid>
                <ColumnLeft><motion.img animate={animationThree} src={SilverLogo} alt="" /></ColumnLeft>
                <EmptyBoxColumn />
                <ColumnLeft animate={animationTwo}>
                    <BoxRow>This became most apparent after the price of Bitcoin fell following concerns around energy consumption. In during a webcast at the Consensus 2021, Shark Tank’s Kevin O’Leary noted that “everybody’s got to wake up and realize there’s demand [for crypto], but it has to be done around ESG concerns.”</BoxRow>
                    <BoxRowBottom>“Everybody’s got to wake up and realize there’s demand [for crypto], but it has to be done around ESG concerns.”<p><span>Kevin O’Leary</span></p></BoxRowBottom>
                </ColumnLeft>
            </Grid>
            <Empty>
                <IconColumnLeft to="quotes" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="esgicons" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGToDo;