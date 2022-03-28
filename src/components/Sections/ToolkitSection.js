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

import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddLinkIcon from '@mui/icons-material/AddLink';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back5};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
       height: 120vh;
       
    }

`;

const Title = styled(motion.div)`
    font-size: 82px;
    width: 100%;
    color: ${props => props.theme.text};  
    height: 20vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 52px;
        height: 15vh;
    }
    
`;

const Subtitle = styled(motion.div)`
    font-size: 42px;
    width: 60%;
    color: ${props => props.theme.text};
    text-align: center; 
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        width: 80%;
        font-size: 28px;
        height: 15vh;
    }
`;

const Wrapper = styled(motion.div)`
    width: 100%;
    height: 50vh;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 70vh;
    }
    
`;



const EmptyColumn = styled.div`
    width: 20%;
    height: 100%;
    
    float: left;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Column = styled.div`
    width: 30%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 40vh;
    }
    
`;

const Box = styled(motion.a)`
    width: 55%;
    height: 90%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid purple;
    &:hover{
        background: rgb(230,230,250,0.2);
    }
`;

const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
    span {
        display: flex;
        height: 50px;
        width: 50px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        
        color: white;
        
    }
`;

const BottomCard = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 60%; 
`;

const CardTitle = styled.div`
    color: white;
    font-size: 26px;
    text-align: center;
    height: 40%;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const CardSubtitle = styled.div`
    color: white;
    font-size: 22px;
    text-align: center;
    height: 60%;
    width: 100%;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const UploadIcon = styled(UploadFileIcon)`
    color: white;
    transform: scale(1.5);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const APIIcon = styled(AddLinkIcon)`
    color: white;
    transform: scale(1.5);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;

`;

const HideColumn = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    
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

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;



const ToolkitSection = () => {

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
        <Section id="toolkit" ref={ref}>
            <Title animate={animation}>مجموعة أدوات المطور</Title>
            <Subtitle animate={animationTwo}>راجع الوثائق والمواد المرجعية أدناه للبدء</Subtitle>
            <Wrapper animate={animationTwo}>
                <EmptyColumn></EmptyColumn>
                <Column>
                    <Box whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href="https://developers.eos.io/welcome/latest/reference/index" target="_blank" rel="noreferrer">
                        <TopCard><span><APIIcon /></span></TopCard>
                        <BottomCard>
                            <CardTitle>API مراجع</CardTitle>
                            <CardSubtitle>راجع وثائقنا الخاصة بواجهات Telos / EOSIO APIs و SDK</CardSubtitle>
                        </BottomCard>
                    </Box>
                </Column>
                <Column>
                 <Box whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href="https://studio.telos.net/" target="_blank" rel="noreferrer">
                    <TopCard><span><UploadIcon /></span></TopCard>
                    <BottomCard>
                        <CardTitle>Telos Studio IDE</CardTitle>
                        <CardSubtitle>Telos Studio IDE انشر العقود دون أي وقت إعداد باستخدام</CardSubtitle>
                    </BottomCard> 
                 </Box>
                </Column>
                <EmptyColumn></EmptyColumn>
            </Wrapper>
            <ArrowWrapper>
                <IconColumnLeft>
                <LinkS to="joindev" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumnLeft>
                <HideColumn></HideColumn>
                <IconColumnRight to="devstack" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </ArrowWrapper>
        </Section>
    );
}

export default ToolkitSection;