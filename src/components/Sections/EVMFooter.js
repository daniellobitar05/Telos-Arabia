import styled from "styled-components";
import {motion} from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import ContactsIcon from '@mui/icons-material/Contacts';
import {IconButton} from "@mui/material";
import Telegram from "../SVG/social/telegram.svg"
import Youtube from "../SVG/social/youtube.svg"
import Discord from "../SVG/social/discord.svg"
import Facebook from "../SVG/social/facebook.svg"
import Linkedin from "../SVG/social/linkedin.svg"
import Github from "../SVG/social/github.svg"
import Twitter from "../SVG/social/twitter.svg"
import Instagram from "../SVG/social/instagram.svg"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Section = styled(motion.div)` 
    height: 100vh;
    background: linear-gradient(180deg, rgba(25,25,112,1) 0%, rgba(19,19,87,1) 50%, rgba(1,1,5,1) 100%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:768px){
        height: 140vh;
    }
    
    
`;

const Title = styled(motion.div)`
    height: 30vh;
    color: white;
    font-size: 48px;
    padding: 0 100px;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    justify-content: center;
    @media screen and (max-width: 760px){
        font-size: 18px;
        height: 20vh;
        padding: 0px 20px;
    }
`;

const Mail = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    span{
        display: flex;
        width: 85px;
        height: 85px;
        background: indigo;
        border-radius: 40px;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
        @media screen and (max-width: 768px){
            width: 50px;
            height: 50px;
            
        }
        
    }
`;



const IconHolder = styled(motion.div)`
    display: flex;
    width: 80%;
    height: 20vh;
    
    justify-content: space-around;
    @media screen and (max-width:768px){
        height: 100vw;
        width: 70vh;
        transform: rotate(90deg) scale(0.9);
        align-items: center;
    }
    span{
        display: flex;
        width: 85px;
        height: 85px;
        background: indigo;
        border-radius: 40px;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 768px){
            width: 50px;
            height: 50px;
            
        }
        
    }
    span img{
        width: 90%;
        height: 90%;
        cursor: pointer;
        @media screen and (max-width: 768px){
            transform: rotate(-90deg);
        }
    }
`;

const Copyright = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    @media screen and (max-width:768px){
        width: 80%;
        height: 20vh;
        padding-top: 50px;
    }
`;

const IconColumn = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;



const FooterText = styled.div`
    display: flex;
    font-size: 18px;
    color: white;
    
    @media screen and (max-width:768px){
        font-size: 14px;
        text-align: center;
    }
`;

const FooterRow = styled.div`
    height: 50%;
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
`;








const ContainerVariants = {
    start: {
        transition: {
          staggerChildren: 0.4
        }
    },
    end: {
        transition: {
           staggerChildren: 0.4
        }
    }
};

const CircleVariants = {
    start: {
        y: '0%'
    },
    end: {
        y: '100%'
    }
};

const CircleTransition = {
    duration: 2, 
    yoyo: Infinity,
    ease: 'easeInOut',
};



const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="footer">
            <Title>If you’re interested in getting involved in the Telos EVM, drop us a line below!</Title>
            <Mail>
                <a href="mailto:hello@telosfoundation.io"><motion.span><ContactsIcon /></motion.span></a>
                <a href="mailto:hello@telosfoundation.io">CONTACT US</a>
            </Mail>
            <IconHolder  variants={ContainerVariants} initial='start' animate='end'>
                <a href="https://discord.gg/9hurWxq3Gf" target="_blank" rel="noreferrer"><motion.span  variants={CircleVariants}  transition={CircleTransition}><img src={Discord} alt="Discord"/></motion.span></a>
                <a href="https://www.youtube.com/c/TheTelosNetwork" target="_blank" rel="noreferrer"><motion.span  variants={CircleVariants}  transition={CircleTransition}><img src={Youtube} alt="Youtube"/></motion.span></a>
                <a href="https://t.me/HelloTelos" target="_blank" rel="noreferrer"><motion.span  variants={CircleVariants}  transition={CircleTransition}><img src={Telegram} alt="Telegram"/></motion.span></a>
                <a href="https://github.com/telosnetwork" target="_blank" rel="noreferrer"><motion.span  variants={CircleVariants}  transition={CircleTransition}><img src={Github} alt="Github"/></motion.span></a>
                <a href="https://www.linkedin.com/company/telos-blockchain-network" target="_blank" rel="noreferrer"><motion.span  variants={CircleVariants}  transition={CircleTransition}><img src={Linkedin} alt="Linkedin"/></motion.span></a>
                <a href="https://www.instagram.com/hellotelos/" target="_blank" rel="noreferrer"><motion.span  variants={CircleVariants}  transition={CircleTransition}><img src={Instagram} alt="Instagram"/></motion.span></a>
                <a href="https://twitter.com/HelloTelos?s=20" target="_blank" rel="noreferrer"><motion.span  variants={CircleVariants}  transition={CircleTransition}><img src={Twitter} alt="Twitter"/></motion.span></a>
                <a href="https://www.facebook.com/groups/telosnetwork/" target="_blank" rel="noreferrer"><motion.span  variants={CircleVariants}  transition={CircleTransition}><img src={Facebook} alt="Facebook"/></motion.span></a>
            </IconHolder>
            <Copyright>
                <IconColumn>
                <FooterRow style={{width: '90%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <IconButton onClick={toggleHome}><ArrowHome /></IconButton>
                    </FooterRow>
                    <FooterRow>
                    <a href="https://www.telos.net/legal" target="_blank" rel="noreferrer"><FooterText>Legal</FooterText></a>
                    <a href="https://www.telos.net/news/telos-roadmap-2022-beyond" target="_blank" rel="noreferrer"> <FooterText>Telos Technical Roadmap 2022</FooterText></a>
                    <a href="https://www.telos.net/privacy-policy" target="_blank" rel="noreferrer"><FooterText>Privacy Policy</FooterText></a>
                    </FooterRow>
                    <FooterRow style={{justifyContent: 'center', width: '70%'}}>
                        <FooterText style={{transform: "translate(0, -50%)"}}>© 2022 Telos, Where Purpose Meets People</FooterText> 
                    </FooterRow>
                    
                </IconColumn>
            </Copyright>
        </Section>
    )
}

export default Footer;