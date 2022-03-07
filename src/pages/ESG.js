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
import ESGIcons from "../components/Sections/ESGIcons";
import ESGToDo from "../components/Sections/ESGToDo";
import ESGQuotes from "../components/Sections/ESGQuotes";
import ESGGovernance from "../components/Sections/ESGGovernance";

import Ball1 from "../components/images/telos_ball3.png";
import Ball2 from "../components/images/telos_ball1.png";


const Section = styled.div`
    width: 100%;
    height: 90vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-image: url(${Ball1});
    background-size: 900px 900px;
    background-repeat: no-repeat;
    background-position: -200px -100px; */
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 50px;
    background: black;
    height: 60vh;

    

`;

const ImageLeft = styled.div`
    height: 250px;
    width: 250px;
    float: left;
    border-radius: 50%;
    margin: 20px;
    shape-outside: circle();
    img{
        
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


`;

const ImageRight = styled.div`
    height: 400px;
    width: 400px;
    float: right;
    border-radius: 50%;
    shape-outside: circle();
    margin: 20px;

    img{
        
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


`;

const Title = styled.div`
    font-size: 62px;
    width: 100%;
    height: 20vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: black;
    text-align: center;
    
    
`;

const Subtitle = styled.div`
    color: white; 
    line-height: 1.2em;
    text-align: justify;
    font-size: 24px;
    text-align: center;
    width: 90%;
    /* font-size: 18px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};
    text-align: right; 
    
    display: flex;
    align-items: center; */
    
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

const Empty = styled.div`
    width: 100%;
    height: 15vh;
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

`;

const EmptyColumn = styled.div`
   width: 50%;
   height: 100%;
   float: left; 
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
    transform: translate(0, -600%);
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




const ESG = () => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
            <Title>Telos is the ESG Blockchain</Title>
            <Container>
                <ImageLeft><img src={Ball2} alt="" /></ImageLeft>
                <ImageRight><img src={Ball1 } alt="" /></ImageRight>
                <Subtitle>🌎 Environmental, ✌️ Social & 🏢 Governance (ESG) investments & business practices are becoming increasingly important criteria when weighing the potential risks of an initiative. Many institutions have been calling for ESG solutions in the cryptocurrency sector but no network has delivered…until Telos. Telos is extremely fast, virtually fee-less and more powerful than major competitors. However, it takes more than that to be #RealWorldReady. Telos is making a conscious effort to become the leading ESG Blockchain, positioning itself for mass adoption by real world users around the world.   </Subtitle>
                <Empty>
                <IconColumnLeft to="videos" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
                <EmptyColumn></EmptyColumn>
                    <IconColumnRight >
                        
                    </IconColumnRight>
                    <ToggleColumn></ToggleColumn>
                </Empty>
            </Container>
               {/*  <Section id="esg">
                    <Title>Telos is the ESG Blockchain</Title>
                    <Container>
                    <ImageWrapper><img src={Ball1} alt="ball1" /> </ImageWrapper>
                    </Container>
                    <Subtitle>🌎 Environmental, ✌️ Social & 🏢 Governance (ESG) investments & business practices are becoming increasingly important criteria when weighing the potential risks of an initiative. Many institutions have been calling for ESG solutions in the cryptocurrency sector but no network has delivered…until Telos. Telos is extremely fast, virtually fee-less and more powerful than major competitors. However, it takes more than that to be #RealWorldReady. Telos is making a conscious effort to become the leading ESG Blockchain, positioning itself for mass adoption by real world users around the world.</Subtitle>
                    <IconWrapper>
                        <IconColumn><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>WHY TELOS</Button></IconColumn>
                        <IconColumn to="todo" smooth={true} duration={1000} spy={true} exact="true"><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>WHY IT MATTERS</Button></IconColumn>
                        <IconColumn><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>ABOUT ESG</Button></IconColumn>
                    </IconWrapper>
                   
                </Section> */}
                <WhatisESG />
                <ESGIcons />
                <ESGToDo />
                <ESGQuotes />
                <ESGGovernance />
        </ThemeProvider>
    )
}

export default ESG;