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

import Image from "../images/evm1.png";

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

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back10};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    height: 90vh;
    width: 100%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 60%;
    }
`;

const ColumnRight = styled(motion.div)`
    width:50%;
    height: 100%;
    float: left;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        transform: scale(1.5) translate(40%, 40%);
        @media screen and (max-width: 768px){
            transform: translate(0, 0);
        }
    }
`;

const Title = styled(motion.div)`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    color: white;
    font-size: 62px;
    transform: translate(15%, 0);
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        transform: translate(0, 0);
        font-size: 42px;
        width: 90%;
        height: 30%;
    }

`;

const Subtitle = styled(motion.div)`
    width: 80%;
    height: 50%;
    color: white;
    font-size: 28px;
    display: flex;
    padding: 10px 30px;
    
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    text-align: right;
    direction: rtl;
    span{
        margin: 0 10px;
    }
     @media screen and (max-width: 768px){
        transform: translate(0, 0);
        font-size: 18px;
        width: 80%;
        height: 20%;
    }
`;



const EVMMicroSection = () => {

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
                opacity: 1, y: 0, x: '100px',
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, y: '100px', x: '100px'
            })
        }
        
    }, [inView])

    return(
        <Section id="micro" ref={ref}>
            <Wrapper>
                <ColumnLeft>
                    <Title animate={animation}>Global Micro Transaction DeFi</Title>
                    <Subtitle animate={animationTwo}><p><t>ستحدث تكاليف المعاملات المنخفضة ورسوم الغاز الثابتة لشركة تيلوس</t><span>EVM</span><t>ثورة في مشهد صناعة </t><span>DeFi.</span><t>تعني الطبيعة القابلة للتطوير أن المستخدمين من جميع أنحاء العالم سيكونون قادرين على التعامل بمبالغ صغيرة تصل إلى دولار واحد وسيظلون يرون الأرباح. ممارسة مستحيلة على أجهزة</t><span>EVM</span><t>الأخرى نظرًا لرسوم الغاز المتقلبة وتكاليف المعاملات المرتفعة.</t></p></Subtitle>
                </ColumnLeft>
                <ColumnRight animate={animation}>
                    <img src={Image} alt="" />
                </ColumnRight>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="evmlatest" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="evmchart" smooth={true} duration={1500} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}


export default EVMMicroSection;