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
    background: ${props => props.theme.back1};
    @media screen and (max-width: 768px){
        height: 190vh;
    }
`;

const Title = styled.div`
    width: 80%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        height: 30vh;
        transform: translate(0, 15%);
    }
    h1{
        font-size: 52px;
        color: white;
        line-height: 50px;
        width: 95%;
    }
`;

const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 60vh;
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        height: 160vh;
        width: 90%;
    }
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
    background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
    @media screen and (max-width: 768px){
        width: 95%;
        height: 60vh;
        margin: 50px 0;
    }
`;

const ImageRow = styled.div`
    width: 100%;
    height: 22.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Telos});
    background-repeat: no-repeat;
    background-size: 350px auto;
    background-position: center;
    @media screen and (max-width: 768px){
        background-size: 250px auto;
    }
`;

const ImageHolder = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background: black;
    transform: translate(65%, 20%);
    @media screen and (max-width: 768px){
        width: 60px;
        height: 60px;
    }
    img{
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
        
    }
`;

const Name = styled.div`
    width: 100%;
    height: 12.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    h1{
        color: white;
        font-size: 46px;
        @media screen and (max-width: 768px){
            font-size: 42px;
            transform: translate(0, -20%);
        }
    }
`;

const Description = styled.div`
    width: 100%;
    height: 12.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    h1{
        color: white;
        font-size: 26px;
        width: 80%;
        text-align: center;
        @media screen and (max-width: 768px){
            font-size: 22px;
            line-height: 30px;
        }
    }
`;

const IconHolder = styled.div`
    width: 100%;
    height: 12.5vh;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
`;

const BoxIcon = styled(motion.a)`
    width: 75px;
    height: 90%;
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

const Expander = styled(IconButton)`
    transform: scale(1.30);
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        transform: scale(1.25);
    }

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
                        <BoxIcon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href="https://twitter.com/DanielloBitar" target="_blank" rel="noreferrer"><Expander><Twitter /></Expander></BoxIcon>
                        <BoxIcon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><Expander><Mail /></Expander></BoxIcon>
                        <BoxIcon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} ><Expander><Linked /></Expander></BoxIcon>
                    </IconHolder>
                    </Column>
                    <Column>
                    <ImageRow>
                        <ImageHolder><img src={Avatar} alt="avatar" /></ImageHolder>
                    </ImageRow>
                    <Name><h1>فيكتور راميريز</h1></Name>
                    <Description><h1>مصمم مواقع ، خبرة 5 سنوات. تطوير الواجهة الأمامية ، درس الفيزياء في جامعة برشلونة</h1></Description>
                    <IconHolder>
                        <BoxIcon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href="https://twitter.com/VictorR65153076" target="_blank" rel="noreferrer"><Expander><Twitter /></Expander></BoxIcon>
                        <BoxIcon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href="mailto:bodegaflamenca666@gmail.com" target="_blank" rel="noreferrer"><Expander><Mail /></Expander></BoxIcon>
                        <BoxIcon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}><Expander><Linked /></Expander></BoxIcon>
                    </IconHolder>
                    </Column>
                </Grid>
            </Section>
        </ThemeProvider>
    )
}


export default CommManager;