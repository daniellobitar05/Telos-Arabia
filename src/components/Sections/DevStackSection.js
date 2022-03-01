import {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import { wrap } from "popmotion";

import Icon1 from "../SVG/slider1.svg";
import Icon2 from "../SVG/slider2.svg";
import Icon3 from "../SVG/slider3.svg";
import Icon5 from "../SVG/slider5.svg";
import Icon7 from "../SVG/slider7.svg";
import Icon6 from "../SVG/dev3.svg";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const cards = [
    {
        icon: Icon7,
        title: "Telos amend",
        subtitle: "Open source decentralized document amendment service used for Telos governance"
    },
    {
        icon: Icon6,
        title: "Telos decide",
        subtitle: "Governance engine enables apps and services to democratize decision verifiably and immutably"
    },
    {
        icon: Icon5,
        title: "Telos dstor",
        subtitle: "dstor revolutionizes global data storage for web 3.0. Fast. Reliable. Censorship-resistant"
    },
    {
        icon: Icon3,
        title: "Telos Blockchain",
        subtitle: "The best governed DPOS public blockchain built with the leading blockchain protocol technology"
    },
    {
        icon: Icon3,
        title: "Telos Login",
        subtitle: "Login is an OAuth provider enabling secure decentralized login/permission system of telos"
    },
    {
        icon: Icon2,
        title: "Telos Swap",
        subtitle: "Multiply token trading pairs offering a network Bancor liquidity service for token swaps"
    },
    {
        icon: Icon1,
        title: "Telos Works",
        subtitle: "Works is the networks milestone based initiatives system built using Telos decide"
    },
]

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
    font-size: 52px;
    width: 100%;
    color: ${props => props.theme.text};  
    height: 15vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    
    
`;

const Subtitle = styled.div`
    font-size: 18px;
    width: 50%;
    color: ${props => props.theme.text};
    text-align: center; 
    float: left;
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Carousel = styled(motion.div)`
    cursor: grab;
    height: 60vh;
    overflow: hidden;
    
    
`;

const InnerCarousel = styled(motion.div)`
    display: flex;
    height: 60vh;
    
   
`;

const Items = styled(motion.div)`
    min-width: 250px;
    min-height: 300px;
    padding: 30px 50px 30px 50px;
    @media screen and (max-width: 768px){
        
    }
`;

const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: rgb(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    box-shadow: 0 8px 26px 0 ${props => props.theme.text};
`;

const IconHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 20vh;
    
    span {
        display: flex;
        height: 75px;
        width: 75px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid aqua;
    }
`;

const SliderTitle = styled.div`
    color: aqua;
    height: 20%;
    width: 100%;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SliderSubtitle = styled.div`
    color: white;
    height: 50%;
    width: 80%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Empty = styled.div`
    width: 100%;
    height: 15vh;
    display: inline-flex;
    
    
`;

const IconColumn = styled.div`
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

const Wrapper = styled.div`
    margin: 0 20%;
    width: 100%;
    
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const DevStackSection = () => {

    const [width, setWidth] = useState(0);
    const carroussel = useRef();
    

    useEffect(() => {
        //console.log(carroussel.current.scrollWidth, carroussel.current.offsetWidth);
        setWidth(carroussel.current.scrollWidth - carroussel.current.offsetWidth);
    }, [])

    return(
        <Section id="devstack">
            <Title>Explore the Telos Network developer stack</Title>
            <Subtitle>The Telos Network is fast becoming the ultimate web 3.0 stack, providing developers and entrepreneurs the tools to succeed in the next generation of the decentralised internet economy</Subtitle>
            <Wrapper>
            <Carousel ref={carroussel}>
                <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}}>
                    {cards.map(card => {
                        return(
                            <Items>
                                <CardContainer>
                                    <IconHolder><span><img src={card.icon} alt="" key={card.title} /></span></IconHolder>
                                    <SliderTitle>{card.title}</SliderTitle>
                                    <SliderSubtitle>{card.subtitle}</SliderSubtitle>
                                </CardContainer>
                            </Items>
                        );
                    })}
                </InnerCarousel>
            </Carousel>
            </Wrapper>
            <Empty>
                <IconColumn>
                <LinkS to="devstack" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumn>
            <EmptyColumn></EmptyColumn>
                <IconColumn>
                    <LinkS to="docssection" smooth={true} duration={1000} spy={true} exact="true"><IconButton ><ArrowUp /></IconButton></LinkS>
                </IconColumn>
            </Empty>
        </Section>
    );
}

export default DevStackSection;