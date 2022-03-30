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
    background: ${props => props.theme.back9};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    @media screen and (max-width: 768px){
        height: 150vh;
    }
`;

const Title = styled(motion.div)`
    height: 20vh;
    width: 90%;
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
        margin: 0 5px;
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
        height: 50vh;
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


const DepthLookSix = () => {

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
        <Section id="depthlooksix" ref={ref}>
            <Article animate={animationThree}><p><t>يتم تحديد قرارات الميزانية لمؤسسة تيلوس عبر</t><span>multisig</span><t>بواسطة أعضاء مجلس إدارة مؤسسة تيلوس. يتم التصويت على أعضاء مجلس الإدارة من قبل حاملي تيلوس كممثلين للمجتمع من خلال انتخابات منتظمة.</t></p></Article>
            <Title animate={animation}><p><t>تيلوس</t><span>350.000 - (eosio.saving) Works</span><t> تيلوس / شهر</t></p></Title>
            <Article animate={animationTwo}><p><t>تعمل تيلوس</t><span>Works ,</span><t>المعروفة أيضًا باسم نظام اقتراح العمال</t><span>(WPS) ,</span><t>على تمكين مستخدمي تيلوس من توجيه ودفع تكاليف تطوير شبكة تيلوس وتعزيزها ونموها. يمكن لأي شخص تقديم طلب للحصول على تمويل من أجل القيام بمهمة معينة ويمكن لأي شخص التصويت.</t></p></Article>
            <Article animate={animationTwo}><p>قد يطلب أي عرض أي مبلغ من تيلوس ، ولكن يلزم إيداع 5٪ من الأموال المطلوبة. يمكن استرداد الإيداع إذا وصل الاقتراح إلى حد معين من تصويت المستخدم.</p></Article>
            <Empty>
                <IconColumnLeft to="depthlookseven" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="depthlookfive" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default DepthLookSix;