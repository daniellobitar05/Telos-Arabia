import styled from "styled-components";
import {useState} from "react";
import $ from "jquery";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { animationOne, transition } from "../animations";
import TelosLogo from "../components/SVG/telos_letter_logo.svg";
import {Link as LinkR} from "react-router-dom";
import Header from "../components/NavBar";
import {IconButton} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import News1 from "../components/images/news/news1.jpg";
import News2 from "../components/images/news/news2.jpg";
import News3 from "../components/images/news/news3.jpg";
import News4 from "../components/images/news/news4.png";
import News5 from "../components/images/news/news5.jpg";
import News6 from "../components/images/news/news6.jpg";
import News7 from "../components/images/news/news7.jpg";
import News8 from "../components/images/news/news8.jpg";
import News9 from "../components/images/news/news9.jpg";
import News10 from "../components/images/news/news10.jpg";
import News11 from "../components/images/news/news11.png";
import News12 from "../components/images/news/news12.jpg";
import News13 from "../components/images/news/news13.png";
import News14 from "../components/images/news/news14.jpg";
import News15 from "../components/images/news/news15.jpg";
import News16 from "../components/images/news/news16.png";
import News17 from "../components/images/news/news17.png";
import News18 from "../components/images/news/news18.png";
import News19 from "../components/images/news/news19.jpg";
import News20 from "../components/images/news/news20.jpg";
import News21 from "../components/images/news/news21.png";


const Image = styled(LinkR)`
    position: absolute;
    @media screen and (min-width: 1100px){
        padding-left: 20px;
    }
`;

const Section = styled.div`
    width: 100%;
    height: 4200px;
    background: #00008b;
    overflow-y: hidden;
    @media screen and (max-width: 768px) {
        height: 2240px;
        
        
    }
`;

const Wrapper = styled.figure`
    width: auto;
    height: 400px;
    overflow: hidden;
    border-radius: 20px;
    
    
  
`;

const Container = styled.div`
    width: 400px;
    height: 550px;
    overflow: hidden;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;   
        transition: .3s ease;
        
        
    }
    img:hover{
        transform: scale(1.1, 1.1);
    }
    @media screen and (max-width: 768px){
        width: 50vw;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 33%;
    box-sizing: border-box;
    height: 4200px;
    float: left;

    @media screen and (max-width: 768px){
        height: 2100px;
        padding: 0;
        width: 33%;
    }
`;

const ColumnMiddle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 33%;
    box-sizing: border-box;
    position: fixed;
    left: calc(100% / 3);
    bottom: 0;
    height: 4200px;
    float: left;

    @media screen and (max-width: 768px){
        height: 2100px;
        width: 33%;
        padding: 0;
        left: calc(100% / 3);
    }
`;

const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 33%;
    box-sizing: border-box;
    height: 4200px;
    float: right;
    @media screen and (max-width: 768px){
        height: 2100px;
        width: 33%;
        padding: 0;
    }
`;

const Date = styled.div`
    font-size: 14px;
    color: white;
    @media screen and (max-width: 660px){
        font-size: 10px;
        
    }
    
`;

const New = styled.div`
    display: flex;
    text-align: center;
    font-size: 20px;
    color: white;
    padding: 10px 30px;
    @media screen and (max-width: 768px){
        font-size: 14px;
        padding: 0 100px;
    }
`;

const IconHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: scale(1.5);
    padding-bottom: 50px;
    
`;

const IconHome = styled(ChevronLeftIcon)`
    color: white;
    cursor: pointer;
`;

const IconUp = styled(KeyboardArrowUpIcon)`
    color: white;
    cursor: pointer;
`;


const IconText = styled.div`
    color: white;
    font-size: 24px;
    cursor: pointer;
    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`;






const NewsPage = () => {

    const [theme, setTheme] = useState("dark");

    const scrollUp = () => {
        scroll.scrollToTop();
    }

    /* const cursor = document.getElementsByClassName('cursor')[0];

document.onmousemove = (ev) => {
    cursor.style.top = ev.clientY+"px";
    cursor.style.left = ev.clientX+"px";  
} */

/* document.querySelectorAll('.image').forEach(item => {
    item.addEventListener('mouseover', event => {
        cursor.classList.add("active")
    })
    item.addEventListener('mouseleave', event => {
        cursor.classList.remove("active")
    })
}) */


$(window).on('scroll',function(){
    $(".container-2").css('bottom',$(window).scrollTop()*-1);
});




    return(


        <ThemeProvider theme={themes[theme]}>
            
                
                <Section>
                    
                    <ColumnLeft>
                        <Container>
                        <Wrapper>
                        <img src={News1} alt="" />
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News2} style={{objectPosition: 'right'}} alt=""/>
                        </Wrapper>
                        <Date>JAN 7TH, 2022</Date>
                        <New>Announcing the new Telos Roadmap</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News3} style={{objectPosition: 'right'}} alt=""/>
                        </Wrapper>
                        <Date>JAN 5TH, 2022</Date>
                        <New>Meet the Telos Foundation Board!</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News4} style={{objectPosition: 'left'}} alt=""/>
                        </Wrapper>
                        <Date>DEC 31ST, 2021</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News5}  alt=""/>
                        </Wrapper>
                        <Date>DEC 17TH, 2021</Date>
                        <New>2021 Board Elections: Kick Off!</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News6} alt=""/>
                        </Wrapper>
                        <Date>dec 6TH, 2021</Date>
                        <New>Important Telos Ecosystem Update</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News7} style={{objectPosition: 'left'}} alt=""/>
                        </Wrapper> 
                        <Date>NOV 18TH, 2021</Date>
                        <New>Trading is live on Sushiswap</New>
                        </Container>
                        <LinkR to="/"><IconHolder>
                            <IconButton><IconHome /></IconButton>
                            <IconText>HOME</IconText>
                        </IconHolder></LinkR>
                    </ColumnLeft>


                    <ColumnMiddle className="container-2">
                        <Container>
                        <Wrapper>
                            <img src={News8} alt=""/>
                        </Wrapper> 
                        <Date>NOV 18TH, 2021</Date>
                        <New>dClimate + Telos + Kanda</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News9} alt=""/>
                        </Wrapper> 
                        <Date>NOV 17TH, 2021</Date>
                        <New>Sushiswap launches on Telos EVM</New>
                        </Container>
                        <Container>
                        <Wrapper >
                            <img src={News10} style={{objectPosition: 'left'}} alt=""/>
                        </Wrapper> 
                        <Date>NOV 15TH, 2021</Date>
                        <New>Telos partners with Elastos Essentials</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News11} style={{objectPosition: 'left'}} alt=""/>
                        </Wrapper> 
                        <Date>NOV 12TH, 2021</Date>
                        <New>Telos & Anyswap</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News12} style={{objectPosition: 'right'}} alt=""/>
                        </Wrapper>
                        <Date>NOV 11TH, 2021 </Date>
                        <New>Telos lists on BitFinex!</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News13} style={{objectPosition: 'left'}} alt=""/>
                        </Wrapper>
                        <Date>NOV 11TH, 2021</Date>
                        <New>October News Recap</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News14} style={{objectPosition: 'center'}} alt=""/>
                        </Wrapper>
                        <Date>NOV 11TH, 2021</Date>
                        <New>Telos raises $8M on strategic deal</New>
                        </Container>
                    </ColumnMiddle>
                            

                    <ColumnRight>
                    <Container>
                        <Wrapper>
                            <img src={News15} style={{objectPosition: 'right'}} alt=""/>
                        </Wrapper>
                        <Date>NOV 5TH, 2021</Date>
                        <New>Telos lists on Bitmart!</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News16} style={{objectPosition: 'left'}} alt=""/>
                        </Wrapper>
                        <Date>NOV 3TH, 2021</Date>
                        <New>Telos Punks come to the EVM</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News17} style={{objectPosition: 'center'}} alt=""/>
                        </Wrapper>
                        <Date>NOV 1ST, 2021</Date>
                        <New>Telos EVM is Live</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News18} style={{objectPosition: 'right'}} alt=""/>
                        </Wrapper>
                        <Date>OCT 22TH, 2021</Date>
                        <New>Telos EVM is Sentnl Approved</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News19} style={{objectPosition: 'left'}} alt=""/>
                        </Wrapper>
                        <Date>OCT 16TH, 2021</Date>
                        <New>Telos leads its way in sustainability</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News20} style={{objectPosition: 'right'}} alt=""/>
                        </Wrapper>
                        <Date>OCT 1ST, 2021</Date>
                        <New>The EVM Launch Roadmap</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src={News21} style={{objectPosition: 'center'}} alt=""/>
                        </Wrapper>
                        <Date>SEP 9TH, 2021</Date>
                        <New>Decide Voter Contest</New>
                        </Container>
                        <IconHolder onClick={scrollUp}>
                            <IconButton><IconUp /></IconButton>
                            <IconText>UP</IconText>
                        </IconHolder>
                    </ColumnRight>
                </Section>
            
        </ThemeProvider>
    );
}

export default NewsPage
