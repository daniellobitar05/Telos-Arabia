import {useState} from "react";
import styled from "styled-components"
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import Header from "../components/NavBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import Footer from "../components/Sections/Footer";
import Picture from "../components/images/news/news2.jpg";

import R1 from "./roadmap/R1";
import R2 from "./roadmap/R2";
import R3 from "./roadmap/R3";
import R4 from "./roadmap/R4";
import R5 from "./roadmap/R5";
import R6 from "./roadmap/R6";
import R7 from "./roadmap/R7";
import R8 from "./roadmap/R8";
import R9 from "./roadmap/R9";
import R10 from "./roadmap/R10";
import R11 from "./roadmap/R11";
import R12 from "./roadmap/R12";
import R13 from "./roadmap/R13";

const Section = styled.div`
    width: 100%;
    height: 90vh;
    background: ${props => props.theme.back1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 100vh;
    }
`; 

const PageTitle = styled(motion.div)`
    font-size: 84px;
    width: 80%;
    height: 20vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 42px;

    }
    
`;

const ImageHolder = styled(motion.div)`
    width: 50%;
    height: 55vh;
    display: flex;
    background-image: url(${Picture});
    background-size: contain;
    background-repeat: no-repeat;
    
    @media screen and (max-width: 768px){
        width: 90%;
        height: 30vh;
    }

    
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
    background: transparent;

`;

const ToggleColumn = styled.div`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
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

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
`;


const Roadmap = () => {

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
                x: '100vw'
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
                <Section id="roadmap" ref={ref}>
                    <PageTitle animate={animation}>الاعلان عن خارطة تيلوس الجديدة</PageTitle>
                    <ImageHolder animate={animationTwo}></ImageHolder>
                    <Empty>
                        <IconColumnLeft to="r1" smooth={true} duration={1000} spy={true} exact="true">
                        <IconButton><ArrowDown /></IconButton>
                        </IconColumnLeft>
                    <EmptyColumn></EmptyColumn>
                        <IconColumnRight ></IconColumnRight>
                        <ToggleColumn></ToggleColumn>
                    </Empty>
                </Section>
                <R1 />
                <R2 />
                <R3 />
                <R4 />
                <R5 />
                <R6 />
                <R7 />
                <R8 />
                <R9 />
                <R10 />
                <R11 />
                <R12 />
                <R13 />
                <Footer />
        </ThemeProvider>
    )
}

export default Roadmap;