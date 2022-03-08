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

import sushi from "../images/evm/sushi.jfif";
import punks from "../images/evm/punks.jfif";


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
`;

const Title = styled.div`
    width: 100%;
    height: 20vh;
    background: black;
    color: white;
    font-size: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonWrapper = styled.div`
    height: 10vh;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled(motion.div)`
    border: 1px solid #ba55d3;
    color: lightblue;
    font-size: 16px;
    padding: 10px 15px;
    display: flex;
    background: transparent;
    width: 150px;
    font-weight: bold;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        background: linear-gradient(90deg, rgba(195,93,232,1) 0%, rgba(69,43,161,1) 63%, rgba(4,22,134,1) 100%);
    }
`;

const Grid = styled.div`
    width: 90%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Column = styled.div`
    width: 30%;
    height: 90%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImageHolder = styled.div`
    width: 100%;
    height: 50%;
    background: orange;
    img{
        width: 100%;
    }
`;

const TextHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    height: 50%;
    font-size: 24px;
`;

const EVMLatest = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="evmlatest">
            <Title>Latest on Telos EVM</Title>
            <ButtonWrapper>
            <LinkR to="/News"><Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>SHOW ALL NEWS</Button></LinkR>
            </ButtonWrapper>
            <Grid>
                <Column>
                    <ImageHolder><img src={sushi} alt="" /></ImageHolder>
                    <TextHolder>SushiSwap partners with Telos and launches on the Telos EVM</TextHolder>
                </Column>
                <Column>
                    <ImageHolder><img src={punks} alt="" /></ImageHolder>
                    <TextHolder>Telos Punks Comes to the EVM</TextHolder>
                </Column>
                <Column>
                    <ImageHolder><img src={punks} alt="" /></ImageHolder>
                    <TextHolder>Telos Punks Comes to the EVM</TextHolder>
                </Column>
            </Grid>
            <Empty>
                <IconColumnLeft to="" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="micro" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMLatest;