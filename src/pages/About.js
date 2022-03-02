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
import PurposeSection from "../components/Sections/PurposeSection";
import ChartSection from "../components/Sections/ChartSection";

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
    height: 45vh;
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

const Empty = styled.div`
    width: 100%;
    height: 15vh;
    
`;



const IconColumn = styled.div`
    width: 25%;
    height: 15vh;
    
    float: left;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;


const About = () => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
        <Header theme={theme} setTheme={setTheme} />
        <Section id="abouthero">
            <Title>A high-level introduction to the Telos blockchain</Title>
            <Subtitle>Telos is a third-generation blockchain platform for building fast, scalable distributed applications with feeless transactions. Since launching its mainnet in December 2018, the Telos network has been developed to power the economies of the future and provide human-scale solutions to global challenges. With these goals in mind, it includes innovative governance features that empower organizations to shift influence and decision-making to a more collaborative and transparent model.</Subtitle>
            <Empty>
                <IconColumn>
                <LinkS to="purpose" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumn>
            </Empty>
        </Section>
        <PurposeSection />
        <ChartSection />
        </ThemeProvider>
    );
}

export default About;