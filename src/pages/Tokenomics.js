import {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components"
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {useInView} from "react-intersection-observer";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeaderNoHome from "../components/NavBar/NavBarNoHome";
import Highlights from "../components/Sections/Highlights";
import SupplySection from "../components/Sections/SupplySection";
import DepthLookSection from "../components/Sections/DepthLookSection";
import Footer from "../components/Sections/Footer";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";




const Section = styled.div`
    width: 100%;
    height: 90vh;
    background: ${props => props.theme.back1};
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

const Title = styled(motion.div)`
    display: flex;
    align-items: center;
    color: white;
    font-size: 62px;
    width: 80%;
    height: 20%;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const Subtitle = styled(motion.div)`
    display: flex;
    align-items: center;
    color: white;
    font-size: 32px;
    width: 80%;
    height: 40%;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;


const Tokenomics = () => {

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
                opacity: 0, y: '100px',
            })
        }
        
    }, [inView])
    

    return(
        <ThemeProvider theme={themes[theme]}>
            <HeaderNoHome theme={theme} setTheme={setTheme} />
                <Section id="tokenomics" ref={ref}>
                    <Grid>
                    <ColumnLeft>
                        <Title animate={animation}>TLOS Tokenomics</Title>
                        <Subtitle animate={animationTwo}>Understanding the value of TLOS</Subtitle>
                        <LinkS to="highlights" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}><IconButton><ArrowDown /></IconButton></LinkS>
                    </ColumnLeft>
                    <ColumnRight>
                    </ColumnRight>
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