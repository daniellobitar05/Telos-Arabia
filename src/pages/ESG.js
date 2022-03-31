import {useState, useEffect} from "react";
import styled from "styled-components"
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {useInView} from "react-intersection-observer";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeaderNoHome from "../components/NavBar/NavBarNoHome";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {IconButton} from "@mui/material";
import WhatisESG from "../components/Sections/WhatisESG";
import ESGIcons from "../components/Sections/ESGIcons";
import ESGToDo from "../components/Sections/ESGToDo";
import ESGQuotes from "../components/Sections/ESGQuotes";
import ESGGovernance from "../components/Sections/ESGGovernance";
import ESGGreenest from "../components/Sections/ESGGreenest";
import ESGChart from "../components/Sections/ESGChart";
import ESGSeeds from "../components/Sections/ESGSeeds";
import Additional from "../components/Sections/Additional";
import AdditionalTwo from "../components/Sections/AdditionalTwo";
import Social from "../components/Sections/Social";
import ESGLips from "../components/Sections/ESGLips";
import ESGConclusion from "../components/Sections/ESGConclusion";
import ESGLatest from "../components/Sections/ESGLatest";
import Footer from "../components/Sections/Footer";

import Ball1 from "../components/images/rou11.png";
import Ball2 from "../components/images/rou6.png";

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0,0,139,1);
`;

const Title = styled(motion.div)`
    font-size: 62px;
    width: 100%;
    height: 20vh;
    display: flex;
    color: ${props => props.theme.text};
    align-items: center;
    justify-content: center;
    background: rgba(0,0,139,1);
    direction: rtl;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        height: 10vh;
        font-size: 32px;
    }
    
`;

const Container = styled.div`
   position: relative;
   width: 100%;
   height: 70vh;
   transform: translate(0, 5%);
   @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        transform: translate(0, -5%);
    }

`;

const ImageLeft = styled.div`
    
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    shape-outside: circle();
    img{
        @media screen and (max-width: 768px){
            width: 250px;
            float: none;
            
        }
    }
`;

const Text = styled(motion.div)`
    height: 100%;
    text-align: center;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    span{
        margin: 0 8px;
        font-size: 20px;
        @media screen and (max-width: 768px){
            font-size: 16px;
        }
    }
    h1{
        color: white;
        font-size: 27px;
        font-weight: 400;
        @media screen and (max-width: 768px){
            font-size: 20px;
            padding: 0 10px;
            line-height: 25px;
            
        }
    }
`;

const ImageRight = styled.div`
    
    height: 100%;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    shape-outside: circle();
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
    transform: translate(100%, -500%);
    @media screen and (max-width: 768px){
        transform: translate(100%, 0%); 
    }
`;

const Lifter = styled.div`
    @media screen and (max-width: 768px){
        transform: translate(0, -35%);
    }
`;

const ArrowLifter = styled.div`
    @media screen and (max-width: 768px){
        transform: translate(0, -285%);
    }
`;


const ESG = () => {

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
            <Section ref={ref}>
            <Title animate={animation}><t>تيلوس هي</t><span>ESG</span><t>بلوكشين</t></Title>
            <Container>
                <ImageLeft><img src={Ball2} alt="ball1" /></ImageLeft>
                <ImageRight><img src={Ball1} alt="ball2" /></ImageRight>
                <Lifter>
                <Text animate={animationTwo}><p><h1><t>أصبحت الاستثمارات البيئية والاجتماعية والحوكمة</t><span>(ESG)</span><t>وممارسات الأعمال معايير مهمة بشكل متزايد عند تقييم المخاطر المحتملة لمبادرة ما. دعت العديد من المؤسسات إلى حلول</t><span>ESG</span><t>في قطاع العملات المشفرة ولكن لم يتم تسليم أي شبكة ... حتى تيلوس. تيلوس سريع للغاية ، عمليًا بدون رسوم وأقوى من المنافسين الرئيسيين. ومع ذلك ، يتطلب الأمر أكثر من ذلك لتكون</t><span>#RealWorldReady.</span><t>تبذل تيلوس جهدًا واعيًا لتصبح شركة</t><span>ESG</span><t>بلوكشين الرائدة ، وتضع نفسها في متناول المستخدمين العالميين الحقيقيين حول العالم.</t></h1></p></Text>
                </Lifter>
                <ArrowLifter>
                <LinkS to="videos" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}><IconButton><ArrowDown /></IconButton></LinkS>
                </ArrowLifter>
            </Container>
            </Section>
               
                <WhatisESG />
                <ESGIcons />
                <ESGToDo /> 
                <ESGQuotes />
                <ESGGovernance />
                <ESGGreenest />
                <ESGChart />
                <ESGSeeds />
                <Additional />
                <Social />
                {/* <ESGLips />
                <AdditionalTwo />
                <ESGConclusion />
                <ESGLatest />
                <Footer /> */}
        </ThemeProvider>
    )
}

export default ESG;