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
    height: 100vh;
    background: ${props => props.theme.back8};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Article = styled(motion.div)`
    width: 80vw;
    font-size: 20px;
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

const Title = styled(motion.div)`
    height: 10vh;
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

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: center;
    justify-content: space-around;

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





const ConclusionSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw'
            })
        }
        
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
                opacity: 0, y: '100px',
            })
        }
        
    }, [inView])

    return(
        <Section id="conclusion" ref={ref}>
            <Wrapper>
            <Article animate={animationTwo}>One of the consequences of such speed and scalability on telos has been rapid adoption and usage, resulting in telos being the 2nd most utilized blockchain in the world throughout most of 2019 and 2020.</Article>
            <Title animate={animation}>#1 Low impact energy usage compared to traditional POW models</Title>
            <Article animate={animationTwo}>The EOSIO software, that the Telos Network is based on, is roughly 17,000 times more energy efficient than networks such as Ethereum. Proof-of-work models are time-intensive and require excessive amounts of computing power to solve complex puzzles. This allows these computers to “mine” the coins on the network that pays them. In POW the node operators are competing against one another to be the first to solve a complex puzzle with their reward being the newly minted token.</Article>
            <Article animate={animationTwo}>In contrast, the Telos Blockchain Network just requires the coordination of validators using the same software to verify transactions. The Telos token holders elect the node operators, with the top 50 dividing the rewards. The tokens are sold on participating exchanges, allowing anyone to own the TLOS tokens and stake them for resources. This system makes the mining process virtual. Since no real-world resources are being exploited and energy is not being wasted on massive server farms needed to solve the complex puzzles, this method is infinitely more environmentally friendly.</Article>
            <Title animate={animation}>Conclusion</Title>
            <Article animate={animationTwo}>There is a shift happening in the leadership paradigm of the internet. Users and developers want a more collaborative decision-making model that empowers everyone, rather than just a select few.</Article>
            <Article animate={animationTwo}>Telos is designed to help bring about this change and allow humanity to flourish by building the economy of the future.  Over time, the vibrant Telos community is building its network as a place for purpose-driven startups, individual developers, and more. Join us!</Article>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="footer" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="utilised" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ConclusionSection;