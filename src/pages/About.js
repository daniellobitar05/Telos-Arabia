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
import UtilitySectionTwo from "../components/Sections/UtilitySectionTwo";
import UtilitySectionThree from "../components/Sections/UtilitySectionThree";
import UtilisedSection from "../components/Sections/UtilisedSection";
import ConclusionSection from "../components/Sections/ConclusionSection";
import Footer from "../components/Sections/Footer";

import Back from "../components/images/rou8.png";

const Section = styled.div`
    width: 100%;
    height: 90vh;
    background: ${props => props.theme.back1};
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const Title = styled(motion.div)`
    font-size: 72px;
    width: 80%;
    height: 25vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    direction: rtl;
    z-index: 10;
    @media screen and (max-width: 768px) {
        font-size: 36px;
        height: 15vh;
        line-height: 40px;
        
    }
    
`;

const Image = styled.div`
    width: 100%;
    height: 10vh;
    img{
        transform: translate(0, -30%);
        z-index: 0;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
`;

const Subtitle = styled(motion.div)`
    font-size: 32px;
    width: 80%;
    height: 40vh;
    color: ${props => props.theme.text};
    text-align: right; 
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    display: flex;
    align-items: center;
    direction: rtl;
    z-index: 10;
    
    @media screen and (max-width: 768px) {
        font-size: 20px;
        height: 45vh;
        line-height: 30px;
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
                opacity: 0, y: '100px',
            })
        }
        
    }, [inView])

    return(
        <ThemeProvider theme={themes[theme]}>
        <HeaderNoHome theme={theme} setTheme={setTheme} />
        <Section id="abouthero" ref={ref}>
            <Title animate={animation}>مقدمة رفيعة المستوى إلى تيلوس بلوكشين</Title>
            <Image><img src={Back} alt="" /></Image>
            <Subtitle animate={animationTwo}><t>تيلوس هي عبارة عن منصة بلوكشين من الجيل الثالث لبناء تطبيقات موزعة سريعة وقابلة للتطوير مع معاملات بدون إحساس. منذ إطلاق شبكتها الرئيسية في ديسمبر 2018 ، تم تطوير شبكة تيلوس لتزويد اقتصادات المستقبل بالطاقة وتوفير حلول بشرية للتحديات العالمية. مع وضع هذه الأهداف في الاعتبار ، فإنه يتضمن ميزات حوكمة مبتكرة تمكن المنظمات من تحويل التأثير وصنع القرار إلى نموذج أكثر تعاونًا وشفافية.</t></Subtitle>
            <Empty>
                <IconColumn>
                <LinkS to="purpose" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumn>
            </Empty>
        </Section>
        <PurposeSection />
        <ChartSection />
        <FeaturesSection />
        <GraphSection />
        {/* <UtilitySection />
        <UtilitySectionTwo />
        <UtilitySectionThree />
        <UtilisedSection />
        <ConclusionSection />
        <Footer /> */}
        </ThemeProvider>
    );
}

export default About;