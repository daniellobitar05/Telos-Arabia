import styled from "styled-components";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {IconButton} from "@mui/material";
import Icon1 from "../SVG/performance.svg";
import Icon2 from "../SVG/funding.svg";
import Icon3 from "../SVG/community.svg";


const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 220vh;
    }
`;

const Title = styled.div`
    font-size: 82px;
    width: 100%;
    color: ${props => props.theme.text};  
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        height: 40vh;
    }
    
    
`;

const Grid = styled.div`
    width: 80%;
    height: 60vh;
    
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 180vh;
    }   
`;

const Column = styled(motion.div)`
    width: 33.3%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 60vh;
    }
`;

const IconContainer = styled(motion.div)`
    height: 40%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        width: 20%;
        border-radius: 50%;
        border: 1px solid aqua;
        padding: 10px;
        @media screen and (max-width: 768px){
            width: 25%;
        }
    }
`;

const TextContainer = styled.div`
    width: 100%;
    height: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 40%;
    }
`;

const TopText = styled.div`
    height: 40%;
    width: 100%;
    color: white;
    font-size: 36px;
    text-align: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const BottomText = styled.div`
    height: 60%;
    color: white;
    font-size: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 20px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
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
        y: '-30%'
    }
};

const CircleTransition = {
    duration: 4, 
    yoyo: Infinity,
    ease: 'easeInOut',
};

const Trans2 = {
    duration: 4, 
    yoyo: Infinity,
    ease: 'easeInOut',
    delay: 0.5
}
const Trans3 = {
    duration: 4, 
    yoyo: Infinity,
    ease: 'easeInOut',
    delay: 1.5
}

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
   background: transparent;
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
    
    
`;


const TextColumns = styled.div`
    height: 30vh;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TextColumn = styled.div`
    height: 100%;
    width: 40%;
    float: left;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const EmptyTextColumn = styled.div`
    height: 100%;
    width: 20%;
    float: left;
`;


const ESGIcons = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="esgicons">
            <Grid>
                <Column variants={ContainerVariants} initial='start' animate='end'>
                    <IconContainer variants={CircleVariants}  transition={CircleTransition}>
                        <img src={Icon1} alt="logo1" />
                    </IconContainer>
                    <TextContainer>
                        <TopText>Governance Structure</TopText>
                        <BottomText>Standards for running an initiative</BottomText>
                    </TextContainer>
                </Column>
                <Column variants={ContainerVariants} initial='start' animate='end'>
                    <IconContainer variants={CircleVariants}  transition={Trans2}>
                        <img src={Icon2} alt="logo1" />
                    </IconContainer>
                    <TextContainer>
                        <TopText>Socially Responsible</TopText>
                        <BottomText>Acting in a way that benefits society</BottomText>
                    </TextContainer>
                </Column>
                <Column variants={ContainerVariants} initial='start' animate='end'>
                    <IconContainer variants={CircleVariants}  transition={Trans3}>
                        <img src={Icon3} alt="logo1" />
                    </IconContainer>
                    <TextContainer>
                        <TopText>Environmentally Conscious </TopText>
                        <BottomText>Conserving the world’s natural resources</BottomText>
                    </TextContainer>
                </Column>
            </Grid>
            <TextColumns>
                <TextColumn>An ESG Global Survey found that asset owners allocated 48% of their funds towards ESG in 2017. This number grew to 75% in 2019, and these numbers are projected to grow to 92% by the end of 2021. This proves that there is a ton of value in ESG investments, both from a socially conscious standpoint as well as a financial perspective.</TextColumn>
                <EmptyTextColumn />
                <TextColumn>The history of ESG can be traced back to 2004. At that time, former UN Secretary General Kofi Annan invited 50+ CEOs of major financial institutions to develop recommendations on how to integrate ESG elements into capital markets. Everyone involved benefited from the move toward ESG, due to its ability to uncover value in areas where analytical methods fall short.</TextColumn>
            </TextColumns>
            <Empty>
                <IconColumnLeft to="todo" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="videos" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default ESGIcons;