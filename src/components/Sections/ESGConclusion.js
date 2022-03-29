import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

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
    background: ${props => props.theme.back13};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 180vh;
    }
`;

const Title = styled(motion.div)`
    font-size: 52px;
    width: 80%;
    color: ${props => props.theme.text};  
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    direction: rtl;
    span{
        margin: 0 8px;
    }
    @media screen and (max-width: 768px){
        font-size: 38px;
        width: 90%;
    }
`;

const Subtitles = styled(motion.div)`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        height: 150vh;
    }
`;

const Subtitle = styled.div`
    font-size: 22px;
    color: white;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    line-height: 30px;
    span{
        margin: 0 8px;
    }
`;

const ESGConclusion = () => {

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
                x: 0, opacity: 1, 
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw', opacity: 0, 
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
        <Section id="esgconclusion" ref={ref}>
            <Title animate={animation}><p><t>الخلاصة:</t><span>ESG</span><t>هو المستقبل ، والمستقبل هو تيلوس!</t></p></Title>
            <Subtitles animate={animationTwo}>
            <Subtitle><p><t>الركائز الثلاث التي تشكل مبادرات</t><span>ESG</span><t>لن تختفي أبدًا وستصبح أكثر أهمية بمرور الوقت. في حين أن المعايير من وجهة نظر الاستثمار جديدة نسبيًا ، فإن المبادئ ليست كذلك. يوفر التأثير البيئي والمسؤولية الاجتماعية والحوكمة الشفافة المزايا الاقتصادية والاستقرار الضروريين لازدهار العالم.</t></p></Subtitle>
            <Subtitle><p><t>من المنطقي أن تتقدم تيلوس ، أقوى بلوكتشين وأكثرها قيمة وتأثيرًا في جميع سلاسل</t><span>ESG</span><t>الثلاثة. حقيقة أن هذا حدث بشكل طبيعي ، بسبب مهام المجتمع والمشاريع التي اجتذبها فقط يعزز هذه الحقيقة.</t></p></Subtitle>
            <Subtitle><p><t>لم تشرع شركة تيلوس في أن تصبح بلوكشين</t><span>ESG</span><t>بطريقة مفتعلة ، وبدلاً من ذلك ، تطورت بشكل طبيعي بسبب خصائصها الجوهرية</t><span>ESG.</span><t>أدت ثلاث سنوات من التطوير المخصص إلى أكثر من 100 تكامل مع مشاريع من عالم التشفير والتي تعكس خصائص</t><span>ESG</span><t>الخاصة بالشبكة. بلا شك هناك آلاف أخرى قادمة.</t></p></Subtitle>
            <Subtitle><p><t>نظرًا لأن صناعة بلوكشين تقف عند مفترق طرق ، فقد كان الافتقار إلى مبادرات</t><span>ESG</span><t>هو العقبة الرئيسية التي أوقفت التبني الجماعي من المستثمرين المؤسسيين والشركات الكبرى والمستخدمين في العالم الحقيقي. ومع ذلك ، لن يكون هذا مصدر قلق أبدًا لـ تيلوس ، بلوكشين الرائد في</t><span>ESG.</span><t>يمكن للمطورين والمستثمرين وأعضاء المجتمع أن يطمئنوا إلى أن سلسلة تيلوس بلوكشين ستصمد أمام اختبارات الزمن وتنمو وفقًا لاحتياجات البشرية وتنجز أشياء لم يتم تخيلها حتى.</t></p></Subtitle>
            </Subtitles>
            <Empty>
                <IconColumnLeft to="esglatest" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="additionaltwo" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGConclusion;