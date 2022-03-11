import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Telos from "../SVG/telos_letter_logo.svg";
import Corco from "../SVG/corco.svg";
import Kanda from "../SVG/kanda_logo.svg";
import New from "../SVG/newlife_logo.svg";
import Taikai from "../SVG/taikai_logo.svg";
import Peeranha from "../SVG/peeranha.svg";
import starter from "../SVG/tstarter.svg";
import Local from "../images/local_logo.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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



const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back9};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        
    }
`;

const Title = styled.div`
    font-size: 62px;
    width: 100%;
    color: ${props => props.theme.text};  
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        
    }
`;

const Grid = styled.div`
    width: 80%;
    height: 70vh;

    .swiper {
        width: 75%;
        height: 100%;
    }

    .swiper-slide {
        
        background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        flex-direction: column;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper-button-next{
        transform: translate(50%, 0);
    }

    .swiper-button-prev{
        transform: translate(-50%, 0);
    }
`;

const FirstRow = styled.div`
    width: 90%;
    height: 15%;
    display: flex;
    color: white;
    align-items: center;
    flex-direction: row;
    font-size: 48px;
    font-weight: bold;
    justify-content: flex-end;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;

`;

const SecondRow = styled.div`
    width: 90%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 16px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const InnerGrid = styled.div`
    width: 90%;
    height: 40%;
    display: flex;
`;

const Column = styled.ol`
    width: 50%;
    height: 100%;
    float: left;
    list-style-type: circle;
    
    
`;

const Item = styled.li`
    width: 100%;
    height: 25%;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    &::marker{
        font-size: 20px;
        background-color: black;
    }
`;

const BottomRow = styled.div`
    width: 100%;
    height: 20%;
    display: inline-flex;
`;

const First = styled.div`
    height: 100%;
    width: 20%;
    background-image: url(${Telos});
    background-repeat: no-repeat;
    background-size: (100px, auto);
    background-position: center;
    transform: scale(0.8);
    border-right: 1px solid whitesmoke;
    border-length: 50%;
    
    
    
`;

const Second = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Local});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    
`;

const SecondCorco = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Corco});
    background-repeat: no-repeat;
    background-size: (75px, auto);
    background-position: center left;
    
`;

const SecondKanda = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Kanda});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    
`;

const SecondNew = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${New});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    
`;

const SecondTaikai = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Taikai});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    
`;

const SecondPeer = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Peeranha});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    
`;

const SecondStarter = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${starter});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    
`;

const Third = styled.a`
    height: 100%;
    width: 25%;
    color: white;
    display: flex;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

const Additional = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }    

    return(
        <Section id="additional">
            <Title>Additional Environmental Examples</Title>
                <Grid>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow>LocalScale is a public benefit organization focusing on the development of resilient and sustainable local economies through the use of technology, science and regenerative activities. It offers an inclusive, free-to-access organization and a platform that will promote the creation and use of local products, providing local economic alternatives to traditional financial systems, fostering local entrepreneurship and local communities, while advocating for social equality and social justice.</SecondRow>
                        <InnerGrid>
                            <Column>
                                <Item>Facilitate cooperation</Item>
                                <Item>Connect the global actors of change</Item>
                                <Item>Empower local communities</Item>
                                <Item>120 Partners & 22 Collaborations</Item>
                            </Column>
                            <Column>
                                <Item>Zero Cost Payment System</Item>
                                <Item>On a Zero Environmental Impact Blockchain</Item>
                                <Item>Community owned platform</Item>
                                <Item>Regenerative & Local Action</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second></Second>
                            <Third href="https://localscale.org/" target="_blank" rel="noreferrer">localscale.org</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}>An ecological currency providing a positive solution to global warming. Users can purchase TREE tokens and in exchange a farmer plants a tree. Each tree is carefully selected, mindful of the location and ecosystem. A photo and GPS location are uploaded to the CORCO system. Token holders own their specific tree for 60 years, during which they collect CORCOCOIN rewards, representative of the Co2 that the tree captures.</SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                <Item>Connecting economics to natural resources</Item>
                                <Item>An NFT/Currency for Carbon offsetting</Item>
                            </Column>
                            <Column>
                                <Item>Each CORCOCOIN is worth 1kg of Co2</Item>
                                <Item>Utilize the token for savings from the Corcovado shop</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondCorco></SecondCorco>
                            <Third href="https://corcocoin.org/" target="_blank" rel="noreferrer">corcocoin.org</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}>Empowering African communities to collect weather data. The mission of Kanda Weather Balloons is to build an entirely community-owned balloon network, in hopes of empowering African university students to become local climate change leaders. This project offers a viable solution to the lack of real-time and historical climate data in West Africa.</SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                <Item>Community Owned</Item>
                                <Item>Tokenised Rewards</Item>
                                <Item>Tokenised For the Vulnerable</Item>
                            </Column>
                            <Column>
                                <Item>Real-Time Data</Item>
                                <Item>Open Source</Item>
                                <Item>Blockchain-Powered</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondKanda></SecondKanda>
                            <Third href="http://kandaweather.org/" target="_blank" rel="noreferrer">kandaweather.org</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}>Newlife is a cultural research and social creativity platform for design studios, artists, retailers, galleries, magazines and brands at the forefront of culture in over 107 countries to research, coolhunt and hire emerging talents.</SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                
                            </Column>
                            <Column>
                                <Item>Accelerating creative networking</Item>
                                <Item>Ownership by Users</Item>
                                <Item>Find and hire talents</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondNew></SecondNew>
                            <Third href="https://newlife.io/" target="_blank" rel="noreferrer">newlife.io</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}>TAIKAI is an end-to-end platform that manages open innovation challenges for organizations or corporate businesses. The challenges are solved by their community of innovators and the best projects are selected through a transparent and auditable voting system.</SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                <Item>Modular</Item>
                                <Item>Configurable</Item>
                            </Column>
                            <Column>
                                <Item>Network Agnostic</Item>
                                <Item>Secure</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondTaikai></SecondTaikai>
                            <Third href="http://taikai.network/" target="_blank" rel="noreferrer">taikai.network</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}>Peeranha is a decentralized question and answer website that rewards users with crypto tokens (PEER) for their valuable contributions. Unlike other question and answer websites where an organization owns the website and all the data generated from users, Peeranha is owned by the community and rewards are distributed to community members in exchange for their work in growing the ecosystem.</SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                
                            </Column>
                            <Column>
                                <Item>Decentralized</Item>
                                <Item>Ownership by Users</Item>
                                <Item>Rewards contribution</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondPeer></SecondPeer>
                            <Third href="http://peeranha.io/" target="_blank" rel="noreferrer">peeranha.io</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}>T-Starter combines cross-chain bridges and a fixed-pool swap platform to allow projects to raise funds more cost effectively than is possible on other blockchains. Other popular fundraising platforms face high gas fees, which make small value transactions unaffordable and exclude many users from participating in swap pools. T-Swaps utilizes the Telos network to solve this problem, resulting in wider participation and a far more cost effective token sale.</SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                <Item>Fixed & Dynamic Swap Pools</Item>
                                <Item>Full KYC Integration</Item>
                                <Item>Permission-less Listing</Item>
                            </Column>
                            <Column>
                                <Item>Cross-chain Swaps</Item>
                                <Item>Anti-scam Features</Item>
                                <Item>Governance Model</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondStarter></SecondStarter>
                            <Third href="http://tstarter.io/" target="_blank" rel="noreferrer">tstarter.io</Third>
                        </BottomRow>
                        </SwiperSlide>
                </Swiper>
            </Grid>
            <Empty>
                <IconColumnLeft to="social" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="seeds" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default Additional;