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
import DeveloperSection from "../components/Sections/DeveloperSection";
import DevDocsSection from "../components/Sections/DevDocsSection";
import DevStackSection from "../components/Sections/DevStackSection";
import ToolkitSection from "../components/Sections/ToolkitSection";
import JoinDevSection from "../components/Sections/JoinDevSection";
import Footer from "../components/Sections/Footer";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 72px;
    width: 50%;
    color: ${props => props.theme.text};  
    text-align: right;  
`;

const Subtitle = styled.div`
    font-size: 24px;
    width: 50%;
    color: ${props => props.theme.text};
    text-align: right; 
    padding: 30px 0;
    
`;

const IconHolder = styled.div`
    display: inline-flex;
    align-items: center;
    height: 15vh;
    width: 100%;

`;

const ArrowLeft = styled(KeyboardArrowLeftIcon)`
    color: white;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const IconText = styled.div`
    font-size: 16px;
    color: white;

`;

const IconColumn = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;
`;

const TextColumn = styled.div`
    width: 50%;
    height: 100%;
    display: inline-flex;
    
    align-items: center;
    justify-content: center;
    float: left;
`;








const Developers = () => {

    const [theme, setTheme] = useState("dark");

    

    return(
        <ThemeProvider theme={themes[theme]}>
        <Header theme={theme} setTheme={setTheme} />
        <Section id="developers">
            <Title>Benefits of the Telos Network</Title>
            <Subtitle>Telos Network provides developers and entrepreneurs the tools to build, deploy and run high-performing next generation applications complete with their own digital economies.</Subtitle>
            <IconHolder>
                <IconColumn>
                <LinkS to="devresources" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS> 
                </IconColumn>
                <TextColumn>
                <a href="https://docs.telos.net/" target="_blank" rel="noreferrer"><IconButton><ArrowLeft /></IconButton></a>
                <a href="https://docs.telos.net/" target="_blank" rel="noreferrer"><IconText>Telos documentation</IconText></a>
                </TextColumn>
                <IconColumn>
                
                </IconColumn>
            </IconHolder>
        </Section>
        <DeveloperSection />
        <DevDocsSection />
        <DevStackSection />
        <ToolkitSection />
        <JoinDevSection />
        <Footer />
        </ThemeProvider>

    );
}

export default Developers;