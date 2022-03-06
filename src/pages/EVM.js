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

import Telos from "../components/SVG/telos_logo.svg";

const Section = styled.div`
    width: 100%;
    height: 90vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 50%;
    }
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

const EVM = () => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
                <Section id="evm">
                    <Title>Telos EVM</Title>
                    <img src={Telos} alt="" />
                </Section>
        </ThemeProvider>
    )
}

export default EVM;