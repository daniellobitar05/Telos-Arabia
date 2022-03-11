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
import Seeds from "../images/seeds.png";

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
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        
    }
`;

const Grid = styled.div`
    width: 100%;
    height: 90vh;
`;

const ColumnLeft = styled.div`
    width: 60%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .swiper {
        width: 75%;
        height: 75%;
        
        
    }

    .swiper-slide {
    
        background: #23297a;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
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
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;



const Article = styled.div`
    color: white; 
    width: 80%;
    font-size: 16px;
    display: flex;
    padding: 20px 0;
    line-height: 24px;

`;

const Row = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`
    color: white;
    font-size: 24px;
    line-height: 38px;
`;

const FirstRow = styled.div`
    width: 95%;
    height: 15%;
    display: flex;
    color: white;
    align-items: center;
    flex-direction: row;
    font-size: 48px;
    font-weight: bold;
    justify-content: flex-end;

`;

const SecondRow = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 14px;
`;

const InnerGrid = styled.div`
    width: 100%;
    height: 50%;
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
    background-image: url(${Seeds});
    background-repeat: no-repeat;
    background-size: (75px, auto);
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


const Subtitle = styled.div`
    
`;


const ESGSeeds = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="seeds">
            <Grid>
                <ColumnLeft>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow>A payment platform and financial ecosystem to empower humanity and heal our planet. SEEDS offers tools to help you, your business or your movement regenerate our planet, while encouraging collaboration, cooperation and community building.</SecondRow>
                        <InnerGrid>
                            <Column>
                                <Item>88+ Countries: Co-create the New World</Item>
                                <Item>5000+ Regenerators & Change Agents</Item>
                                <Item>450+ Partners & Collaborators</Item>
                                <Item>Heal our planet with every purchase or sale</Item>
                            </Column>
                            <Column>
                                <Item>Pay no transaction fees</Item>
                                <Item>Have a direct voice in governance</Item>
                                <Item>Earn grants for regenerative initiatives</Item>
                                <Item>Earn an income/revenue for participating</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second></Second>
                            <Third href="https://joinseeds.earth/" target="_blank" rel="noreferrer">joinseeds.earth</Third>
                        </BottomRow>
                    </SwiperSlide>
                </Swiper>
                <Row>
                    <Text>SEEDS is an innovative economic system and cryptocurrency that is championing these issues by using the Telos network.</Text>
                </Row>
                </ColumnLeft>
                <ColumnRight>
                    <Article>Thanks to the governance that Telos is built upon, carbon neutral funding does not have to come from a centralized body. Instead, community members can vote to release network funds to chain initiatives who will carry out the rest of the process. If the vote passes, Telos will be the only blockchain to go carbon neutral through fully decentralized and autonomous voting. In the meantime, the nature of DPoS lets the community vote for the ethical validators like TelosGreen, a popular network validator that focuses on sustainability.</Article>
                    <Article>Consuming less energy or even going carbon neutral isn’t enough when it comes to having a positive environmental impact. Projects must actively find ways to foster environmental regeneration. With all the ESG tools available to developers, Telos has attracted many projects whose sole mission is improving and maintaining our natural resources. This has pushed Telos far ahead of competitors when it comes to environmental impact.</Article>
                    
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="additional" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="esgchart" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGSeeds;