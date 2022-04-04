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
    background: ${props => props.theme.back2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 170vh;
    }
`;

const Grid = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        height: 130vh;
    }
`;



const Title = styled(motion.div)`
    height: 20vh;
    width: 80%;
    font-size: 48px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 50px;
    justify-content: center;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        height: 40vh;
        transform: translate(0, 0);
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
    span{
        margin: 0 8px;
        font-size: 22px;
        @media screen and (max-width: 768px){
            font-size: 18px;
            margin: 0 5px;
        }
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0 15px;
        font-size: 22px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        padding: 10px 0;
        height: 50vh;
    }
`;

const SmallArticle = styled(motion.div)`
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
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        
        height: 30vh;
    }
`;

const R1 = () => {

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
        <Section id="r1" ref={ref}>
            <Title animate={animation}> المستقبل يبحث عن ملحمة تيلوس</Title>
           <Grid>
           <Article animate={animationTwo}>مرحبًا بك في خارطة طريق تيلوس الجديدة للسنوات القادمة! كان بعض قرائنا من محبي تيلوس منذ أن تم إطلاق الشبكة الرئيسية قبل ثلاث سنوات قصيرة. يتعلم الآخرون الآن للتو عن حالات الاستخدام المذهلة في العالم الحقيقي وإمكانيات تيلوس. أينما كنت في رحلة تيلوس الخاصة بك ، نعلم أنك ستحب القراءة حول خريطة الطريق الجديدة الخاصة بنا.</Article>
            <SmallArticle animate={animationTwo}>خارطة الطريق هذه هي رؤيتنا التوجيهية لمستقبل تيلوس. أثناء القراءة ، تذكر أنه كان هناك الكثير من عمليات إعادة الهيكلة الرائعة خلف الكواليس. نحن متحمسون لكل ما يحمله المستقبل لشركة تيلوس!</SmallArticle>
            <Article animate={animationTwo}><p><t>قد يتم طرح الأسئلة عليك بعد قراءة خارطة الطريق الخاصة بنا. انضم إلى تيلوس تيوزداي مع الفريق الأساسي في</t><a href="https://youtu.be/mLhbdy6CqYM" target="_blank" rel="noreferrer">11 كانون الثاني (يناير) 2022</a>، ومن ذلك الحين فصاعدًا ، سنقوم بإعادة التحديثات التقنية مرتين في الشهر حتى تتمكن من البقاء على اطلاع دائم بكل هذه المبادرات الرائعة.</p></Article>
           </Grid>
           <Empty>
                <IconColumnLeft to="r2" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight onClick={toggleHome} >
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn></ToggleColumn>
            </Empty> 
        </Section>
    )
}

export default R1;