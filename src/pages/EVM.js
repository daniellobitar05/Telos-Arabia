import {useState, useEffect} from "react";
import styled from "styled-components"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";

import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import Header from "../components/NavBar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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

import EVMFooter from "../components/Sections/EVMFooter";
 
import EVM1 from "../components/images/evm3.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    background: url(${EVM1}), ${props => props.theme.back1};
    background-repeat: no-repeat;
    background-size: contain;
`;


const Title = styled(motion.div)`
    font-size: 72px;
    width: 80%;
    height: 25vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    @media screen and (max-width: 768px){
        font-size: 48px;
        height: 20vh;
    }
    
`;

const Subtitle = styled(motion.div)`
    font-size: 48px;
    width: 60%;
    height: 30vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    transform: translate(20%, 0);
    justify-content: center;
    text-align: right;
    @media screen and (max-width: 768px){
        font-size: 28px;
        
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

const ButtonWrapper = styled(motion.div)`
    height: 20vh; 
    width: 80%;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }
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

    @media screen and (max-width: 768px){
        margin: 10px 0;
    }
`;



const EVM = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '100vw',
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: 0,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, y: '40px',
            })
        }
        
    }, [inView])    

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <Header theme={theme} setTheme={setTheme} />
                <Section id="evm" ref={ref}>
                    <Title animate={animation}>Telos EVM</Title>
                    <Subtitle animate={animationTwo}>The most powerful and scalable Ethereum Smart Contract platform available today</Subtitle>
                    <ButtonWrapper animate={animation}>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Button to="startnow" smooth={true} duration={1000} spy={true} exact="true">START NOW</Button>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Button to="evmwhatis" smooth={true} duration={1000} spy={true} exact="true">LEARN MORE</Button>
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
                <EVMFooter />
        </ThemeProvider>
    )
}

export default EVM;