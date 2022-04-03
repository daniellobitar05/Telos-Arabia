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
    background: ${props => props.theme.back11};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 220vh;
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
        height: 210vh;
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
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
        @media screen and (max-width: 768px){ 
            font-size: 26px;
        }
    }
    @media screen and (max-width: 768px){
        height: 20vh;
        transform: translate(0, 0);
        font-size: 32px;
    }
`;


const Article = styled(motion.div)`
    width: 85%;
    font-size: 26px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: right;
    height: 20vh;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 35px;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 22px;
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
        height: 70vh;
    }
`;

const BigArticle = styled(motion.div)`
    width: 85%;
    font-size: 26px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: right;
    height: 30vh;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 35px;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 22px;
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
        height: 100vh;
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
        <Section id="r10" ref={ref}>
            
           <Grid>
                <Title animate={animation}><span>Teloscan & Telos Block Explorer</span></Title>
                <Article  animate={animationTwo}><p><t>مع استمرار تطوير</t><span>Telos EVM,</span><t>ستقدم</t><span>Teloscan</span><t>لتطبيقات والمستخدمين مجموعة من الأدوات التي تتنافس مع مستكشفي الكتل الرائدين الآخرين. بالإضافة إلى</t><span>Teloscan for Telos EVM,</span><t>يجري أيضًا تطوير مستكشف كتل رسمي لـ</t><span>Telos</span><t>لأصلي. ستعمل كلتا هاتين الأداتين على تعظيم الاستفادة من ميزات</t><span>Telos</span><t>المتنوعة وضمان تجربة مستخدم سلسة للتنقل في تاريخ نظام</t><span>Telos</span><t>البيئي على نطاق واسع.</t></p></Article>
                <Title animate={animation}><span>T-ID</span></Title>
                <BigArticle  animate={animationTwo}><p><t>حل هوية يجمع بين حاجتين كبيرتين للهوية. الأول هو الحاجة إلى تحديد الطابع الفريد لهوية الحساب الفردي ، والثاني هو قدرة المستخدم على التحقق من المعلومات من قبل أطراف ثالثة دون تسريب المعلومات الخاصة. سيتمكن المستخدمون من مشاركة معلومات محددة مع التطبيقات مع الحفاظ على التحكم فيما يشاركونه. سيتم ربط الشهادات الصادرة بهذه التفاصيل. سيكون هذا المنتج حاسمًا مع تطور الصناعة وتصبح احتياجات الحوكمة و</t><span>DeFi</span><t>أكثر تعقيدًا. أبرم مطورو </t><span>Telos Core</span><t>شراكة مع المطورين الأصليين لنظام الهوية الوطنية الإستونية ، وهو أول وأنجح نظام هوية</t><span>blockchain</span><t>في العالم.</t></p></BigArticle>
           </Grid>
           <Empty>
                <IconColumnLeft to="r11" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r9" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R1;