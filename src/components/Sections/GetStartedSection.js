import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';
import Wombat from "../images/wombat_logo.png";
import Anchor from "../images/anchor_logo.png";
import Meta from "../images/metamask_logo.png";

import Tick from "../SVG/tick.svg"

const Section = styled.div`
    width: 100%;
    height: 200vh;
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
    background: ${props => props.theme.body};
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
    background: ${props => props.theme.body};
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
    background: #666666;
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
    padding: 20px 80px;
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
    height: 200px;
    width: 70%;
    background: red;
    display: grid;
    align-items: center;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    border-radius: 20px;
    background: #666666;
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
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    span{
        color: aqua;
        font-size: 15px;
        margin-left: 10px;
    }
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
            
        </ColumnLeft>
        <ColumnRight>
            <ColumnTitle >TELOS EVM</ColumnTitle>
            <BigTitle>Install MetaMask</BigTitle>
            <Box>
                <img src={Meta} alt="" /> 
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
        </ColumnRight>
        <EmptyColumn />
    </Section>
  )
}

export default GetStartedSection