import styled from "styled-components";
import {motion} from "framer-motion";

import Telegram from "../SVG/social/telegram.svg"
import Youtube from "../SVG/social/youtube.svg"
import Discord from "../SVG/social/discord.svg"
import Facebook from "../SVG/social/facebook.svg"
import Linkedin from "../SVG/social/linkedin.svg"
import Github from "../SVG/social/github.svg"
import Twitter from "../SVG/social/twitter.svg"
import Instagram from "../SVG/social/instagram.svg"

const Section = styled(motion.div)`
    height: 100vh;
    background: purple;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span img{
        width: 100%;
        height: 100%;
        transform: rotate(-45deg);
        cursor: pointer;
    }
    
`;

const Title = styled(motion.div)`
    height: 30vh;
    color: white;
    font-size: 48px;
    padding: 0 100px;
    display: flex;
    padding-top: 80px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    justify-content: center;
    @media screen and (max-width: 660px){
        font-size: 24px;
        height: 20vh;
        padding-top: 20px;
        height: 20vh;
    }
`;



const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Copyright = styled.div`
    width: 60%;
    height: 30vh;
    display: flex;
`;

const FooterText = styled.div`
    display: flex;
    font-size: 18px;
    color: white;
`;



const containerStyle = {
    display: 'flex',
    width: '80%',
    height: '40vh',
    background: 'purple',
    justifyContent: 'space-around'
}



const ballStyle = {
    display: "block",
    width: '85px',
    height: '85px',
    backgroundColor: 'indigo',
    borderRadius: '40%',
    rotate: '45deg'
   
}

const ContainerVariants = {
    start: {
        transition: {
          staggerChildren: 0.5
        }
    },
    end: {
        transition: {
           staggerChildren: 0.5
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
    return(
        <Section>
            <Title>If you have a question or would like more information please contact us by email</Title>
            <motion.div style={containerStyle} variants={ContainerVariants} initial='start' animate='end'>
                <a href="https://discord.gg/9hurWxq3Gf" target="_blank" rel="noreferrer"><motion.span style={ballStyle} variants={CircleVariants}  transition={CircleTransition}><img src={Discord} alt="Discord"/></motion.span></a>
                <a href="https://www.youtube.com/c/TheTelosNetwork" target="_blank" rel="noreferrer"><motion.span style={ballStyle} variants={CircleVariants}  transition={CircleTransition}><img src={Youtube} alt="Youtube"/></motion.span></a>
                <a href="https://t.me/HelloTelos" target="_blank" rel="noreferrer"><motion.span style={ballStyle} variants={CircleVariants}  transition={CircleTransition}><img src={Telegram} alt="Telegram"/></motion.span></a>
                <a href="https://github.com/telosnetwork" target="_blank" rel="noreferrer"><motion.span style={ballStyle} variants={CircleVariants}  transition={CircleTransition}><img src={Github} alt="Github"/></motion.span></a>
                <a href="https://www.linkedin.com/company/telos-blockchain-network" target="_blank" rel="noreferrer"><motion.span style={ballStyle} variants={CircleVariants}  transition={CircleTransition}><img src={Linkedin} alt="Linkedin"/></motion.span></a>
                <a href="https://www.instagram.com/hellotelos/" target="_blank" rel="noreferrer"><motion.span style={ballStyle} variants={CircleVariants}  transition={CircleTransition}><img src={Instagram} alt="Instagram"/></motion.span></a>
                <a href="https://twitter.com/HelloTelos?s=20" target="_blank" rel="noreferrer"><motion.span style={ballStyle} variants={CircleVariants}  transition={CircleTransition}><img src={Twitter} alt="Twitter"/></motion.span></a>
                <a href="https://www.facebook.com/groups/telosnetwork/" target="_blank" rel="noreferrer"><motion.span style={ballStyle} variants={CircleVariants}  transition={CircleTransition}><img src={Facebook} alt="Facebook"/></motion.span></a>
            </motion.div>
            <Copyright>
                <ColumnLeft>
                <a href="https://www.telos.net/news/telos-roadmap-2022-beyond" target="_blank" rel="noreferrer"> <FooterText>Telos Technical Roadmap 2022</FooterText></a>
                <a href="https://www.telos.net/privacy-policy" target="_blank" rel="noreferrer"><FooterText>Privacy Policy</FooterText></a>
                <a href="https://www.telos.net/legal" target="_blank" rel="noreferrer"><FooterText>Legal</FooterText></a>
                </ColumnLeft>
                <ColumnRight>
                    <FooterText>© 2022 Telos</FooterText>
                    <FooterText>Where Purpose Meets People</FooterText>
                </ColumnRight>
            </Copyright>
        </Section>
    )
}

export default Footer;