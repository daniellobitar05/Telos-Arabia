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

import Back from "../images/rou2.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${Back}), ${props => props.theme.back6};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    
`;

const Title = styled(motion.div)`
    height: 15vh;
    width: 80%;
    font-size: 62px;
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
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        transform: translate(0, 0);
    }
`;

const Article = styled(motion.div)`
    width: 70vw;
    font-size: 30px;
    height: 25vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
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


const DepthLookThree = () => {

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
                x: 0, y: '30px',
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw', y: '30px',
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
                opacity: 1, y: '30px',
                transition: {
                    duration: 1, 
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
        <Section id="depthlookthree" ref={ref}>
            <Article animate={animationThree}><p>يوجد تمويل كافٍ في هذه الاحتياطيات لتستمر حتى عام 2024 بمعدل الدفع الحالي. ومع ذلك ، من المتوقع أن تستمر الأموال لفترة أطول من خلال التعديلات الرمزية التي يمكن أن يسنها المجتمع.</p></Article>
            <Article><p>نظرًا لأن الشبكة ممولة من الاحتياطيات ، فإن العرض المتداول يزيد من العمل الإضافي ولكن كمية تيلوس الموجودة لا تزيد. بمجرد استنفاد جميع الاحتياطيات ، قد يقرر المجتمع إدخال تضخم في العرض بمعدل منخفض يعود بالنفع على الجميع. بدلاً من ذلك ، قد يتم تمويل الشبكة عن طريق فرض رسوم على بعض الخدمات المتميزة. كل هذا في أيدي أصحاب المصلحة ، بطريقة لا مركزية حقًا.</p></Article>
            <Title animate={animation}>لهيئات الممولة</Title>
            <Article animate={animationThree}><p>توفر تيلوس التمويل للعديد من الحسابات على أساس منتظم ، وفقًا لما يقرره أصحاب المصلحة. هذه الحسابات وأغراضها هي كما يلي:</p></Article>
            <Empty>
                <IconColumnLeft to="depthlookfour" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="depthlooktwo" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default DepthLookThree;