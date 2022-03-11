import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
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
        height: 220vh;
    }
`;

const Title = styled.div`
    font-size: 42px;
    width: 50%;
    color: ${props => props.theme.text};  
    height: 15vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        width: 80%;
        font-size: 48px;
    }
`;

const Subtitle = styled.div`
    width: 80vw;
    font-size: 18px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 15vh;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    
`;

const VideoWrapper = styled.div`
    width: 90%;
    height: 50vh;
    display: flex;
`;

const VideoLeft = styled.div`
    width: 95%;
    height: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    background: rgba(0, 0, 0, 0.8);
`;

const VideoTitles = styled.div`
    width: 85%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`;

const VideoTitle = styled.h1`
    color: white;
    font-size: 20px;
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

    return(
        <Section id="videos">
            <Title>What is ESG and why does it matter?</Title>
            <Subtitle>The acronym ESG stands for Environmental, Social and Governance. It’s a criterion which is popular in the world of business and investing. ESG is used to identify risks that may be missed through traditional forms of analysis.</Subtitle>
            <VideoTitles>
                <VideoTitle>Benefits of ESG</VideoTitle>
                <VideoTitle>Intro to ESG Investing</VideoTitle>
            </VideoTitles>
            <VideoWrapper>
                <VideoLeft><VideoTwo /></VideoLeft>
                <VideoLeft><VideoOne /></VideoLeft>
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