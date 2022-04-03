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
    background: ${props => props.theme.back6};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 190vh;
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
        height: 180vh;
    }
`;



const Title = styled(motion.div)`
    height: 15vh;
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
    width: 85vw;
    font-size: 26px;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    height: 15vh;
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
    a{
        color: aqua;
        text-decoration: none;
        margin: 0 10px;
        font-size: 22px;
        @media screen and (max-width: 768px){
        font-size: 18px;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        line-height: 30px;
        padding: 0;
        height: 45vh;
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
        <Section id="r5" ref={ref}>
            
           <Grid>
                <Title animate={animation}><p><span>Teloscan</span><t>بيتا</t></p></Title>
                <Article  animate={animationTwo}><p><t>تم تصميم إصدار</t><span>Telos</span><t>من مستكشف كتل</t><span>Ethereum</span><t>الشهير خصيصًا مع وضع </t><span>Telos EVM</span><t>في الاعتبار. على الرغم من أن التطوير لا يزال في مراحله الأولى ، يمكن للمستخدمين و</t><span>dApps</span><t>بالفعل البدء في استكشاف</t><span>Telos EVM</span><t>من خلال التكرار المبكر لهذه الأداة القوية.</t></p></Article>
                <Title animate={animation}><p><span>Telos</span> قاعدة المعرفة والدعم</p></Title>
                <Article  animate={animationTwo}><p><t>تعد</t><a href="http://wallet.telos.net/" target="_blank" rel="noreferrer">Telos Knowledge Base</a><t>، موطن دعم</t><span>Telos</span><t>لرسمي ، جزءًا لا يتجزأ من إنشاء</t><span>blockchain</span><t>للتبني الجماعي. من السهل التنقل في وثائق الدعم ويزيل نظام التذاكر المألوف عامل التخويف الذي يربطه العديد من الأشخاص بتقنية التشفير والويب 3.0</t></p></Article>
                <Title animate={animation}>الشراكات والتبادلات</Title>
                <Article animate={animationTwo}>يتمثل مفتاح النظام البيئي المزدهر في أكثر من مجرد التكنولوجيا التي يتم تقديمها. هذا هو السبب في أن مؤسسة Telos تبني شراكات مع مشاريع صناعية بارزة والتبادلات في جميع أنحاء العالم</Article>
           </Grid>
           <Empty>
                <IconColumnLeft to="r6" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r4" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R1;