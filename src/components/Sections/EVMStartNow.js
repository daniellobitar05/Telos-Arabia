


import styled, {keyframes} from "styled-components";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Ball1 from "../images/telos_ball1.png";
import Ball2 from "../images/telos_ball2.png";
import Ball3 from "../images/telos_ball3.png";
import Ball4 from "../images/telos_ball4.png";
import EVM1 from "../images/evm1.png";
import EVM2 from "../images/evm2.png";
import EVM3 from "../images/evm3.png";
import EVM4 from "../images/evm4.png";
import Back1 from "../images/back1.jpeg";

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



const Grid = styled.div`
    width: 90%;
    height: 90vh;
    display: flex;
    
`;

const Column = styled.div`
    width: 50%;
    height: 90vh;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Image = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 95%;
        height: 95%;
        object-fit: contain;
    }
`;

const WalletImage = styled.div`
   width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 90%;
        height: 90%;
        object-fit: contain;
    } 
`;

const Text = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    color: white;
    font-size: 32px;
`;

const Subtitle = styled(motion.a)`
    width: 80%;
    height: 40%;
    color: white;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 18px;
`;

const Pulse = {
    start: {
        scale: 0.75
    },
    end: {
        scale: 0.80,
        transition: {
            duration: 1, 
            yoyo: "Infinity"
        }
    }
}

const EVMStartNowTwo = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="startnow">
            <Grid>
                <Column>
                    <Box>
                        <Image><motion.img variants={Pulse} initial="start" animate="end" whileHover={{rotate: 10, scale: 0.85}} transition={{duration: 0.3, type: 'tween'}}  src={EVM3} alt="" /></Image>
                        <Text>DEVELOPER CHAT</Text>
                        <Subtitle href="https://t.me/TelosEVMDevs" target="_blank" rel="noreferrer">Join a community of dedicated developers, passionate about building on the Telos EVM.</Subtitle>
                    </Box>
                </Column>
                <Column>
                    <Box>
                    <WalletImage><motion.img variants={Pulse} initial="start" animate="end" whileHover={{rotate: 10, scale: 0.85}} transition={{duration: 0.3, type: 'tween'}} src={Ball3} alt="" /></WalletImage>
                        <Text>TELOS WEB WALLET</Text>
                        <Subtitle href="https://wallet.telos.net/" target="_blank" rel="noreferrer">Bridge your Tlos seamlessly and for free between Native Telos and EVM.</Subtitle>
                    </Box>
                </Column>
            </Grid>
            <Empty>
                <IconColumnLeft to="startnowtwo" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="evmcards" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMStartNowTwo;