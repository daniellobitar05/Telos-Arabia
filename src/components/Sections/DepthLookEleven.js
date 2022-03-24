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

import Back from "../images/rou5.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${Back}), rgba(12,14,130,1);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left center;
`;

const Title = styled(motion.div)`
    height: 20vh;
    width: 90%;
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
    height: 20vh;
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


const DepthLookEleven = () => {

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
        <Section id="depthlookeleven" ref={ref}>
            <Title animate={animation}>المشاركة في الحوكمة</Title>
            <Article animate={animationTwo}><p><t>الأداة الأساسية الثانية لـ تيلوس هي بمثابة رمز مميز للحوكمة. يعد محرك الحوكمة تيلوس</t><span>Decide</span><t>أداة قوية تميز تيلوس عن سلاسل الكتل الأخرى</t></p></Article>
            <Article animate={animationTwo}><p><t>سواء كان التصويت على المدققين أو تعديلات التشريعات أو مقترحات المنح ، فإن الحوكمة جزء هائل من تيلوس.بلوكشين في تيلوس ، يمكن تعديل أي جانب من جوانب عمليات الشبكة تقريبًا من خلال التصويت الشعبي ، وهو أمر غير ممكن في سلاسل الكتل الرئيسية الأخرى.</t></p></Article>
            <Article animate={animationTwo}><p>يمكن لأي شخص يحمل تيلوس تقديم اقتراح أو التصويت عليه. وهذا يضمن أن يمثل اتجاه السلسلة إلى حد ما المصلحة الفضلى للمجتمع وأن موارده تُستخدم بطريقة يتفق عليها غالبية أصحاب المصلحة. يجب أيضًا دفع تيلوس لتقديم عرض ، مما يزيد من فائدة الرمز المميز.</p></Article>
            <Article animate={animationTwo}><p>الحوكمة القوية والعادلة هي شيء تفتقر إليه الشبكات الأخرى دائمًا ، مما يؤدي إلى تفرع. تحافظ حوكمة تيلوس على رشاقتها في التشغيل وتقلل بشكل كبير من هذه المخاطر على المستثمرين والمستخدمين.</p></Article>
            <Empty>
                <IconColumnLeft to="depthlooktwelve" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="depthlookten" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default DepthLookEleven;