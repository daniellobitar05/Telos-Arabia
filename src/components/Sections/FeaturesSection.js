import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import Slider from "react-slick";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import EVM from "../images/evm_logo.png";
import ESG from "../images/esg_logo.png";
import Omnidex from "../images/omnidex.png";
import TelosWallet from "../SVG/telos_wallet.svg";
import Analisis from "../SVG/Analisis.svg";
import FastTrans from "../SVG/Fast-Cart.svg";
import LowCost from "../SVG/LowCost.svg";
import Stake from "../SVG/Stake.svg";
import Solidity from "../SVG/solidity.svg";
import NoFront from "../SVG/nofront.svg";
import Test from "../SVG/Test.svg";
import Strong from "../SVG/Strong.svg";
import FeeLess from "../SVG/fee_less.svg";
import Governance from "../SVG/governance.svg";
import Greentech from "../SVG/greentech.svg";
import Tools from "../SVG/tools.svg";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back4};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled(motion.div)`
    width: 50%;
    height: 10vh;
    text-align: center;
    color: white;
    font-size: 42px;
    display: grid;
    place-items: center;
    @media screen and (max-width: 768px){
      width: 80%;
      font-size: 32px;
      justify-content: center;
      display: flex;
      align-items: center;
    }
`;

const Subtitle = styled(motion.div)`
    width: 65%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 26px;
    display: grid;
    place-items: center;
    direction: rtl;
    @media screen and (max-width: 768px){
      height: 30vh;
      font-size: 16px;
      width: 90%;
    }
`;

const SliderWrapper = styled(motion.div)`
    height: 25vh;
    width: 80vw;
    @media screen and (max-width: 768px){
      height: 20vh;
    }
    
`;

const Feature = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;

`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 50%;
    color: white; 
    font-size: 22px;
    direction: rtl;
    span{
      margin: 0 8px;
    }
    @media screen and (max-width: 768px){
      font-size: 14px;
    }

`;

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
    justify-content: center; 
    img{
        width: 50px;
        height: 50px;
    }
`;

const SliderTitle = styled(motion.div)`
    color: aqua;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    width: 100%;
    height: 10vh;
    font-size: 32px;
    @media screen and (max-width: 768px){
      height: 5vh;
    }
`;

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
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
    
    
`;









const FeaturesSection = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }

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

    const settings = {
        dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true
      };

    return(
        <Section id="features" ref={ref}>
            <Title animate={animation}>ميزات تيلوس</Title>
            <Subtitle animate={animationTwo}>ينمو نظام تيلوس البيئي بمعدل أسي وقد جمع بسرعة عددًا كبيرًا من الميزات المبتكرة التي تمنحه ميزة تنافسية على الأنظمة الأساسية الأخرى. يمكن استخدامه كبديل مكدس كامل أو كحل للتوسيع حسب احتياجات المشروع. تشمل بعض مزايا تيلوس العديدة ...</Subtitle>
            <SliderTitle animate={animation}>للمطورين</SliderTitle>
            <SliderWrapper animate={animationTwo}>
               
            <Slider {...settings}>
          <Feature>
              <LinkR to="/EVM"><Logo><img src={EVM} alt="" /></Logo></LinkR>
              <LinkR to="/EVM"><Item><p><t>آلة ايثيريوم تيلوس الافتراضية</t><span>(EVM)</span></p></Item></LinkR>
          </Feature>
          <Feature>
          <LinkR to="/ESG"><Logo><img src={ESG} alt="" /></Logo></LinkR>
          <LinkR to="/ESG"><Item><p><t>قيادة الامتثال</t><span>ESG</span><t>(الحوكمة البيئية والاجتماعية)</t></p></Item></LinkR>
          </Feature>
          <Feature>
          <a href="https://wallet.telos.net/" target="_blank" rel="noreferrer"><Logo><img src={TelosWallet} alt="" /></Logo></a>
            <a href="https://wallet.telos.net/" target="_blank" rel="noreferrer"> <Item><p>محفظة تيلوس</p></Item></a>
          </Feature>
          <Feature>
              <Logo><img src={Tools} alt="" /></Logo>
            <Item>مجموعة من الأدوات المبتكرة والتنافسية</Item>
          </Feature>
          <Feature>
          <Logo><img src={Governance} alt="" /></Logo>
            <Item>الحكم والتحكيم العادل</Item>
          </Feature>
          <Feature>
          <LinkR to="/NativeEcosystem"><Logo><img src={Omnidex} alt="" /></Logo></LinkR>
          <LinkR to="/NativeEcosystem"><Item>أكثر من 100 تطبيق وتكامل</Item></LinkR>
          </Feature>
        </Slider>
            </SliderWrapper>
            <SliderTitle animate={animation}>لأصحاب الرموز</SliderTitle>
            <SliderWrapper animate={animationTwo}>
               
            <Slider {...settings}>
          <Feature>
          <LinkR to="/Tokenomics"><Logo><img src={Strong} alt="" /></Logo></LinkR>
              <LinkR to="/Tokenomics"><Item>الرموز القوية</Item></LinkR>
          </Feature>
          <Feature>
          <a href="https://staker.one/" target="_blank" rel="noreferrer"><Logo><img src={Stake} alt="" /></Logo></a>
          <a href="https://staker.one/" target="_blank" rel="noreferrer"><Item><p><t>يكافئ ريكس</t><span>APR</span><t>بنسبة 15٪ على عمليات التجميد</t></p></Item></a>
          </Feature>
          <Feature>
          <a href="https://docs.telos.net/developers/telos_contracts/telos-works" target="_blank" rel="noreferrer"><Logo><img src={TelosWallet} alt="" /></Logo></a>
          <a href="https://docs.telos.net/developers/telos_contracts/telos-works" target="_blank" rel="noreferrer"><Item>منح الشبكة عبر نظام اقتراح العمال</Item></a>
          </Feature>
          <Feature>
          <Logo><img src={FeeLess} alt="" /></Logo>
            <Item>معاملات بدون رسوم</Item>
          </Feature>
          <Feature>
          <Logo><img src={FastTrans} alt="" /></Logo>
            <Item>10000 معاملة في الثانية ، ما قبل التجزئة</Item>
          </Feature>
          <Feature>
          <Logo><img src={Greentech} alt="" /></Logo>
            <Item>صديق للبيئة</Item>
          </Feature>
          <Feature>
              <Logo><img src={NoFront} alt="" /></Logo>
            <Item>لا الجري الأمامي</Item>
          </Feature>
          <Feature>
          <Logo><img src={LowCost} alt="" /></Logo>
            <Item><p><t>نشر</t><span>dApp</span><t>منخفض السعر</t></p></Item>
          </Feature>
          <Feature>
          <Logo><img src={Analisis} alt="" /></Logo>
            <Item>اللامركزية الاقتصادية السليمة</Item>
          </Feature>
          <Feature>
          <Logo><img src={Test} alt="" /></Logo>
            <Item><p><t>يتم تشغيل شبكة الاختبار المناسبة بواسطة</t><span>BP’s</span></p></Item>
          </Feature>
          <Feature>
          <Logo><img src={Solidity} alt="" /></Logo>
            <Item><p><t>دعم كل من</t><span>Solidity EVM</span><t>و</t><span>Eosio C ++</span></p></Item>
          </Feature>
        </Slider>
            </SliderWrapper>
            <Empty>
                <IconColumnLeft to="graph" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="chart" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default FeaturesSection;

