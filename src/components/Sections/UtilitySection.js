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
        
    }
`;

const PageTitle = styled(motion.div)`
    font-size: 52px;
    width: 80%;
    height: 15vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
    padding-bottom: 20px;
    
`;

const Subtitle = styled(motion.div)`
    width: 80vw;
    font-size: 28px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    padding-bottom: 30px;
    direction: rtl;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const ColumnWrapper = styled.div`
    height: 60vh;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const TableColumn = styled(motion.div)`
    width: 40%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`;

const ButtonColumn = styled(motion.div)`
    width: 10%;
    height: 100%;
    float: left; 
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

const Row = styled.div`
    width: 100%;
    height: 11.68%;
    
`;

const ItemLeft = styled.div`
    width: 70%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    direction: rtl;
    span{
        margin: 0 10px;
    }
`;

const ItemRight = styled.div`
    width: 29%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    direction: rtl;
    
`;

const Button = styled(motion(LinkR))`
    z-index: 100;
    background: linear-gradient(90deg, rgba(146,16,205,1) 0%, rgba(100,42,217,1) 50%, rgba(47,230,231,1) 100%);
    font-size: 20px;
    margin: 10px;
    color: white;
    font-weight: bold;
    border: 1px solid aqua;
    border-radius: 15px;
    padding: 15px 20px;
    margin-top: 50px;
    cursor: pointer;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;

const Title = styled.div`
    height: 10vh;
    width: 80%;
    font-size: 32px;
    color: white;
    display: flex;
    align-items: center;
    text-align: right;
    
    direction: rtl;
    span{
        margin: 0 8px;
    }
    @media screen and (max-width: 768px){
        height: 20vh;
        font-size: 24px;
    }
`;

const Article = styled.div`
    width: 80vw;
    font-size: 26px;
    height: 20vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    direction: rtl;
    span{
        margin: 0 8px;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const List = styled.ul`
    list-style-type: circle;
    list-style-position: outside;
    
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.li`
    height: 40px;
    color: white;
    font-size: 20px;
    direction: rtl;
    text-align: right;
`;

const InnerTitle = styled.div`
    width: 50%;
    height: 5vh;
    text-align: center;
    color: white;
    font-size: 28px;
    font-weight: bold;
    direction: rtl;

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
            <ColumnWrapper>
            <TableColumn animate={animationTwo}>
                <Row>
                    <ItemLeft style={{borderTop: '1px solid white'}}>وحدة المعالجة المركزية</ItemLeft>
                    <ItemRight style={{borderTop: '1px solid white', borderLeft: '1px solid white'}}>التجميد</ItemRight>
                </Row>
                <Row>
                    <ItemLeft style={{borderRight: '1px solid white'}}>عرض النطاق</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row>
                    <ItemLeft style={{borderRight: '1px solid white'}}>مكافآت ستاكر</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row></Row>
                <Row>
                    <ItemLeft style={{borderTop: '1px solid white'}}>وحدة المعالجة المركزية</ItemLeft>
                    <ItemRight style={{borderTop: '1px solid white', borderLeft: '1px solid white'}}>عملة</ItemRight>
                </Row>
                <Row>
                    <ItemLeft style={{borderRight: '1px solid white'}}>طريقة الدفع الناشئة</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row>
                    <ItemLeft style={{borderRight: '1px solid white'}}>المكافآت</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                
               
                </TableColumn>
               {/*  <ButtonColumn animate={animation}>
            <Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} to="/Tokenomics">Learn More</Button>
            </ButtonColumn> */}
            <TableColumn animate={animationTwo}>
                <Row>
                    <ItemLeft style={{borderTop: '1px solid white'}}>تصويت المنتج</ItemLeft>
                    <ItemRight style={{borderTop: '1px solid white', borderLeft: '1px solid white'}}>الحكم</ItemRight>
                </Row>
                 <Row>
                    <ItemLeft style={{borderRight: '1px solid white'}}>تصويت نظام العمل</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row>
                    <ItemLeft style={{borderRight: '1px solid white'}}>التصويت على قبول الشبكة</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row></Row>
                <Row>
                    <ItemLeft style={{borderTop: '1px solid white'}}>ذاكرة الوصول العشوائي - عقد التخزين</ItemLeft>
                    <ItemRight style={{borderTop: '1px solid white', borderLeft: '1px solid white'}}>دفع رسوم</ItemRight>
                </Row>
                <Row>
                    <ItemLeft style={{borderRight: '1px solid white'}}>مزايدات مساحة الاسم المميز</ItemLeft>
                    <ItemRight></ItemRight>
                </Row>
                <Row></Row>
                <Row>
                    <ItemLeft style={{borderTop: '1px solid white'}}><p><t>مجمع مبادلة الصرف /</t><span>AMM</span></p></ItemLeft>
                    <ItemRight style={{borderTop: '1px solid white', borderLeft: '1px solid white'}}>السيولة</ItemRight>
                </Row>
                <Row></Row>
            </TableColumn>
            </ColumnWrapper>
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