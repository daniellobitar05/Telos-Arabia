import styled from "styled-components";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import ApiIcon from '@mui/icons-material/Api';
import ArticleIcon from '@mui/icons-material/Article';
import GavelIcon from '@mui/icons-material/Gavel';

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
    font-size: 36px;
    width: 50%;
    color: ${props => props.theme.text};  
    height: 30vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    
`;

const Grid = styled.div`
    display: flex;
    height: 50vh;
    width: 100%;
`;

const Box = styled.a`
    width: 25%;
    height: 100%;
    float: left;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const Icon = styled.div`
    width: 100%;
    height: 40%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Text = styled.div`
    width: 60%;
    height: 60%;
    color: white;
    font-size: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    
`;

const GithubIcon = styled(GitHubIcon)`
    color: white;
    transform: scale(2.5);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const APIIcon = styled(ApiIcon)`
    color: white;
    transform: scale(2.5);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const DocIcon = styled(ArticleIcon)`
    color: white;
    transform: scale(2.5);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const GovIcon = styled(GavelIcon)`
    color: white;
    transform: scale(2.5);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const Empty = styled.div`
    width: 100%;
    height: 15vh;
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

const Card = styled(motion.div)`
    width: 70%;
    height: 90%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover{
        background: rgb(230,230,250,0.2);
    }
`;

const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    span {
        display: flex;
        height: 100px;
        width: 100px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        
        color: white;
        
    }
`;

const BottomCard = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 50%; 
`;

const CardText = styled.div`
    color: white;
    font-size: 28px;
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

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;





const DevDocsSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="docssection">
            <Title>Review the below documentation and reference materials to get started</Title>
            
            <Grid>
             <Box href="https://github.com/telosnetwork" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><GithubIcon /></span></TopCard>
                        <BottomCard><CardText>Telos Network Github</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="https://developers.eos.io/welcome/latest/reference/index" target="_blank" rel="noreferrer">
                     <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><APIIcon /></span></TopCard>
                        <BottomCard><CardText>API References</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="https://docs.telos.net/" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><DocIcon /></span></TopCard>
                        <BottomCard><CardText>Document Repository</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="https://docs.telos.net/developers/tutorials" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><GovIcon /></span></TopCard>
                        <BottomCard><CardText>Evolutionary Governance</CardText></BottomCard>
                    </Card>
                </Box>
            </Grid>
            <Empty>
                <IconColumnLeft to="devstack" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <Subtitle></Subtitle>
            <IconColumnRight to="devresources" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default DevDocsSection;