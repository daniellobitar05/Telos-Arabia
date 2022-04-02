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

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back8};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 210vh;;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 768px){
        height: 200vh;
    }
`;

const Article = styled(motion.div)`
    width: 80vw;
    font-size: 20px;
    height: 12vh;
    color: whitesmoke;
    display: flex;
    align-items: center;
    text-align: right;
    direction: rtl;
    
    @media screen and (max-width: 768px){
        height: 20vh;
        line-height: 25px;
    }
    
    span{
        margin: 0 8px;
    }
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const BigArticle = styled(motion.div)`
    width: 80vw;
    font-size: 20px;
    height: 12vh;
    color: whitesmoke;
    display: flex;
    align-items: center;
    text-align: right;
    direction: rtl;
    @media screen and (max-width: 768px){
        height: 40vh;
        line-height: 25px;
    }
    span{
        margin: 0 8px;
        font-size: 16px;
        @media screen and (max-width: 768px){
        font-size: 16px;
        }
    }
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const Title = styled(motion.div)`
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
        height: 20vh;;
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
    
    
`;





const ConclusionSection = () => {

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
        <Section id="conclusion" ref={ref}>
            <Wrapper>
            <Article animate={animationTwo}>كانت إحدى عواقب هذه السرعة وقابلية التوسع على تيلوس هي الاعتماد والاستخدام السريع ، مما أدى إلى احتلال تيلوس المرتبة الثانية في سلسلة بلوكشين الأكثر استخدامًا في العالم خلال معظم عامي 2019 و 2020.</Article>
            <Title animate={animation}># 1 استهلاك منخفض للطاقة مقارنة بنماذج أسرى الحرب التقليدية</Title>
            <BigArticle animate={animationTwo}><p><t>برنامج</t><span>EOSIO</span><t>، الذي تعتمد عليه شبكة تيلوس ، أكثر كفاءة في استخدام الطاقة بحوالي 17000 مرة من شبكات مثل اثيريوم. نماذج إثبات العمل تستغرق وقتًا طويلاً وتتطلب قدرًا كبيرًا من القوة الحاسوبية لحل الألغاز المعقدة. يسمح هذا لأجهزة الكمبيوتر هذه "بتعدين" العملات المعدنية على الشبكة التي تدفع لها. في</t><span>POW</span><t>، يتنافس مشغلو العقد ضد بعضهم البعض ليكونوا أول من يحل لغزًا معقدًا مع كون مكافأتهم هي الرمز المميز الجديد.</t></p></BigArticle>
            <BigArticle animate={animationTwo}><p>في المقابل ، تتطلب شبكة تيلوس فقط تنسيق المدققين الذين يستخدمون نفس البرنامج للتحقق من المعاملات. يختار حاملو الرمز المميز تيلوس مشغلي العقد ، حيث يقسم الخمسون الأوائل المكافآت. تُباع الرموز المميزة في البورصات المشاركة ، مما يسمح لأي شخص بامتلاك رموز تيلوس ومكافأتها للحصول على الموارد. هذا النظام يجعل عملية التعدين افتراضية. نظرًا لأنه لا يتم استغلال أي موارد في العالم الحقيقي ولا يتم إهدار الطاقة في مزارع الخوادم الضخمة اللازمة لحل الألغاز المعقدة ، فإن هذه الطريقة صديقة للبيئة بشكل لا نهائي.</p></BigArticle>
            <Title animate={animation}>خاتمة</Title>
            <Article animate={animationTwo}><p>هناك تحول يحدث في نموذج القيادة للإنترنت. يرغب المستخدمون والمطورون في نموذج صنع قرار أكثر تعاونًا يمكّن الجميع ، بدلاً من مجرد قلة مختارة.</p></Article>
            <Article animate={animationTwo}><p>تم تصميم تيلوس للمساعدة في إحداث هذا التغيير والسماح للبشرية بالازدهار من خلال بناء اقتصاد المستقبل. بمرور الوقت ، يقوم مجتمع تيلوس النابض بالحياة ببناء شبكته كمكان للشركات الناشئة الموجهة لغرض معين والمطورين الفرديين والمزيد. انضم إلينا!</p></Article>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="footer" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="utilised" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ConclusionSection;