import {useState} from "react";
import styled from "styled-components"
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";

import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import Header from "../components/NavBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import WhatisESG from "../components/Sections/WhatisESG";

const Section = styled.div`
    width: 100%;
    height: 90vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 62px;
    width: 80%;
    height: 25vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    text-align: right;
    
`;

const Subtitle = styled.div`
    font-size: 18px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};
    text-align: right; 
    
    display: flex;
    align-items: center;
    
`;

const IconWrapper = styled.div`
    display: flex;
    height: 30vh;
    width: 60%;
    
`;

const IconColumn = styled(LinkS)`
    height: 100%;
    width: 33.3%;
    float: left;
    display: flex;
    flex-direction: column;
    
`;

const Button = styled(motion.div)`
    z-index: 100;
    background: linear-gradient(90deg, rgba(146,16,205,1) 0%, rgba(100,42,217,1) 50%, rgba(47,230,231,1) 100%);
    font-size: 20px;
    margin: 10px;
    color: white;
    width: 200px;
    font-weight: bold;
    border: 1px solid aqua;
    border-radius: 15px;
    padding: 15px 10px;
    text-align: center;
    cursor: pointer;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    

`;

const ESG = () => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
                <Section id="esg">
                    <Title>Telos is the ESG Blockchain</Title>
                    <Subtitle>🌎 Environmental, ✌️ Social & 🏢 Governance (ESG) investments & business practices are becoming increasingly important criteria when weighing the potential risks of an initiative. Many institutions have been calling for ESG solutions in the cryptocurrency sector but no network has delivered…until Telos. Telos is extremely fast, virtually fee-less and more powerful than major competitors. However, it takes more than that to be #RealWorldReady. Telos is making a conscious effort to become the leading ESG Blockchain, positioning itself for mass adoption by real world users around the world.</Subtitle>
                    <IconWrapper>
                        <IconColumn><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>WHY TELOS</Button></IconColumn>
                        <IconColumn><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>WHY IT MATTERS</Button></IconColumn>
                        <IconColumn><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>ABOUT ESG</Button></IconColumn>
                    </IconWrapper>
                </Section>
                <WhatisESG />
        </ThemeProvider>
    )
}

export default ESG;