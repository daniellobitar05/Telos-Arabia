import styled from "styled-components";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: purple;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 220vh;
    }
`;

const Title = styled.div`
    font-size: 52px;
    width: 50%;
    color: ${props => props.theme.text};  
    height: 25vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 80%;
        font-size: 48px;
    }
`;

const Subtitle = styled.div`
    width: 80vw;
    font-size: 22px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 15vh;
    
`;

const VideoWrapper = styled.div`
    width: 90%;
    height: 50vh;
    display: flex;
    background: red;
`;

const VideoLeft = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/* const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
 */


const WhatisESG = () => {
    return(
        <Section>
            <Title>What is ESG and why does it matter?</Title>
            <Subtitle>The acronym ESG stands for Environmental, Social and Governance. It’s a criterion which is popular in the world of business and investing. ESG is used to identify risks that may be missed through traditional forms of analysis.</Subtitle>
            <VideoWrapper>
                <VideoLeft></VideoLeft>
            </VideoWrapper>
        </Section>
    )
}

export default WhatisESG;