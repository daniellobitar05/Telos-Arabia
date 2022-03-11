import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Ball1 from "../images/telos_ball1.png";

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${Ball1}), ${props => props.theme.back10};
    background-repeat: no-repeat;
    background-size: contain;
    
    @media screen and (max-width: 768px){
        
    }
`;

const Title = styled.div`
    width: 60%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const Subtitle = styled.div`
    font-size: 18px;
    width: 100%;
    color: ${props => props.theme.text};
    text-align: center; 
    float: left;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        width: 90%;
        height: 20vh;
    }
`;

const Grid = styled.div`
    display: flex;
    width: 90%;
    height: 70vh;
`;

const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    width: 70%;
    height: 100%;
    text-align: right;
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100%;
    text-align: right;
`;


const Social = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="social">
            <Title>Social</Title>
            <Grid>
                <ColumnLeft> </ColumnLeft>
                <ColumnRight>
                    <Subtitle>Both environmental and governance aspects feed into the socially conscious narratives that surround the Telos network. Many popular blockchains have been described as plutocracies. The criticism is largely due to centralized/elite control, high participation fees, exclusive governance practices and a slew of other barriers to entry. This has resulted is numerous ecosystems that cater to early adopters, making it difficult for socially conscious initiatives to thrive.</Subtitle>
                    <Subtitle>However, Telos is on a mission to keep the network and its resources as accessible as possible to any user. The Telos Resource Exchange and Telos Worker Proposal System are both examples of tools that developers can utilize to receive the resources needed to pursue any task. Additionally, The Telos Foundation is a body of individuals that are voted in and funded by the network to support developing projects.  </Subtitle>
                    <Subtitle>All of this creates an equitable ecosystem that allows socially conscious initiatives to thrive in a way that would be impossible on any other blockchain.</Subtitle>
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="lips" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="additional" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default Social;