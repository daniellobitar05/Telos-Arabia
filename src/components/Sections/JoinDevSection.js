import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {Button} from "@mui/material";





const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.backdevs};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        height: 100vh;
    }
`;

const Title = styled(motion.div)`
    font-size: 72px;
    width: 90%;
    color: ${props => props.theme.text};  
    height: 25vh;
    line-height: 50px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 42px;
        line-height: 50px;
        height: 20vh;
    }
    
    
`;

const Subtitle = styled(motion.div)`
    font-size: 42px;
    width: 50%;
    color: ${props => props.theme.text};
    text-align: center; 
    height: 25vh;
    line-height: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        font-size: 36px;
        width: 80%;
        height: 45vh;
    }
`;

const Pagetitle = styled(motion.div)`
    font-size: 32px;
    width: 50%;
    color: ${props => props.theme.text};
    text-align: center; 
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        font-size: 28px;
        width: 80%;
        height: 25vh;
    }
`;

const JoinButton = styled(Button)`
    &&&{
        z-index: 100;
        background: linear-gradient(90deg, rgba(146,16,205,1) 0%, rgba(100,42,217,1) 50%, rgba(47,230,231,1) 100%);
        font-size: 28px;
        margin: 10px;
        color: white;
        font-weight: bold;
        border: 1px solid aqua;
        border-radius: 15px;
        padding: 10px 20px;
        margin-bottom: 20px;
        @media screen and (max-width: 768px){
            font-size: 16px;
        }
    }
`;

const ArrowWrapper = styled.div`
    height: 10vh;
    
    width: 100%;
    display: flex;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const IconColumnLeft = styled(LinkS)`
    width: 25%;
    height: 100%;
    float: left;
    display: inline-flex;
    align-items: center;
    justify-content: center;

`;

const IconColumnRight = styled(LinkS)`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
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

const HideColumn = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;

const JoinDevSection = () => {

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
                x: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw',
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
                opacity: 0, y: '100px',
            })
        }
        
    }, [inView])

    return(
        <Section id="joindev" ref={ref}>
            <Pagetitle style={{fontSize: '14px'}} animate={animationTwo}>JOIN US</Pagetitle>
            <Title animate={animation}>انضم إلى المطورين لبناء مستقبل أفضل على شبكة تيلوس</Title>
            <Subtitle animate={animationTwo}>إذا كنت مطورًا ومهتمًا بـ بلوكتشيت وتطوير العقود الذكية ، انضم إلى مجموعة تيليغرام الخاصة بنا</Subtitle>
            <a href="https://t.me/dappstelos" target="_blank" rel="noreferrer"> <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} animate={animationTwo}><JoinButton>قابل المطورين على شبكة تيلوس</JoinButton></motion.div></a>
            <ArrowWrapper>
                <IconColumnLeft>
                <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumnLeft>
                <HideColumn></HideColumn>
                <IconColumnRight to="toolkit" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}>
                <IconButton><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </ArrowWrapper>
        </Section>
    );
}

export default JoinDevSection;