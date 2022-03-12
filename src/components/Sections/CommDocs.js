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
    background: ${props => props.theme.back2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 220vh;
    }
`;



const Grid = styled(motion.div)`
    display: flex;
    height: 90vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 170vh;
        
    }
`;

const Box = styled.a`
    width: 25%;
    height: 70%;
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
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
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





const CommDocs = () => {

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
                x: '100vw',
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
                opacity: 0, y: '40px',
            })
        }
        
    }, [inView])

    return(
        <Section id="docssection" ref={ref}>
            
            
            <Grid animate={animationTwo}>
             <Box href="https://github.com/telosnetwork" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><GithubIcon /></span></TopCard>
                        <BottomCard><CardText>Github التابع لشبكة تيلوس</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="https://developers.eos.io/welcome/latest/reference/index" target="_blank" rel="noreferrer">
                     <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><APIIcon /></span></TopCard>
                        <BottomCard><CardText>API مراجع</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="https://docs.telos.net/" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><DocIcon /></span></TopCard>
                        <BottomCard><CardText>مستودع المستندات</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="https://docs.telos.net/developers/tutorials" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1, y: '10%'}} whileTap={{scale: 0.9}}>
                        <TopCard><span><GovIcon /></span></TopCard>
                        <BottomCard><CardText>Telos Network Whitepaper</CardText></BottomCard>
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

export default CommDocs;