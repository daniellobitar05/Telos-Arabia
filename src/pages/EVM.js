import {useState} from "react";
import styled from "styled-components"
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";

import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import Header from "../components/NavBar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {IconButton} from "@mui/material";

import EVMIcons from "../components/Sections/EVMIcons";
import EVMWhatis from "../components/Sections/EVMWhatis";
import EVMCards from "../components/Sections/EVMCards";
import EVMStartNow from "../components/Sections/EVMStartNow";
import EVMStartNowTwo from "../components/Sections/EVMStartNowTwo";
import EVMGraphSection from "../components/Sections/EVMGraphSection";
import EVMNoFront from "../components/Sections/EVMNoFront";
import EVMChartSection from "../components/Sections/EVMChartSection";
import EVMMicroSection from "../components/Sections/EVMMicroSection";
import EVMLatest from "../components/Sections/EVMLatest";
 
import EVM1 from "../components/images/evm3.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-image: url(${EVM1});
    background-repeat: no-repeat;
    background-size: contain;
`;


const Title = styled.div`
    font-size: 72px;
    width: 80%;
    height: 25vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    text-align: right;
    
`;

const Subtitle = styled.div`
    font-size: 48px;
    width: 60%;
    height: 30vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    transform: translate(20%, 0);
    
    justify-content: center;
    text-align: right;
    
    
    
    
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
    background: transparent;

`;

const EmptyColumn = styled.div`
   width: 50%;
   height: 100%;
   float: left; 
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
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

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;

const ButtonWrapper = styled.div`
    height: 20vh; 
    width: 80%;
    display: inline-flex;
    align-items: center;
    
    justify-content: flex-end;
    
`;

const Button = styled(LinkS)`
    border: 1px solid #ba55d3;
    color: lightblue;
    font-size: 18px;
    padding: 10px 15px;
    margin: 0 0 0 50px;
    display: flex;
    background: transparent;
    width: 150px;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        background: linear-gradient(90deg, rgba(195,93,232,1) 0%, rgba(69,43,161,1) 63%, rgba(4,22,134,1) 100%);
    }

`;



const EVM = () => {


    

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
                <Section id="evm">
                    <Title>Telos EVM</Title>
                    <Subtitle>The most powerful and scalable Ethereum Smart Contract platform available today</Subtitle>
                    <ButtonWrapper>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Button to="startnow" smooth={true} duration={1000} spy={true} exact="true">START NOW</Button>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Button >LEARN MORE</Button>
                    </motion.div>
                    </ButtonWrapper>
                    <Empty>
                        <IconColumnLeft to="evmicons" smooth={true} duration={1000} spy={true} exact="true">
                        <IconButton><ArrowDown /></IconButton>
                        </IconColumnLeft>
                    <EmptyColumn></EmptyColumn>
                        <IconColumnRight >
                           
                        </IconColumnRight>
                        <ToggleColumn></ToggleColumn>
                    </Empty>
                </Section>
                <EVMIcons />
                <EVMWhatis />
                <EVMCards />
                <EVMStartNow />
                <EVMStartNowTwo />
                <EVMGraphSection />
                <EVMNoFront />
                <EVMChartSection />
                <EVMMicroSection />
                <EVMLatest />
        </ThemeProvider>
    )
}

export default EVM;