import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled.div`
    width: 100%;
    height: 15vh;
    text-align: center;
    font-size: 16px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 80%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 48px;
`;

const Wrapper = styled.div`
    width: 90%;
    height: 55vh;
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    
    float: left;
    display: flex;
    flex-direction: column;
    
    
`;

const BoxTitle = styled.div`
    height: 30%;
    width: 100%;
    color: aqua;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
`;

const Subtitle = styled.div`
    width: 100%;
    height: 70%;
    text-align: center;
    font-size: 16px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
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
const IconColumnRight = styled.div`
    width: 25%;
    height: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const PurposeSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="purpose">
            <HeaderText>OUR PURPOSE</HeaderText>
            <Title>Power the economy of the future, ignite the highest potential of humans</Title>
            <Wrapper>
                <ColumnLeft>
                <BoxTitle style={{height: '20%'}}>A growing base</BoxTitle>
                <Subtitle style={{height: '80%'}}>Telos is home to more than 30 core developers, over 50 validator teams, dozens of innovative products, complemented by 100s of active community contributors. The broader Telos community includes more than 900,000 user accounts on the network, over 6,000 followers on our Telegram groups and other social channels, and over 150 companies from over 180 countries, Developers are working to build over 100 distributed applications on Telos as of early 2021, including the music rights-trading platform Zeptagram, gaming platform QUDO, Social media platform Appics, decentralized storage solution dStor and the payments system Sesacash. A full list of dApps on Telos is available here.</Subtitle>
                </ColumnLeft>
                <ColumnRight>
                <BoxTitle>A truly decentralized network operated by visionaries, technologists, builders, trail blazers and active stakeholders</BoxTitle>
                <Subtitle>The Telos ecosystem has been paving the way to Web 3.0 ever since the mainnet went live in 2018. Launching with no ICO or VC funding has allowed the network to grow in a truly decentralized fashion. Telos’ strong governance structure, complimented by a suite of powerful Telos Decide tools, empowers token holders. Telos is an open network, where everyone has an equal opportunity to contribute and impact to the direction of the chain.</Subtitle>
                </ColumnRight>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="chart" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></IconColumnLeft>
                <IconColumnRight ><IconButton onClick={toggleHome}><ArrowUp /></IconButton></IconColumnRight>
            </Empty>
        </Section>
    );
}

export default PurposeSection;