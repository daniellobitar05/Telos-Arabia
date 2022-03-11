import styled from "styled-components";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {IconButton} from "@mui/material";
import Visa from "../images/visa.png";
import Matic from "../SVG/logos/matic.svg";
import xrp from "../SVG/logos/xrp.svg";
import ada from "../SVG/logos/ada.svg";

import btc from "../images/btc.png";
import eth from "../images/eth_logo.png";
import telos from "../images/telos_logo.png";


const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back6};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 220vh;
    }
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
    
    
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

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
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

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;

const Grid = styled.div`
    height: 80vh;
    width: 90%;
    background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 6px 6px 20px limegreen;
`;

const GridTitle = styled.div`
    display: flex;
    width: 90%;
    height: 20vh;
    color: white; 
    font-size: 42px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const GridWrapper = styled.div`
    width: 90%;
    height: 60vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

const LeftColumn = styled.div`
    width: 40%;
    height: 100%;
    float: left;

`;

const CenterColumn = styled.div`
    width: 40%;
    height: 100%;
    float: left;

`;

const SmallColumn = styled.div`
    width: 20%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
`;

const FirstRow = styled.div`
    width: 100%;
    height: 20vh;
    display: inline-flex;

`;

const Row = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
    
    align-items: center;
    justify-content: center;
`;

const RowItem = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const IconHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 25%;
    

`;

const Name = styled.div`
    width: 100%;
    height: 25%;
    font-size: 16px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const Icon = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    
    img{
        width: 60px;
        height: auto;
        
        
    }
`;

const ESGGreenest = () => {


    const {ref, inView} = useInView();

    function ChangeNumber () {
        const counters = document.querySelectorAll('.greencounter');
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

    return(
        <Section id="greenest">
            <Empty></Empty>
            <Grid ref={ref}>
            <GridTitle>Telos is the #GreenestBlockchain</GridTitle> 
            <GridWrapper>
                <LeftColumn>
                    <FirstRow>
                        <IconHolder>
                            <Name>VISA</Name>
                            <Icon><img src={Visa} alt="" /></Icon>
                        </IconHolder>
                        <IconHolder>
                            <Name>MATIC</Name>
                            <Icon><img src={Matic} alt="" /></Icon>
                        </IconHolder>
                        <IconHolder>
                            <Name>ADA</Name>
                            <Icon><img src={ada} alt="" /></Icon>
                        </IconHolder>
                        <IconHolder>
                            <Name>XRP</Name>
                            <Icon><img src={xrp} alt="" /></Icon>
                        </IconHolder>
                    </FirstRow>
                    <Row>
                        <RowItem className="greencounter" data-target="0.02"></RowItem>
                        <RowItem className="greencounter" data-target="0.008"></RowItem>
                        <RowItem className="greencounter" data-target="0.006"></RowItem>
                        <RowItem className="greencounter" data-target="0.4"></RowItem>
                    </Row>
                    <Row>
                        <RowItem className="greencounter" data-target="562795"></RowItem>
                        <RowItem className="greencounter" data-target="2159"></RowItem>
                        <RowItem className="greencounter" data-target="16428"></RowItem>
                        <RowItem className="greencounter" data-target="1023840"></RowItem>
                    </Row>
                    <Row>
                        <RowItem className="greencounter" data-target="0.001"></RowItem>
                        <RowItem className="greencounter" data-target="0.000003"></RowItem>
                        <RowItem className="greencounter" data-target="0.0007"></RowItem>
                        <RowItem className="greencounter" data-target="0.0008"></RowItem>
                    </Row>
                </LeftColumn>
                <CenterColumn>
                    <FirstRow>
                    <IconHolder>
                            <Name>ETH 2.0</Name>
                            <Icon><img src={eth} alt="" /></Icon>
                        </IconHolder>
                        <IconHolder>
                            <Name>ETH</Name>
                            <Icon><img src={eth} alt="" /></Icon>
                        </IconHolder>
                        <IconHolder>
                            <Name>BTC</Name>
                            <Icon><img src={btc} alt="" /></Icon>
                        </IconHolder>
                        <IconHolder>
                            <Name>TELOS</Name>
                            <Icon><img src={telos} alt="" /></Icon>
                        </IconHolder>
                    </FirstRow>
                    <Row>
                        <RowItem className="greencounter" data-target="0.02"></RowItem>
                        <RowItem className="greencounter" data-target="0.49"></RowItem>
                        <RowItem className="greencounter" data-target="126"></RowItem>
                        <RowItem className="greencounter" data-target="0.0004"></RowItem>
                    </Row>
                    <Row>
                        <RowItem className="greencounter" data-target="67640"></RowItem>
                        <RowItem className="greencounter" data-target="135280911"></RowItem>
                        <RowItem className="greencounter" data-target="4234777133"></RowItem>
                        <RowItem className="greencounter" data-target="1052"></RowItem>
                    </Row>
                    <Row>
                        <RowItem className="greencounter" data-target="0.04"></RowItem>
                        <RowItem className="greencounter" data-target="104"></RowItem>
                        <RowItem className="greencounter" data-target="1547"></RowItem>
                        <RowItem className="greencounter" data-target="0.000001"></RowItem>
                    </Row>
                </CenterColumn>
                <SmallColumn>
                    <FirstRow></FirstRow>
                    <Row>
                        <RowItem>TWh/year</RowItem>
                    </Row>
                    <Row>
                        <RowItem>KWh/day</RowItem>
                    </Row>
                    <Row>
                        <RowItem>KWh/transaction</RowItem>
                    </Row>
                </SmallColumn>
            </GridWrapper>
            </Grid>
            <Empty>
                <IconColumnLeft to="esgchart" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="governance" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default ESGGreenest;

