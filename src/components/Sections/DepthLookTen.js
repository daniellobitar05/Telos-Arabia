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

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back13};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    @media screen and (max-width: 768px){
        height: 160vh;
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
    font-weight: 300;
    span{
        margin: 0 8px;
        font-size: 20px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 8px;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        padding: 0;
        width: 90%;
        height: 50vh;
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


const DepthLookTen = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: '40px',
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
        <Section id="depthlookten" ref={ref}>
            <Article animate={animationTwo}><p>وبهذه الطريقة ، فإن امتلاك تيلوس يشبه إلى حد كبير امتلاك سند ملكية قطعة أرض ، مما يزيد من قيمتها مع زيادة الطلب على العقارات. هذه القيمة المتصورة المحتملة لـ تيلوس أعلى من العديد من سلاسل الكتل الأخرى ، بسبب الطبيعة القوية للشبكة والإمداد المحدود لـ تيلوس.</p></Article>
            <Article animate={animationTwo}><p>سيحتاج المستخدم اليومي إلى موارد قليلة جدًا لتنفيذ مهام بسيطة مثل شراء الرموز المميزة وإرسالها. لذلك ، يجب وضع حد أدنى من تيلوس في حالات الاستخدام هذه ، مما يحافظ على المعاملات القياسية تقريبًا. ومع ذلك ، ستتطلب التطبيقات والمنظمات موارد أكبر لبناء البنية التحتية المعقدة التي تدعم نظمها البيئية.</p></Article>
            <Article animate={animationTwo}><p>تتمثل إحدى الميزات الإضافية لـ تيلوس ، على غيرها من سلاسل الكتل ، في قدرة المطورين على مشاركة الموارد لمستخدميهم. باستخدام هذا ، يمكن للمطورين إنشاء تطبيقات بتجربة مستخدم بسيطة وبدون رسوم أو متاعب إضافية لعملائهم. هذا يزيد من إمكانية اعتماد تقنية بلوكشين من قبل كل صناعة ممكنة.</p></Article>
            <Empty>
                <IconColumnLeft to="depthlookeleven" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="depthlooknine" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default DepthLookTen;