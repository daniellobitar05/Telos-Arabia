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
background: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media screen and (max-width: 660px){
   
   
}
`;

const Title = styled.div`
    font-size: 62px;
    width: 80%;
    color: ${props => props.theme.text};  
    height: 25vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    
    
`;

const Subtitle = styled.div`
    font-size: 18px;
    width: 50%;
    color: ${props => props.theme.text};
    text-align: center; 
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const JoinButton = styled(Button)`
    &&&{
        z-index: 100;
        background: linear-gradient(90deg, rgba(146,16,205,1) 0%, rgba(100,42,217,1) 50%, rgba(47,230,231,1) 100%);
        font-size: 18px;
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

    return(
        <Section id="joindev">
            <Subtitle style={{fontSize: '14px'}}>JOIN US</Subtitle>
            <Title>Join developers building a better future on the Telos Network</Title>
            <Subtitle>If you are a developer and interested in Blockchain and smart contract development join our Telegram group</Subtitle>
            <a href="https://t.me/dappstelos" target="_blank" rel="noreferrer"> <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><JoinButton>Meet developers building on Telos  Network</JoinButton></motion.div></a>
            <ArrowWrapper>
                <IconColumnLeft>
                <LinkS to="footer" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumnLeft>
                <HideColumn></HideColumn>
                <IconColumnRight to="toolkit" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </ArrowWrapper>
        </Section>
    );
}

export default JoinDevSection;