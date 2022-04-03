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

import Back from "../../components/images/rou10.png";



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
    background: ${props => props.theme.back4};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 170vh;
    }
`;

const Grid = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 768px){
        height: 160vh;
    }
`;



const Title = styled(motion.div)`
    height: 12.5vh;
    width: 90%;
    font-size: 48px;
    color: white;
    display: flex;
    align-items: center;
    text-align: right;
    transform: translate(0, 20%);
    direction: rtl;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
        @media screen and (max-width: 768px){ 
            font-size: 26px;
        }
    }
    @media screen and (max-width: 768px){
        height: 30vh;
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
    padding: 10px 0;
    line-height: 35px;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    span{
        margin: 0 8px;
        font-size: 22px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 8px;
        }
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0;
        font-size: 22px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        padding: 0;
        width: 90%;
    }
`;

const ArticleTop = styled(motion.div)`
    width: 70vw;
    font-size: 24px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    padding: 10px 0;
    line-height: 30px;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    span{
        margin: 0 8px;
        font-size: 20px;
        @media screen and (max-width: 768px){
        font-size: 18px;
        margin: 0 5px;
        }
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0 5px;
        font-size: 24px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        padding: 0;
        width: 90%;
    }
`;

const Image = styled.div`
    width: 100%;
    height: 5vh;
    img{
        transform: translate(10%, -75%) scale(0.65);
        z-index: 1;
        @media screen and (max-width: 768px){
            transform: translate(0%, 4%) scale(0.3);
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
        <Section id="r3" ref={ref}>
            
           <Grid>
                <Title animate={animation}><span>Telos EVM</span></Title>
                <ArticleTop  animate={animationTwo}><p><t>كان إطلاق</t><span>Telos EVM</span><t>أحد أهم الإنجازات لنظام</t><span>Telos</span><t>البيئي منذ إطلاق شبكته الرئيسية. أطلقت</t><span>Telos</span><t>جهازًا ظاهريًا من الطبقة الأولى من</t><span>Ethereum</span><t>بدون تشغيل أمامي ، ورسوم الغاز المسطحة ، وكفاءة الطاقة ، والسرعة القصوى والقوة! مع بدء نشر التطبيقات ، يستمر التطوير في ضمان الإعداد السلس مع تكافؤ الميزات.</t></p><p><t>يمكنك قراءة المزيد عن</t><span>Telos EVM</span><a href="http://teloscan.io/" target="_blank" rel="noreferrer">في وثائقنا هنا.</a></p></ArticleTop>
                <Image><img src={Back} alt="" /></Image>
                <Title animate={animation}><p><t>تحديد تطبيق</t><span>Voter Mobile</span></p></Title>
                <Article  animate={animationTwo}><p><t>يتيح تطبيق</t><span>Decide Voter</span><t>للجوال من</t><span>GoodBlock Technologies</span><t>استخدام محرك</t><span>Telos Decide</span><t> في العالم الحقيقي. متوفر على</t><a href="https://play.google.com/store/apps/details?id=com.decidevoter" target="_blank" rel="noreferrer"> Google Play</a><t> و </t><a href="https://play.google.com/store/apps/details?id=com.decidevoter" target="_blank" rel="noreferrer">Apple Store</a><t> ، هذا التطبيق البديهي يجعل الإدارة اللامركزية الشفافة والفعالة في متناول الجميع</t></p></Article>
           </Grid>
           <Empty>
                <IconColumnLeft to="r4" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r2" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R1;