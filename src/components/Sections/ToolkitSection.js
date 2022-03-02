import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddLinkIcon from '@mui/icons-material/AddLink';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
       
       
    }

`;

const Title = styled.div`
    font-size: 72px;
    width: 100%;
    color: ${props => props.theme.text};  
    height: 15vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    
    
`;

const Subtitle = styled.div`
    font-size: 18px;
    width: 25%;
    color: ${props => props.theme.text};
    text-align: center; 
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 60vh;
    
`;



const EmptyColumn = styled.div`
    width: 20%;
    height: 100%;
    
    float: left;
`;

const Column = styled.div`
    width: 30%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const Box = styled(motion.a)`
    width: 60%;
    height: 90%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover{
        background: rgb(230,230,250,0.2);
    }
`;

const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
    span {
        display: flex;
        height: 75px;
        width: 75px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        
        color: white;
        
    }
`;

const BottomCard = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 60%; 
`;

const CardTitle = styled.div`
    color: white;
    font-size: 24px;
    text-align: center;
    height: 40%;
`;

const CardSubtitle = styled.div`
    color: white;
    font-size: 18px;
    text-align: center;
    height: 60%;
    width: 80%;
`;

const UploadIcon = styled(UploadFileIcon)`
    color: white;
    transform: scale(2);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const APIIcon = styled(AddLinkIcon)`
    color: white;
    transform: scale(2);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const ArrowWrapper = styled.div`
    height: 10vh;
    
    width: 100%;
    display: flex;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
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

const HideColumn = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    
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



const ToolkitSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="toolkit">
            <Title>Developer toolkit</Title>
            <Subtitle>Review the below documentation and reference materials to get started</Subtitle>
            <Wrapper>
                <EmptyColumn></EmptyColumn>
                <Column>
                    <Box whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><APIIcon /></span></TopCard>
                        <BottomCard>
                            <CardTitle>API References</CardTitle>
                            <CardSubtitle>Consult our documentation for Telos/EOSIO APIs and SDKs</CardSubtitle>
                        </BottomCard>
                    </Box>
                </Column>
                <Column>
                 <Box whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href="https://studio.telos.net/" target="_blank" rel="noreferrer">
                    <TopCard><span><UploadIcon /></span></TopCard>
                    <BottomCard>
                        <CardTitle>Telos Studio IDE</CardTitle>
                        <CardSubtitle>Deploy contracts without any setup time using Telos Studio IDE</CardSubtitle>
                    </BottomCard> 
                 </Box>
                </Column>
                <EmptyColumn></EmptyColumn>
            </Wrapper>
            <ArrowWrapper>
                <IconColumnLeft>
                <LinkS to="joindev" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumnLeft>
                <HideColumn></HideColumn>
                <IconColumnRight to="devstack" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </ArrowWrapper>
        </Section>
    );
}

export default ToolkitSection;