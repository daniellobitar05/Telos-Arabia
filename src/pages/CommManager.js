import {useState} from "react";
import styled from "styled-components";
import {motion}  from "framer-motion";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeaderNoHome from "../components/NavBar/NavBarNoHome";

import Telos from "../components/SVG/telos_letter_logo.svg";
import Avatar from "../components/images/avatar.jpg";
import EmailIcon from '@mui/icons-material/Email';
import {IconButton} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Section = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.back1};
`;

const Title = styled.div`
    width: 80%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1{
        font-size: 62px;
        color: white;
    }
`;

const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 60vh;
`;

const Column = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 10px;
`;

const ImageRow = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Telos});
    background-repeat: no-repeat;
    background-size: 350px auto;
    background-position: center;
`;

const ImageHolder = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background: black;
    transform: translate(65%, 20%);
    img{
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
    }
`;

const Name = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 46px;
    }
`;

const Description = styled.div`
    width: 100%;
    height: 12.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 26px;
        width: 80%;
        text-align: center;
    }
`;

const IconHolder = styled.div`
    width: 100%;
    height: 12.5vh;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
`;

const BoxIcon = styled.div`
    width: 75px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Twitter = styled(TwitterIcon)`
    color: white;
    
`;

const Mail = styled(EmailIcon)`
    color: white;
    
`;

const Linked = styled(LinkedInIcon)`
    color: white;
`;



const CommManager = () => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <HeaderNoHome theme={theme} setTheme={setTheme} />
            <Section>
                <Title><h1>مطورو منصة تيلوس العرب</h1></Title>
                <Grid>
                    <Column>
                    <ImageRow>
                        <ImageHolder><img src={Avatar} alt="avatar" /></ImageHolder>
                    </ImageRow>
                    <Name><h1>دانييلو ألبيطار</h1></Name>
                    <Description><h1>مدير تيلوس العرب ومترجم المنصة, من لبنان , دارس الاقتصاد في الجامعة أللبنانية</h1></Description>
                    <IconHolder>
                        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><BoxIcon><IconButton style={{transform: 'scale(1.5)'}}><Twitter /></IconButton></BoxIcon></motion.div>
                        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><BoxIcon><IconButton style={{transform: 'scale(1.5)'}}><Mail /></IconButton></BoxIcon></motion.div>
                        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><BoxIcon><IconButton style={{transform: 'scale(1.5)'}}><Linked /></IconButton></BoxIcon></motion.div>
                    </IconHolder>
                    </Column>
                    <Column>
                    <ImageRow>
                        <ImageHolder><img src={Avatar} alt="avatar" /></ImageHolder>
                    </ImageRow>
                    <Name><h1>Victor Ramirez</h1></Name>
                    <Description><h1>Website creator, 5 years exp. frontend development, studied Physics at University of Barcelona</h1></Description>
                    <IconHolder>
                        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><BoxIcon><IconButton style={{transform: 'scale(1.5)'}}><Twitter /></IconButton></BoxIcon></motion.div>
                        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><BoxIcon><IconButton style={{transform: 'scale(1.5)'}}><Mail /></IconButton></BoxIcon></motion.div>
                        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><BoxIcon><IconButton style={{transform: 'scale(1.5)'}}><Linked /></IconButton></BoxIcon></motion.div>
                    </IconHolder>
                    </Column>
                </Grid>
            </Section>
        </ThemeProvider>
    )
}


export default CommManager;