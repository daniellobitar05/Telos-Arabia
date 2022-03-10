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

import TickBack from "../SVG/telos_logo.svg"; 

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
`;

const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`;

const ColumnLeft = styled.div`
    width: 45%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ColumnRight = styled.div`
    width: 45%;
    height: 100%;
    float: left;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 58px;
    width: 100%;
    height: 20%;
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 18px;
    width: 80%;
    height: 30%;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;


const SupplySection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="supply">
            <Grid>
                <ColumnLeft>
                    <Title>TLOS Total Supply</Title>
                    <Subtitle>TLOS has a current total supply of TLOS at 355 million. This means there are far less tokens available (supply) when compared to other blockchains.</Subtitle>
                    <Subtitle>The current rate of inflation to total supply is 0%, which could rise to 1% in the future to account for payments to block producers. Currently, block producers and other important entities are paid by the network's reserve funds, as voted on by token holders.</Subtitle>
                </ColumnLeft>
                <ColumnRight></ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="depthlook" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="highlights" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default SupplySection;