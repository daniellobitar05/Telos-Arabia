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
    width: 80%;
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


const About = () => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
        <Header theme={theme} setTheme={setTheme} />
        <Section>
            <Title>A high-level introduction to the Telos blockchain</Title>
        </Section>
        </ThemeProvider>
    );
}

export default About;