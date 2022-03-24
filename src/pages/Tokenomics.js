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
import DepthLookTwo from "../components/Sections/DepthLookTwo";
import DepthLookThree from "../components/Sections/DepthLookThree";
import DepthLookFour from "../components/Sections/DepthLookFour";
import DepthLookFive from "../components/Sections/DepthLookFive";
import DepthLookSix from "../components/Sections/DepthLookSix";
import DepthLookSeven from "../components/Sections/DepthLookSeven";
import DepthLookEight from "../components/Sections/DepthLookEight";
import DepthLookNine from "../components/Sections/DepthLookNine";
import DepthLookTen from "../components/Sections/DepthLookTen";
import DepthLookEleven from "../components/Sections/DepthLookEleven";
import DepthLookTwelve from "../components/Sections/DepthLookTwelve";
import DepthLookThirteen from "../components/Sections/DepthLookThirteen";
import Footer from "../components/Sections/Footer";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import Ball from "../components/images/telos_ball2.png";



const Section = styled.div`
    width: 100%;
    height: 90vh;
    background: ${props => props.theme.back1};
    display: grid;
    place-items: center;
`;

/* const Grid = styled.div`
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
    direction: rtl;
`;

const Subtitle = styled(motion.div)`
    display: flex;
    align-items: center;
    color: white;
    font-size: 32px;
    width: 80%;
    height: 40%;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`; */

const Wrapper = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 42px;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const spin = keyframes`
    0% {transform: rotate(0deg)};
    100% {transform: rotate(360deg)};
`;

const negativespin = keyframes`
    0% {transform: rotate(0deg)};
    100% {transform: rotate(-360deg)};
`;

const Pulse = {
    start: {
        scale: 0.95
    },
    end: {
        scale: 1,
        transition: {
            duration: 3, 
            yoyo: "Infinity"
        }
    }
}

const Text = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    animation: ${spin} 30s linear infinite;
    
    span{
       position: absolute; 
       top: 0;
       left: 50%;
       transform-origin: 0 250px;
    }
`;

function SpinningText ({text, children}) {

    const length = text.length;
    const deg = 360 / length;

    return(
        <Wrapper>
            <Text>
                <p>{text.split("").map((letter, i) => (
                   <span
                    key={i}
                    style={{transform: `rotate(${deg * i}deg)`}}
                   >{letter}</span> 
                ))}</p>
            </Text>
            {children}
        </Wrapper>
    )
}


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
                    <SpinningText text="رموز تيلوس الرمزية : فهم قيمة تيلوس">
                       <LinkS to="highlights" smooth={true} duration={500} spy={true} exact="true"><motion.img variants={Pulse} initial="start" animate="end" whileHover={{rotate: [0, 360, 0], scale: 1.05, cursor: 'pointer'}} whileTap={{scale:0.9}} transition={{duration: 1, type: 'spring', stiffness: 300}} src={Ball} alt="ball" /></LinkS>
                    </SpinningText>
                    {/* <Grid>
                    <ColumnLeft>
                        <Title animate={animation}>رموز تيلوس الرمزية</Title>
                        <Subtitle animate={animationTwo}>فهم قيمة تيلوس</Subtitle>
                        <LinkS to="highlights" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}><IconButton><ArrowDown /></IconButton></LinkS>
                    </ColumnLeft>
                    <ColumnRight>
                    </ColumnRight>
                    </Grid> */}
                </Section> 
                <Highlights />
                <SupplySection />
                <DepthLookSection />
                <DepthLookTwo />
                <DepthLookThree />
                <DepthLookFour />
                <DepthLookFive />
                <DepthLookSix />
                <DepthLookSeven />
                <DepthLookEight />
                <DepthLookNine />
                <DepthLookTen />
                <DepthLookEleven />
                <DepthLookTwelve />
                <DepthLookThirteen />
                <Footer />
        </ThemeProvider>
    )
}

export default Tokenomics;