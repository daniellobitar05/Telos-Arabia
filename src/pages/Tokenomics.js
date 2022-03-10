import {useState} from "react";
import styled, {keyframes} from "styled-components"
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";

import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import Header from "../components/NavBar";
import Highlights from "../components/Sections/Highlights";
import SupplySection from "../components/Sections/SupplySection";
import DepthLookSection from "../components/Sections/DepthLookSection";
import Footer from "../components/Sections/Footer";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";




const Section = styled.div`
    width: 100%;
    height: 90vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`;

const ColumnLeft = styled.div`
    width: 45%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ColumnRight = styled.div`
    width: 45%;
    height: 100%;
    float: left;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 62px;
    width: 80%;
    height: 20%;
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 32px;
    width: 80%;
    height: 40%;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;


const Tokenomics = () => {

    const [theme, setTheme] = useState("dark");

    
    

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
                <Section id="tokenomics" >
                    <Grid>
                    <ColumnLeft>
                        <Title>TLOS Tokenomics</Title>
                        <Subtitle>Understanding the value of TLOS</Subtitle>
                        <LinkS to="highlights" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                    </ColumnLeft>
                    <ColumnRight></ColumnRight>
                    </Grid>
                </Section>
                <Highlights />
                <SupplySection />
                <DepthLookSection />
                <Footer />
        </ThemeProvider>
    )
}

export default Tokenomics;