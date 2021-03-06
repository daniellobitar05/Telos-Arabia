import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Qudo from "../images/eco/qudo.svg";
import zepta from "../images/zepta.png";
import dstor from "../images/eco/dstor.svg";
import appics from "../images/eco/appics.svg";
import sesa from "../images/eco/sesa2.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 260vh;
    }
`;

const HeaderText = styled(motion.div)`
    width: 100%;
    height: 15vh;
    text-align: center;
    font-size: 24px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        font-size: 24px;
        height: 15vh;
    }
`;

const Title = styled(motion.div)`
    width: 80%;
    height: 10vh;
    text-align: center;
    color: white;
    font-size: 48px;
    direction: rtl;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        font-size: 38px;
        line-height: 45px;
        width: 90%;
        height: 15vh;
    }
`;

const Wrapper = styled.div`
    width: 90%;
    height: 65vh;
    @media screen and (max-width: 768px){
        
        height: 215vh;
    }
`;

const ColumnLeft = styled(motion.div)`
    width: 50%;
    height: 65vh;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 125vh;
        justify-content: center;
        align-items: center;
        
    }
    
    
`;

const ColumnRight = styled(motion.div)`
    width: 50%;
    height: 65vh;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 90vh;
        
    }
    
`;

const BoxTitle = styled.div`
    height: 20%;
    width: 100%;
    color: aqua;
    font-size: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    direction: rtl;
    @media screen and (max-width: 768px){
        font-size: 24px;
        height: 20vh;
    }
    
`;

const BoxTitleRight = styled.div`
    height: 15vh;
    width: 100%;
    color: aqua;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    direction: rtl;
    line-height: 35px;
    @media screen and (max-width: 768px){
        font-size: 24px;
        height: 40vh;
        
    }
    
`;


const Subtitle = styled.div`
    width: 90%;
    height: 80%;
    text-align: center;
    font-size: 22px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    direction: rtl;
    line-height: 35px;
    span{
        margin: 0 8px;
        font-size: 18px;
    }
    a{
        text-decoration: none;
        color: aqua;
        font-size: 18px;
        margin: 0 5px;
    }
    @media screen and (max-width: 768px){
        font-size: 22px;
        width: 95%;
        text-align: center;
        line-height: 30px;
        height: 80vh;
        
    }
`;

const SubtitleRight = styled.div`
    width: 90%;
    height: 30vh;
    text-align: center;
    font-size: 22px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    direction: rtl;
    line-height: 30px;
    span{
        margin: 0 8px;
        font-size: 18px;
    }
    a{
        text-decoration: none;
        color: aqua;
        font-size: 18px;
        margin: 0 5px;
    }
    @media screen and (max-width: 768px){
        font-size: 22px;
        width: 95%;
        text-align: center;
        height: 65vh;
    }
`;

const IconHolder = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
       
    }
`;

const IconRow = styled(motion.div)`
    width: 100%;
    height: 40%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
`;

const Icon = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        display: block;
        width: 100%;
        object-fit: cover;
        transform: scale(0.7);
    }
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    @media screen and (max-width: 768px){
        height: 10vh;
    }
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
const IconColumnRight = styled.div`
    width: 25%;
    height: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const PurposeSection = () => {

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
        <Section id="purpose" ref={ref}>
            <HeaderText animate={animation}>??????????</HeaderText>
            <Title animate={animation}>???? ???????????? ???????????? ???????????????? ?? ???????????? ???????? ?????????????? ??????????</Title>
            <Wrapper>
                <ColumnLeft animate={animationTwo}>
                <BoxTitle  ><p><t>?????????? ??????????????</t></p></BoxTitle>
                <Subtitle  ><p><t>?????????? ???? ???????? ?????????? ????</t><span>30</span><t>???????????? ?????????????? ?? ?????????? ????</t><span>50</span><t>???????????? ???????????? ???? ?????????? ?? ???????????? ???? ???????????????? ???????????????? ?? ????????????</t><span>100</span><t>???? ?????????????????? ?????????????? ???? ??????????????. ?????? ?????????? ?????????? ???????????? ???????? ????</t><span>900000</span><t>???????? ???????????? ?????? ???????????? ?? ?????????? ????</t><span>6000</span><t>?????????? ?????? ?????????????? ???????????????? ???????????????? ???????????????????? ???????????? ?? ?????????? ????</t><span>150</span><t>???????? ???? ???????? ????</t><span>180</span><t>???????? ?? ???????? ???????????????? ?????? ???????? ???????? ????</t><span>100</span><t>?????????? ???????? ?????? ?????????? ???????????????? ???? ?????????? ??????</t><span>2021,</span><t>?????? ???? ?????? ???????? ?????????? ???????? ????????????????</t><span><a href="https://zeptagram.com/" target="_blank" rel="noreferrer">Zeptagram,</a></span><t>?????????? ??????????????</t><span><a href="https://qudo.io/" target="_blank" rel="noreferrer">QUDO,</a></span><t>?????????? ?????????????? ????????????????????</t><span><a href="https://appics.com/" target="_blank" rel="noreferrer">Appics,</a></span><t>?????? ?????????????? ??????????????????</t><span>dStor</span><t>?????????? ??????????????????</t><span><a href="https://sesacash.com/" target="_blank" rel="noreferrer">Sesacash,</a></span><t>?????????? ?????????? ????</t><span>dApps</span><t>?????? ?????????? ?????????? ??????.</t></p></Subtitle>
                </ColumnLeft>
                <ColumnRight animate={animationTwo}>
                <BoxTitleRight ><p><t>???????? ???? ???????????? ???????? ???????????? ?????????? ?????????? ?????????????????? ?????????????????? ?????????????????? ???????????? ?????????????? ??????????????</t></p></BoxTitleRight>
                <SubtitleRight ><p><t>???????? ???????? ?????????? ???????????? ???????????? ?????? ??????</t><span>3.0</span><t>?????? ?????? ?????????? ???????????? ???????????????? ???? ??????</t><span>2018.</span><t>?????? ?????? ?????????????? ???????? ??????????</t><span>ICO</span><t>????</t><span>VC</span><t>???????????? ???????????? ???????????? ???? ???????????? ????????. ???????? ???????? ?????????????? ???????????? ?????????? ?????????? ?? ???????? ???????????? ???????????? ???? ?????????? ??????????</t><span>Decide</span><t>???????????? ?? ?????? ?????????? ?????????? ???????????? ??????????????. ?????????? ???? ???????? ???????????? ?? ?????? ?????????? ???? ?????? ?????????? ?????????????? ???????????????? ???????????????? ???? ?????????? ??????????????.</t></p></SubtitleRight>
                <IconHolder>
                    <IconRow >
                        <Icon><img src={Qudo} alt="icon1" /></Icon>
                        <Icon><img src={zepta} alt="zepta" style={{transform: 'scale(0.3)'}}/></Icon>
                        <Icon><img src={dstor} alt="dstor" /></Icon>
                    </IconRow>
                    <IconRow >
                        <Icon><img src={appics} alt="appics" style={{transform: 'scale(0.5)'}}/></Icon>
                        <Icon><img src={sesa} alt="sesa" /></Icon>
                    </IconRow>
                </IconHolder>
                </ColumnRight>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="chart" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></IconColumnLeft>
                <IconColumnRight ><IconButton onClick={toggleHome}><ArrowUp /></IconButton></IconColumnRight>
            </Empty>
        </Section>
    );
}

export default PurposeSection;