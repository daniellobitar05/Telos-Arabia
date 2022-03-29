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

const Grid = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        height: 170vh;
    }
`;



const Title = styled(motion.div)`
    height: 20vh;
    width: 80%;
    font-size: 48px;
    color: white;
    display: flex;
    align-items: center;
    text-align: right;
    direction: rtl;
    transform: translate(0, 20%);
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        height: 15vh;
        transform: translate(0, 0);
        font-size: 32px;
    }
`;


const Article = styled(motion.div)`
    width: 70vw;
    font-size: 24px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    padding: 30px 0;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 30px;
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
        width: 80%;
        line-height: 30px;
        padding: 0;
    }
`;


const DownTitle = styled.div`
    color: white;
    display: flex;
    align-items: center;
    text-align: right; 
    direction: rtl;
    font-size: 62px;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 42px;
        transform: translate(-10%, 0);
    }
`;

const R14 = () => {

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
        <Section id="r14" ref={ref}>
            
           <Grid>
                <Title animate={animation}><p><t>تحديد المصوت</t><span>+</span></p></Title>
                <Article  animate={animationTwo} ><p><t>تعد الحوكمة القوية أحد أعمدة نظام</t><span>Telos</span><t>البيئي ، ولكن تتوفر حاليًا ميزات حوكمة معينة فقط للمستخدمين الذين ليس لديهم موارد للمطورين. يحل</t><span>Decide Voter +</span><t>هذا من خلال توفير حوكمة </t><span>blockchain</span><t>المتقدمة لمشاريع العالم الحقيقي. يتضمن ذلك ميزات مثل تعديلات التشريعات وإدارة انتخابات مجلس الإدارة والمزيد.</t></p></Article>
                <Title animate={animation}><p><t>ملفات تعريف</t><span>Telos 2.0</span></p></Title>
                <Article  animate={animationTwo} ><p><t>ملفات تعريف</t><span>Telos,</span><t>جواز سفرك إلى الويب 3.0 ، عبارة عن خدمة ملف تعريف مستخدم لامركزية تم إنشاؤها لتسهيل نظام بيئي أكثر جاذبية. يسمح للمستخدمين بتعيين صورة رمزية مخصصة وشخصية عامة مرتبطة بحساباتهم. يمكن للمشاريع بعد ذلك الاستفادة من هذا كحل ملف تعريف على مستوى الشبكة للتجارب المألوفة داخل التطبيق. سوف توفر</t><span>Telos Profiles 2.0</span><t>واجهة مستخدم محدثة وأدوات سهلة للتنقل ، مما يفتح الإمكانات الكاملة لتنميط المستخدم اللامركزي.</t></p></Article>   
           </Grid>
           <Empty>
                <IconColumnLeft to="r12" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r11" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R14;