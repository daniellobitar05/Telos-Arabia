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
        height: 160vh;
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
        font-size: 12px;
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
    @media screen and (max-width: 768px){
        font-size: 26px;
        height: 15vh;
        margin-bottom: 30px;
    }
`;

const Wrapper = styled.div`
    width: 90%;
    height: 65vh;
    @media screen and (max-width: 768px){
        
        height: 120vh;
    }
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 50%;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
    }
    
    
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 50%;
        
    }
    
`;

const BoxTitle = styled(motion.div)`
    height: 20%;
    width: 100%;
    color: aqua;
    font-size: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    direction: rtl;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    
`;


const Subtitle = styled(motion.div)`
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
        margin: 0 5px;
    }
    a{
        text-decoration: none;
        color: aqua;
    }
    @media screen and (max-width: 768px){
        font-size: 14px;
        width: 90%;
        text-align: center;
        
    }
`;

const IconHolder = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    const animationThree = useAnimation();

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

    useEffect(() => {
        if(inView){
            animationThree.start({
                opacity: 1, y: '20px',
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationThree.start({
                opacity: 0, y: '100px',
            })
        }
        
    }, [inView])

    return(
        <Section id="purpose" ref={ref}>
            <HeaderText animate={animation}>غرضنا</HeaderText>
            <Title animate={animation}>قم بتشغيل اقتصاد المستقبل ، وإشعال أعلى إمكانات البشر</Title>
            <Wrapper>
                <ColumnLeft>
                <BoxTitle animate={animationTwo} ><p><t>قاعدة متنامية</t></p></BoxTitle>
                <Subtitle animate={animationTwo} ><p><t>تيلوس هي موطن لأكثر من 30 مطورًا أساسيًا ، وأكثر من 50 فريقًا للتحقق من الصحة ، وعشرات من المنتجات المبتكرة ، يكملها 100 من المساهمين النشطين في المجتمع. يضم مجتمع تيلوس الأوسع أكثر من 900000 حساب مستخدم على الشبكة ، وأكثر من 6000 متابع على مجموعات تيليغرام والقنوات الاجتماعية الأخرى ، وأكثر من 150 شركة من أكثر من 180 دولة ، يعمل المطورون على بناء أكثر من 100 تطبيق موزع على تيلوس اعتبارًا من أوائل عام 2021 ، بما في ذلك منصة تداول حقوق الموسيقى</t><span><a href="https://zeptagram.com/" target="_blank" rel="noreferrer">Zeptagram</a></span><t>، ومنصة الألعاب</t><span><a href="https://qudo.io/" target="_blank" rel="noreferrer">QUDO</a></span><t>، ومنصة الوسائط الاجتماعية</t><span><a href="https://appics.com/" target="_blank" rel="noreferrer">Appics</a></span><t>، وحل التخزين اللامركزي</t><span>dStor</span><t>ونظام المدفوعات</t><span><a href="https://sesacash.com/" target="_blank" rel="noreferrer">Sesacash</a>.</span><t>قائمة كاملة من</t><span>dApps</span><t>على تيلوس متاحة هنا</t></p></Subtitle>
                </ColumnLeft>
                <ColumnRight>
                <BoxTitle animate={animationThree}>شبكة لا مركزية حقًا يديرها أصحاب الرؤى والتقنيون والبناؤون والسائقون وأصحاب المصلحة النشطون</BoxTitle>
                <Subtitle animate={animationThree}><p><t>يمهد نظام تيلوس البيئي الطريق إلى ويب 3.0 منذ بدء تشغيل الشبكة الرئيسية في عام 2018. وقد سمح الإطلاق بدون تمويل</t><span>ICO</span><t>أو</t><span>VC</span><t>للشبكة بالنمو بطريقة لا مركزية حقًا. تعمل بنية الحوكمة القوية لشركة تيلوس ، التي تكملها مجموعة من أدوات تيلوس</t><span>Decide</span><t>القوية ، على تمكين حاملي الرموز المميزة. تيلوس هي شبكة مفتوحة ، حيث يتمتع كل فرد بفرصة متساوية للمساهمة والتأثير في اتجاه السلسلة.</t></p></Subtitle>
                <IconHolder>
                    <IconRow animate={animationTwo}>
                        <Icon><img src={Qudo} alt="icon1" /></Icon>
                        <Icon><img src={zepta} alt="zepta" style={{transform: 'scale(0.3)'}}/></Icon>
                        <Icon><img src={dstor} alt="dstor" /></Icon>
                    </IconRow>
                    <IconRow animate={animationTwo}>
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