import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {useEffect} from "react";
import styled from "styled-components";
import YouTube from 'react-youtube';
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back3};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

const Title = styled(motion.div)`
    width: 50%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 62px;
    display: flex;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    align-items: center;
    justify-content: center;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 32px;
        width: 90%;
        height: 10vh;
    }
`;

const Grid = styled.div`
    width: 90%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 80vh;
    }
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 70%;
    }
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 30%;
        transform: scale(0.6) translate(0, 10%);
    }
`;

const BoxTitle = styled(motion.div)`
    width: 90%;
    height: 10vh;
    color: white;
    font-size: 32px;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 18px;
    }
`;

const Subtitle = styled(motion.div)`
    width: 90%;
    height: 30vh;
    color: white;
    font-size: 24px;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 14px;
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
    background: transparent;
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

const EVMWhatis = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      }


    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationTwo = useAnimation();
    const animationThree = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '100vw',
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

    useEffect(() => {
        if(inView){
            animationThree.start({
                opacity: 1, scale: 1,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationThree.start({
                opacity: 0, scale: 0.5
            })
        }
        
    }, [inView])


    class VideoOne extends React.Component {
        render() {
          const opts = {
            height: '312',
            width: '512',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
      
          return <YouTube videoId="VQIYVG8tGsE" opts={opts} onReady={this._onReady} />;
        }
        
        _onReady(event) {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
    }

      

    return(
        <Section id="evmwhatis" ref={ref}>
            <Title animate={animationThree}><t>ما هو </t><span>Telos EVM</span></Title>
            <Grid>
                <ColumnLeft>
                    <BoxTitle animate={animationTwo}><t>آلة افتراضية من الطبقة الأولى من</t><span>Ethereum</span><t>، تم إنشاؤها لدعم الويب 3.0</t></BoxTitle>
                    <Subtitle animate={animationTwo}><p><t>تيلوس</t><span>EVM</span><t>هو حل قابل للتطوير للتطبيقات القائمة على</t><span>Solidity</span><t>، تم إنشاؤه بهدف إحداث ثورة في مشهد</t><span>DeFi.</span><t>على عكس أجهزة</t><span>EVM</span><t>الأخرى القابلة للتطوير ، فإن تيلوس</t><span>EVM</span><t>ليست مجرد تفرع من كود</t><span>Go Ethereum</span><t>الأصلي. إنه جهاز</t><span>EVM</span><t>جديد تمامًا أعيد تصميمه من الألف إلى الياء للاستفادة الكاملة من القوة التي توفرها تقنية تيلوس.</t></p></Subtitle>
                    <Subtitle animate={animationTwo}><p><t>يسمح هذا النهج الجديد لـ تيلوس</t><span>EVM</span><t>بتجنب مشكلات القياس التي تواجهها العديد من بدائل</t><span>EVM</span><t>الرئيسية. على الرغم من تصميمها الفريد ، تقدم تيلوس</t><span>EVM</span><t>ميزة التكافؤ مع</t><span>Ethereum</span><t>، مما يجعلها حلاً قويًا للمطورين والمستخدمين الذين يبحثون عن جهاز</t><span>Ethereum Virtual Machine</span><t>يمكنه مواكبة متطلبات التبني الجماعي.</t></p></Subtitle>
                </ColumnLeft>
                <ColumnRight>
                    <motion.div animate={animationThree}>
                    <VideoOne />
                    </motion.div>
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="evmcards" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="evmicons" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMWhatis;