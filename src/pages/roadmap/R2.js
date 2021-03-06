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
    background: ${props => props.theme.back3};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 160vh;
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
        height: 150vh;
    }
`;


const Article = styled(motion.div)`
    width: 80vw;
    font-size: 32px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 40px;
    direction: rtl;
    z-index: 100;
    height: 20vh;
    @media screen and (max-width: 768px) {
        height: 55vh;
        font-size: 24px;
        width: 80%;
        padding: 0;
    }
    span{
        margin: 0 8px;
        font-size: 28px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 8px;
        }
    }
    
`;

const SmallArticle = styled(motion.div)`
    width: 80vw;
    font-size: 32px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 40px;
    direction: rtl;
    z-index: 100;
    height: 20vh;
    @media screen and (max-width: 768px) {
        height: 20vh;
    }
    span{
        margin: 0 8px;
        font-size: 28px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 8px;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        padding: 0;
    }
`;

const Bigtitle = styled(motion.div)`
    height: 10vh;
    width: 80%;
    font-size: 62px;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    z-index: 100;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px) {
        height: 20vh;
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
        <Section id="r2" ref={ref}>
            
           <Grid>
                <Article animate={animationTwo}>?????? ???????? ?????? ???? ?????????? ???? ?????????? ????????????! ???????????? ???????????? ???? ???????????? ?????? ???????? ???????? ????????. ?????? ???????????????? ???? ???????????? ?????? ?????? ???????? ?????? ???????????? ???? ?????? ???????????? ???????? ?????????? ????????????. ???????????? ?????? ?????????????????? ?????????????????? ???????????? ???? ?????????? ???????????????? ?????? ?????? ?????????????? ?????? ?????? ???????????????? ?????????????? ???? ??????????</Article>
                <SmallArticle animate={animationTwo}>?????????? ?????????? ???? ?????????? ???????? ?????????? ??????????????! ???????? ???????? ???????????? ?? ???????? ???????? ??????????</SmallArticle>
                <Bigtitle animate={animation}>????????????</Bigtitle>
                <Article animate={animationTwo}><p>?????????? ?????? <span>Telos Core Team</span> ?????? ?????? ???????? ???????? ?????? ?????????? <span>Telos EVM.</span> ???????? ???? ???????????????? ???????????????????? ???????? ?????? ?????????????? ???????????? ???????? ???????? <span>Telos</span> ????????????. ???????????? ???? ?????? ?????????????? ???????????? ???????????? ?????????????????? ?? ???? ???????? ???????????? ???????????? ?????????? ?????????? ?????? ???????? ??????????.</p></Article>
           </Grid>
           <Empty>
                <IconColumnLeft to="r3" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r1" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R1;