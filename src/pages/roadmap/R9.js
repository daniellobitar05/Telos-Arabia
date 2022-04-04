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
    background: ${props => props.theme.back10};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 210vh;
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
        height: 200vh;
    }
`;



const Title = styled(motion.div)`
    height: 20vh;
    width: 90%;
    font-size: 48px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    direction: rtl;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
        @media screen and (max-width: 768px){ 
            font-size: 24px;
        }
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        font-size: 32px;
    }
`;


const Article = styled(motion.div)`
    width: 80vw;
    font-size: 26px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 35px;
    direction: rtl;
    height: 30vh;
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
        height: 90vh;
    }
`;

const SmallArticle = styled(motion.div)`
    width: 80vw;
    font-size: 26px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: right;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 35px;
    direction: rtl;
    height: 20vh;
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
        height: 60vh;
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
        <Section id="r9" ref={ref}>
            
           <Grid>
                <Title animate={animation}><p><t>رموز ساتوشي</t><span>(SAT)</span></p></Title>
                <Article  animate={animationTwo}><p><t>نسخة مجزأة من</t><span>Bitcoin</span><t>بديهية للغاية يمكن لجدتك استخدامها! لماذا تشتري قهوة مقابل <span>0.00005441</span> بيتكوين بينما يمكنك شرائها مقابل</t><span>SAT 5441?</span><t>تسمح</t><span>SATs</span><t>بعلامات الأسعار التي تكون منطقية فعلاً للشخص العادي. عند إقرانها بمعاملات شبه محسوسة عند</t><span>TPS 10000</span><t>وواجهة مستخدم سهلة الاستخدام لمحفظة</t><span>Telos Web Wallet,</span><t>لم تكن معاملات التشفير في العالم الحقيقي أسهل من أي وقت مضى. يتم ربط</t><span>SATs</span><t>بـ</t><span>Bitcoin blockchain</span><t>وتمثل الرموز المميزة لـ</t><span>BTC</span><t>المغلفة. يمكن أيضًا تحويلها مباشرة بين</t><span>SAT</span><t>و</t><span>BTC</span><t>دون استخدام عقد تبادل أو مقايضة.</t></p></Article>
                <Title animate={animation}><p><t>واجهة مستخدم</t><span>T-Bond NFTs</span></p></Title>
                <SmallArticle  animate={animationTwo}><p><t>كانت تقنية</t><span>T-Bond NFTs</span><t>واحدة من أكثر تطورات</t><span>DeFi</span><t>بتكارًا في عام 2021. ستفتح</t><span>T-Bonds UI</span><t>الجديدة هذه القطعة القوية من الأدوات لمبادرات العالم الحقيقي بدون موارد للمطورين. نظرًا لأن العالم يعيد تصور الشكل الذي تبدو عليه أنظمتنا المالية التقليدية ، فإن</t><span>T-Bond NFTs</span><t>من المقرر أن تلعب دورًا رئيسيًا في مستقبل اقتصاداتنا.</t></p></SmallArticle>
           </Grid>
           <Empty>
                <IconColumnLeft to="r10" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r8" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R1;