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

import Image from "../images/pyr6.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back3};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 200vh;
    }
`;

const Title = styled(motion.div)`
    width: 60%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 52px;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    direction: rtl;
    span{
        margin: 0 15px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 80%;
        font-size: 28px;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
`;

const Subtitle = styled(motion.div)`
    font-size: 24px;
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
    z-index: 100;
    line-height: 30px;
    @media screen and (max-width: 768px){
        width: 90%;
        height: 50vh;
        font-size: 24px;
        line-height: 30px;
    }
    span{
        margin: 0 8px;
        font-size: 20px;
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

const Grid = styled.div`
    width: 90%;
    height: 50vh;
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 110vh;
    }
`;

const ColumnLeft = styled(motion.div)`
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 25vh;
    }
    img{
        width: 550px;
        z-index: 0;
        @media screen and (max-width: 768px){
            width: 300px;
            transform: translate(0, 0);
        }
    }
`;

const ColumnRight = styled(motion.div)`
    width: 67%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 75vh;
    }
`;

const TopText = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    text-align: center;
    span{
        margin: 0 8px;
        font-size: 20px;
    }
    h1{
        color: white;
        font-size: 24px;
        z-index: 100;
        font-weight: 400;
        line-height: 30px;
    }
`;

const BottomText = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
`;

const Quote = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 24px;
    }
    h1{
        color: white;
        font-size: 28px;
        transform: translate(0, 20%);
        font-weight: 400;
        
    }
`;

const Teller = styled.div`
    width: 60%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 24px;
        transform: translate(0, 100%);
        font-weight: 400;
    }

`;


const ESGToDo = () => {

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
                x: 0, y: 0,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw', y: 0
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: 0, x: 0,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, y: '100px', x: 0
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationThree.start({
                opacity: 1, scale: 1,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationThree.start({
                opacity: 0, scale: 0.5
            })
        }
        
    }, [inView])

    return(
        <Section id="todo" ref={ref}>
            <Title animate={animation}><p><t>إذن ، ما علاقة</t><span>ESG</span><t>بالتشفير و بلوكشين؟</t></p></Title>
            <Subtitle animate={animationTwo}>كانت واحدة من أكبر الآلام المتنامية لقطاع بلوكشين هي نظرة المجتمع السلبية تجاه التكنولوجيا. هناك العديد من المفاهيم الخاطئة الشائعة حول تأثيرات هذه التكنولوجيا على العالم ، وذلك لسبب وجيه. مع إمكانية التغيير الجذري لكيفية عمل اقتصاداتنا وأعمالنا وعلاقاتنا ، هناك مستوى من المخاطر يأتي مع التبني الشامل ، كما هو الحال مع أي تقدم تكنولوجي كبير.</Subtitle>
            <Grid>
               <ColumnLeft><img src={Image} alt="image" /></ColumnLeft> 
               <ColumnRight animate={animationTwo}>
                    <TopText><h1><t>أصبح هذا أكثر وضوحًا بعد انخفاض سعر البيتكوين بعد مخاوف بشأن استهلاك الطاقة. خلال البث الشبكي في توافق الآراء</t><span>2021,</span><t>أشار كيفن أوليري من</t><span>Shark Tank</span><t>إلى أنه "على الجميع أن يستيقظ ويدرك أن هناك طلبًا [على التشفير] ، ولكن يجب أن يتم ذلك حول مخاوف</t><span>ESG".</span></h1></TopText>
                    <BottomText>
                        <Quote><h1><t>"على الجميع أن يستيقظ ويدرك أن هناك طلبًا [على العملات المشفرة] ، ولكن يجب أن يتم ذلك حول مخاوف</t><span>ESG".</span></h1></Quote>
                        <Teller><h1>كيفن أوليري</h1></Teller>
                    </BottomText>
               </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="quotes" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="esgicons" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGToDo;