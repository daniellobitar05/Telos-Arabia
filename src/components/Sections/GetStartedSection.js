import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {motion , useAnimation} from "framer-motion";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useInView} from "react-intersection-observer";
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
    height: 290vh;
    background: ${props => props.theme.back4};
    display: flex;
    
    overflow: hidden;
    @media screen and (max-width: 660px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 490vh;
        
    }
`;



const ColumnLeft = styled.div`
    width: 40%;
    height: 100%;
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
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 270vh;
    }
`;

const EmptyColumn = styled.div`
    width: 10%;
    background: ${props => props.theme.back4};
    height: 100%;
    float: left;
    @media screen and (max-width: 768px){
        display: none;
    }
    
`;

const ColumnTitle = styled(motion.div)`
    font-size: 48px;
    padding: 40px 0;
    color: ${props => props.theme.text};
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 36px;
    }
    

`;

const Box = styled(motion.div)`
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

const BigTitle = styled(motion.div)`
    font-size: 28px;
    color: ${props => props.theme.text};
    padding-bottom: 30px;
    font-weight: bold;
    span{
        font-weight: bold;
    }
`;

const InnerTitle = styled(motion.div)`
    font-size: 32px;
    color: ${props => props.theme.text};
    font-weight: bold;
    margin: 50px 0;
    @media screen and (max-width: 768px){
        font-size: 26px;
        margin: 20px 0;
    }
`;

const InnerSubtititle = styled(motion.div)`
    font-size: 28px;
    width: 80%;
    color: ${props => props.theme.text};
    direction: rtl;
    text-align: center;
    line-height: 40px;
    @media screen and (max-width: 768px){
        font-size: 22px;
        line-height: 30px;
    }
    
    a{
        color: aqua;
        margin: 0 5px;
    }
    span{
        margin: 0 5px;
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

const TitledBox = styled(motion.div)`
    margin-top: 20px;
    height: 240px;
    width: 70%;
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

const SingleIcon = styled(motion.a)`
    display: flex;
    height: 200px;
    width: 35%;
    
    img{
        margin: auto;
    }
    
`;

const IconHolder = styled(motion.div)`
    display: inline-flex;
    justify-content: space-evenly;
    height: 200px;
    width: 90%;
    margin-top: 50px;
    @media screen and (max-width: 768px){
        margin-top: 20px;
    }
    
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
    margin-top: 200px;
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 60px;
    @media screen and (max-width: 768px){
        margin-top: 100px;
        margin-bottom: 30px;
    }
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


    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw'
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

  return (
    <Section id="getstarted" ref={ref}>
        <EmptyColumn />
        <ColumnLeft>
            <ColumnTitle animate={animation}>تيلوس ناتيف</ColumnTitle>
            <BigTitle animate={animationTwo}>اختر موقعا </BigTitle>
            <Box animate={animation}>
                <MiniColumn><img src={Wombat} alt="" /><BoxTitle>Wombat</BoxTitle></MiniColumn>
                <MiniColumn>
                    <img src={Anchor} alt="" />
                    <BoxTitle>Anchor</BoxTitle>
                    <BoxTitle>RECOMMENDED</BoxTitle>
                </MiniColumn>
            </Box>
            <InnerSubtititle animate={animationTwo}><p><t>لاستخدام</t><span>Anchor</span><a href="https://www.telos.net/signup" target="_blank" rel="noreferrer"> ستحتاج إلى إنشاء حساب مجاني أولاً</a><t>. </t><t>يمكنك استيراد الحساب باستخدام مفتاحه الخاص في حساب الإعداد </t><span>»</span><t>ستيراد</t><span>»</span><t>المفتاح الخاص</t></p></InnerSubtititle>
            <InnerTitle animate={animationTwo}> إلى حسابك TLOS أرسل </InnerTitle>
            <InnerSubtititle  animate={animationTwo}> قم باستيراد RPC التالي إلى Metamask أو أي محفظة RPC مخصصة لإنشاء حساب</InnerSubtititle>
            <IconHolder animate={animationTwo}>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} href="https://help.telos.net/en_US/getting-started/how-to-bridge-tlos-between-different-blockchains" target="_blank" rel="noreferrer">
                <img src={DEX} alt="cex" />
                </Icon>
                <a href="https://help.telos.net/en_US/getting-started/how-to-bridge-tlos-between-different-blockchains" target="_blank" rel="noreferrer"><InnerSubtititle style={{width: '100%'}} animate={animationTwo}>أرسل من محقظة<span>DEX</span></InnerSubtititle></a>
                </IconColumn>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, -360, -360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} href="https://help.telos.net/en_US/getting-started/how-to-buy-tlos" target="_blank" rel="noreferrer">
                <img src={CEX} alt="dex" />
                </Icon>
                <a href="https://help.telos.net/en_US/getting-started/how-to-buy-tlos" target="_blank" rel="noreferrer"><InnerSubtititle style={{width: '100%'}} animate={animationTwo}>رسل من محقظة<span>CEX</span></InnerSubtititle></a>
                </IconColumn>
            </IconHolder >
            <HelpTitle >هل تريد المزيد من المساعدة؟</HelpTitle>
            <a href="https://help.telos.net/" target="_blank" rel="noreferrer"> <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><HelpButton>قم بزيارة مركز المساعدة الخاص بنا</HelpButton></motion.div></a>
            <a href="https://t.me/HelloTelos" target="_blank" rel="noreferrer"><motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><HelpButton>Telegram اتصل بنا على </HelpButton></motion.div></a>
        </ColumnLeft>
        <ColumnRight>
            <ColumnTitle animate={animation}>EVM تيلوس </ColumnTitle>
            <BigTitle animate={animationTwo}>MetaMask قم بتثبيت </BigTitle>
            <Box animate={animation}>
                <motion.img src={Meta} alt="" drag dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50,}} whileTap={{cursor: 'grabbing'}} style={{width: '150px', height: '150px', cursor: 'grab'}}/> 
            </Box>
            <InnerTitle animate={animationTwo}>RPC EVM قم باستيراد تيلوس  </InnerTitle>
            <InnerSubtititle animate={animationTwo}><t>قم باستيراد</t><span>RPC</span><t>التالي إلى</t><span>METAMASK</span><t>و أي محفظة </t><span>RPC</span><t>مخصصة لإنشاء حساب</t></InnerSubtititle>
            <Hidden>
            {copied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="green"/>
                            <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg><span>Copied!!!</span></>}
            </Hidden>
            <TitledBox animate={animationTwo}>
                <BoxLine><IconButton onClick={CopyAddress}><CopyIcon /></IconButton><p >https://mainnet.telos.net/evm</p><span> URL: RPC</span></BoxLine>
                <BoxLine><IconButton onClick={CopyChain}><CopyIcon /></IconButton><p >Telos EVM Mainnet</p><span>Chain name:</span></BoxLine>
                <BoxLine><IconButton onClick={CopyChainID}><CopyIcon /></IconButton><p>40</p><span>Chain ID:</span></BoxLine>
                <BoxLine><IconButton onClick={CopySymbol}><CopyIcon /></IconButton><p >TLOS</p><span>Symbol:</span></BoxLine>
                <BoxLine><IconButton onClick={CopyExplorer}><CopyIcon /></IconButton><p >https://teloscan.io</p><span>Block Explorer URL:</span></BoxLine>
            </TitledBox>
            <InnerSubtititle animate={animationTwo}><p><t>يمكنك أي ًضا استخدام قائمة</t><a href="https://chainlist.org/" target="_blank" rel="noreferrer">CHAINLIST</a><t>(البحث عن تيلوس)</t></p></InnerSubtititle>
            <InnerTitle style={{padding: '30px'}} animate={animationTwo}>رسل تيلوس إلى حسابك</InnerTitle>
            <InnerSubtititle animate={animationTwo}><t>اتبع أدلتنا لإرسال تيلوس إلى حساب تيلوس</t><span>EVM</span><t> الجديد الخاص بك </t></InnerSubtititle>
            <SingleIcon animate={animationTwo} href="https://help.telos.net/en_US/evm/how-to-deposit-tlos-on-the-telos-evm" target= "blank" rel="noreferrer">
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, -360, -360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}>
                    <img src={Native} alt="logo" />
                </Icon>
            </SingleIcon>
            <InnerSubtititle animate={animationTwo}>أرسل من تيلوس ناتيف </InnerSubtititle>
            <IconHolder animate={animationTwo}>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} href="https://help.telos.net/en_US/getting-started/how-to-buy-tlos" target="_blank" rel="noreferrer">
                <img src={CEX} alt="cex" />
                </Icon>
                <a href="https://help.telos.net/en_US/getting-started/how-to-buy-tlos" target="_blank" rel="noreferrer"><InnerSubtititle style={{width: '100%'}}>رسل من محقظة<span>CEX</span></InnerSubtititle></a>
                </IconColumn>
                <IconColumn>
                <Icon whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, -360, -360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }} href="https://help.telos.net/en_US/getting-started/how-to-bridge-tlos-between-different-blockchains" target="_blank" rel="noreferrer">
                <img src={DEX} alt="dex" />
                </Icon>
                <a href="https://help.telos.net/en_US/getting-started/how-to-bridge-tlos-between-different-blockchains" target="_blank" rel="noreferrer"><InnerSubtititle style={{width: '100%'}}>رسل من محقظة<span>DEX</span></InnerSubtititle></a>
                </IconColumn>
            </IconHolder>
        </ColumnRight>
        <EmptyColumn />
    </Section>
  )
}

export default GetStartedSection