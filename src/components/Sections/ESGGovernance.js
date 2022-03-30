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

import Ball1 from "../images/telos_ball4.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${Ball1}), ${props => props.theme.back5};
    background-repeat: no-repeat;
    background-size: contain;
    @media screen and (max-width: 768px){
        height: 210vh;
    }
   
`;

const Title = styled(motion.div)`
    width: 60%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const TopSubtitle = styled(motion.div)`
    font-size: 24px;
    width: 80%;
    color: ${props => props.theme.text};
    text-align: center; 
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 10px;
        font-size: 20px;
        @media screen and (max-width: 768px){
        font-size: 16px;
        }
    }
    @media screen and (max-width: 768px){
        width: 90%;
        height: 50vh;
        font-size: 20px;
        line-height: 30px;
    }
`;

const BottomSubtitle = styled(motion.div)`
    font-size: 24px;
    width: 80%;
    color: ${props => props.theme.text};
    text-align: center; 
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 10px;
        font-size: 20px;
        @media screen and (max-width: 768px){
        font-size: 16px;
        }
    }
    @media screen and (max-width: 768px){
        width: 90%;
        height: 40vh;
        font-size: 20px;
        line-height: 30px;
    }
`;

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 70vh;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 180vh;
    }
`;

const ColumnLeft = styled.div`
    
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

const ESGGovernance = () => {

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
        <Section id="governance" ref={ref}>
            <Title animate={animation}>الحاكمية</Title>
            <Grid>
                    <TopSubtitle animate={animationTwo}><p><t>عندما كتب دوغلاس هورن المستند التقني لتيلوس في عام 2018 ، كانت الحوكمة هي القضية الأساسية التي سعت تيلوس إلى حلها. هذا لأن تيلوس بلوكشين يعمل على بروتوكول يعرف باسم إثبات الحصة المفوض</t><span>(DPoS).</span><t>بدون الخوض في الاعشاب التقنية ، يمنح</t><span>DPoS</span><t>أعضاء المجتمع القدرة على التصويت لصالح المدققين الذين يعتقدون أن لديهم مصلحة راسخة في الشبكة</t></p></TopSubtitle>
                    <TopSubtitle animate={animationTwo}><p>تعتبر الحوكمة القوية جزءًا لا يتجزأ من نجاح هذا البروتوكول ، وقد أثبتت شركة تيلوس ذلك بأسلوب متقدم. بالإضافة إلى التصويت على المدققين ، يمكن العثور على نموذج الحوكمة هذا في كل منطقة أخرى من عمليات الشبكة ، بدءًا من مقترحات التمويل من خلال عمل تيلوس إلى تعديلات البروتوكول والحوكمة عبر تيلوس أماند. يمكنك حتى رؤية هذا في انتخابات اللجان واستطلاعات الرأي المجتمعية.</p></TopSubtitle>
                    <BottomSubtitle animate={animationTwo}><p><t>هذا بفضل</t><span>Telos Decide</span><t>محرك حوكمة قوي يتجاوز قدرات جميع سلاسل الكتل الرئيسية الأخرى. استخدم أعضاء المجتمع</t><span> Telos Decide</span><t>للتصويت على التغييرات في الهيئة التشريعية ومنح الأموال للمبادرات المجتمعية وتعديل اقتصاديات الشبكة وغير ذلك الكثير.</t></p></BottomSubtitle>
                    <BottomSubtitle animate={animationTwo}><p>تضمن الطبيعة العادلة للأداة أن جميع التغييرات تمثل مشاعر أصحاب المصلحة بطريقة ديمقراطية حقًا ولكن لا مركزية. هذه الأداة متاحة لأي مطورين يرغبون في استخدامها في مشاريعهم الخاصة ، مما يجعل تطبيق الحكم الصادق أسهل من أي وقت مضى.</p></BottomSubtitle>
               {/*  <ColumnLeft> </ColumnLeft>
                <ColumnRight>
                    <Subtitle animate={animationTwo}><p><t>عندما كتب دوغلاس هورن المستند التقني لتيلوس في عام 2018 ، كانت الحوكمة هي القضية الأساسية التي سعت تيلوس إلى حلها. هذا لأن تيلوس بلوكشين يعمل على بروتوكول يعرف باسم إثبات الحصة المفوض</t><span>(DPoS).</span><t>بدون الخوض في الاعشاب التقنية ، يمنح</t><span>DPoS</span><t>أعضاء المجتمع القدرة على التصويت لصالح المدققين الذين يعتقدون أن لديهم مصلحة راسخة في الشبكة</t></p></Subtitle>
                    <Subtitle animate={animationTwo}><p>تعتبر الحوكمة القوية جزءًا لا يتجزأ من نجاح هذا البروتوكول ، وقد أثبتت شركة تيلوس ذلك بأسلوب متقدم. بالإضافة إلى التصويت على المدققين ، يمكن العثور على نموذج الحوكمة هذا في كل منطقة أخرى من عمليات الشبكة ، بدءًا من مقترحات التمويل من خلال عمل تيلوس إلى تعديلات البروتوكول والحوكمة عبر تيلوس أماند. يمكنك حتى رؤية هذا في انتخابات اللجان واستطلاعات الرأي المجتمعية.</p></Subtitle>
                    <Subtitle animate={animationTwo}><p><t>هذا بفضل</t><span>Telos Decide</span><t>محرك حوكمة قوي يتجاوز قدرات جميع سلاسل الكتل الرئيسية الأخرى. استخدم أعضاء المجتمع</t><span> Telos Decide</span><t>للتصويت على التغييرات في الهيئة التشريعية ومنح الأموال للمبادرات المجتمعية وتعديل اقتصاديات الشبكة وغير ذلك الكثير.</t></p></Subtitle>
                    <Subtitle animate={animationTwo}><p>تضمن الطبيعة العادلة للأداة أن جميع التغييرات تمثل مشاعر أصحاب المصلحة بطريقة ديمقراطية حقًا ولكن لا مركزية. هذه الأداة متاحة لأي مطورين يرغبون في استخدامها في مشاريعهم الخاصة ، مما يجعل تطبيق الحكم الصادق أسهل من أي وقت مضى.</p></Subtitle>
                </ColumnRight> */}
            </Grid>
            <Empty>
                <IconColumnLeft to="greenest" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="quotes" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGGovernance;