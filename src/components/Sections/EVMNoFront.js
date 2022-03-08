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

import NoFront from "../images/nofront.jpg";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
`;

const ColumnLeft = styled.div`
    width: 60%;
    height: 90vh;
    float: left;
    img{
        width: 700px;
        height: auto;
        transform: translate(10%, 20%);
        
        border-radius: 20px;
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 90vh;
    float: left;

`;

const Title = styled.div`
    width: 90%;
    height: 30%;
    text-align: right;
    color: white;
    font-size: 62px;
    display: flex;
    align-items: center;
`;

const Subtitle = styled.div`
    width: 100%;
    height: 35%;
    color: white;
    font-size: 18px;
    display: flex;
    text-align: right;
    transform: translate(-10%, 0);
    
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



const EVMNoFront = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="nofront">
            <Wrapper>
            <ColumnLeft>
               
                <motion.img src={NoFront} alt=""  whileHover={{cursor: 'grab'}} drag dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50,}} whileTap={{cursor: 'grabbing'}}/>
                
            </ColumnLeft>
            <ColumnRight>
                <Title>What is Front-Running</Title>
                <Subtitle>Front-running is an industry-wide problem, in which millions of dollars in profits are being syphoned from unsuspecting traders. It started with bots offering high gas fees to jump the line, in front of high value transactions. Today, miners are performing the front-running, by inserting their own transactions ahead of others, while paying only the minimum gas fees. This is called MEV for miner extracted value or maximum extractable value.</Subtitle>
                <Subtitle style={{transform: 'translate(-20%, 0)'}}>Now, the industry has reached a point where a system of bribes are proposed to miners to take up transactions directly. With only a handful of mining pools controlling the majority of block creation on other networks, it is not possible to avoid this system of bribe-or-be-robbed that will come to all Ethereum-based chains. Very few people talk about this massive industry problem, as no one has come up with a sustainable solution - until Telos EVM.</Subtitle>
            </ColumnRight>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="evmchart" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="evmgraph" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMNoFront;