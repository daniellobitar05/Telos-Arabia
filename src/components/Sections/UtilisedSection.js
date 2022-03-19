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

import EOS from "../images/EOS.png";
import Telos from "../images/telos_logo.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back7};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled(motion.div)`
    width: 80%;
    height: 40vh;
    text-align: center;
    font-size: 52px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Column = styled(motion.div)`
    width: 80%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
`;

const Row = styled.div`
    height: 10vh;
    width: 100%;
    display: inline-flex;
`;

const SmallItem = styled.div`
    width: 9.09%;
    height: 100%;
    color: white;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    img{
        width: 30px;
    }
`;

const BigItem = styled.div`
    width: 18.08%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
`;

const Text = styled.div`
    color: white;
    font-size: 18px;  
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





const UtilisedSection = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    function ChangeNumber () {
        const counters = document.querySelectorAll('.utilcounter');
        counters.forEach(counter => {
            counter.innerText = "0";

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;

                const increment = target / 100;
                
                if (c < target){
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                }
            }
            updateCounter();
        });
    }

    useEffect(() => {
        if(inView){
            ChangeNumber();
        }
    }, [inView])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    

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
        <Section id="utilised" ref={ref}>
            <HeaderText animate={animation}>Telos is the 2nd most utilised blockchain in the world - blocktivity.info</HeaderText>
            <Column animate={animationTwo}>
                <Row>
                    <SmallItem></SmallItem>
                    <SmallItem>NAME</SmallItem>
                    <BigItem>ACTIVITY</BigItem>
                    <BigItem>AVERAGE</BigItem>
                    <BigItem>RECORD</BigItem>
                    <SmallItem>MARKET CAP</SmallItem>
                    <SmallItem>AVI</SmallItem>
                    <SmallItem>CUI</SmallItem>
                </Row>
                <Row>
                    <SmallItem><img src={EOS} alt="" /></SmallItem>
                    <SmallItem>EOS</SmallItem>
                    <BigItem><Text className="utilcounter" data-target="61004936"> </Text></BigItem>
                    <BigItem><Text className="utilcounter" data-target="60036560"> </Text></BigItem>
                    <BigItem><Text className="utilcounter" data-target="74567958"> </Text></BigItem>
                    <SmallItem><span>$</span><Text className="utilcounter" data-target="2.8"> </Text><span>B</span></SmallItem>
                    <SmallItem><Text className="utilcounter" data-target="6541"> </Text></SmallItem>
                    <SmallItem>MEDIUM</SmallItem>
                </Row>
                <Row>
                    <SmallItem><img src={Telos} alt="" /></SmallItem>
                    <SmallItem>TLOS</SmallItem>
                    <BigItem><Text className="utilcounter" data-target="3539683"> </Text></BigItem>
                    <BigItem><Text className="utilcounter" data-target="5600876"> </Text></BigItem>
                    <BigItem><Text className="utilcounter" data-target="32217207"> </Text></BigItem>
                    <SmallItem><span>$</span><Text className="utilcounter" data-target="0.014"> </Text><span>B</span></SmallItem>
                    <SmallItem><Text className="utilcounter" data-target="77843"> </Text></SmallItem>
                    <SmallItem>MEDIUM</SmallItem>
                </Row>
            </Column>
            <Empty>
                <IconColumnLeft to="conclusion" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="dpos" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default UtilisedSection;