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
import News1 from "../components/images/news/news1.png";
import News2 from "../components/images/news/news2.png";
import News3 from "../components/images/news/news3.png";
import News4 from "../components/images/news/news4.png";
import News5 from "../components/images/news/news5.png";
import News6 from "../components/images/news/news6.png";
import News7 from "../components/images/news/news7.png";
import News8 from "../components/images/news/news8.png";
import News9 from "../components/images/news/news7.png";
import News10 from "../components/images/news/news10.png";
import News11 from "../components/images/news/news11.png";
import News12 from "../components/images/news/news12.png";
import News13 from "../components/images/news/news13.png";
import News14 from "../components/images/news/news14.png";
import News15 from "../components/images/news/news15.png";
import News16 from "../components/images/news/news16.png";
import News17 from "../components/images/news/news17.png";
import News18 from "../components/images/news/news18.png";
import News19 from "../components/images/news/news19.png";
import News20 from "../components/images/news/news20.png";
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
        overflow-x: hidden;
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
        overflow-x: hidden;
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
        overflow-x: hidden;
    }
`;

const Date = styled.div`
    font-size: 18px;
    color: white;
    direction: rtl;
    span{
        margin: 0 5px;
    }
    @media screen and (max-width: 660px){
        font-size: 10px;
        
    }
    
`;

const New = styled.div`
    display: flex;
    text-align: center;
    font-size: 32px;
    color: white;
    padding: 0 40px;
    direction: rtl;
    span{
        margin: 0 5px;
    }
    @media screen and (max-width: 768px){
        font-size: 14px;
        padding: 0 50px;
    }
`;

const IconHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: scale(1.5);
    padding-bottom: 50px;

    @media screen and (max-width: 768px) {
        padding-bottom: 0;
        padding-top: 40px;
    }
    
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
            
                
                <Section id="news">
                    
                    <ColumnLeft>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-board-elections-summary" target="_blank" rel="noreferrer"><img src={News1} alt="" /></a>
                        </Wrapper>
                        <Date><span>20</span><t>يناير</t><span>2022</span></Date>
                        <New><p>انتخابات مجلس تيلوس باختصار</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-roadmap-2022-beyond" target="_blank" rel="noreferrer"><img src={News2} style={{objectPosition: 'right'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>7</span><t>يناير</t><span>2022</span></Date>
                        <New><p>الإعلان عن خارطة طريق تيلوس الجديدة</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/meet-telos-foundation-board" target="_blank" rel="noreferrer"><img src={News3} style={{objectPosition: 'right'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>5</span><t>يناير</t><span>2022</span></Date>
                        <New><p>قابل مجلس مؤسسة تيلوس!</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-2021-recap" target="_blank" rel="noreferrer"><img src={News4} style={{objectPosition: 'left'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>31</span><t>ديسمبر</t><span>2021</span></Date>
                        <New><p><t>ملخص</t><span>The Telos 2021</span></p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/2021-board-elections-kick-off" target="_blank" rel="noreferrer"><img src={News5}  alt=""/></a>
                        </Wrapper>
                        <Date><span>17</span><t>ديسمبر</t><span>2021</span></Date>
                        <New><p>انتخابات مجلس الإدارة 2021: الانطلاق!</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/important-telos-ecosystem-update" target="_blank" rel="noreferrer"><img src={News6} alt=""/></a>
                        </Wrapper>
                        <Date><span>6</span><t>ديسمبر</t><span>2021</span></Date>
                        <New><p>تحديث هام للنظام البيئي تيلوس</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-trading-live-sushiswap" target="_blank" rel="noreferrer"> <img src={News7} style={{objectPosition: 'left'}} alt=""/></a>
                        </Wrapper> 
                        <Date><span>18</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p>التداول متوفر على سوشي سواب</p></New>
                        </Container>
                        <LinkR to="/"><IconHolder>
                            <IconButton><IconHome /></IconButton>
                            <IconText>HOME</IconText>
                        </IconHolder></LinkR>
                    </ColumnLeft>


                    <ColumnMiddle className="container-2">
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-stores-critical-climate-data" target="_blank" rel="noreferrer"><img src={News8} alt=""/></a>
                        </Wrapper> 
                        <Date><span>18</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p><t>تيلوس</t><span>+</span><t>كاندا</t><span>+</span><span>dClimate</span></p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/sushiswap-partners-with-telos" target="_blank" rel="noreferrer"> <img src={News9} alt=""/></a>
                        </Wrapper> 
                        <Date><span>17</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p><t>تم إطلاق سوشي سواب على تيلوس</t><span>EVM</span></p></New>
                        </Container>
                        <Container>
                        <Wrapper >
                        <a href="https://www.telos.net/news/telos-partners-with-elastos-essentials" target="_blank" rel="noreferrer"><img src={News10} style={{objectPosition: 'left'}} alt=""/></a>
                        </Wrapper> 
                        <Date><span>15</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p><t>شراكة تيلوس مع</t><span>Elastos Essentials</span></p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-anyswap-building-bridges" target="_blank" rel="noreferrer"> <img src={News11} style={{objectPosition: 'left'}} alt=""/></a>
                        </Wrapper> 
                        <Date><span>12</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p>تيلوس و انيسواب</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/tlos-bitfinex-listing-details" target="_blank" rel="noreferrer"><img src={News12} style={{objectPosition: 'right'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>11</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p>ادراج تيلوس على منصة بيتفاينكس</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-foundation-october-report" target="_blank" rel="noreferrer"> <img src={News13} style={{objectPosition: 'left'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>11</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p>ملخص أخبار أكتوبر</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-raises-million-strategic-investment" target="_blank" rel="noreferrer"> <img src={News14} style={{objectPosition: 'center'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>11</span><t>نوفمبر</t><span>2021</span></Date>
                        <New>تجمع شركة تيلوس 8 ملايين دولار في صفقة استراتيجية</New>
                        </Container>
                    </ColumnMiddle>
                            

                    <ColumnRight>
                    <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/bitmart-lists-telos" target="_blank" rel="noreferrer"><img src={News15} style={{objectPosition: 'right'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>5</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p>ادراج تيلوس على منصة بيتمارت</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telospunks-come-to-telos-evm" target="_blank" rel="noreferrer"> <img src={News16} style={{objectPosition: 'left'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>3</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p><t>مجيئ تيلوس بانكس  إلى</t><span>EVM</span></p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-evm-mainet-live" target="_blank" rel="noreferrer"><img src={News17} style={{objectPosition: 'center'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>1</span><t>نوفمبر</t><span>2021</span></Date>
                        <New><p><t>افتتاح تيلوس</t><span>EVM</span></p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-evm-approved-audit-certificate-received" target="_blank" rel="noreferrer"><img src={News18} style={{objectPosition: 'right'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>22</span><t>أكتوبر</t><span>2021</span></Date>
                        <New><p><t>تيلوس</t><span>EVM</span><t>معتمد من قبل</t><span>Sentnl</span></p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/telos-esg-crypto" target="_blank" rel="noreferrer"><img src={News19} style={{objectPosition: 'left'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>16</span><t>أكتوبر</t><span>2021</span></Date>
                        <New><p>تقود تيلوس طريقها في الاستدامة</p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/the-telos-evm-mainnet-launch-has-started-and-roadmap-is-out" target="_blank" rel="noreferrer"><img src={News20} style={{objectPosition: 'right'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>1</span><t>أكتوبر</t><span>2021</span></Date>
                        <New><p><t>خارطة طريق إطلاق</t><span>EVM</span></p></New>
                        </Container>
                        <Container>
                        <Wrapper>
                        <a href="https://www.telos.net/news/decide-voter-contest" target="_blank" rel="noreferrer"> <img src={News21} style={{objectPosition: 'center'}} alt=""/></a>
                        </Wrapper>
                        <Date><span>9</span><t>سبتمبر</t><span>2021</span></Date>
                        <New><p><t>تحديد مسابقة الناخبين على</t><span>Decide Voter</span></p></New>
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
