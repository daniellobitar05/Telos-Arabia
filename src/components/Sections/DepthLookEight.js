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

import BSC from "../SVG/logos/BSC.svg";
import ETH from "../SVG/logos/eth.svg";
import Telos from "../SVG/telos_letter_logo.svg";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back11};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    @media screen and (max-width: 768px){
        height: 150vh;
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
    background-image: url(${BSC}), url(${ETH});
    background-repeat: no-repeat;
    background-size: 150px 150px;
    background-position: 85% 50%, 17% 50%;
    span{
        margin: 0 10px;
        @media screen and (max-width: 768px){ 
            font-size: 24px;
        }
    }
    @media screen and (max-width: 768px){
        height: 40vh;
        transform: translate(0, 0);
        font-size: 34px;
        width: 70%;
    }
`;

const ArticleUp = styled(motion.div)`
    width: 70vw;
    font-size: 30px;
    height: 30vh;
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


const DepthLookEight = () => {

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
        <Section id="depthlookeight" ref={ref}>
            <Title animate={animation}>TLOS BEP-20 و TLOS ERC-20</Title>
            <ArticleUp animate={animationTwo}><p><t>من الممكن استخدام تيلوس خارج الشبكة الرئيسية الأصلية لـ تيلوس ، من خلال إصدارات</t><span>ERC-20</span><t>و</t><span>BEP-20</span><t>من تيلوس. يتوفر</t><span>ERC-20</span><t>تيلوس على شبكة</t><span>Ethereum mainnet</span><t>و</t><span>BEP20 TLOS</span><t>متاح على</t><span>Binance Smart Chain (BSC).</span></p></ArticleUp>
            <Article animate={animationTwo}><p><t>أصبح هذا ممكنًا من خلال الجسور التي تم فتحها بين تيلوس وهذه الشبكات الأخرى في عام</t><span>2021,</span><t>عبر</t><span>pTokens.</span><t>هذه إصدارات مغلفة من تيلوس والتي يمكن نقلها داخل وخارج شبكة تيلوس الرئيسية الأصلية في أي وقت. لا يؤدي القيام بذلك إلى إنشاء رموز إضافية ، ومن المهم ملاحظة أن أي تيلوس موجود على</t><span>Ethereum</span><t>أو</t><span>BSC</span><t>مدرج في إجمالي التوريد البالغ</t><span>355</span><t>مليون تيلوس.</t></p></Article>


            <Empty>
                <IconColumnLeft to="depthlooknine" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="depthlookseven" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default DepthLookEight;