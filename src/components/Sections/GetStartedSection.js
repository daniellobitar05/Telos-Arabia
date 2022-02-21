import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';
import Wombat from "../images/wombat_logo.png";
import Anchor from "../images/anchor_logo.png";
import Meta from "../images/metamask_logo.png";
import Native from "../images/telos_logo.png";
import DEX from "../SVG/DEX.svg";
import CEX from "../SVG/CEX.svg";

import Tick from "../SVG/tick.svg"

const Section = styled.div`
    width: 100%;
    height: 240vh;
    background: black;
    display: flex;
    background: white;
    @media screen and (max-width: 660px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 500vh;
    }
`;

const MainTitle = styled.div`
    color: ${props => props.theme.text};
    font-size: 52px;
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 100%;
    float: left;
    align-self: center;
    background: purple;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 250vh;
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 100%;
    float: left;
    align-self: center;
    background: purple;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 250vh;
    }
`;

const EmptyColumn = styled.div`
    width: 10%;
    background: purple;
    height: 100%;
    float: left;
    @media screen and (max-width: 660px){
        display: none;
    }
    
`;

const ColumnTitle = styled.div`
    font-size: 18px;
    padding: 40px 0;
    color: ${props => props.theme.text};
    text-align: center;
    

`;

const Box = styled.div`
    height: 200px;
    width: 70%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    background: indigo;
    margin-bottom: 40px;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    @media screen and (max-width: 660px){
        width: 90%;
        height: 170px;

        
    }
`;

const BigTitle = styled.div`
    font-size: 24px;
    color: ${props => props.theme.text};
    padding-bottom: 30px;
    font-weight: bold;
    span{
        font-weight: bold;
    }
`;

const InnerTitle = styled.div`
    font-size: 22px;
    color: ${props => props.theme.text};
    font-weight: bold;
    padding: 30px 30px;
`;

const InnerSubtititle = styled.div`
    font-size: 18px;
    color: ${props => props.theme.text};
    padding: 10px 50px;
    text-align: center;
    a{
        color: aqua;
    }
`;

const MiniColumn = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    @media screen and (max-width: 660px){
        img{
            width: 75px;
            height: 75px;
        }
    }
`;

const BoxTitle = styled.div`
    display: flex;
    font-size: 16px;
    padding: 5px 0;
    color: white;
`;

const TitledBox = styled.div`
    margin-top: 20px;
    height: 240px;
    width: 70%;
    background: red;
    display: grid;
    align-items: center;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    border-radius: 20px;
    background: indigo;
    margin-bottom: 20px;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    @media screen and (max-width: 660px){
        width: 90%;
        height: 240px;
    }
    

`;

const BoxLine = styled.div`
    font-size: 14px;
    color: ${props => props.theme.text};
    width: 100%;
    line-height: 5px;
    margin-left: 10px;
    align-items: center;
    
    display: inline-flex;
    
    span{
        font-weight: bold;
    }
    @media screen and (max-width: 660px){
        font-size: 12px;
        
    }
    
`;

const CopyIcon = styled(ContentCopyIcon)`
    color: aqua;
    cursor: pointer;

`;

const Hidden = styled.div`
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    span{
        color: aqua;
        font-size: 15px;
        margin-left: 10px;
    }
`;

const SingleIcon = styled.div`
    display: flex;
    height: 100px;
    width: 35%;
    margin-top: 30px;
    img{
        margin: auto;
    }
    
`;

const IconHolder = styled.div`
    display: inline-flex;
    justify-content: space-evenly;
    height: 200px;
    width: 90%;
    margin-top: 30px;
    
`;

const Icon = styled(motion.div)`
    background: indigo;
    display: flex;
    margin: auto;
    height: 100px;
    width: 100px;
    border-radius: 40px;
    cursor: pointer;
    
    img{
        width: 80%;
        height: 80%;
        margin: auto;
        
    }
`;

const IconColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const GetStartedSection = () => {

    const [copied, setCopied] = useState(false);
    
    const CopyAddress = () => {
        navigator.clipboard.writeText('https://mainnet.telos.net/evm');
        setCopied(true);
    }

    const CopyChain = () => {
        navigator.clipboard.writeText('Telos EVM Mainnet');
        setCopied(true);
    }

    const CopyChainID = () => {
        navigator.clipboard.writeText('40');
        setCopied(true);
    }

    const CopySymbol = () => {
        navigator.clipboard.writeText('TLOS');
        setCopied(true);
    }

    const CopyExplorer = () => {
        navigator.clipboard.writeText('https://teloscan.io');
        setCopied(true);
    }

    useEffect(() => {
        setTimeout(() => {
            if(copied) setCopied(false)
        }, 1500)
    }, [copied])

  return (
    <Section>
        <EmptyColumn />
        <ColumnLeft>
            <ColumnTitle >TELOS NATIVE</ColumnTitle>
            <BigTitle>Choose a signer</BigTitle>
            <Box>
                <MiniColumn><img src={Wombat} alt="" /><BoxTitle>Wombat</BoxTitle></MiniColumn>
                <MiniColumn>
                    <img src={Anchor} alt="" />
                    <BoxTitle>Anchor</BoxTitle>
                    <BoxTitle>RECOMMENDED</BoxTitle>
                </MiniColumn>
            </Box>
            <InnerSubtititle style={{lineHeight: '25px'}}>To use Anchor you will need to <a href="https://www.telos.net/signup" target="_blank" rel="noreferrer">create a free account</a> first. You can import the account using its Private Key in Setup Account » Import » Private Key</InnerSubtititle>
            <InnerTitle >Send TLOS to your account</InnerTitle>
            <InnerSubtititle style={{marginTop: '30px', padding: '0 80px'}}>Follow our guides to send TLOS to your new Telos Native account</InnerSubtititle>
            <IconHolder>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                whileTap={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}>
                <img src={CEX} alt="cex" />
                </Icon>
                <InnerSubtititle>Send from CEX exchange</InnerSubtititle>
                </IconColumn>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, -360, -360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                whileTap={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}>
                <img src={DEX} alt="dex" />
                </Icon>
                <InnerSubtititle>Send from DEX exchange</InnerSubtititle>
                </IconColumn>
            </IconHolder>
        </ColumnLeft>
        <ColumnRight>
            <ColumnTitle >TELOS EVM</ColumnTitle>
            <BigTitle>Install MetaMask</BigTitle>
            <Box>
                <motion.img src={Meta} alt="" drag dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50,}} whileTap={{cursor: 'grabbing'}} style={{width: '150px', height: '150px', cursor: 'grab'}}/> 
            </Box>
            <InnerTitle>Import the Telos EVM RPC</InnerTitle>
            <InnerSubtititle >Import the following RPC into Metamask or any custom RPC wallet to create an account</InnerSubtititle>
            <Hidden>
            {copied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="green"/>
                            <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg><span>Copied!!!</span></>}
            </Hidden>
            <TitledBox>
                <BoxLine><IconButton onClick={CopyAddress}><CopyIcon /></IconButton><span>RPC URL:</span><p >https://mainnet.telos.net/evm</p></BoxLine>
                <BoxLine><IconButton onClick={CopyChain}><CopyIcon /></IconButton><span>Chain name:</span><p >Telos EVM Mainnet</p></BoxLine>
                <BoxLine><IconButton onClick={CopyChainID}><CopyIcon /></IconButton><span>Chain ID:</span><p>40</p></BoxLine>
                <BoxLine><IconButton onClick={CopySymbol}><CopyIcon /></IconButton><span>Symbol:</span><p >TLOS</p></BoxLine>
                <BoxLine><IconButton onClick={CopyExplorer}><CopyIcon /></IconButton><span>Block Explorer URL:</span><p >https://teloscan.io</p></BoxLine>
            </TitledBox>
            <InnerSubtititle >You can also use <a href="https://chainlist.org/" target="_blank" rel="noreferrer">Chainlist</a> (search Telos)</InnerSubtititle>
            <InnerTitle >Send TLOS to your account</InnerTitle>
            <InnerSubtititle style={{marginTop: '30px', padding: '0 80px'}}>Follow our guides to send TLOS to your new Telos EVM account</InnerSubtititle>
            <SingleIcon>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, -360, -360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                whileTap={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}>
                    <img src={Native} alt="logo" />
                </Icon>
            </SingleIcon>
            <InnerSubtititle>Send from Telos Native</InnerSubtititle>
            <IconHolder>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                whileTap={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}>
                <img src={CEX} alt="cex" />
                </Icon>
                <InnerSubtititle>Send from CEX exchange</InnerSubtititle>
                </IconColumn>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, -360, -360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                whileTap={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}>
                <img src={DEX} alt="dex" />
                </Icon>
                <InnerSubtititle>Send from DEX exchange</InnerSubtititle>
                </IconColumn>
            </IconHolder>
        </ColumnRight>
        <EmptyColumn />
    </Section>
  )
}

export default GetStartedSection