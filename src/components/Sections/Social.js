import React from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Ball1 from "../images/rou12.png";

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



const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${Ball1}), ${props => props.theme.back10};
    background-repeat: no-repeat;
    background-size: contain;
    
    @media screen and (max-width: 768px){
        height: 180vh;
    }
`;

const Title = styled(motion.div)`
    width: 60%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        height: 30vh;
    }
`;

const Subtitle = styled(motion.div)`
    font-size: 24px;
    line-height: 28px;
    width: 100%;
    color: ${props => props.theme.text};
    text-align: center; 
    float: left;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 24px;
        @media screen and (max-width: 768px){
        font-size: 18px;
    }
    }
    @media screen and (max-width: 768px){
        width: 95%;
        height: 55vh;
        font-size: 22px;
        line-height: 30px;
    }
`;

const SmallSubtitle = styled(motion.div)`
    font-size: 24px;
    line-height: 28px;
    width: 100%;
    color: ${props => props.theme.text};
    text-align: center; 
    float: left;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 24px;
        @media screen and (max-width: 768px){
        font-size: 18px;
    }
    }
    @media screen and (max-width: 768px){
        width: 95%;
        height: 20vh;
        font-size: 22px;
        line-height: 30px;
    }
`;

const Grid = styled.div`
    display: flex;
    width: 90%;
    height: 70vh;
    @media screen and (max-width: 768px){
        align-items: center;
        justify-content: center;
        height: 140vh;
    }
`;

const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 70vh;
    text-align: right;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 120vh;
        justify-content: center;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100%;
    text-align: right;
    @media screen and (max-width: 768px){
        display: none;
    }
`;


const Social = () => {

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
        <Section id="social" ref={ref}>
            <Title animate={animation}>اجتماعي</Title>
            <Grid>
                <ColumnLeft> </ColumnLeft>
                <ColumnRight>
                    <Subtitle animate={animationTwo}><p>يغذي كل من الجوانب البيئية والحوكمة الروايات الواعية اجتماعيًا التي تحيط بشبكة تيلوس. تم وصف العديد من سلاسل الكتل المشهورة بأنها بلوتوقراطيات. يرجع هذا النقد إلى حد كبير إلى السيطرة المركزية / النخبة ، ورسوم المشاركة العالية ، وممارسات الحوكمة الحصرية وعدد كبير من العوائق الأخرى التي تحول دون الدخول. وقد نتج عن ذلك العديد من النظم البيئية التي تلبي احتياجات المتبنين الأوائل ، مما يجعل من الصعب ازدهار المبادرات الواعية اجتماعيًا.</p></Subtitle>
                    <Subtitle animate={animationTwo}><p><t>ومع ذلك ، تقوم تيلوس بمهمة الحفاظ على الشبكة ومواردها في متناول أي مستخدم قدر الإمكان. يعد كل من</t><span>Telos Resource Exchange</span><t>و</t><span>Telos Worker Proposal System</span><t>مثالين على الأدوات التي يمكن للمطورين استخدامها لتلقي الموارد اللازمة لمتابعة أي مهمة. بالإضافة إلى ذلك ، فإن مؤسسة تيلوس هي هيئة من الأفراد الذين تم التصويت لهم وتمويلهم من قبل الشبكة لدعم تطوير المشاريع.</t></p></Subtitle>
                    <SmallSubtitle animate={animationTwo}><p>كل هذا يخلق نظامًا بيئيًا منصفًا يسمح للمبادرات الواعية اجتماعيًا بالازدهار بطريقة قد تكون مستحيلة على أي بلوكشين آخر.</p></SmallSubtitle>
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="lips" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="additional" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default Social;