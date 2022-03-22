import {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import GitHubIcon from '@mui/icons-material/GitHub';
import ApiIcon from '@mui/icons-material/Api';
import ArticleIcon from '@mui/icons-material/Article';
import {Button} from "@mui/material";

import PDF from "../../data/Telos-Whitepaper.pdf";
import PDF2 from "../../data/styleguide.pdf";

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

const AgreeIcon = styled(ThumbUpOffAltIcon)`
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
    @media screen and (max-width: 768px){
        height: 5vh;
    }
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
    z-index: 100;
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
    font-size: 32px;
    text-align: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    width: 70%;
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

const ButtonDiv = styled(LinkR)`
    width: 50%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        margin-top: 50px;
        height: 30vh;
    }
`;

const GoButton = styled(Button)`
    &&&{
        background: linear-gradient(90deg, rgba(146,16,205,1) 0%, rgba(100,42,217,1) 50%, rgba(47,230,231,1) 100%);
    font-size: 24px;
    margin: 10px;
    color: white;
    font-weight: bold;
    border: 1px solid aqua;
    border-radius: 25px;
    padding: 6px 20px;
    margin-bottom: 20px;
    direction: rtl;
    @media screen and (max-width: 768px){
        font-size: 16px;
        margin: 0;
        padding: 8px 15px;
    }
    }
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
                opacity: 0, y: '100px',
            })
        }
        
    }, [inView])

    return(
        <Section id="commdocs" ref={ref}>
            
            
            <Grid animate={animationTwo}>
             <Box href="https://drive.google.com/file/d/12d9CXH3gpF7Gftp7mhc6bXbwJjdRYNDD/view" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><GithubIcon /></span></TopCard>
                        <BottomCard><CardText>أصول العلامة التجارية لشبكة  تيلوس</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href={PDF2} target="_blank" rel="noreferrer">
                     <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><APIIcon /></span></TopCard>
                        <BottomCard><CardText>ارشادات العلامة التجارية لشبكة  تيلوس</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href="#" target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><AgreeIcon /></span></TopCard>
                        <BottomCard><CardText>اتفاقية تشغيل شبكة  تيلوس</CardText></BottomCard>
                    </Card>
                </Box>
                <Box href={PDF} target="_blank" rel="noreferrer">
                    <Card whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <TopCard><span><DocIcon /></span></TopCard>
                        <BottomCard><CardText>المستند التقني لشبكة  تيلوس</CardText></BottomCard>
                    </Card>
                </Box>
                
            </Grid>
            <ButtonDiv to="/About">
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} animate={animationTwo}>
                <GoButton>دليل الى تيلوس</GoButton>
                </motion.div>
            </ButtonDiv>
            <Empty>
                <IconColumnLeft to="footer" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <Subtitle></Subtitle>
            <IconColumnRight to="commresources" smooth={true} duration={1000} spy={true} exact="true">
                    
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowUp /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default CommDocs;