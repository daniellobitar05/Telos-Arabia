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
    background: ${props => props.theme.back9};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
`;

const ColumnLeft = styled(motion.div)`
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

const Title = styled(motion.div)`
    width: 100%;
    height: 30%;
    text-align: right;
    color: white;
    font-size: 52px;
    display: flex;
    align-items: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const Subtitle = styled(motion.div)`
    width: 90%;
    height: 35%;
    color: white;
    font-size: 18px;
    display: flex;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
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
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
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

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animationThree = useAnimation();
    const animationTwo = useAnimation();
    const animationFour = useAnimation();

    useEffect(() => {
        if(inView){
            animationThree.start({
                x: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animationThree.start({
                x: '100vw',
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationFour.start({
                x: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animationFour.start({
                x: '-100vw',
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
                opacity: 0, y: '40px',
            })
        }
        
    }, [inView])

    return(
        <Section id="evmchart" ref={ref}>
            <Wrapper>
                <ColumnLeft animate={animationFour}>
                    <ColumnTitle >Cumulative Extracted MEV</ColumnTitle>
                    <ImageWrapper>
                    <img src={Graph} alt="" />
                    </ImageWrapper>
                </ColumnLeft>
                <ColumnRight>
                    <Title animate={animationThree}>How Telos EVM Outruns Front-Running</Title>
                    <Subtitle animate={animationTwo}>Telos is a third generation blockchain that is extremely fast, creating two new blocks every second. This leaves little time for bots to scan the mempool for valuable trades. Furthermore, a fixed-rate gas fee on Telos EVM transactions means that no one can jump ahead of another person by offering a higher fee.</Subtitle>
                    <Subtitle animate={animationTwo}>Most important of all, Telos is a blockchain that’s governed by its community, with clear rules of what its validators are allowed to do and the penalties for breaking these rules. On Telos, all block producers must process transactions on a first-in, first-out basis, as they receive them. They cannot reorder transactions for profits. Together, these factors provide strong protection from any front-running on Telos EVM.</Subtitle>
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