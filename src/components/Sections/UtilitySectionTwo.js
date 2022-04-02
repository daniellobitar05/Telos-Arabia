import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Telos from "../images/telos_logo.png";
import Back from "../images/rou9.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(29,19,181,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 210vh; 
    }
`;


const Title = styled(motion.div)`
    height: 10vh;
    width: 80%;
    font-size: 32px;
    color: white;
    display: flex;
    align-items: center;
    text-align: right;
    z-index: 10;
    direction: rtl;
    span{
        margin: 0 8px;
    }
    @media screen and (max-width: 768px){
        height: 20vh;
        font-size: 24px;
    }
`;

const ArticleUp = styled(motion.div)`
    width: 80vw;
    font-size: 26px;
    height: 15vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    direction: rtl;
    z-index: 10;
    span{
        margin: 0 8px;
        @media screen and (max-width: 768px) {
        font-size: 16px;
    }
    }
    @media screen and (max-width: 768px) {
        font-size: 20px;
        height: 30vh;
    }
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const Article = styled(motion.div)`
    width: 80vw;
    font-size: 22px;
    height: 20vh;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    direction: rtl;
    z-index: 10;
    span{
        margin: 0 8px;
        font-size: 18px;
    }
    @media screen and (max-width: 768px) {
        font-size: 20px;
        line-height: 30px;
        height: 60vh;
    }
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const List = styled.ul`
    list-style-type: circle;
    list-style-position: outside;
    z-index: 10;
    display: flex;
    flex-direction: column;
    transform: translate(25%, 0);
    height: 17.5vh;
    @media screen and (max-width: 768px) {
        height: 25vh;
        transform: translate(0%, 0%);
        li{
            transform: translate(10%, 0);
        }
    }
`;

const ListBottom = styled.ul`
    list-style-type: circle;
    list-style-position: outside;
    
    display: flex;
    flex-direction: column;
    z-index: 100;
    height: 17.5vh;
    @media screen and (max-width: 768px) {
        height: 25vh;
        
        align-items: center;
        justify-content: center;
    }
`;

const ListItem = styled.li`
    height: 33%;
    color: white;
    font-size: 20px;
    direction: rtl;
    text-align: right;
    z-index: 100;
    @media screen and (max-width: 768px) {
        height: 60px;
        transform: translate(0%, 0);
        width: 80%;
    }
`;



const InnerTitle = styled.div`
    width: 100%;
    height: 5vh;
    transform: translate(45%, 0);
    color: white;
    font-size: 28px;
    font-weight: bold;
    direction: rtl;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        height: 20vh;
        transform: translate(0%, 0%);
        font-size: 24px;
        width: 80%;
        text-align: center;
        margin: 0 10%;
    }
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
    img{
        
        z-index: 0;
    }
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
    z-index: 100;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;



const UtilitySectionTwo = () => {

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

    useEffect(() => {
        if(inView){
            animationThree.start({
                opacity: 1, scale: 1, y: '-350px', x: '-250px',
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationThree.start({
                opacity: 0, y: '-350px', x: '-250px', scale: 0.4
            })
        }
        
    }, [inView])

    return(
        <Section id="utilitytwo" ref={ref}>
            <Title animate={animation}><p><t>مزايا تيلوس</t><span>DPoS</span></p></Title>
            <ArticleUp animate={animationTwo}><p><t>إلى الحد الذي يمثل فيه الأداء دائمًا أولوية للمطورين ، فإن طريقة إجماع إثبات الحصة المفوضة التي تستخدمها شركة تيلوي تستحق اهتمامًا خاصًا هنا. يحمل</t><span>DPoS</span><t>بعض الإيجابيات الكبيرة للمطورين ، بما في ذلك:</t></p></ArticleUp>
            <Title animate={animation}># 1 سرعة المعاملات ومساءلة المدقق</Title>
            <Article animate={animationTwo}>تمتلك تيلوس 21 مدققًا "نشطًا" يتم التصويت عليهم من قبل حاملي رمز تيلوس ومكلفون بصيانة الشبكة. يُطلق على المدققين الآخرين المدققين "الاحتياطيين" ويتم الدفع لهم ليكونوا بمثابة دعم لأعلى 21. 2.5 دقيقة. على العكس من ذلك ، يمكن التصويت على أفضل 21 شخصًا من بين أفضل 21 في أي وقت أيضًا. تمتلك تيلوس مدققين احتياطيين يتم تدويرهم تلقائيًا إلى أعلى 21 بشكل دوري لمنح عملياتهم فرصة لإنتاج الكتل وإثبات استعدادهم.</Article>
            <motion.div animate={animationTwo}>
            <List>
                <ListItem>تمتلك تيلوس 0.5 ثانية من أوقات الكتلة 24 مرة أسرع من اثيريوم</ListItem>
                <ListItem>تدور  تيلوس بلوكشين تلقائيًا في أدوات التحقق الاحتياطية لاختبار جاهزيتها</ListItem>
                <ListItem>تجري انتخابات مدقق التيلوس كل دقيقتين ونصف تقريبًا.</ListItem>
            </List>
            <InnerTitle>تتضمن مساءلة المدقق الإضافي على إجراءات تيلوس بلوكشين ما يلي:</InnerTitle>
            <ListBottom>
                <ListItem>ركلات تلقائية من الجدول الزمني للفشل في إنتاج الكتل التي يتم التعامل معها بواسطة العقد الذكي.</ListItem>
                <ListItem>يدور تيلوس بلوكشين تلقائيًا في أدوات التحقق الاحتياطية لاختبار جاهزيتها</ListItem>
            </ListBottom>
            </motion.div>
            <Empty>
                <IconColumnLeft to="utilitythree" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="utility" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default UtilitySectionTwo;