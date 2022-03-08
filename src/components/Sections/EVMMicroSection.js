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

import Image from "../images/evm1.png";

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
    height: 90vh;
    width: 100%;
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    
`;

const ColumnRight = styled.div`
    width:50%;
    height: 100%;
    float: left;
    img{
        transform: scale(1.5) translate(40%, 40%);
    }
`;

const Title = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;
    font-size: 62px;
    padding: 10px 30px;
    text-align: right;
`;

const Subtitle = styled.div`
    width: 80%;
    height: 60%;
    color: white;
    font-size: 24px;
    display: flex;
    padding: 10px 30px;
    transform: translate(15%, 0);
`;



const EVMMicroSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="micro">
            <Wrapper>
                <ColumnLeft>
                    <Title>Global Micro Transaction DeFi</Title>
                    <Subtitle>The low transaction costs and fixed gas fees of Telos EVM will revolutionize the landscape of the DeFi industry. The scalable nature means that users from around the world will be able to transact amounts as little as $1 and still see profit. A practice that’s impossible on other EVMs due to their fluctuating gas fees and high transaction costs.</Subtitle>
                </ColumnLeft>
                <ColumnRight>
                    <img src={Image} alt="" />
                </ColumnRight>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="evmlatest" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="evmchart" smooth={true} duration={1500} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}


export default EVMMicroSection;