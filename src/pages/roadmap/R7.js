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
    background: ${props => props.theme.back8};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 150vh;
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
        height: 140vh;
    }
`;



const Title = styled(motion.div)`
    height: 20vh;
    width: 90%;
    font-size: 48px;
    color: white;
    display: flex;
    align-items: center;
    direction: rtl;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
        @media screen and (max-width: 768px){ 
            font-size: 26px;
        }
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        transform: translate(0, 0);
        font-size: 32px;
    }
`;


const Article = styled(motion.div)`
    width: 80vw;
    height: 20vh;
    font-size: 32px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 40px;
    span{
        margin: 0 8px;
        font-size: 26px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 5px;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        line-height: 30px;
        padding: 0;
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
        <Section id="r7" ref={ref}>
            
           <Grid>
                <Title animate={animation}><span>Telos EVM 2.0</span></Title>
                <Article  animate={animationTwo}><p>تسبق <span>Telos EVM</span> بالفعل بأميال حلول <span>Solidity</span> المنافسة الحالية ، لكن التطوير لا يتباطأ. سيضمن <span>Telos EVM 2.0</span> استمرار <span>Telos</span> في تقديم قوة لا مثيل لها للتطبيقات المستندة إلى <span>Ethereum</span> على مدى عقود.</p></Article>
                <Title animate={animation}><t>مقايضة</t><span>T-3.0</span></Title>
                <Article  animate={animationTwo}><p>سيضمن التطوير المستمر لبورصة <span>T-Swaps</span> أن تظل هذه المنصة جزءًا أساسيًا من <span>Defi</span> على <span>Telos.</span> تعد واجهة المستخدم الأنيقة ، وتجمعات السيولة المخصصة للمناطق ، والسيولة المتزايدة ، وغيرها من الميزات الجديدة عناصر أساسية في خريطة الطريق لمنصة التداول المبتكرة هذه.</p></Article> 
           </Grid>
           <Empty>
                <IconColumnLeft to="r8" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r6" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R1;