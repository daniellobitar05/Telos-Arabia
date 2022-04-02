import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Telos from "../images/telos_logo.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back6};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 160vh;
    }
`;

const PageTitle = styled(motion.div)`
    font-size: 52px;
    width: 80%;
    height: 20vh;
    color: ${props => props.theme.text};  
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    @media screen and (max-width: 768px) {
        line-height: 50px;
        width: 90%;
        height: 35vh;
    }
    
`;

const Subtitle = styled(motion.div)`
    width: 80vw;
    height: 20vh;
    font-size: 24px;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: right;
    direction: rtl;
    @media screen and (max-width: 768px) {
        font-size: 20px;
        line-height: 30px;
        height: 50vh;
    }
    span{
        margin: 0 8px;
    }
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const RowWrapper = styled.div`
    height: 50vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
        height: 65vh;
        width: 95%;
        justify-content: center;
    }
`;

const Row = styled(motion.div)`
    height: 25vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
        height: 40%;
        justify-content: center;
    }
    
`;

const Item = styled.div`
    width: 32%;
    height: 96%;
    display: flex;
    flex-direction: column; 
    align-items: center;
`;

const InnerRow = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    text-align: center;
    
    h1{
        font-size: 24px;
        color: white;
        @media screen and (max-width: 768px) {
        font-size: 16px;
        
        line-height: 15px;
        }
    }
    span{
        font-size: 20px;
        @media screen and (max-width: 768px) {
        font-size: 16px;
        }
    }
`;

const TopInnerRow = styled.div`
    width: 50%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 80%;
        }
    h1{
        font-size: 32px;
        color: white;
        @media screen and (max-width: 768px) {
        font-size: 18px;
        width: 80%;
        }
    }
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

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;



const UtilitySection = () => {

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
        <Section id="utility" ref={ref}>
            <PageTitle animate={animation}>أداة تيلوس المميزة</PageTitle>
            <Subtitle animate={animationTwo}>ازدهر الاقتصاد القائم على تيلوس على مدار العامين الماضيين ، وهناك أكثر من 100 مشروع مبني على الشبكة وأكثر من 900000 حساب مستخدم بالفعل ، مما يؤدي إلى زيادة الطلب على المرافق على الرمز الأصلي بعدة طرق ، وهو تأثير يجب أن يزداد فقط فى المستقبل. احصل على مقدمة سريعة عن الرموز المميزة لـ تيلوس أدناه أو تعرف على المزيد حول رموز تيلوس هنا.</Subtitle>
            <RowWrapper>
                <Row animate={animationTwo}>
                    <Item>
                        <TopInnerRow style={{borderBottom: '1px solid white'}}><h1>دفع رسوم</h1></TopInnerRow>
                        <InnerRow><h1>وحدة المعالجة المركزية</h1></InnerRow>
                        <InnerRow><h1>عرض النطاق</h1></InnerRow>
                        <InnerRow><h1>مكافآت ستاكر</h1></InnerRow>
                    </Item>
                    <Item>
                        <TopInnerRow style={{borderBottom: '1px solid white'}}><h1>السيولة</h1></TopInnerRow>
                        <InnerRow><h1>مجمع مبادلة الصرف / </h1></InnerRow>
                        <InnerRow><h1><span>AMM</span></h1></InnerRow>
                    </Item>
                    <Item>
                        <TopInnerRow style={{borderBottom: '1px solid white'}}><h1>الحكم</h1></TopInnerRow>
                        <InnerRow><h1>تصويت المنتج</h1></InnerRow>
                        <InnerRow><h1>تصويت نظام العمل</h1></InnerRow>
                        <InnerRow><h1>التصويت على قبول الشبكة</h1></InnerRow>
                    </Item>
                </Row> 
                <Row animate={animationTwo}>
                    <Item>
                        <TopInnerRow style={{borderBottom: '1px solid white'}}><h1>التجميد</h1></TopInnerRow>
                        <InnerRow><h1>ذاكرة الوصول العشوائي - </h1></InnerRow>
                        <InnerRow><h1>عقد التخزين</h1></InnerRow>
                        <InnerRow><h1>مزايدات مساحة الاسم المميز</h1></InnerRow>
                    </Item>
                    <Item>
                        <TopInnerRow style={{borderBottom: '1px solid white'}}><h1>عملة</h1></TopInnerRow>
                        <InnerRow><h1>وحدة المعالجة المركزية</h1></InnerRow>
                        <InnerRow><h1>طريقة الدفع الناشئة</h1></InnerRow>
                        <InnerRow><h1>المكافآت</h1></InnerRow>
                    </Item>
                </Row>    
            </RowWrapper>
            <Empty>
                <IconColumnLeft to="utilitytwo" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="graph" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default UtilitySection;