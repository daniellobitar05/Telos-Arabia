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

import Ball1 from "../components/images/telos_ball3.png";
import Ball2 from "../components/images/telos_ball1.png";


const Section = styled.div`
    width: 100%;
    height: 90vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-image: url(${Ball1});
    background-size: 900px 900px;
    background-repeat: no-repeat;
    background-position: -200px -100px; */
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 50px;
    background: linear-gradient(180deg, rgba(0,0,139,1) 0%, rgba(0,0,139,1) 100%);
    height: 60vh;

    @media screen and (max-width: 768px){
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        padding: 0;
        height: 80vh;
    }
`;

const ImageLeft = styled.div`
    height: 250px;
    width: 250px;
    float: left;
    border-radius: 50%;
    margin: 20px;
    shape-outside: circle();
    @media screen and (max-width: 768px){
        margin: 0;
        height: 125px;
        width: 125px;
    }
    img{
        
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


`;

const ImageRight = styled.div`
    height: 400px;
    width: 400px;
    float: right;
    border-radius: 50%;
    shape-outside: circle();
    margin: 20px;
    @media screen and (max-width: 768px){
       height: 100px;
       width: 100px;
       
        
    }

    img{
        
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


`;

const Title = styled(motion.div)`
    font-size: 62px;
    width: 100%;
    height: 20vh;
    color: ${props => props.theme.text};  
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,139,1);
    direction: rtl;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 20px;
    }
    @media screen and (max-width: 768px){
        height: 15vh;
        font-size: 32px;
    }
    
`;

const Subtitle = styled.div`
    color: white; 
    line-height: 1.4em;
    text-align: justify;
    font-size: 34px;
    text-align: center;
    width: 90%;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    span{
        margin: 0 20px;
    }
    @media screen and (max-width: 768px){
        font-size: 16px;
        display: flex;
        
        
    }
    
`;

const IconWrapper = styled.div`
    display: flex;
    height: 30vh;
    width: 60%;
    
`;

const IconColumn = styled(LinkS)`
    height: 100%;
    width: 33.3%;
    float: left;
    display: flex;
    flex-direction: column;
    
`;

const Button = styled(motion.div)`
    z-index: 100;
    background: linear-gradient(90deg, rgba(146,16,205,1) 0%, rgba(100,42,217,1) 50%, rgba(47,230,231,1) 100%);
    font-size: 20px;
    margin: 10px;
    color: white;
    width: 200px;
    font-weight: bold;
    border: 1px solid aqua;
    border-radius: 15px;
    padding: 15px 10px;
    text-align: center;
    cursor: pointer;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    

`;

const Empty = styled.div`
    width: 100%;
    height: 15vh;
    display: inline-flex;
    
    
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

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
    transform: translate(0, -600%);
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
            <Title><t>تيلوس هي</t><span>ESG</span><t>بلوكشين</t></Title>
            <Container>
                <ImageLeft><img src={Ball2} alt="" /></ImageLeft>
                <ImageRight><img src={Ball1 } alt="" /></ImageRight>
                <Subtitle><t>أصبحت الاستثمارات البيئية والاجتماعية والحوكمة</t><span>(ESG)</span><t>وممارسات الأعمال معايير مهمة بشكل متزايد عند تقييم المخاطر المحتملة لمبادرة ما. دعت العديد من المؤسسات إلى حلول</t><span>ESG</span><t>في قطاع العملات المشفرة ولكن لم يتم تسليم أي شبكة ... حتى تيلوس. تيلوس سريع للغاية ، عمليًا بدون رسوم وأقوى من المنافسين الرئيسيين. ومع ذلك ، يتطلب الأمر أكثر من ذلك لتكون</t><span>#RealWorldReady,</span><t> تبذل تيلوس جهدًا واعيًا لتصبح شركة</t><span>ESG</span><t>بلوكشين الرائدة ، وتضع نفسها في متناول المستخدمين العالميين الحقيقيين حول العالم</t>.</Subtitle>
                <Empty>
                <IconColumnLeft to="videos" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
                <EmptyColumn></EmptyColumn>
                    <IconColumnRight >
                        
                    </IconColumnRight>
                    <ToggleColumn></ToggleColumn>
                </Empty>
            </Container>
               {/*  <Section id="esg">
                    <Title>Telos is the ESG Blockchain</Title>
                    <Container>
                    <ImageWrapper><img src={Ball1} alt="ball1" /> </ImageWrapper>
                    </Container>
                    <Subtitle>🌎 Environmental, ✌️ Social & 🏢 Governance (ESG) investments & business practices are becoming increasingly important criteria when weighing the potential risks of an initiative. Many institutions have been calling for ESG solutions in the cryptocurrency sector but no network has delivered…until Telos. Telos is extremely fast, virtually fee-less and more powerful than major competitors. However, it takes more than that to be #RealWorldReady. Telos is making a conscious effort to become the leading ESG Blockchain, positioning itself for mass adoption by real world users around the world.</Subtitle>
                    <IconWrapper>
                        <IconColumn><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>WHY TELOS</Button></IconColumn>
                        <IconColumn to="todo" smooth={true} duration={1000} spy={true} exact="true"><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>WHY IT MATTERS</Button></IconColumn>
                        <IconColumn><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>ABOUT ESG</Button></IconColumn>
                    </IconWrapper>
                   
                </Section> */}
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
                <ESGLips />
                <AdditionalTwo />
                <ESGConclusion />
                <ESGLatest />
                <Footer />
        </ThemeProvider>
    )
}

export default ESG;