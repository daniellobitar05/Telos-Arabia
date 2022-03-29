import {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
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
    background: ${props => props.theme.back3};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 230vh;
    }
`;

const Title = styled(motion.div)`
    font-size: 52px;
    width: 50%;
    color: ${props => props.theme.text};  
    height: 30vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        width: 80%;
        font-size: 48px;
    }
    
`;

const Grid = styled(motion.div)`
    display: flex;
    height: 50vh;
    width: 100%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 180vh;
        
    }
`;

const Box = styled.a`
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 80%;
        height: 50vh;
    }
    
`;



const GithubIcon = styled(GitHubIcon)`
    color: white;
    transform: scale(2);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const APIIcon = styled(ApiIcon)`
    color: white;
    transform: scale(2);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const DocIcon = styled(ArticleIcon)`
    color: white;
    transform: scale(2);
    border-radius: 50px;
    padding: 10px;
    border: 1px solid aqua;
`;

const GovIcon = styled(GavelIcon)`
    color: white;
    transform: scale(2);
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
    background: transparent;

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
    border: 1px solid purple;
    background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
    &:hover{
        background: rgb(230,230,250,0.2);
    }
    @media screen and (max-width: 768px){
        height: 40vh;
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
        height: 85px;
        width: 85px;
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
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    span {
        margin: 0 8px;
        font-size: 24px;
    }
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
    background: transparent;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;





const DevDocsSection = () => {

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
                x: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw',
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
        <Section id="docssection" ref={ref}>
            <Title animate={animation}>راجع الوثائق والمواد المرجعية أدناه للبدء</Title>
            
            <Grid animate={animationTwo}>
             <Box href="https://github.com/telosnetwork" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><GithubIcon /></span></TopCard>
                        <BottomCard><CardText><p><t>التابع لشبكة تيلوس</t><span>Github</span></p></CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="https://developers.eos.io/welcome/latest/reference/index" target="_blank" rel="noreferrer">
                     <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><APIIcon /></span></TopCard>
                        <BottomCard><CardText><p><t>مراجع</t><span>API</span></p></CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="https://docs.telos.net/" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><DocIcon /></span></TopCard>
                        <BottomCard><CardText>مستودع المستندات</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="https://docs.telos.net/developers/tutorials" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><GovIcon /></span></TopCard>
                        <BottomCard><CardText>الحكم التطوري</CardText></BottomCard>
                    </Card>
                </Box>
            </Grid>
            <Empty>
                <IconColumnLeft to="devstack" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}>
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <Subtitle></Subtitle>
            <IconColumnRight to="devresources" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}>
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default DevDocsSection;