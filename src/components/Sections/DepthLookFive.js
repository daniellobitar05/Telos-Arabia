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

import Back from "../images/pyr8.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${Back}), ${props => props.theme.back8};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    @media screen and (max-width: 768px){
        height: 170vh;
    }
`;

const Title = styled(motion.div)`
    height: 15vh;
    width: 70%;
    font-size: 46px;
    color: white;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    direction: rtl;
    line-height: 30px;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
        @media screen and (max-width: 768px){ 
            font-size: 22px;
        }
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        transform: translate(0, 0);
        font-size: 32px;
        width: 90%;
    }
`;

const Article = styled(motion.div)`
    width: 70vw;
    font-size: 30px;
    height: 30vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 20px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 8px;
        }
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0;
        font-size: 20px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        padding: 0;
        width: 90%;
        height: 40vh;
        line-height: 30px;
    }
`;

const BigArticle = styled(motion.div)`
    width: 70vw;
    font-size: 30px;
    height: 30vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 20px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 8px;
        }
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0;
        font-size: 20px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        padding: 0;
        width: 90%;
        height: 60vh;
        line-height: 30px;
    }
`;


const ArrowDown = styled(KeyboardArrowDownIcon)`
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

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;


const DepthLookFive = () => {

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
        <Section id="depthlookfive" ref={ref}>
            <Title animate={animation}><p><t>صندوق التنمية الاقتصادية</t><span>150,000  - (econdevfunds)  </span><t>تيلوس / شهر</t></p></Title>
            <Article animate={animationTwo}><p><t>يتم استخدام صندوق التنمية الاقتصادية لدفع النفقات التي يحددها منتجو الكتلة لتكون مفيدة للشبكة. يتم اتخاذ قرارات إعداد الموازنة من خلال تصويت الأغلبية المتعددة لشركات</t><span>BP</span><t>لنشطة ، بشرط ألا يتجاوز المبلغ الإجمالي للأموال التي يتم صرفها</t><span>5،260،000</span><t>تيلوس شهريًا.</t></p></Article>
            <Title animate={animation}><p><t>مؤسسة تيلوس</t><span>(tf) - 700000</span><t>تيلوس / شهر</t></p></Title>
            <BigArticle animate={animationTwo}><p><t>مؤسسة تيلوس هي منظمة غير سياسية مهمتها المساعدة في تعزيز وتحسين شبكة تيلوس. ينص التفويض الأولي على أنه سيتم تنفيذ ذلك من خلال الترويج للشبكة من خلال المنح والإدارة ، ونفقات الاكتتاب التي تزيد من وظائف شبكة تيلوس والحفاظ على السعر الإرشادي المنشور لـ تيلوس</t><span>Network RAM.</span><t>تعتبر أي قرارات تتخذها مؤسسة تيلوس حيادية لعمليات الشبكة وأنظمة الحوكمة.</t></p></BigArticle>
            <Empty>
                <IconColumnLeft to="depthlooksix" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="depthlookfour" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default DepthLookFive;