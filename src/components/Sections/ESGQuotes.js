import { animateScroll as scroll } from "react-scroll";
import {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back4};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Subtitle = styled.div`
    font-size: 18px;
    width: 70%;
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

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
    
    
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
   background: transparent;
`;

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
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;




const ESGQuotes = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="quotes">
            <Subtitle style={{transform: 'translate(15%, 0)'}}>O’Leary noted that any large institution has ESG compliance committees that “have covenants around how assets are made, whether carbon is burned, whether human rights are involved.”</Subtitle>
            <Subtitle style={{transform: 'translate(-15%, 0)'}}>Unfortunately, this problem will never be fully solved in the traditional blockchains, such as the Bitcoin network. This is because ESG was never a consideration in the design. However, Blockchain 3.0 has presented a unique opportunity for massive industry change and the solution to these problems is closer than many people realize.</Subtitle>
            <Subtitle style={{transform: 'translate(15%, 0)'}}>Telos launched as a grassroots network in 2018, with no ICO or venture capital funding. So, Telos founders were never concerned with developing a traditional “sales pitch” for investors or users. Instead, the network sought to solve several major issues that hindered other blockchains. Although not identified at the time, many of these problems were ESG related.</Subtitle>
            <Subtitle style={{transform: 'translate(-15%, 0)'}}>The Telos network has worked to become the most accessible, equitable and efficient blockchain on the market. During this process, the network has naturally grown to become the world’s leading example of what it means to be an ESG blockchain. Whether you look at it through the lens of environmental impact, social responsibility or governance capabilities, Telos comes out on top every time.</Subtitle>
            <Subtitle style={{transform: 'translate(15%, 0)'}}>Over the years, these characteristics have attracted over 100 projects, integrating the Telos network in a way that continues the mission of ESG initiatives. There are far too many to fit into one article, but we’ll be highlighting some relevant examples below. We encourage our community to check out the rest.</Subtitle>
            <Empty>
                <IconColumnLeft to="governance" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="todo" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}


export default ESGQuotes;