import styled from "styled-components";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

import CPLUS from "../SVG/cplusplus.svg";
import SOLID from "../SVG/solidity.svg";

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
    background: ${props => props.theme.body};
    justify-content: center;
    @media screen and (max-width: 660px){
        font-size: 24px;
        height: 20vh;
    }
`;

const EmptyColumn = styled.div`
    width: 10%;
    height: 70vh;
    background: ${props => props.theme.body};
    float: left;
    @media screen and (max-width: 660px){
        display: none;
    }
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 70vh;
    background: ${props => props.theme.body};
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 40vh;
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 70vh;
    background: ${props => props.theme.body};
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 40vh;
    }
`;

const ColumnTitle = styled.div`
    font-size: 18px;
    padding-bottom: 40px;
    color: ${props => props.theme.text};
`;

const Image = styled(motion.img)`
    padding-bottom: 30px;   

`;

const BigTitle = styled.div`
    font-size: 24px;
    color: ${props => props.theme.text};
    padding-bottom: 30px;
    span{
        font-weight: bold;
    }
`;

const Description = styled.div`
    font-size: 14px;
    color: ${props => props.theme.text};
    padding: 0 100px;
    text-align: center;
`;





const Protocol = () => {

    const {ref, inView} = useInView();

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                pathLength: 1, scale: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                pathLength: 0, scale: 0.2,
            })
        }
        console.log("use effect hook, inView = " + inView);
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
                opacity: 0, y: '40px',
            })
        }
        console.log("use effect hook, inView = " + inView);
    }, [inView])

    return(
        <Section ref={ref}>
            <Title>Supporting the two leading Smart Contract protocols</Title>
            <EmptyColumn></EmptyColumn>
            <ColumnLeft>
                <ColumnTitle animate={animation}>TELOS NATIVE</ColumnTitle>
                <Image src={CPLUS} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                <BigTitle><span>Native</span> C++</BigTitle>
                <Description animate={animationTwo}>Telos natively runs EOSIO C++ smart contract technology. The leading decentralized stack for high throughput decentralized applications.</Description>
            </ColumnLeft>
            <ColumnRight>
                <ColumnTitle animate={animation}>TELOS NATIVE</ColumnTitle>
                <Image src={SOLID} alt=""  animate={animation} whileHover={{scale: 1.1}}/>
                <BigTitle><span>EVM</span> Solidity</BigTitle>
                <Description animate={animationTwo}>Telos is the first EVM compatible blockchain built on EOSIO. Deploy and run your Ethereum Apps using Telos EVM for the most performant & secure DeFi available today.</Description>
            </ColumnRight>
            <EmptyColumn></EmptyColumn>
        </Section>
    );
}

export default Protocol;