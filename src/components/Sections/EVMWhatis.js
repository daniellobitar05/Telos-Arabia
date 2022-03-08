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
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 50%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 62px;
    display: flex;
    
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
    width: 90%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BoxTitle = styled.div`
    width: 90%;
    height: 10vh;
    color: white;
    font-size: 24px;
    text-align: right;

`;

const Subtitle = styled.div`
    width: 90%;
    height: 30vh;
    color: white;
    font-size: 18px;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const EVMWhatis = () => {

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

      const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="evmwhatis">
            <Title>What is Telos EVM</Title>
            <Grid>
                <ColumnLeft>
                    <BoxTitle>A Layer-1 Ethereum Virtual Machine, Built to Power Web 3.0</BoxTitle>
                    <Subtitle>Telos EVM is a scalable solution for Solidity based applications, built with the intent of revolutionizing the DeFi landscape. Unlike other scalable EVMs, Telos EVM is not just a fork of the original Go Ethereum code. It’s an entirely new EVM redesigned from the ground up to take full advantage of the power that Telos technology has to offer.</Subtitle>
                    <Subtitle>This new approach allows the Telos EVM to avoid the scaling issues that many major EVM alternatives run into. Despite its unique design, Telos EVM offers feature parity with Ethereum, this makes it a powerful solution for developers and users looking for an Ethereum Virtual Machine that can keep up with the demands of mass adoption.</Subtitle>
                </ColumnLeft>
                <ColumnRight>
                    <VideoOne />
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