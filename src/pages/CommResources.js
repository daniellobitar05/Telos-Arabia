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

import Image from "../components/SVG/resource.svg";

const Section = styled.div` 
    width: 100%;
    height: 90vh;
    background: ${props => props.theme.back1};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled(motion.div)`
    font-size: 86px;
    width: 70%;
    color: ${props => props.theme.text};  
    text-align: right;
    direction: rtl;
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
    font-size: 36px;
    width: 60%;
    color: ${props => props.theme.text};
    text-align: right; 
    padding: 20px 0;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        height: 40vh;
        line-height: 30px;
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
    font-size: 24px;
    color: white;
    direction: rtl;
    @media screen and (max-width: 768px){
        font-size: 18px;
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
                    <Title animate={animation}>موارد المجتمع</Title>
                    <Subtitle animate={animationTwo}>تيلوس هي موطن لنظام بيئي متنامي من المساهمين المجتمعيين المتنوعين ، المتحمسين لرؤية نظام تيلوس البيئي. تعد الحوكمة جزءًا قويًا من اقتصاد تيلوس ، حيث تضع اتجاه عمليات الشبكة في أيدي حاملي الرموز. اعثر على بعض موارد المجتمع المفيدة أدناه وشارك!</Subtitle>
                    <IconHolder>
                        <IconColumn>
                        <LinkS to="commdocs" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS> 
                        </IconColumn>
                        <TextColumn animate={animation}>
                        <a href="https://t.me/HelloTelos" target="_blank" rel="noreferrer"><IconButton><ArrowLeft /></IconButton></a>
                        <a href="https://t.me/HelloTelos" target="_blank" rel="noreferrer"><IconText>انضم إلى غروب التلغرام الخاص بنا</IconText></a>
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