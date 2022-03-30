import React, {useEffect} from 'react';
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import YouTube from 'react-youtube';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 160vh;
    }
`;

const Title = styled(motion.div)`
    font-size: 42px;
    width: 50%;
    color: ${props => props.theme.text};  
    height: 15vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        width: 80%;
        font-size: 32px;
        height: 40vh;
    }
`;

const Subtitle = styled(motion.div)`
    width: 80vw;
    font-size: 32px;
    color: whitesmoke;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 20vh;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 15px;
        font-size: 28px;
        @media screen and (max-width: 768px){
            font-size: 20px;
        }
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        justify-content: center;
        font-size: 24px;
        width: 90%;
    }
    
`;

const VideoWrapper = styled.div`
    width: 90%;
    height: 55vh;
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        height: 90vh;
        transform: scale(0.6);
    }
`;

const VideoLeft = styled(motion.div)`
    width: 95%;
    height: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;

    @media screen and (max-width: 768px){
        float: none;
        width: 70%;
        height: 50%;
        margin: 70px 0;
    }
    
`;

const VideoRight = styled(motion.div)`
    width: 95%;
    height: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;

    @media screen and (max-width: 768px){
        float: none;
        width: 70%;
        height: 50%;
        margin: 20px 0;
    }
    
`;

const VideoTitle = styled.div`
    color: white;
    font-size: 26px;
    direction: rtl;
    height: 10vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        margin: 0 10px;
    }
`;



const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
    
    
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
   background: transparent; 
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
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

const ToggleColumn = styled(LinkS)`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;




const WhatisESG = () => {

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
      
          return <YouTube videoId="B8z7ZUg7KJk" opts={opts} onReady={this._onReady} />;
        }
      
        _onReady(event) {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
      }

      class VideoTwo extends React.Component {
        render() {
          const opts = {
            height: '312',
            width: '512',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
      
          return <YouTube videoId="urqRAHWlEFM" opts={opts} onReady={this._onReady} />;
        }
      
        _onReady(event) {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
      }

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
                x: '-100vw',
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
                opacity: 0, y: '100px',
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
                opacity: 0, scale: 0.4
            })
        }
        
    }, [inView])



    return(
        <Section id="videos" ref={ref}>
            <Title animate={animation}><p><t>ما هو</t><span>ESG</span><t>ولماذا هو مهم؟</t></p></Title>
            <Subtitle animate={animationTwo}><p><t>اختصار</t><span>ESG</span><t>لتقف على البيئة والاجتماعية والحوكمة. إنه معيار شائع في عالم الأعمال والاستثمار. يتم استخدام</t><span>ESG</span><t>تحديد المخاطر التي قد لا يتم تفويتها من خلال الأشكال التقليدية للتحليل</t>.</p></Subtitle>
            
                
                
            
            <VideoWrapper>
                <VideoLeft animate={animationThree}>
                <VideoTitle><p><t>فوائد</t><span>ESG</span></p></VideoTitle>
                    <VideoTwo />
                </VideoLeft>
                <VideoRight animate={animationThree}>
                <VideoTitle ><p><t>مقدمة عن</t><span>ESG Investing</span></p></VideoTitle>
                    <VideoOne />
                </VideoRight>
            </VideoWrapper>
            <Empty>
                <IconColumnLeft to="esgicons" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight >
                    
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowUp /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default WhatisESG;