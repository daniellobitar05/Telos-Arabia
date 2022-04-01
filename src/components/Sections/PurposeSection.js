import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Qudo from "../images/eco/qudo.svg";
import zepta from "../images/zepta.png";
import dstor from "../images/eco/dstor.svg";
import appics from "../images/eco/appics.svg";
import sesa from "../images/eco/sesa2.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 200vh;
    }
`;

const HeaderText = styled(motion.div)`
    width: 100%;
    height: 15vh;
    text-align: center;
    font-size: 24px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        font-size: 24px;
        height: 5vh;
    }
`;

const Title = styled(motion.div)`
    width: 80%;
    height: 10vh;
    text-align: center;
    color: white;
    font-size: 48px;
    direction: rtl;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        font-size: 38px;
        line-height: 45px;
        width: 90%;
        height: 15vh;
    }
`;

const Wrapper = styled.div`
    width: 90%;
    height: 65vh;
    @media screen and (max-width: 768px){
        
        height: 170vh;
    }
`;

const ColumnLeft = styled(motion.div)`
    width: 50%;
    height: 65vh;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 95vh;
        justify-content: center;
        align-items: center;
        
    }
    
    
`;

const ColumnRight = styled(motion.div)`
    width: 50%;
    height: 65vh;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 75vh;
        
    }
    
`;

const BoxTitle = styled.div`
    height: 20%;
    width: 100%;
    color: aqua;
    font-size: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    direction: rtl;
    @media screen and (max-width: 768px){
        font-size: 24px;
        height: 10%;
    }
    
`;

const BoxTitleRight = styled.div`
    height: 15vh;
    width: 100%;
    color: aqua;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    direction: rtl;
    line-height: 35px;
    @media screen and (max-width: 768px){
        font-size: 24px;
        height: 10vh;
        
    }
    
`;


const Subtitle = styled.div`
    width: 90%;
    height: 80%;
    text-align: center;
    font-size: 22px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    direction: rtl;
    line-height: 35px;
    span{
        margin: 0 8px;
        font-size: 18px;
    }
    a{
        text-decoration: none;
        color: aqua;
        font-size: 18px;
        margin: 0 5px;
    }
    @media screen and (max-width: 768px){
        font-size: 18px;
        width: 95%;
        text-align: center;
        
    }
`;

const SubtitleRight = styled.div`
    width: 90%;
    height: 30vh;
    text-align: center;
    font-size: 22px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    direction: rtl;
    line-height: 30px;
    span{
        margin: 0 8px;
        font-size: 18px;
    }
    a{
        text-decoration: none;
        color: aqua;
        font-size: 18px;
        margin: 0 5px;
    }
    @media screen and (max-width: 768px){
        font-size: 22px;
        width: 95%;
        text-align: center;
        height: 45vh;
    }
`;

const IconHolder = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
       
    }
`;

const IconRow = styled(motion.div)`
    width: 100%;
    height: 40%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
`;

const Icon = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        display: block;
        width: 100%;
        object-fit: cover;
        transform: scale(0.7);
    }
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    @media screen and (max-width: 768px){
        height: 5vh;
    }
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
const IconColumnRight = styled.div`
    width: 25%;
    height: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const PurposeSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

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
        <Section id="purpose" ref={ref}>
            <HeaderText animate={animation}>غرضنا</HeaderText>
            <Title animate={animation}>قم بتشغيل اقتصاد المستقبل ، وإشعال أعلى إمكانات البشر</Title>
            <Wrapper>
                <ColumnLeft animate={animationTwo}>
                <BoxTitle  ><p><t>قاعدة متنامية</t></p></BoxTitle>
                <Subtitle  ><p><t>تيلوس هي موطن لأكثر من</t><span>30</span><t>مطورًا أساسيًا ، وأكثر من</t><span>50</span><t>فريقًا للتحقق من الصحة ، وعشرات من المنتجات المبتكرة ، يكملها</t><span>100</span><t>من المساهمين النشطين في المجتمع. يضم مجتمع تيلوس الأوسع أكثر من</t><span>900000</span><t>حساب مستخدم على الشبكة ، وأكثر من</t><span>6000</span><t>متابع على مجموعات تيليغرام والقنوات الاجتماعية الأخرى ، وأكثر من</t><span>150</span><t>شركة من أكثر من</t><span>180</span><t>دولة ، يعمل المطورون على بناء أكثر من</t><span>100</span><t>تطبيق موزع على تيلوس اعتبارًا من أوائل عام</t><span>2021,</span><t>بما في ذلك منصة تداول حقوق الموسيقى</t><span><a href="https://zeptagram.com/" target="_blank" rel="noreferrer">Zeptagram,</a></span><t>ومنصة الألعاب</t><span><a href="https://qudo.io/" target="_blank" rel="noreferrer">QUDO,</a></span><t>ومنصة الوسائط الاجتماعية</t><span><a href="https://appics.com/" target="_blank" rel="noreferrer">Appics,</a></span><t>وحل التخزين اللامركزي</t><span>dStor</span><t>ونظام المدفوعات</t><span><a href="https://sesacash.com/" target="_blank" rel="noreferrer">Sesacash,</a></span><t>قائمة كاملة من</t><span>dApps</span><t>على تيلوس متاحة هنا.</t></p></Subtitle>
                </ColumnLeft>
                <ColumnRight animate={animationTwo}>
                <BoxTitleRight ><p><t>شبكة لا مركزية حقًا يديرها أصحاب الرؤى والتقنيون والبناؤون والسائقون وأصحاب المصلحة النشطون</t></p></BoxTitleRight>
                <SubtitleRight ><p><t>يمهد نظام تيلوس البيئي الطريق إلى ويب</t><span>3.0</span><t>منذ بدء تشغيل الشبكة الرئيسية في عام</t><span>2018.</span><t>وقد سمح الإطلاق بدون تمويل</t><span>ICO</span><t>أو</t><span>VC</span><t>للشبكة بالنمو بطريقة لا مركزية حقًا. تعمل بنية الحوكمة القوية لشركة تيلوس ، التي تكملها مجموعة من أدوات تيلوس</t><span>Decide</span><t>القوية ، على تمكين حاملي الرموز المميزة. تيلوس هي شبكة مفتوحة ، حيث يتمتع كل فرد بفرصة متساوية للمساهمة والتأثير في اتجاه السلسلة.</t></p></SubtitleRight>
                <IconHolder>
                    <IconRow >
                        <Icon><img src={Qudo} alt="icon1" /></Icon>
                        <Icon><img src={zepta} alt="zepta" style={{transform: 'scale(0.3)'}}/></Icon>
                        <Icon><img src={dstor} alt="dstor" /></Icon>
                    </IconRow>
                    <IconRow >
                        <Icon><img src={appics} alt="appics" style={{transform: 'scale(0.5)'}}/></Icon>
                        <Icon><img src={sesa} alt="sesa" /></Icon>
                    </IconRow>
                </IconHolder>
                </ColumnRight>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="chart" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></IconColumnLeft>
                <IconColumnRight ><IconButton onClick={toggleHome}><ArrowUp /></IconButton></IconColumnRight>
            </Empty>
        </Section>
    );
}

export default PurposeSection;