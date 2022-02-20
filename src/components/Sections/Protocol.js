import styled from "styled-components";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: green;

`;

const Title = styled.div`
    height: 30vh;
    color: white;
    font-size: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: red;
    justify-content: center;
    @media screen and (max-width: 660px){
        font-size: 24px;
        height: 20vh;
    }
`;

const EmptyColumn = styled.div`
    width: 10%;
    height: 70vh;
    background: green;
    float: left;
    @media screen and (max-width: 660px){
        display: none;
    }
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 70vh;
    background: orange;
    float: left;
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 40vh;
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 70vh;
    background: blue;
    float: left;
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 40vh;
    }
`;





const Protocol = () => {
    return(
        <Section>
            <Title>Supporting the two leading Smart Contract protocols</Title>
            <EmptyColumn></EmptyColumn>
            <ColumnLeft></ColumnLeft>
            <ColumnRight></ColumnRight>
        </Section>
    );
}

export default Protocol;