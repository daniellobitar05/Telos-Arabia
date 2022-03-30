import { animateScroll as scroll } from "react-scroll";
import {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back4};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 260vh;
    }
`;

const Subtitle = styled(motion.div)`
    font-size: 26px;
    width: 70%;
    color: ${props => props.theme.text};
    text-align: center; 
    float: left;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    line-height: 30px;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        width: 90%;
        height: 20vh;
        font-size: 20px;
        height: 50vh;
        transform: translate(0, 0);
        line-height: 30px;
    }
`;

const SubtitleLeft = styled(motion.div)`
    font-size: 26px;
    width: 70%;
    color: ${props => props.theme.text};
    text-align: center; 
    float: left;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    line-height: 30px;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        width: 90%;
        height: 50vh;
        font-size: 20px;
        height: 50vh;
        transform: translate(0, 0);
    }
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
    
    
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
   background: transparent;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
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
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;




const ESGQuotes = () => {

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
        <Section id="quotes" ref={ref}>
            <Subtitle animate={animationTwo}><p><t>أشار أو ليري إلى أن أي مؤسسة كبيرة لديها لجان امتثال</t><span>ESG</span><t>"لديها عهود حول كيفية تكوين الأصول ، وما إذا كان يتم حرق الكربون ، وما إذا كانت حقوق الإنسان متورطة."</t></p></Subtitle>
            <Subtitle animate={animationTwo}><p><t>لسوء الحظ ، لن يتم حل هذه المشكلة بالكامل في سلاسل الكتل التقليدية ، مثل شبكة البيتكوين. هذا لأن</t><span>ESG</span><t>لم يكن أبدًا اعتبارًا في التصميم. ومع ذلك ، فقد قدمت بلوكشين 3.0 فرصة فريدة لإحداث تغيير هائل في الصناعة ، والحل لهذه المشكلات أقرب مما يدركه الكثير من الناس</t></p></Subtitle>
            <SubtitleLeft animate={animationTwo}><p><t>تم إطلاق تيلوس كشبكة شعبية في عام 2018 ، بدون تمويل</t><span>ICO</span><t>أو رأس مال استثماري. لذلك ، لم يكن مؤسسو شركة تيلوس مهتمين أبدًا بتطوير "عرض ترويجي" تقليدي للمبيعات للمستثمرين أو المستخدمين. بدلاً من ذلك ، سعت الشبكة إلى حل العديد من المشكلات الرئيسية التي أعاقت سلاسل الكتل الأخرى. على الرغم من عدم تحديدها في ذلك الوقت ، إلا أن العديد من هذه المشكلات كانت مرتبطة بالحوكمة البيئية والاجتماعية والمؤسسية</t></p></SubtitleLeft>
            <Subtitle animate={animationTwo}><p><t>عملت شبكة تيلوس على أن تصبح أكثر بلوكتشين وصولاً وإنصافًا وفعالية في السوق. خلال هذه العملية ، نمت الشبكة بشكل طبيعي لتصبح المثال الرائد في العالم لما يعنيه أن تكون سلسلة من سلاسل الكتل</t><span>ESG.</span><t>سواء نظرت إليها من منظور التأثير البيئي أو المسؤولية الاجتماعية أو قدرات الحوكمة ، فإن شركة تيلوس تأتي في المقدمة في كل مرة</t></p></Subtitle>
            <Subtitle animate={animationTwo}><p>على مر السنين ، جذبت هذه الخصائص أكثر من 100 مشروع ، ودمجت شبكة تيلوس بطريقة تواصل مهمة مبادرات ESG. هناك عدد كبير جدًا بحيث لا يمكن تضمينه في مقالة واحدة ، لكننا سنبرز بعض الأمثلة ذات الصلة أدناه. نحن نشجع مجتمعنا للتحقق من الباقي.</p></Subtitle>
            <Empty>
                <IconColumnLeft to="governance" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="todo" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}


export default ESGQuotes;