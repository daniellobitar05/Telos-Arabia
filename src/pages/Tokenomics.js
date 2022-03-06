import {useState} from "react";
import styled, {keyframes} from "styled-components"
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";

import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import Header from "../components/NavBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";

import Telos from "../components/images/telos_logo.png";


const Section = styled.div`
    width: 100%;
    height: ${props => props.click ? '240vh' : '90vh'};
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 62px;
    width: 80%;
    height: 45vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    text-align: right;
    
`;

const MotionDivRight = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    //background: linear-gradient(90deg, rgba(135,42,149,1) 0%, rgba(69,43,161,1) 78%, rgba(4,22,134,1) 100%);
    z-index: 1;
    background: ${props => props.click ? "linear-gradient(90deg, rgba(92,114,232,1) 0%, rgba(69,43,161,1) 50%, rgba(4,22,134,1) 100%)" : "black" };
    transition: height 0.5s ease, width 1s ease 0.5s;
`;

const MotionDivLeft = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
    background: ${props => props.click ? "linear-gradient(90deg, rgba(4,22,134,1) 0%, rgba(69,43,161,1) 50%, rgba(92,114,232,1) 100%)" : "black" };
    transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Center = styled(motion.div)`
    position: absolute;
    top: ${props => props.click ? "90%" : '50%'};
    left: ${props => props.click ? "5%" : '50%'};
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    z-index: 100;
    span{
        color: white;
        transform: translate(0, 100%);
        font-size: 28px;
        cursor: pointer;
        display: ${props => props.click ? 'none' : 'inline-block'}
    }
    img{
        cursor: pointer;
        width: ${props => props.click ? '50%' : '100%'};
        
    }
`;



const Pulse = {
    start: {
        scale: 1
    },
    end: {
        scale: 0.8,
        transition: {
            duration: 5, 
            yoyo: 'Infinity'
        }
    }
}

const Box = styled(motion.div)`
    position : absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 55vw;
    height: 40vh;
    /* width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '50%' : '0%'}; */
    //transition: height 0.5s ease, width 1s ease 0.5s;
    display: flex;
    border: 2px solid purple;
    backdrop-filter: blur(10px);
    z-index: 20;
`;

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

`;



const Text = styled.div``;

const Intro = () => {
    return(
        <Box>
            <SubBox>
                <Text>TOKENOMICS</Text>
            </SubBox>
            <SubBox>
            <Text>UNDERSTANDING THE VALUE OF TELOS</Text>
            </SubBox>
        </Box>
    );
}


const Tokenomics = () => {

    const [theme, setTheme] = useState("dark");

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
                <Section id="tokenomics" click={click}>
                    <MotionDivLeft click={click} />
                    <MotionDivRight click={click} />
                    
                    <Center click={click} >
                        <motion.img src={Telos} alt="" variants={Pulse}  initial="start" animate="end" onClick={() => handleClick()}/>
                        <span>CLICK ME</span>
                    </Center>
                    {click ? <Intro click={click}/> : null}
                </Section>
        </ThemeProvider>
    )
}

export default Tokenomics;