import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Section = styled.div`
    width: 100%;
    height: 150vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Article = styled.div`
    width: 80vw;
    font-size: 22px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    a{
        color: aqua;
        text-decoration: none;
    }
`;

const Title = styled.div`
    height: 20vh;
    width: 80%;
    font-size: 32px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 768px){
        height: 20vh;;
    }
`;




const ConclusionSection = () => {
    return(
        <Section id="conclusion">
            <Article>One of the consequences of such speed and scalability on telos has been rapid adoption and usage, resulting in telos being the 2nd most utilized blockchain in the world throughout most of 2019 and 2020.</Article>
            <Title>#1 Low impact energy usage compared to traditional POW models</Title>
            <Article>The EOSIO software, that the Telos Network is based on, is roughly 17,000 times more energy efficient than networks such as Ethereum. Proof-of-work models are time-intensive and require excessive amounts of computing power to solve complex puzzles. This allows these computers to “mine” the coins on the network that pays them. In POW the node operators are competing against one another to be the first to solve a complex puzzle with their reward being the newly minted token.</Article>
            <Article>In contrast, the Telos Blockchain Network just requires the coordination of validators using the same software to verify transactions. The Telos token holders elect the node operators, with the top 50 dividing the rewards. The tokens are sold on participating exchanges, allowing anyone to own the TLOS tokens and stake them for resources. This system makes the mining process virtual. Since no real-world resources are being exploited and energy is not being wasted on massive server farms needed to solve the complex puzzles, this method is infinitely more environmentally friendly.</Article>
            <Title>Conclusion</Title>
            <Article>There is a shift happening in the leadership paradigm of the internet. Users and developers want a more collaborative decision-making model that empowers everyone, rather than just a select few.</Article>
            <Article>Telos is designed to help bring about this change and allow humanity to flourish by building the economy of the future.  Over time, the vibrant Telos community is building its network as a place for purpose-driven startups, individual developers, and more. Join us!</Article>

        </Section>
    )
}

export default ConclusionSection;