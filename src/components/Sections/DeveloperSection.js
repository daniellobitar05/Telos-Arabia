import styled from "styled-components";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {IconButton} from "@mui/material";
import Dev1 from "../SVG/dev1.svg";
import Dev2 from "../SVG/dev2.svg";
import Dev3 from "../SVG/dev3.svg";
import Dev4 from "../SVG/dev4.svg";

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
    font-size: 72px;
    width: 100%;
    color: ${props => props.theme.text};  
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;





const IconHolder = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    width: 80%;
    height: 20vh;
    
    span {
        display: flex;
        height: 100px;
        width: 100px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid aqua;
    }
`;

const ContainerVariants = {
    start: {
        transition: {
          staggerChildren: 0.8
        }
    },
    end: {
        transition: {
           staggerChildren: 0.8
        }
    }
};

const CircleVariants = {
    start: {
        y: '0%'
    },
    end: {
        y: '-50%'
    }
};

const CircleTransition = {
    duration: 4, 
    yoyo: Infinity,
    ease: 'easeInOut',
};

const Wrapper = styled.div`
    width: 50vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TextContainer = styled.div`
    
    width: 80%;
    height: 10vh;
`;

const BoxColumn = styled.div`
    width: 25%;
    height: 100%;
    float: left;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BoxTitle = styled.div`
    width: 100%;
    height: 50%;
    color: aqua;
    font-size: 18px;
    text-align: center;
`;

const BoxSubtitle = styled.div`
    width: 75%;
    height: 50%;
    color: white;
    font-size: 16px;
    text-align: center;
    
`;

const Empty = styled.div`
    width: 100%;
    height: 15vh;
    display: inline-flex;
    
`;

const IconColumn = styled.div`
    width: 25%;
    height: 100%
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Subtitle = styled.div`
    font-size: 24px;
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

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;


const DeveloperSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="devresources">
            <Title>Developer Resources</Title>
            <Empty />
            <IconHolder variants={ContainerVariants} initial='start' animate='end'>
                <Wrapper>
                <motion.span variants={CircleVariants}  transition={CircleTransition}><img src={Dev1} alt="dev1"/></motion.span>
                </Wrapper>
                <Wrapper>
                <motion.span variants={CircleVariants}  transition={CircleTransition}><img src={Dev2} alt="dev2"/></motion.span>
                </Wrapper>
                <Wrapper>
                <motion.span variants={CircleVariants}  transition={CircleTransition}><img src={Dev3} alt="dev3"/></motion.span>
                </Wrapper>
                <Wrapper>
                <motion.span variants={CircleVariants}  transition={CircleTransition}><img src={Dev4} alt="dev4"/></motion.span>
                </Wrapper>
            </IconHolder>
            <TextContainer>
                <BoxColumn>
                    <BoxTitle>High performance</BoxTitle>
                    <BoxSubtitle>Fast transactions and low fees</BoxSubtitle>
                </BoxColumn>
                <BoxColumn>
                <BoxTitle>Seed funding available</BoxTitle>
                <BoxSubtitle>The network supports promising projects</BoxSubtitle>
                </BoxColumn>
                <BoxColumn>
                <BoxTitle>Aligned community</BoxTitle>
                <BoxSubtitle>Created to power purpose-driven action</BoxSubtitle>
                </BoxColumn>
                <BoxColumn>
                <BoxTitle>Modern UX</BoxTitle>
                <BoxSubtitle>Users can’t tell it’s built on a blockchain</BoxSubtitle>
                </BoxColumn>
            </TextContainer>
            <Empty />
            <Empty>
                <IconColumn>
                <LinkS to="docssection" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumn>
            <Subtitle></Subtitle>
                <IconColumn>
                    <IconButton onClick={toggleHome}><ArrowUp /></IconButton>
                </IconColumn>
            </Empty>
            
        </Section>
    );
}

export default DeveloperSection;