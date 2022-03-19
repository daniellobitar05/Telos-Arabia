import {useState, useEffect} from "react";
import styled from "styled-components"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";

import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeaderNoHome from "../components/NavBar/NavBarNoHome";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";

import CommDocs from "../components/Sections/CommDocs";
import Footer from "../components/Sections/Footer";

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
    font-size: 72px;
    width: 80%;
    color: ${props => props.theme.text};  
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 42px;
    }  
`;

const Subtitle = styled(motion.div)`
    font-size: 24px;
    width: 60%;
    color: ${props => props.theme.text};
    text-align: right; 
    padding: 30px 0;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        font-size: 18px;
    }
    
`;

const IconHolder = styled.div`
    display: inline-flex;
    align-items: center;
    height: 15vh;
    width: 100%;

`;

const ArrowLeft = styled(KeyboardArrowLeftIcon)`
    color: white;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const IconText = styled.div`
    font-size: 20px;
    color: white;
    @media screen and (max-width: 768px){
        font-size: 14px;
    }

`;

const IconColumn = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;
`;

const TextColumn = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: inline-flex;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    align-items: center;
    justify-content: center;
    float: left;
    @media screen and (max-width: 768px){
        width: 80%;
    }
`;


const CommResources = () => {

    const [theme, setTheme] = useState("dark");

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
                x: '-100vw',
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
                <Section id="commresources" ref={ref}>
                    <Title animate={animation}>Community Resources</Title>
                    <Subtitle animate={animationTwo}>Telos is home to a growing ecosystem of diverse community contributors, passionate about seeing the Telos ecosystem. Governance is a strong part of the Telos economy, putting the direction of network operations in the hands of token holders. Find some useful community resources below and get involved!</Subtitle>
                    <IconHolder>
                        <IconColumn>
                        <LinkS to="commdocs" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS> 
                        </IconColumn>
                        <TextColumn animate={animation}>
                        <a href="https://t.me/HelloTelos" target="_blank" rel="noreferrer"><IconButton><ArrowLeft /></IconButton></a>
                        <a href="https://t.me/HelloTelos" target="_blank" rel="noreferrer"><IconText>Join the Telos Community Telegram</IconText></a>
                        </TextColumn>
                        <IconColumn>
                        
                        </IconColumn>
                    </IconHolder>
                </Section>
                <CommDocs />
                <Footer />
        </ThemeProvider>
    )
}

export default CommResources;