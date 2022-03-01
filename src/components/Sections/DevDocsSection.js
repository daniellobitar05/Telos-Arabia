import styled from "styled-components";
import {motion} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
    height: 20vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    height: 300px;
    column-gap: 10px;
    
    
`;

const Box = styled(motion.div)`
    width: 100%;
    height: 100%;
    
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

const IconColumn = styled.div`
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



const DevDocsSection = () => {
    return(
        <Section id="docssection">
            <Title>Review the below documentation and reference materials to get started</Title>
            <Empty />
            <Grid>
                <a href = "https://github.com/telosnetwork" target="_blank" rel="noreferrer"><Box whileHover={{scale: 1.15 }} whileTap={{scale: 0.7}} transition={{duration: 0.5, type: 'tween'}}>
                    <Icon><GithubIcon /></Icon>
                    <Text>Telos Network Github</Text>
                </Box></a>
                <a href = "https://developers.eos.io/welcome/latest/reference/index" target="_blank" rel="noreferrer"><Box whileHover={{scale: 1.15 }} whileTap={{scale: 0.7}} transition={{duration: 0.5, type: 'tween'}}>
                    <Icon><APIIcon /></Icon>
                    <Text>API References</Text>
                </Box></a>
                <a href = "https://docs.telos.net/" target="_blank" rel="noreferrer"><Box whileHover={{scale: 1.15 }} whileTap={{scale: 0.7}} transition={{duration: 0.5, type: 'tween'}}>
                    <Icon><DocIcon /></Icon>
                    <Text>Document Repository</Text>
                </Box></a>
                <a href = "https://docs.telos.net/developers/tutorials" target="_blank" rel="noreferrer"><Box whileHover={{scale: 1.15 }} whileTap={{scale: 0.7}} transition={{duration: 0.5, type: 'tween'}}>
                    <Icon><GovIcon /></Icon>
                    <Text>Evolutionary Governance</Text>
                </Box></a>
            </Grid>
            <Empty>
                <IconColumn>
                <LinkS to="devstack" smooth={true} duration={1000} spy={true} exact="true"><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumn>
            <Subtitle></Subtitle>
                <IconColumn>
                    <LinkS to="devresources" smooth={true} duration={1000} spy={true} exact="true"><IconButton ><ArrowUp /></IconButton></LinkS>
                </IconColumn>
            </Empty>
        </Section>
    );
}

export default DevDocsSection;