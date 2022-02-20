import React from 'react'
import styled from "styled-components";
import {motion} from "framer-motion";

import Wombat from "../images/wombat_logo.png";
import Anchor from "../images/anchor_logo.png";
import Meta from "../images/metamask_logo.png";

const Section = styled.div`
    width: 100%;
    height: 200vh;
    background: black;
    display: flex;
    background: white;
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 100%;
    float: left;
    align-self: center;
    background: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 100%;
    float: left;
    align-self: center;
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
    }
`;

const EmptyColumn = styled.div`
    width: 10%;
    height: 100%;
    float: left;
`;

const ColumnTitle = styled.div`
    font-size: 18px;
    padding: 40px 0;
    color: ${props => props.theme.text};

`;

const Box = styled.div`
    height: 200px;
    width: 70%;
    background: red;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    background: #666666;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`;

const BigTitle = styled.div`
    font-size: 24px;
    color: ${props => props.theme.text};
    padding-bottom: 30px;
    font-weight: bold;
    span{
        font-weight: bold;
    }
`;

const MiniColumn = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`;

const BoxTitle = styled.div`
    display: flex;
    font-size: 16px;
    padding: 5px 0;
    color: white;
`;


const GetStartedSection = () => {
  return (
    <Section>
        <EmptyColumn />
        <ColumnLeft>
            <ColumnTitle >TELOS NATIVE</ColumnTitle>
            <BigTitle>Choose a signer</BigTitle>
            <Box>
                <MiniColumn><img src={Wombat} alt="" /><BoxTitle>Wombat</BoxTitle></MiniColumn>
                <MiniColumn>
                    <img src={Anchor} alt="" />
                    <BoxTitle>Anchor</BoxTitle>
                    <BoxTitle>RECOMMENDED</BoxTitle>
                </MiniColumn>
                
            </Box>
        </ColumnLeft>
        <ColumnRight>
            <ColumnTitle >TELOS EVM</ColumnTitle>
            <BigTitle>Install MetaMask</BigTitle>
            <Box>
                <img src={Meta} alt="" /> 
            </Box>
        </ColumnRight>
        <EmptyColumn />
    </Section>
  )
}

export default GetStartedSection