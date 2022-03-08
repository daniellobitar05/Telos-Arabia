import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Graph from "../images/evmgraph.png";


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



const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    float: left;
`;

const Title = styled.div`
    width: 100%;
    height: 30%;
    text-align: right;
    color: white;
    font-size: 52px;
    display: flex;
    align-items: center;
`;

const Subtitle = styled.div`
    width: 90%;
    height: 35%;
    color: white;
    font-size: 18px;
    display: flex;
    text-align: right;
    //transform: translate(-10%, 0);
    
`;

const ColumnTitle = styled.div`
    width: 100%;
    height: 20%;
    color: white;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const EVMChartSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="evmchart">
            <Wrapper>
                <ColumnLeft>
                    <ColumnTitle>Cumulative Extracted MEV</ColumnTitle>
                    <ImageWrapper>
                    <img src={Graph} alt="" />
                    </ImageWrapper>
                </ColumnLeft>
                <ColumnRight>
                    <Title>How Telos EVM Outruns Front-Running</Title>
                    <Subtitle>Telos is a third generation blockchain that is extremely fast, creating two new blocks every second. This leaves little time for bots to scan the mempool for valuable trades. Furthermore, a fixed-rate gas fee on Telos EVM transactions means that no one can jump ahead of another person by offering a higher fee.</Subtitle>
                    <Subtitle>Most important of all, Telos is a blockchain that’s governed by its community, with clear rules of what its validators are allowed to do and the penalties for breaking these rules. On Telos, all block producers must process transactions on a first-in, first-out basis, as they receive them. They cannot reorder transactions for profits. Together, these factors provide strong protection from any front-running on Telos EVM.</Subtitle>
                </ColumnRight>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="micro" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="nofront" smooth={true} duration={1500} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMChartSection;