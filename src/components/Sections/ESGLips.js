import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {IconButton} from "@mui/material";
import YouTube from 'react-youtube';
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Telos from "../SVG/telos_letter_logo.svg";
import Seeds from "../images/seeds.png";
import Lips from "../images/lips_logo.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
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
const EmptyColumn = styled.div`
   width: 50%;
   height: 100%;
   float: left; 
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
`;



const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back11};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 220vh;
    }
`;

const Grid = styled.div`
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 768px){
        height: 210vh;
    }
`;

const ColumnLeft = styled(motion.div)`
    width: 60%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 768px){
        float: none;
        width: 100vw;
        height: 50%;
    }
    .swiper {
        width: 75%;
        height: 75%;
        @media screen and (max-width: 768px){
        width: 98%;
        height: 75%;
        }
        
    }

    .swiper-slide {
    
        background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 768px){
        float: none;
        width: 100vw;
        height: 50%;
        justify-content: center;
    }
`;

const GridTitle = styled.div`
    width: 100%;
    height: 10vh;
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const Articles = styled.div`
    width: 100%;
    height: 40vh;
    transform: translate(-10%, 0);
    @media screen and (max-width: 768px){
        transform: translate(0, 0);
    } 
`;

const Video = styled.div`
    width: 90%;
    height: 40vh;
    @media screen and (max-width: 768px){
        transform: translate(-5%, 20%) scale(0.9);
    }
    
`;

const Article = styled.div`
    color: white; 
    width: 100%;
    font-size: 14px;
    display: flex;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 24px;
    @media screen and (max-width: 768px){
        text-align: center;
        width: 95%;
    }

`;

const Row = styled.div`
    width: 90%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 25%;
    }
`;

const Text = styled.div`
    color: white;
    font-size: 18px;
    text-align: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
    }
    
`;

const FirstRow = styled.div`
    width: 95%;
    height: 15%;
    display: flex;
    color: white;
    align-items: center;
    flex-direction: row;
    font-size: 48px;
    font-weight: bold;
    justify-content: flex-end;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 34px;
    }

`;

const SecondRow = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 18px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
    }
`;

const InnerGrid = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
`;

const Column = styled.ol`
    width: 50%;
    height: 100%;
    float: left;
    list-style-type: circle;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
    
`;

const Item = styled.li`
    width: 85%;
    height: 33%;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    text-align: right;
    font-size: 24px;
    span{
        margin: 0 8px;
        font-size: 20px;
        @media screen and (max-width: 768px){
        font-size: 14px;
        }
    }
    &::marker{
        font-size: 20px;
        background-color: black;
    }
    @media screen and (max-width: 768px){
        transform: translate(-20%, 0);
        width: 95%;
        font-size: 16px;
        line-height: 25px;
    }
`;

const BottomRow = styled.div`
    width: 100%;
    height: 20%;
    display: inline-flex;
`;

const First = styled.div`
    height: 100%;
    width: 20%;
    background-image: url(${Telos});
    background-repeat: no-repeat;
    background-size: (100px, auto);
    background-position: center;
    transform: scale(0.8);
    border-right: 1px solid whitesmoke;
    border-length: 50%;
    
    
    
`;

const Second = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Lips});
    background-repeat: no-repeat;
    background-size: (70px, auto);
    background-position: center left;
    @media screen and (max-width: 768px){
        transform: scale(0.7) translate(-20%, 0);
        
    }
    
`;

const Third = styled.a`
    height: 100%;
    width: 25%;
    color: white;
    display: flex;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;


const Subtitle = styled.div`
    
`;


const ESGLips = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animationThree = useAnimation();

    useEffect(() => {
        if(inView){
            animationThree.start({
                opacity: 1, scale: 1,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationThree.start({
                opacity: 0, scale: 0.5
            })
        }
        
    }, [inView])


    class VideoOne extends React.Component {
        render() {
          const opts = {
            height: '280',
            width: '410',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
      
          return <YouTube videoId="CT-DW7F5nYE" opts={opts} onReady={this._onReady} />;
        }
      
        _onReady(event) {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
      }

    return(
        <Section id="lips" ref={ref}>
            <Grid>
                <ColumnLeft animate={animationThree}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow><p><t>ليبس هي عبارة عن منصة وسائط اجتماعية وسوق مصمم من قبل المجتمع مع مهمة اجتماعية: تحسين الصحة العقلية والرفاهية المالية للنساء ، والأشخاص غير الثنائيين ، ومجتمع</t><span>LGBTQIA+,</span><t>إنه بمثابة مساحة رقمية حيث يمكن لهذه المجموعات التعبير عن نفسها بشكل إبداعي ولا تقلق أبدًا بشأن الحظر أو الاستهداف بالإساءة.</t></p></SecondRow>
                        <InnerGrid>
                            <Column>
                                <Item><t>أكثر من</t><span>10000</span><t>مستخدم جديد في الشهر الأول</t></Item>
                                <Item><t>الفائز بجائزة دمج</t><span>LGBTQ+</span><t>في التكنولوجيا</t></Item>
                                <Item>ظهرت في ماشابل ، ديلي بيست ، فوربس ، هافينغتون بوست</Item>
                            </Column>
                            <Column>
                                <Item>تطبيق شامل للأصوات المهمشة</Item>
                                <Item>دعم المجتمعات المهمشة تاريخياً</Item>
                                <Item>كسب الدخل / الإيرادات للمشاركة</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second></Second>
                            <Third href="http://lips.social/" target="_blank" rel="noreferrer">lips.social</Third>
                        </BottomRow>
                    </SwiperSlide>
                </Swiper>
                <Row>
                    <Text><p><t>لقد جمع المشروع بالفعل أكثر من 62000 دولار من التمويل العام وتلقى ميزات في ماشابل و</t><span>The Daily Beast</span><t>و</t><span>HuffPost</span><t>و</t><span>Forbes,</span><t>فازت ليبس أيضًا بجائزة</t><span>LGBTQ + Inclusion in Tech</span><t>من</t><span>WomenTech Network. Lips</span><t>هي واحدة من أكثر مشاريع الوعي الاجتماعي شهرة في مجال بلوكشين ، وواحدة من</t></p></Text>
                </Row>
                </ColumnLeft>
                <ColumnRight>
                    <GridTitle>Social Case Study: Lips</GridTitle>
                    <Articles>
                    <Article>Lips is a recent addition to the Telos ecosystem with a powerful and timely social mission. Lips partnered with Telos after an exhaustive search of blockchain networks that could eliminate the risk of deplatforming.</Article>
                    <Article>The platform is reshaping the social media landscape in a way that empowers women, non-binary folks, and the LGBTQIA+ community. The creators of this platform set out to create an environment which combats the censorship, harassment and plagiarism that these marginalized communities face on major social media platforms. The platform also gathers data surrounding important social topics which can be integrated into other platforms, creating a more inclusive internet across the board. </Article>
                    </Articles>  
                    <Video><VideoOne /></Video> 
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="additionaltwo" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="social" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGLips;