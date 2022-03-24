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

import Back from "../images/pyr1.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${Back}), ${props => props.theme.back12};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    
`;

const Bigtitle = styled(motion.div)`
    font-size: 74px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 42px;

    }
    
`;

const Title = styled(motion.div)`
    height: 30vh;
    width: 90%;
    font-size: 46px;
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


const DepthLookNine = () => {

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
        <Section id="depthlooknine" ref={ref}>
            <Bigtitle animate={animation}>الأداة المساعدة تيلوس</Bigtitle>
            <Article animate={animationTwo}><p>تيلوس ، رمز الشبكة الأصلي مفيد في عدد كبير من الطرق ، بما في ذلك الحوكمة ، وملكية واستخدام موارد شبكة تيلوس ، والمكافآت ، وكوسيلة للدفع مقابل التطبيقات والخدمات المستندة إلى تيلوس والمزيد.</p></Article>
            <Title animate={animation}>ملكية موارد شبكة تيلوس</Title>
            <Article animate={animationTwo}><p>يمثل تيلوس في جوهره ملكية موارد الشبكة. يمكن للمطورين والمستخدمين مشاركة تيلوس في الشبكة للوصول إلى الموارد اللازمة لمعالجة المعاملات. يتم تحديد عدد الموارد المستلمة من خلال النسبة المئوية لحصص حساب تيلوس. هذا متعلق بكمية تيلوس الموجودة. على سبيل المثال ، إذا كان المستخدم يمتلك 1٪ من إمداد تيلوس وتحصيله ، فيمكنه الوصول إلى 1٪ من موارد الشبكة.</p></Article>

            <Empty>
                <IconColumnLeft to="depthlookten" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="depthlookeight" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default DepthLookNine;