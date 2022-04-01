import {useEffect} from "react";
import styled, {keyframes} from "styled-components";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import NoFront from "../images/nofront.jpg";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back8};
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

const ColumnLeft = styled.div`
    width: 60%;
    height: 90vh;
    float: left;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 35vh;
    }
    img{
        width: 700px;
        height: auto;
        padding-top: 50px;
        padding-left: 60px;
        @media screen and (max-width: 768px){
            width: 300px;
        }
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 90vh;
    float: left;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`;

const Title = styled(motion.div)`
    width: 90%;
    height: 30%;
    text-align: right;
    color: white;
    font-size: 62px;
    display: flex;
    align-items: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 32px;
        height: 10%;
    }
`;

const Subtitle = styled(motion.div)`
    width: 100%;
    height: 35%;
    color: white;
    font-size: 22px;
    display: flex;
    text-align: right;
    transform: translate(-10%, 0);
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    span{
        margin: 0 8px;
        font-size: 18px;
    }
    p{
        transform: translate(-20%, 0);
    }
    @media screen and (max-width: 768px){
        font-size: 14px;
        height: 45%;
        width: 80%;
        transform: translate(0, 0);
        align-items: center;
        justify-content: center;
        
        
    }
    
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
    @media screen and (max-width: 768px){
        height: 5vh;
    }
`;



const EVMNoFront = () => {

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
                opacity: 1, scale: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                opacity: 0, scale: 0.5
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
        <Section id="nofront" ref={ref}>
            <Wrapper>
            <ColumnLeft>
               
                <motion.img animate={animation} src={NoFront} alt=""  whileHover={{cursor: 'grab'}} drag dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50,}} whileTap={{cursor: 'grabbing'}}/>
                
            </ColumnLeft>
            <ColumnRight>
                <Title animate={animation}><p><t>ما هو الجري الأمامي</t></p></Title>
                <Subtitle animate={animationTwo}><p><t>هافوتا</t><span>LLC</span><t>هي شركة مقرها سويسرا ، مكرسة لخدمة احتياجات التقاط البيانات الرقمية لقطاع التنمية. أنها توفر حلول بيانات قوية للمؤسسات التي يحركها التأثير. تعد هافوتا منصة واحدة لجميع احتياجات تصميم البحث وجمع البيانات وإدارة البيانات. نظرًا لكونه رمزًا معترفًا به عالميًا للتأثير المثبت والمحقق ، فإن هدفهم هو مساعدة المستخدمين على دخول مؤسستهم إلى العصر التالي من جمع بيانات التأثير وتحليلها.</t></p></Subtitle>
                <Subtitle animate={animationTwo}><p><t>الآن ، وصلت الصناعة إلى نقطة حيث يُقترح نظام الرشاوى على عمال المناجم لإجراء المعاملات مباشرة. مع وجود عدد قليل فقط من مجمعات التعدين التي تتحكم في غالبية إنشاء الكتل على الشبكات الأخرى ، لا يمكن تجنب نظام الرشوة أو السرقة الذي سيأتي إلى جميع السلاسل المستندة إلى اثيريوم. قلة قليلة من الناس يتحدثون عن هذه المشكلة الصناعية الضخمة ، حيث لم يتوصل أحد إلى حل مستدام - حتى تيلوس</t><span>EVM.</span></p></Subtitle>
            </ColumnRight>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="evmchart" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="evmgraph" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMNoFront;