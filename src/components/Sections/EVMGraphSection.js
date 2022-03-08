import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Telos from "../images/telos_logo.png";
import ETH from "../images/eth_logo.png";
import Matic from "../images/matic_logo.png";
import BSC from "../images/bsc_logo.png";

import EVM1 from "../images/evm2.png";
import Speed1 from "../SVG/speed1.svg";
import Speed2 from "../SVG/speed2.svg";
import Speed3 from "../SVG/speed3.svg";
import Speed4 from "../SVG/speed4.svg";


const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 60%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 72px;
`;

const LeftTitle = styled.div`
    height: 60%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 28px;
`;

const Row = styled.div`
    display: inline-flex;
    height: 20%;
    width: 80%;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.div`
    height: 100%;
    width: 30%;
    
`;

const IconText = styled.div`
    height: 100%;
    width: 70%;
    font-size: 20px;

`;

const Columns = styled.div`
    width: 100%;
    height: 90vh;
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${EVM1});
    background-repeat: no-repeat;
    background-size: cover;
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

const TelosColumn = styled(motion.div)`
    max-height: 100%;
    width: 9.09%;
    float: left;
    background: purple;
`;

const TDFColumn = styled(motion.div)`
    max-height: 72.8%;
    width: 9.09%;
    float: left;
    background: purple; 
`;

const EOSColumn = styled(motion.div)`
    max-height: 6%;
    width: 9.09%;
    float: left;
    background: purple; 
`;

const SCRColumn = styled(motion.div)`
    max-height: 3%;
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

const Text = styled.div`
    color: white;
    font-size: 16px;
    text-align: center;
`;

const IconColumnRight = styled(LinkS)`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

`;

const ToggleColumn = styled.div`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const IconColumnLeft = styled(LinkS)`
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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


const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;

const EVMGraphSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView();

    function ChangeNumber () {
        const counters = document.querySelectorAll('.graphcounter');
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
        <Section id="evmgraph">
            
            <Columns>
                <ColumnLeft>
                <Title>Speed & Scalability</Title>
                <LeftTitle>
                    <Row>
                        <Icon><img src={Speed1} alt="" /></Icon>
                        <IconText>0.5 Second Block Times</IconText>
                    </Row>
                    <Row>
                        <Icon><img src={Speed2} alt="" /></Icon>
                        <IconText>As little as 1/1000th the cost of Ethereum</IconText>
                    </Row>
                    <Row>
                        <Icon><img src={Speed3} alt="" /></Icon>
                        <IconText>Over 100x the capacity of Ethereum</IconText>
                    </Row>
                    <Row>
                        <Icon><img src={Speed4} alt="" /></Icon>
                        <IconText>Up to 10,000 Transactions/Second</IconText>
                    </Row>
                </LeftTitle>
                
                </ColumnLeft>
                <ColumnRight>
                <GraphWrapper ref={ref}>
                    <PositionRow>
                        <Position></Position>
                        <Position><Text className="graphcounter" data-target="10000" style={{transform: 'translate(0%, 40%)'}}></Text> </Position>
                        <Position></Position>
                        <Position><Text className="graphcounter" data-target="7200" style={{transform: 'translate(0%, 230%)'}}></Text></Position>
                        <Position></Position>
                        <Position><Text className="graphcounter" data-target="50" style={{transform: 'translate(0%, 700%)'}}></Text></Position>
                        <Position></Position>
                        <Position><Text className="graphcounter" data-target="25" style={{transform: 'translate(0%, 720%)'}}></Text></Position>
                        <Position></Position>
                    </PositionRow>
                    <BarRow>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <TelosColumn animate={animation}></TelosColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <TDFColumn animate={animation}></TDFColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <EOSColumn animate={animation}></EOSColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <SCRColumn animate={animation}></SCRColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                    </BarRow>
                    <TitleRow>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>TLOS</Text></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>MATIC</Text></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>BSC</Text></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>ETH</Text></Position>
                        <Position></Position>
                    </TitleRow>
                    <IconRow>
                        <Position></Position>
                        <Position><img src={Telos} alt="" /></Position>
                        <Position></Position>
                        <Position><img src={Matic} alt="" /></Position>
                        <Position></Position>
                        <Position><img src={BSC} alt="" /></Position>
                        <Position></Position>
                        <Position><img src={ETH} alt="" /></Position>
                        <Position></Position>
                    </IconRow>
                </GraphWrapper>
                </ColumnRight>
            </Columns>
            <Empty>
                <IconColumnLeft to="nofront" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="startnowtwo" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default EVMGraphSection;