import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {IconButton} from "@mui/material";
import YouTube from 'react-youtube';
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Telos from "../SVG/telos_letter_logo.svg";
import Seeds from "../images/seeds.png";
import Lips from "../images/lips_logo.jpg";

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
    background: ${props => props.theme.back11};
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
    
        background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);

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

const GridTitle = styled.div`
    width: 100%;
    height: 10vh;
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const Articles = styled.div`
    width: 100%;
    height: 40vh;
    transform: translate(-10%, 0);
`;

const Video = styled.div`
    width: 90%;
    height: 40vh;
    
`;

const Article = styled.div`
    color: white; 
    width: 100%;
    font-size: 14px;
    display: flex;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
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
    font-size: 18px;
    text-align: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    
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
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;

`;

const SecondRow = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 14px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const InnerGrid = styled.div`
    width: 100%;
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
    width: 95%;
    height: 33%;
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
    background-image: url(${Lips});
    background-repeat: no-repeat;
    background-size: (70px, auto);
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


const ESGLips = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    class VideoOne extends React.Component {
        render() {
          const opts = {
            height: '280',
            width: '410',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
      
          return <YouTube videoId="CT-DW7F5nYE" opts={opts} onReady={this._onReady} />;
        }
      
        _onReady(event) {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
      }

    return(
        <Section id="lips">
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
                        <SecondRow>Lips is a community-designed social media platform and marketplace with a social mission: to improve the mental health and financial well-being of women, non-binary folks, and the LGBTQIA+ community. It serves as a digital space where these groups can express themselves creatively and never worry about being banned or targeted with abuse.</SecondRow>
                        <InnerGrid>
                            <Column>
                                <Item>Over 10,000 new users in the first month</Item>
                                <Item>Winner LGBTQ+ Inclusion in Tech Award</Item>
                                <Item>Featured in Mashable, The Daily Beast, Forbes, Huffington Post</Item>
                            </Column>
                            <Column>
                                <Item>An inclusive app for marginalized voices</Item>
                                <Item>Supporting historically marginalised communities</Item>
                                <Item>Earn an income/revenue for participating</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second></Second>
                            <Third href="http://lips.social/" target="_blank" rel="noreferrer">lips.social</Third>
                        </BottomRow>
                    </SwiperSlide>
                </Swiper>
                <Row>
                    <Text>The project has already raised over $62,000 in public funding and received features in Mashable, The Daily Beast, HuffPost and Forbes. Lips also won the LGBTQ+ Inclusion in Tech Award from WomenTech Network. Lips is one of the most recognized socially conscious projects in the blockchain space, and one of</Text>
                </Row>
                </ColumnLeft>
                <ColumnRight>
                <GridTitle>Social Case Study: Lips</GridTitle>
                    <Articles>
                    <Article>Lips is a recent addition to the Telos ecosystem with a powerful and timely social mission. Lips partnered with Telos after an exhaustive search of blockchain networks that could eliminate the risk of deplatforming.</Article>
                    <Article>The platform is reshaping the social media landscape in a way that empowers women, non-binary folks, and the LGBTQIA+ community. The creators of this platform set out to create an environment which combats the censorship, harassment and plagiarism that these marginalized communities face on major social media platforms. The platform also gathers data surrounding important social topics which can be integrated into other platforms, creating a more inclusive internet across the board. </Article>
                    </Articles>  
                    <Video><VideoOne /></Video> 
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="additionaltwo" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="social" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGLips;