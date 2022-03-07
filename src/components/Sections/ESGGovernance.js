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

import Ball1 from "../images/telos_ball4.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${Ball1});
    background-repeat: no-repeat;
    background-size: 1200px 1200px;
    background-position: -300px -300px;
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

`;

const EmptyColumn = styled.div`
   width: 50%;
   height: 100%;
   float: left; 
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

const ESGGovernance = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="governance">
            <Title>Governance</Title>
            <Grid>
                <ColumnLeft> </ColumnLeft>
                <ColumnRight>
                    <Subtitle>When Douglas Horn wrote The Telos Whitepaper in 2018, governance was the primary issue that Telos sought to solve. This is because the Telos blockchain operates on a protocol known as Delegated Proof of Stake (DPoS). Without getting into the technical weeds, DPoS gives community members the power to vote for validators that they believe have a vested interest in the network.</Subtitle>
                    <Subtitle>Strong governance is integral for this protocol to succeed, and Telos has proven this with flying colors. Beyond voting on validators, this governance model can be found in every other area of the network’s operations, from funding proposals through Telos Works to protocol and governance amendments via Telos Amend. You can even see this in committee elections and community polls.</Subtitle>
                    <Subtitle>This is thanks to Telos Decide, a powerful governance engine that exceeds the capabilities of all other major blockchains. Community members have used Telos Decide to vote on changes in legislature, grant funds to community initiatives, modify network economics and much more.</Subtitle>
                    <Subtitle>The equitable nature of the tool ensures that all changes represent stakeholder sentiment in a truly democratic yet decentralized fashion. This tool is available to any developers who want to utilize it in their own projects, making honest governance easier to implement than ever before.</Subtitle>
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="quotes" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGGovernance;