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

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back14};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    @media screen and (max-width: 768px){
        height: 170vh;
    }
`;

const Title = styled(motion.div)`
    height: 15vh;
    width: 90%;
    font-size: 42px;
    color: white;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    direction: rtl;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
        @media screen and (max-width: 768px){ 
            font-size: 24px;
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
    font-size: 32px;
    height: 25vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    @media screen and (max-width: 768px){
        font-size: 24px;
        padding: 0;
        width: 90%;
        height: 50vh;
        line-height: 30px;
    }
`;

const BottomArticle = styled(motion.div)`
    width: 70vw;
    font-size: 32px;
    height: 25vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    @media screen and (max-width: 768px){
        font-size: 24px;
        padding: 0;
        width: 90%;
        height: 30vh;
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


const DepthLookThirteen = () => {

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
                x: 0, y: '20px',
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw', y: '20px',
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: '20px',
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
        <Section id="depthlookthirteen" ref={ref}>
            <Title animate={animation}>التفاعل مع التطبيقات الأخرى المبنية على تيلوس</Title>
            <Article animate={animationTwo}><p><t>يحافظ تيلوس على فائدة إضافية بطرق لا حصر لها تعمل على تشغيل الخدمات الأخرى المبنية على الشبكة. تستخدم العديد من التطبيقات تيلوس كطريقة أساسية للدفع ، والتي يتم تعزيزها من خلال إضافة أدوات تيلوس</t><span>DeFi</span><t>الأخرى مثل</t><span>T-Bonds</span><t>أو</t><span>T-Swaps</span><t>أو</t><span>T-Starter.</span></p></Article>
            <Article animate={animationTwo}><p><span>dStor</span><t>هو مثال آخر للتطبيق الذي يضيف فائدة إلى رمز تيلوس المميز ، خارج حالات الاستخدام الأولية المقصودة.</t><span>dStor</span><t>هو حل تخزين لامركزي ثوري تم إنشاؤه بواسطة</t><span>GoodBlock,</span><t>على الرغم من أن نظام التخزين هو شبكته المنفصلة ، يتم الدفع لمشغلي العقد برمز تيلوس المميز وتحدث هذه المعاملات المالية على شبكة تيلوس.</t></p></Article>
            <BottomArticle animate={animationTwo}><p>هذه ليست سوى عدد قليل من حالات الاستخدام الإضافية العديدة لـ تيلوس ، التي تم إنشاؤها بواسطة مبادرات إضافية داخل نظام تيلوس البيئي.</p></BottomArticle>

            <Empty>
                <IconColumnLeft to="depthlookfourteen" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="depthlooktwelve" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default DepthLookThirteen;