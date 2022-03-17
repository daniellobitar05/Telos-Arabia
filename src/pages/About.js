import {useState} from "react";
import styled from "styled-components"
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";

import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeaderNoHome from "../components/NavBar/NavBarNoHome";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import PurposeSection from "../components/Sections/PurposeSection";
import ChartSection from "../components/Sections/ChartSection";
import GraphSection from "../components/Sections/GraphSection";
import FeaturesSection from "../components/Sections/FeaturesSection";
import UtilitySection from "../components/Sections/UtilitySection";
import UtilisedSection from "../components/Sections/UtilisedSection";
import ConclusionSection from "../components/Sections/ConclusionSection";

const Section = styled.div`
    width: 100%;
    height: 90vh;
    background: ${props => props.theme.back1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled(motion.div)`
    font-size: 62px;
    width: 80%;
    height: 45vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
    @media screen and (max-width: 768px) {
        font-size: 28px;
        height: 20vh;
        justify-content: center;
    }
    
`;

const Subtitle = styled(motion.div)`
    font-size: 18px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};
    text-align: right; 
    
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        height: 60vh;
        flex-direction: column;
        justify-content: center;
    }
    
`;

const Empty = styled.div`
    width: 100%;
    height: 15vh;
    @media screen and (max-width: 768px) {
        height: 10vh;
        background: transparent;
    }
    
`;



const IconColumn = styled.div`
    width: 25%;
    height: 15vh;
    
    float: left;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    background: transparent;
    @media screen and (max-width: 768px) {
        height: 10vh;
    }
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
    background: transparent;
`;


const About = () => {

    const [theme, setTheme] = useState("dark");

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw'
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

    return(
        <ThemeProvider theme={themes[theme]}>
        <HeaderNoHome theme={theme} setTheme={setTheme} />
        <Section id="abouthero" ref={ref}>
            <Title animate={animation}>A high-level introduction to the Telos blockchain</Title>
            <Subtitle animate={animationTwo}>Telos is a third-generation blockchain platform for building fast, scalable distributed applications with feeless transactions. Since launching its mainnet in December 2018, the Telos network has been developed to power the economies of the future and provide human-scale solutions to global challenges. With these goals in mind, it includes innovative governance features that empower organizations to shift influence and decision-making to a more collaborative and transparent model.</Subtitle>
            <Empty>
                <IconColumn>
                <LinkS to="purpose" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumn>
            </Empty>
        </Section>
        <PurposeSection />
        <ChartSection />
        <FeaturesSection />
        <GraphSection />
        <UtilitySection />
        <UtilisedSection />
        <ConclusionSection />
        </ThemeProvider>
    );
}

export default About;