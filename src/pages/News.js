import styled from "styled-components";
import {useState} from "react";
import $ from "jquery";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import TelosLogo from "../components/SVG/telos_letter_logo.svg";
import {Link as LinkR} from "react-router-dom";
import Header from "../components/NavBar";
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


const Image = styled(LinkR)`
    position: absolute;
    @media screen and (min-width: 1100px){
        padding-left: 20px;
    }
`;

const Section = styled.div`
    width: 100%;
    height: 2500px;
    background: #00008b;
    @media screen and (max-width: 768px) {
        height: 1600px;
        
        
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
        width: 33vw;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 33%;
    box-sizing: border-box;
    height: 2500px;
    float: left;

    @media screen and (max-width: 768px){
        height: 1500px;
        padding: 0;
        width: 25%;
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
    height: 2500px;
    float: left;

    @media screen and (max-width: 768px){
        height: 1500px;
        width: 25%;
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
    height: 2500px;
    float: right;
    @media screen and (max-width: 768px){
        height: 1500px;
        width: 25%;
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
    @media screen and (max-width: 660px){
        font-size: 14px;
        padding: 0 180px;
    }
`;





const NewsPage = () => {

    const [theme, setTheme] = useState("dark");

    const cursor = document.getElementsByClassName('cursor')[0];

document.onmousemove = (ev) => {
    cursor.style.top = ev.clientY+"px";
    cursor.style.left = ev.clientX+"px";  
}

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
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                
                <Section>
                    
                    <ColumnLeft>
                        <Container>
                        <Wrapper>
                        <img src="https://i.postimg.cc/mknTqRSs/pexels-karolina-grabowska-5980753.jpg" />
                        
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/4N15zdwq/Crypto-Back.jpg"/>
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/V637HVbh/Crypto-Back2.jpg"/>
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/CMBXHjft/drip-back.png"/>
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/6qyHHN3n/wolfgang-hasselmann-Nw-L4-Vm-Nz-Y2g-unsplash.jpg"/>
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                    </ColumnLeft>


                    <ColumnMiddle className="container-2">
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/mknTqRSs/pexels-karolina-grabowska-5980753.jpg"/>
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/4N15zdwq/Crypto-Back.jpg"/>
                        </Wrapper> 
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/V637HVbh/Crypto-Back2.jpg"/>
                        </Wrapper> 
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/CMBXHjft/drip-back.png"/>
                        </Wrapper> 
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/6qyHHN3n/wolfgang-hasselmann-Nw-L4-Vm-Nz-Y2g-unsplash.jpg"/>
                        </Wrapper> 
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                    </ColumnMiddle>
                            

                    <ColumnRight>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/mknTqRSs/pexels-karolina-grabowska-5980753.jpg"/>
                        </Wrapper> 
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/4N15zdwq/Crypto-Back.jpg"/>
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/V637HVbh/Crypto-Back2.jpg"/>
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/CMBXHjft/drip-back.png"/>
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        <Container>
                        <Wrapper>
                            <img src="https://i.postimg.cc/6qyHHN3n/wolfgang-hasselmann-Nw-L4-Vm-Nz-Y2g-unsplash.jpg"/>
                        </Wrapper>
                        <Date>JAN 20TH, 2022</Date>
                        <New>The Telos Board Elections in a Nutshell</New>
                        </Container>
                        

                    </ColumnRight>
                </Section>
            </motion.div>
        </ThemeProvider>
    );
}

export default NewsPage
