import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Graph from "../images/evmgraph.png";


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
    height: 5vh;
    display: inline-flex;
    
    
`;



const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back9};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 95vh;
    }
`;

const ColumnLeft = styled(motion.div)`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 30%;
        align-items: center;
        justify-content: center;
        img{
            transform: scale(0.5);
        }
        
    }
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    @media screen and (max-width: 768px){
        float: none;
        width: 90%;
        height: 70%;
        align-items: center;
        justify-content: center;
    }
`;

const Title = styled(motion.div)`
    width: 80%;
    height: 30%;
    text-align: right;
    color: white;
    font-size: 52px;
    display: flex;
    align-items: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 28px;
        height: 20%;
        text-align: center;
    }
`;

const Subtitle = styled(motion.div)`
    width: 90%;
    height: 35%;
    color: white;
    font-size: 24px;
    display: flex;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 16px;
        height: 40%;
        text-align: center;
        width: 100%;
    }
    //transform: translate(-10%, 0);
    
`;

const ColumnTitle = styled.div`
    width: 100%;
    height: 20%;
    color: white;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 16px;
        
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const EVMChartSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animationThree = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animationThree.start({
                opacity: 1, scale: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animationThree.start({
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
                opacity: 0, y: '40px',
            })
        }
        
    }, [inView])

    return(
        <Section id="evmchart" ref={ref}>
            <Wrapper>
                <ColumnLeft animate={animationThree}>
                    <ColumnTitle ><p><t>المستخرج التراكمي</t><span>MEV</span></p></ColumnTitle>
                    <ImageWrapper>
                    <img src={Graph} alt="" />
                    </ImageWrapper>
                </ColumnLeft>
                <ColumnRight>
                    <Title animate={animationThree}><p><t>كيف تتفوق تيلوس</t><span>EVM</span><t>على التشغيل الأمامي</t></p></Title>
                    <Subtitle animate={animationTwo}><p><t>تيلوس هو الجيل الثالث من بلوكشين وهو سريع للغاية ، حيث يتم إنشاء كتلتين جديدتين كل ثانية. هذا يترك القليل من الوقت للروبوتات لمسح ميم بول بحثًا عن صفقات قيمة. علاوة على ذلك ، فإن رسوم الغاز الثابتة على معاملات تيلوس</t><span>EVM</span><t>تعني أنه لا يمكن لأحد القفز قبل شخص آخر من خلال تقديم رسوم أعلى.</t></p></Subtitle>
                    <Subtitle animate={animationTwo}><p><t>الأهم من ذلك كله ، أن تيلوس عبارة عن بلوكشين يحكمها مجتمعها ، مع قواعد واضحة لما يُسمح للمدققين بفعله والعقوبات المفروضة على انتهاك هذه القواعد. في تيلوس ، يجب على جميع منتجي الكتل معالجة المعاملات على أساس الوارد أولاً يصرف أولاً عند استلامهم لها. لا يمكنهم إعادة ترتيب المعاملات للأرباح. توفر هذه العوامل معًا حماية قوية من أي تشغيل أمامي على تيلوس</t><span>EVM.</span></p></Subtitle>
                </ColumnRight>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="micro" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="nofront" smooth={true} duration={1500} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMChartSection;