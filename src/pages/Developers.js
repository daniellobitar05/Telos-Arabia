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

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled(motion.div)`
    font-size: 92px;
    width: 70%;
    line-height: 50px;
    color: ${props => props.theme.text};  
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 52px;
    }  
`;

const Subtitle = styled(motion.div)`
    font-size: 42px;
    width: 70%;
    color: ${props => props.theme.text};
    text-align: right; 
    padding: 30px 0;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        font-size: 28px;
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
            <Title animate={animation}>فوائد شبكة تيلوس</Title>
            <Subtitle animate={animationTwo}>توفر شبكة تيلوس للمطورين ورجال الأعمال الأدوات اللازمة لبناء ونشر وتشغيل تطبيقات الجيل التالي عالية الأداء مع اقتصاداتهم الرقمية الخاصة.</Subtitle>
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