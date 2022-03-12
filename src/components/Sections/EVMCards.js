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
import NoFront from "../SVG/nofront.svg";
import Micro from "../images/evm/micro.svg";
import Fast from "../SVG/fast.svg";
import Friendly from "../images/evm/friendly.svg";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back4};
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        height: 220vh;

    }
`;

const Title = styled.div`
    width: 100%;
    height: 20vh;
    background: transparent;
`;


const Grid = styled.div`
    display: flex;
    height: 70vh;
    width: 90vw;
    z-index: 20;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 200vh;
    }
   
`;

const Expand = keyframes`
    0% {height: 0vh; border-radius: 0}
    100%{ height: 30vh; border-radius: 20px 20px 0 0}
`;

const Opacity = keyframes`
    0% { opacity: 0}
    
    100% {opacity: 1;}
`;

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    width: 25%;
    float: left;
    height: 70vh;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 50vh;
    }
`;

const Column = styled(LinkS)`
    width: 95%;
    border: 2px solid indigo;
    max-height: 100vh;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
    
    &:hover{
        .expand{
            height: 30vh;
            border-radius: 20px 20px 0 0;
            animation: ${Expand};
            animation-duration: 1s;
            
            h1 {
                display: block;
                animation: ${Opacity};
                animation-duration: 1s;
            }
            
        }
        h2{
            transform: scale(1.2);
            transition: 0.8s;
        }

        .content {
            transform: scale(1);
            transition: 0.8s;
            
        }
        .box{
            //background: rgba(0, 0, 0, 0.8);
            //transition: 1.2s;
        }
    }
`;

const Top = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`;

const Image = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        transform: scale(2);
    }
`;



const Resize = styled.div`
    height: 0;
    max-height: 30vh;
    width: 100%;
    background: purple;
    text-align: right;
    span{
       cursor: pointer;
       &:hover{
           filter: brightness(1.5);
       }
    }
`;

const Text = styled.h1`
    font-size: 18px;
    color: white;
    display: none;
    z-index: -1;
    padding: 10px;
    p {
        line-height: 10px;
    }
    span{
        padding: 0;
    }
`;

const InnerText = styled.h2`
    font-size: 12px;
    color: aqua;
    height: 30%;
    transform: scale(1.6) translate(0, 25%);
    
`;

const InnerRow = styled.div`
    width: 100%;
    height: 20vh;
    background: rgba(51,6,138,1);
    z-index: 20;
    @media screen and (max-width: 768px){
        margin-bottom: 30px;
    }
`;



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

const IconColumnLeft = styled(LinkS)`
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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


const EVMCards = () => {

    const {ref, inView} = useInView();

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                scale: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                scale: 0.5,
            })
        }
        
    }, [inView])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="evmcards">
            <Title></Title>
         <Grid ref={ref}>
             <Wrapper animate={animation}>
             <Column >
                <Top className="box">  
                    <Image><img src={Friendly} alt="" className="content"/></Image>
                    <InnerText>ESG COMPLIANCE</InnerText>
                 </Top>
                 <Resize className="expand">
                 <LinkR to="/ESG"><Text>Telos is the leading blockchain solution for environmental, social and governance concerns. <p><span> LEARN MORE</span></p></Text></LinkR> 
                </Resize>
             </Column>
             <InnerRow></InnerRow>
             </Wrapper>
             <Wrapper animate={animation}>
             <Column to="evmgraph" smooth={true} duration={1000} spy={true} exact="true">
                <Top>  
                    <Image><img src={Fast} alt="" className="content"/></Image>
                    <InnerText>SPEED & SCALABILITY</InnerText>
                 </Top>
                 <Resize className="expand">
                    <Text>Telos EVM is the most performant and scalable layer 1 EVM, featuring 10.000 TPS & 0.5s blocktimes <p><span> LEARN MORE</span></p></Text>     
                </Resize>
             </Column>
             <InnerRow></InnerRow>
             </Wrapper>
             <Wrapper animate={animation}>
             <Column to="micro" smooth={true} duration={1000} spy={true} exact="true">
                <Top>  
                    <Image><img src={Micro} alt="" className="content"/></Image>
                    <InnerText>MICRO TRANSACTION DEFI</InnerText>
                 </Top>
                 <Resize className="expand">
                    <Text>Thanks to the scalable nature of Telos EVM, users can transact as little as $1 and still see profits <p><span> LEARN MORE</span></p></Text>     
                </Resize>
             </Column>
             <InnerRow></InnerRow>
             </Wrapper>
             <Wrapper animate={animation}>
             <Column to="nofront" smooth={true} duration={1000} spy={true} exact="true">
                <Top>  
                    <Image><img src={NoFront} alt="" className="content"/></Image>
                    <InnerText>NO FRONT RUNNING</InnerText>
                 </Top>
                 <Resize className="expand">
                    <Text>Telos EVM offers a sustainable solution to the million of dollars stolen from traders every month on other EVMs. <p><span> LEARN MORE</span></p></Text>     
                </Resize>
             </Column>
             <InnerRow></InnerRow>
             </Wrapper>
        </Grid>
        <Empty>
                <IconColumnLeft to="startnow" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="evmwhatis" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default EVMCards;