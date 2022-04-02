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
import Back from "../images/pyr11.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(29,19,181,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 290vh;
    }
`;

const Title = styled(motion.div)`
    height: 15vh;
    width: 80%;
    font-size: 32px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    direction: rtl;

    img{
        width: 50%;
        transform: translate(0, 50%);
    }
    span{
        margin: 0 8px;
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        font-size: 32px;
        line-height: 40px;
    }
`;

const Article = styled(motion.div)`
    width: 80vw;
    font-size: 26px;
    height: 30vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    direction: rtl;
    line-height: 30px;
    span{
        margin: 0 8px;
        @media screen and (max-width: 768px) {
        font-size: 18px;
        
        }
    }
    @media screen and (max-width: 768px) {
        font-size: 22px;
        height: 85vh;
    }
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const ArticleBottom = styled(motion.div)`
    width: 80vw;
    font-size: 26px;
    height: 30vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    direction: rtl;
    line-height: 30px;
    span{
        margin: 0 8px;
        @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    }
    @media screen and (max-width: 768px) {
        font-size: 22px;
        height: 60vh;
    }
    a{
        color: aqua;
        text-decoration: none;
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
   img{
       width: 100%;
       transform: translate(0, -25%);
       z-index: 0;
   }
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



const UtilitySectionTwo = () => {

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
        <Section id="utilitythree" ref={ref}>
            <Title animate={animation}># 2 لا توجد رسوم معاملات تحفز على تبني المستخدم </Title>
            <Article animate={animationTwo}><p><t>في سلاسل إثبات العمل</t><span>(PoW)</span><t>، مثل اثيريوم ، يجب على المستخدمين دفع رسوم معاملة أو رسوم "غاز" لكل إجراء على الشبكة. لذلك ، على سبيل المثال ، إذا كان على المستخدم "الإعجاب" أو "مشاركة" منشور على</t><span>dApp</span><t>الذي تم إنشاؤه على شبكة</t><span>POW</span><t>، فستفرض "رسوم الغاز" على هذا الإجراء الفردي على بلوكشين للمستخدم. مع توفير الإنترنت للوصول المجاني إلى العديد من الموارد ، تعيق رسوم الغاز هذه التبني على نطاق واسع. هذا لأن المستخدمين معتادون على استخدام التطبيقات المركزية التي عادة لا تفرض رسومًا على المستخدمين للقيام بالمهام أو المعاملات الأساسية.</t></p></Article>
            <Article animate={animationTwo}><p><t>تعمل شبكة تيلوس بلوكشين على حل هذه المشكلة لمطوري dApp من خلال السماح للتطبيقات بمشاركة الموارد (في هذه الحالة ،</t><span>TLOS)</span><t>لمستخدميها. وبالتالي ، يمكن للتطبيق شراء أو تأجير مبلغ</t><span>TLOS</span><t>الذي يحتاجه مستخدموه وإزالة عبء رسوم المعاملات من تطبيقهم الخاص. هذا يسمح لمستخدمي التطبيق بتجربة خالية من الاحتكاك. إذا لم يرغب مطورو التطبيقات في مشاركة الموارد لمستخدميهم ، فيمكن للمستخدمين مشاركة الموارد بأنفسهم. هذا يسمح لهم باستخدام التطبيقات دون تكلفة لكل استخدام. عدم وجود رسوم معاملات - إلى جانب سرعات المعاملات السريعة - يعني أن المستخدمين لن يعرفوا حتى أنهم يستخدمون تطبيقًا مبنيًا على قمة بلوكشين.</t></p></Article>
            <Title animate={animation}># 3 سرعة وقابلية لا مثيل لها</Title>
            <ArticleBottom animate={animationTwo}><p><t>يسمح إثبات الحصة المفوض بقابلية تطوير فائقة لشركة تيلوس عند مقارنتها بشبكات إثبات العمل التقليدية. حاليًا ، يمكن لـ تيلوس بلوكشين معالجة أكثر من 10000 معاملة في الثانية ، وتنمو هذه السعة مع تحديثات الكود ، والسلاسل الجانبية ، وآليات النمو الأخرى. يضع هذا النوع من سرعة المعاملات تيلوس على قدم المساواة مع الكيانات المركزية مثل</t><span>Visa</span><t>و</t><span>Mastercard</span><t>وقدرتها على معالجة آلاف المعاملات.</t></p></ArticleBottom>
            <Empty>
                <IconColumnLeft to="utilised" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="utilitytwo" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default UtilitySectionTwo;