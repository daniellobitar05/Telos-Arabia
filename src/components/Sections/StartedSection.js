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


const Section = styled.div`
    width: 100vw;
    height: 280vh;
    display: flex;
    align-items: center;
    background: ${props => props.theme.back4};
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 560vh;
    }
    
`;

const EmptyColumn = styled.div`
    width: 10%;
    height: 280vh;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 280vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 280vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

const ColumnTitle = styled(motion.div)`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 44px;
    }
    h1{
        font-size: 48px;
        color: white;
    }
`;

const ColumnSubTitle = styled(motion.div)`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 28px;
    }
    h1{
        font-size: 32px;
        color: white;
    }
`;

const BoxWrapper = styled(motion.div)`
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Box = styled(motion.div)`
    height: 200px;
    width: 70%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    background: indigo;
    
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

const InnerTitle = styled(motion.div)`
    width: 100%;
    height: 10vh;
    direction: rtl;
    text-align: center;
    span{
        margin: 0 8px;
        font-size: 28px;
    }
    h1{
        font-size: 32px;
        color: white;
    }
`;

const InnerArticle = styled(motion.div)`
    width: 80%;
    height: 25vh;
    direction: rtl;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        margin: 0 8px;
        font-size: 24px;
    }
    h1{
        font-size: 28px;
        color: white;
    }
    a{
        color: aqua;
        margin: 0 8px;
        font-size: 24px;
    }
`;

const IconHolder = styled(motion.div)`
    display: inline-flex;
    justify-content: space-evenly;
    height: 30vh;
    width: 90%;th: 768px){
        margin-top: 20px;
    }
    
`;

const SingleIcon = styled(motion.a)`
    display: flex;
    height: 20vh;
    width: 35%;
    
    img{
        margin: auto;
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

const InnerSubtititle = styled(motion.div)`
    font-size: 24px;
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
        font-size: 22px;
    }
`;

const Hidden = styled.div`
    height: 5vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    span{
        color: aqua;
        font-size: 15px;
        margin-left: 10px;
    }
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

const HelpButton = styled(Button)`
    &&&{
        z-index: 100;
        background: linear-gradient(90deg, rgba(146,16,205,1) 0%, rgba(100,42,217,1) 50%, rgba(47,230,231,1) 100%);
        font-size: 22px;
        direction: rtl;
        color: white;
        font-weight: bold;
        border: 1px solid aqua;
        border-radius: 15px;
        padding: 6px 20px;
        @media screen and (max-width: 768px){
            font-size: 16px;
        }
    }
`;

const CopyIcon = styled(ContentCopyIcon)`
    color: aqua;
    cursor: pointer;

`;


const StartedSection = () => {

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

    return(
        <Section >
            <EmptyColumn />
            <ColumnLeft>
                <ColumnTitle><h1>تيلوس ناتيف</h1></ColumnTitle>
                <ColumnSubTitle ><h1>اختر موقعا</h1></ColumnSubTitle>
                <BoxWrapper>
                    <Box >
                        <MiniColumn><img src={Wombat} alt="" /><BoxTitle>Wombat</BoxTitle></MiniColumn>
                        <MiniColumn>
                            <img src={Anchor} alt="" />
                            <BoxTitle>Anchor</BoxTitle>
                            <BoxTitle>RECOMMENDED</BoxTitle>
                        </MiniColumn>
                    </Box>
                </BoxWrapper>
                <InnerArticle ><p><h1><t>لاستخدام</t><span>Anchor</span><a href="https://www.telos.net/signup" target="_blank" rel="noreferrer">ستحتاج إلى إنشاء حساب مجاني أولاً</a><span>.</span><t>يمكنك استيراد الحساب باستخدام مفتاحه الخاص في حساب الإعداد</t><span>»</span><t>ستيراد</t><span>»</span><t>المفتاح الخاص</t></h1></p></InnerArticle>
                <InnerTitle><p><h1><t>أرسل</t><span>TLOS</span><t>إلى حسابك</t></h1></p></InnerTitle>
                <InnerTitle></InnerTitle>
                <InnerArticle><p><h1><t>قم باستيراد</t><span>RPC</span><t>التالي إلى</t><span>Metamask</span><t>أو أي محفظة</t><span>RPC</span><t>مخصصة لإنشاء حساب</t></h1></p></InnerArticle>
                
                <IconHolder >
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
                <InnerArticle></InnerArticle>
                <InnerArticle ><p><h1>هل تريد المزيد من المساعدة؟</h1></p></InnerArticle>
                <InnerArticle ><a href="https://help.telos.net/" target="_blank" rel="noreferrer"> <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><HelpButton>قم بزيارة مركز المساعدة الخاص بنا</HelpButton></motion.div></a></InnerArticle>
                <InnerTitle ><a href="https://t.me/HelloTelos" target="_blank" rel="noreferrer"><motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}><HelpButton>Telegram اتصل بنا على </HelpButton></motion.div></a></InnerTitle>
            </ColumnLeft>
            <ColumnRight>
                <ColumnTitle ><h1><t>تيلوس</t><span>EVM</span></h1></ColumnTitle>
                <ColumnSubTitle ><h1><t>قم بتثبيت</t><span>MetaMask</span></h1></ColumnSubTitle>
                <BoxWrapper>
                    <Box >
                        <motion.img src={Meta} alt="" drag dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50,}} whileTap={{cursor: 'grabbing'}} style={{width: '150px', height: '150px', cursor: 'grab'}}/> 
                    </Box>
                </BoxWrapper>
                <InnerTitle ><p><h1><t>قم باستيراد تيلوس</t><span>RPC EVM</span></h1></p></InnerTitle>
                <InnerArticle ><p><h1><t>قم باستيراد</t><span>RPC</span><t>التالي إلى</t><span>METAMASK</span><t>و</t><t>أي محفظة</t><span>RPC</span><t>مخصصة لإنشاء حساب</t></h1></p></InnerArticle>
                <Hidden>
                {copied && <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="green"/>
                                <motion.path d="M5.40002 12L9.90002 16.5L19.2 7.20001" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg><span>Copied!!!</span></>}
                </Hidden>
                <TitledBox >
                    <BoxLine><IconButton onClick={CopyAddress}><CopyIcon /></IconButton><p >https://mainnet.telos.net/evm</p><span> URL: RPC</span></BoxLine>
                    <BoxLine><IconButton onClick={CopyChain}><CopyIcon /></IconButton><p >Telos EVM Mainnet</p><span>Chain name:</span></BoxLine>
                    <BoxLine><IconButton onClick={CopyChainID}><CopyIcon /></IconButton><p>40</p><span>Chain ID:</span></BoxLine>
                    <BoxLine><IconButton onClick={CopySymbol}><CopyIcon /></IconButton><p >TLOS</p><span>Symbol:</span></BoxLine>
                    <BoxLine><IconButton onClick={CopyExplorer}><CopyIcon /></IconButton><p >https://teloscan.io</p><span>Block Explorer URL:</span></BoxLine>
                </TitledBox>
                <InnerArticle ><p><h1><t>يمكنك أي ًضا استخدام قائمة</t><a href="https://chainlist.org/" target="_blank" rel="noreferrer">CHAINLIST</a><t>(البحث عن تيلوس)</t></h1></p></InnerArticle>
                <InnerTitle ><p><h1>رسل تيلوس إلى حسابك</h1></p></InnerTitle>
                <InnerArticle ><p><h1><t>اتبع أدلتنا لإرسال تيلوس إلى حساب تيلوس</t><span>EVM</span><t>الجديد الخاص بك</t></h1></p></InnerArticle>
                <SingleIcon  href="https://help.telos.net/en_US/evm/how-to-deposit-tlos-on-the-telos-evm" target= "blank" rel="noreferrer">
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

export default StartedSection;