import { animateScroll as scroll } from "react-scroll";
import {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import telos from "../images/telos_logo.png";
import eth from "../images/eth_logo.png";
import btc from "../images/btc.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    
    align-items: center;
    justify-content: center;
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 80%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 80%;
    display: flex;
    float: left;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const GraphWrapper = styled.div`
    width: 80%;
    height: 70vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const PositionRow = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
`;

const Position = styled.div`
    height: 100%;
    width: 9.09%;
    
    float: left;
    display: flex;
    
    justify-content: center;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        
    }
`;

const BarRow = styled.div`
    height: 70%;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

const EmptyGraphColumn = styled.div`
    height: 0;
    width: 9.09%;
    float: left;
    
`;

const Text = styled.div`
    color: white;
    font-size: 16px;
    text-align: center;
`;

const TelosColumn = styled(motion.div)`
    max-height: 1%;
    width: 9.09%;
    float: left;
    background: purple;
`;
const BTCColumn = styled(motion.div)`
    max-height: 100%;
    width: 9.09%;
    float: left;
    background: purple;
`;
const ETHColumn = styled(motion.div)`
    max-height: 46%;
    width: 9.09%;
    float: left;
    background: purple;
`;

const TitleRow = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    
`;

const IconRow = styled.div`
    width: 100%;
    height: 10%;
    
    display: flex;
    
    
`;

const Subtitle = styled.div`
    font-size: 18px;
    width: 80%;
    color: ${props => props.theme.text};
    text-align: center; 
    
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        color: aqua;
    }
    @media screen and (max-width: 768px){
        width: 90%;
        height: 20vh;
    }
`;




const ESGChart = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView();

    function ChangeNumber () {
        const counters = document.querySelectorAll('.esggraph');
        counters.forEach(counter => {
            counter.innerText = "0";

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;

                const increment = target / 100;
                
                if (c < target){
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 2);
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

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                height: '100%',
                transition: {
                    duration: 2,
                    delay: 0.5 
                }
            });
        }
        if(!inView){
            animation.start({
                height: 0, 
            })
        }
        
    }, [inView])

    return(
        <Section id="esgchart">
            <ColumnLeft>
            <GraphWrapper ref={ref}>
               <PositionRow>
               <Position></Position>
               <Position></Position>
                        <Position><Text className="esggraph" data-target="126" style={{transform: 'translate(0%, 40%)'}}></Text> </Position>
                        <Position></Position>
                        <Position><Text className="esggraph" data-target="49" style={{transform: 'translate(0%, 300%)'}}></Text></Position>
                        <Position></Position>
                        <Position style={{width: '100px'}}><Text style={{transform: 'translate(-30%, 570%)', fontSize: '14px'}}>Telos uses less than 0.0004 TWH Annually</Text></Position>
                        <Position></Position>
                </PositionRow>  
                <BarRow>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <BTCColumn animate={animation}></BTCColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <ETHColumn animate={animation}></ETHColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <TelosColumn animate={animation}></TelosColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                </BarRow>
                <TitleRow>
                        <Position></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>BTC</Text></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>ETH</Text></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>TLOS</Text></Position>
                        <Position></Position>
                    </TitleRow>
                    <IconRow>
                        <Position></Position>
                        <Position></Position>
                        <Position><img src={btc} alt="" /></Position>
                        <Position></Position>
                        <Position><img src={eth} alt="" style={{transform: 'scale(1.1)'}}/></Position>
                        <Position></Position>
                        <Position><img src={telos} alt="" /></Position>
                        <Position></Position>
                    </IconRow>  
            </GraphWrapper>
            </ColumnLeft>
            <ColumnRight>
                <Subtitle><p>A <a href="" >recent analysis </a>found that Telos’ energy consumption estimates are lower than any major competitor, even Visa! Beyond estimates, the community is currently auditing their energy consumption and CO2 generation based on detailed reports from all network validators.</p></Subtitle>
                <Subtitle>This will allow users to accurately predict their energy usage and mitigate it through community approved carbon credit purchases and Telos-based initiatives such as SEEDS, LocalScale, and Corcocoin projects. All these efforts ensure Telos provides the gold standard of environmental transparency in the blockchain industry.</Subtitle>
            </ColumnRight>
        </Section>
    )
}

export default ESGChart;