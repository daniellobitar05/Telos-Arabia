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
import {Button} from "@mui/material";

import Tick from "../SVG/tick.svg"

const Section = styled.div`
    width: 100%;
    height: 260vh;
    
    display: flex;
    
    overflow-x: hidden;
    @media screen and (max-width: 660px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 470vh;
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
        height: 220vh;
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
    @media screen and (max-width: 768px){
        display: none;
    }
    
`;

const ColumnTitle = styled.div`
    font-size: 48px;
    padding: 40px 0;
    color: ${props => props.theme.text};
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 36px;
    }
    

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
    font-size: 32px;
    color: ${props => props.theme.text};
    font-weight: bold;
    margin: 40px 0;
    @media screen and (max-width: 768px){
        font-size: 26px;
    }
`;

const InnerSubtititle = styled.div`
    font-size: 20px;
    
    color: ${props => props.theme.text};
    line-height: 12px;
    font-size: 16px;
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
        margin-left: auto;
        margin-right: 20px;
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

const SingleIcon = styled.a`
    display: flex;
    height: 200px;
    width: 35%;
    
    img{
        margin: auto;
    }
    
`;

const IconHolder = styled.div`
    display: inline-flex;
    justify-content: space-evenly;
    height: 200px;
    width: 90%;
    
    
`;

const Icon = styled(motion.a)`
    background: indigo;
    display: flex;
    margin: auto auto 30px auto;
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

const HelpTitle = styled.div`
    margin-top: 240px;
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 60px;
`;

const HelpButton = styled(Button)`
    &&&{
        z-index: 100;
        background: linear-gradient(90deg, rgba(146,16,205,1) 0%, rgba(100,42,217,1) 50%, rgba(47,230,231,1) 100%);
        font-size: 22px;
        margin: 10px;
        color: white;
        font-weight: bold;
        border: 1px solid aqua;
        border-radius: 15px;
        padding: 6px 20px;
        margin-bottom: 20px;
        @media screen and (max-width: 768px){
            font-size: 16px;
        }
    }
`;

const Image = styled(motion.img)`
    width: 200px;
    height: auto;
    position: absolute;
    z-index: 5;
`;

const imageOneVariants = {
    hidden: {
        opacity: 0.5, x: 0
    }, 
    visible: {
        opacity: 1, x: '-50px', transition: {
            duration: 1, type: 'tween'
        }
    }
}

const ImageHolder = styled.div`
    ${Image}:nth-child(1){
        z-index: 1;
        transform: translate(-250%, -100%);
    }
    ${Image}:nth-child(2){
        transform: translate(-250%, -75%);
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
            <ColumnTitle >تيلوس ناتيف</ColumnTitle>
            <BigTitle>اختر موقعا </BigTitle>
            <Box>
                <MiniColumn><img src={Wombat} alt="" /><BoxTitle>Wombat</BoxTitle></MiniColumn>
                <MiniColumn>
                    <img src={Anchor} alt="" />
                    <BoxTitle>Anchor</BoxTitle>
                    <BoxTitle>RECOMMENDED</BoxTitle>
                </MiniColumn>
            </Box>
            <InnerSubtititle >ستحتاج إلى إنشاء حساب  Anchor لاستخدام <p> يمكنك استيراد الحساب باستخدام<span></span>.مجاني أول</p><p> المفتاح الخاص<span></span>»استيراد<span></span>» مفتاحه الخاص في حساب الإعداد</p></InnerSubtititle>
            <InnerTitle > إلى حسابك TLOS أرسل </InnerTitle>
            <InnerSubtititle > <p>اتبع أدلتنا لإرسال تيلوس إلى حساب تيلوس الأصلي</p><p> الأصلي الجديد الخاص بك</p></InnerSubtititle>
            <IconHolder>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} href="https://help.telos.net/en_US/getting-started/how-to-bridge-tlos-between-different-blockchains" target="_blank" rel="noreferrer">
                <img src={DEX} alt="cex" />
                </Icon>
                <a href="https://help.telos.net/en_US/getting-started/how-to-bridge-tlos-between-different-blockchains" target="_blank" rel="noreferrer"><InnerSubtititle>DEX أرسل من محقظة </InnerSubtititle></a>
                </IconColumn>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, -360, -360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} href="https://help.telos.net/en_US/getting-started/how-to-buy-tlos" target="_blank" rel="noreferrer">
                <img src={CEX} alt="dex" />
                </Icon>
                <a href="https://help.telos.net/en_US/getting-started/how-to-buy-tlos" target="_blank" rel="noreferrer"><InnerSubtititle>CEX رسل من محقظة </InnerSubtititle></a>
                </IconColumn>
            </IconHolder>
            <HelpTitle >هل تريد المزيد من المساعدة؟</HelpTitle>
            <a href="https://help.telos.net/" target="_blank" rel="noreferrer"> <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><HelpButton>قم بزيارة مركز المساعدة الخاص بنا</HelpButton></motion.div></a>
            <a href="https://t.me/HelloTelos" target="_blank" rel="noreferrer"><motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><HelpButton>Telegram اتصل بنا على </HelpButton></motion.div></a>
        </ColumnLeft>
        <ColumnRight>
            <ColumnTitle >EVM تيلوس </ColumnTitle>
            <BigTitle>MetaMask قم بتثبيت </BigTitle>
            <Box>
                <motion.img src={Meta} alt="" drag dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50,}} whileTap={{cursor: 'grabbing'}} style={{width: '150px', height: '150px', cursor: 'grab'}}/> 
            </Box>
            <InnerTitle>RPC EVM قم باستيراد تيلوس  </InnerTitle>
            <InnerSubtititle >Metamask التالي إلى  RPC قم باستيراد <p>مخصصة لإنشاء حساب RPC أو أي محفظة</p></InnerSubtititle>
            <Hidden>
            {copied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="green"/>
                            <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg><span>Copied!!!</span></>}
            </Hidden>
            <TitledBox>
                <BoxLine><IconButton onClick={CopyAddress}><CopyIcon /></IconButton><p >https://mainnet.telos.net/evm</p><span> URL: RPC</span></BoxLine>
                <BoxLine><IconButton onClick={CopyChain}><CopyIcon /></IconButton><p >Telos EVM Mainnet</p><span>Chain name:</span></BoxLine>
                <BoxLine><IconButton onClick={CopyChainID}><CopyIcon /></IconButton><p>40</p><span>Chain ID:</span></BoxLine>
                <BoxLine><IconButton onClick={CopySymbol}><CopyIcon /></IconButton><p >TLOS</p><span>Symbol:</span></BoxLine>
                <BoxLine><IconButton onClick={CopyExplorer}><CopyIcon /></IconButton><p >https://teloscan.io</p><span>Block Explorer URL:</span></BoxLine>
            </TitledBox>
            <InnerSubtititle >(البحث عن تيلوس)  <a href="https://chainlist.org/" target="_blank" rel="noreferrer">Chainlist</a> يمكنك أي ًضا استخدام قائمة</InnerSubtititle>
            <InnerTitle style={{padding: '30px'}}>رسل تيلوس إلى حسابك</InnerTitle>
            <InnerSubtititle >EVM اتبع أدلتنا لإرسال تيلوس إلى حساب تيلوس <p>الجديد الخاص بك</p></InnerSubtititle>
            <SingleIcon href="https://help.telos.net/en_US/evm/how-to-deposit-tlos-on-the-telos-evm" target= "blank" rel="noreferrer">
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, -360, -360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}>
                    <img src={Native} alt="logo" />
                </Icon>
            </SingleIcon>
            <InnerSubtititle>أرسل من تيلوس ناتيف </InnerSubtititle>
            <IconHolder>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} href="https://help.telos.net/en_US/getting-started/how-to-buy-tlos" target="_blank" rel="noreferrer">
                <img src={CEX} alt="cex" />
                </Icon>
                <a href="https://help.telos.net/en_US/getting-started/how-to-buy-tlos" target="_blank" rel="noreferrer"><InnerSubtititle>CEX رسل من محقظة </InnerSubtititle></a>
                </IconColumn>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, -360, -360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} href="https://help.telos.net/en_US/getting-started/how-to-bridge-tlos-between-different-blockchains" target="_blank" rel="noreferrer">
                <img src={DEX} alt="dex" />
                </Icon>
                <a href="https://help.telos.net/en_US/getting-started/how-to-bridge-tlos-between-different-blockchains" target="_blank" rel="noreferrer"><InnerSubtititle>DEX رسل من محقظة </InnerSubtititle></a>
                </IconColumn>
            </IconHolder>
        </ColumnRight>
        <EmptyColumn />
    </Section>
  )
}

export default GetStartedSection