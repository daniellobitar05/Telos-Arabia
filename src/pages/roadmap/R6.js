import {useEffect} from "react";
import styled from "styled-components";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Back from "../../components/images/pyr16.png";

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
    background: ${props => props.theme.back7};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 165vh;
    }
`;

const Grid = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        height: 155vh;
    }
`;



const Title = styled(motion.div)`
    height: 20vh;
    width: 80%;
    font-size: 48px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    transform: translate(0, 20%);
    z-index: 100;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        height: 20vh;
        transform: translate(0, 0);
        font-size: 32px;
        
    }
`;


const Article = styled(motion.div)`
    width: 80vw;
    font-size: 26px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    height: 22.5vh;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 35px;
    direction: rtl;
    z-index: 100;
    span{
        margin: 0 8px;
        font-size: 22px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 5px;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        line-height: 30px;
        height: 50vh;
    }
`;

const Bigtitle = styled(motion.div)`
    height: 25vh;
    width: 80%;
    font-size: 62px;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    z-index: 100;
    @media screen and (max-width: 768px){
        height: 20vh;
    }
`;

const Image = styled.div`
    width: 100%;
    height: 5vh;
    img{
        transform: translate(10%, -45%) scale(0.65);
        z-index: 1;
        @media screen and (max-width: 768px){
            transform: translate(-1%, 2.5%) scale(0.3);
        }
    }
    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


const R1 = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.1
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
        <Section id="r6" ref={ref}>
            
           <Grid>
                <Bigtitle animate={animation}>مستقبل</Bigtitle>
                <Article  animate={animationTwo}><p>تمهد <span>Telos</span> الطريق للتبني الجماعي للويب 3.0 من خلال تطوير حلول لامركزية مبتكرة مع تطبيقات العالم الحقيقي. سيحدد مطورو <span>Telos</span> الأساسيون وفريق المنتج أولويات التطوير على أساس ربع سنوي مع مراعاة الاحتياجات والفرص والموارد المتاحة. هذا ما لدينا في متجر <span>Telos</span> في عام 2022 وما بعده!</p></Article>
                <Image><img src={Back} alt="" /></Image>
                <Title animate={animation}>أكاديمية تيلوس</Title>
                <Article  animate={animationTwo}><p>تعرف على كل شيء عن <span>Telos!</span> نظرًا لأن الصناعة تتجه نحو التبني الجماعي ، نريد أن نجعل من السهل قدر الإمكان الترحيب بمشاريع العالم الحقيقي والمستخدمين والمستثمرين في النظام البيئي. سيجد المستخدمون في <span>Telos Academy</span> مواد تعليمية حول الجوانب الرئيسية لـ <span>Telos</span> ، إلى جانب مقدمة أوسع لتقنية <span>blockchain.</span></p></Article>
           </Grid>
           <Empty>
                <IconColumnLeft to="r7" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r5" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R1;