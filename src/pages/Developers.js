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
import DeveloperSection from "../components/Sections/DeveloperSection";
import DevDocsSection from "../components/Sections/DevDocsSection";
import DevStackSection from "../components/Sections/DevStackSection";
import ToolkitSection from "../components/Sections/ToolkitSection";
import JoinDevSection from "../components/Sections/JoinDevSection";
import Footer from "../components/Sections/Footer";

import BG from "../components/images/pyr17.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back1};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    background: url(${BG}), transparent;
    background-repeat: no-repeat;
    background-size: 550px auto;
    background-position: 15% 150%;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled(motion.div)`
    font-size: 92px;
    width: 70%;
    height: 30vh;
    line-height: 50px;
    color: ${props => props.theme.text};  
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        font-size: 52px;
        height: 20vh;
    }  
`;

const Subtitle = styled(motion.div)`
    font-size: 42px;
    width: 70%;
    height: 30vh;
    color: ${props => props.theme.text};
    display: flex;
    align-items: center;
    direction: rtl;
    text-align: right; 
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        font-size: 32px;
        height: 50vh;
        line-height: 35px;
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
    font-size: 28px;
    color: white;

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
`;








const Developers = () => {

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
        <Section id="developers" ref={ref}>
            <Wrapper>
            <Title animate={animation}><p>فوائد شبكة تيلوس</p></Title>
            <Subtitle animate={animationTwo}><p>توفر شبكة تيلوس للمطورين ورجال الأعمال الأدوات اللازمة لبناء ونشر وتشغيل تطبيقات الجيل التالي عالية الأداء مع اقتصاداتهم الرقمية الخاصة.</p></Subtitle>
            
            <IconHolder>
                <IconColumn>
                <LinkS to="devresources" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS> 
                </IconColumn>
                <TextColumn animate={animation}>
                <a href="https://docs.telos.net/" target="_blank" rel="noreferrer"><IconButton><ArrowLeft /></IconButton></a>
                <a href="https://docs.telos.net/" target="_blank" rel="noreferrer"><IconText>وثائقنا Telos</IconText></a>
                </TextColumn>
                <IconColumn>
                
                </IconColumn>
            </IconHolder>
            </Wrapper>
        </Section>
        <DeveloperSection />
        <DevDocsSection /> 
        <DevStackSection />
        <ToolkitSection />
        <JoinDevSection />
        <Footer />
        </ThemeProvider>

    );
}

export default Developers;