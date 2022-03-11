import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Telos from "../SVG/telos_letter_logo.svg";
import Unbiased from "../SVG/unbiased.svg";
import Heart from "../SVG/heart.svg";
import Discussions from "../SVG/discussions.svg";
import Dstor from "../SVG/dstor.svg";
import Word from "../SVG/word.svg";
import Havuta from "../SVG/havuta.svg";


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
    background: ${props => props.theme.back12};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        
    }
`;

const Title = styled(motion.div)`
    font-size: 62px;
    width: 100%;
    color: ${props => props.theme.text};  
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        
    }
`;

const Grid = styled(motion.div)`
    width: 80%;
    height: 70vh;
    
    .swiper {
        width: 75%;
        height: 100%;
    }

    .swiper-slide {
        
        background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        flex-direction: column;
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

    .swiper-button-next{
        transform: translate(50%, 0);
    }

    .swiper-button-prev{
        transform: translate(-50%, 0);
    }
`;

const FirstRow = styled.div`
    width: 90%;
    height: 15%;
    display: flex;
    color: white;
    align-items: center;
    flex-direction: row;
    font-size: 48px;
    font-weight: bold;
    justify-content: flex-end;
    transform: translate(0, 20%);
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;

`;

const SecondRow = styled.div`
    width: 90%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 16px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const InnerGrid = styled.div`
    width: 90%;
    height: 30%;
    display: flex;
`;

const Column = styled.ol`
    width: 33%;
    height: 100%;
    float: left;
    list-style-type: circle;
    
    
`;

const Item = styled.li`
    width: 100%;
    height: 25%;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    &::marker{
        font-size: 20px;
        background-color: black;
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
    
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    
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

const AdditionalTwo = () => {

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
                x: 0, opacity: 1, 
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '100vw', opacity: 0, 
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
        <Section id="additionaltwo" ref={ref}>
            <Title animate={animation}>Additional Environmental Examples</Title>
                <Grid>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow>A transparent and trustworthy data platform, building solutions to fight ethical challenges in the AI and BigData Industry, with the help of Blockchain technology. Offering a Global Workforce to collect and structure data from conflict-affected regions and communities. Through its solutions, Unbiased aims to contribute towards innovation and the betterment of societies.</SecondRow>
                        <InnerGrid>
                            <Column>
                                <Item>Worker Satisfaction</Item>
                                <Item>Spam Free Accounts</Item>
                                <Item>Global Workforce</Item>
                            </Column>
                            <Column>
                                <Item>Transparency</Item>
                                <Item>Quality Assurance</Item>
                                <Item>Unbiased Data</Item>
                            </Column>
                            <Column>
                                <Item>Data Annotation</Item>
                                <Item>Data Collection</Item>
                                <Item>Data Marketplace</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second style={{backgroundImage: `url(${Unbiased})`}}></Second>
                            <Third href="http://unbiased.ml/" target="_blank" rel="noreferrer">unbiased.ml</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow>HeartChurch is the first blockchain church, created to impact the world. The project is made up of a team of professionals, with Christian values and a mission to satisfy physical and spiritual needs, through knowledge, solidarity and love. The organization provides opportunities for those in politically mismanaged countries, helping individuals from these areas grow both on blockchain platforms and in their local communities. Their pioneering project, "Pan del cielo", served more than 3,000 people in Venezuela.</SecondRow>
                        <InnerGrid>
                            <Column style={{width: '10%'}}>
                               
                            </Column>
                            <Column style={{width: '80%'}}>
                                <Item>Provide spiritual & moral guidance within the blockchain</Item>
                                <Item>Fight for freedom in life, against oppression & slavery</Item>
                                <Item>Guarantee basic human rights for all humanity</Item>
                                <Item>Grow supportive faith communities & effective Christian leaders</Item>
                            </Column>
                            <Column style={{width: '10%'}}>
                                
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second style={{backgroundImage: `url(${Heart})`}}></Second>
                            <Third href="http://heart-church.org/" target="_blank" rel="noreferrer">heart-church.org</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow>A whole new atmosphere of freedom. Free to say, to do, to transact and to build together. Built with intensity, built with tenacity and built with freedom and liberty for a better future. Discussions provides you with the tools to build a community around the world to fulfil your collective vision. It is a community building engine that helps you turn your vision into the future.</SecondRow>
                        <InnerGrid>
                            <Column style={{width: '50%'}}>
                                <Item>Leverage your current social platforms</Item>
                                <Item>Native Token (ATMOS)</Item>
                                <Item>Upcoming NFT Support</Item>
                            </Column>
                            <Column style={{width: '50%'}}>
                                <Item>Content ranking and reward system</Item>
                                <Item>Promoting free and fair speech</Item>
                                <Item>Unique decentralized advertisement module</Item>
                            </Column>
                            
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second style={{backgroundImage: `url(${Discussions})`}}></Second>
                            <Third href="http://discussions.app/" target="_blank" rel="noreferrer">discussions.app</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow>Decentralized storage is a foundational element of Web3.0 that does not yet have a suitable solution. dStor finally solves this problem. dStor is the only scalable implementation of decentralized storage currently available, built with an economic model that benefits both users and node operators.</SecondRow>
                        <InnerGrid>
                            <Column style={{width: '20%'}}>
                               
                            </Column>
                            <Column style={{width: '60%'}}>
                                <Item>Resiliency: Access data from anywhere</Item>
                                <Item>Speed: Deliver data quickly</Item>
                                <Item>Security: Tamper-proof your files</Item>
                                <Item>Cost Savings: Maximize revenue</Item>
                            </Column>
                            <Column style={{width: '20%'}}>
                                
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second style={{backgroundImage: `url(${Dstor})`}}></Second>
                            <Third href="http://dstor.cloud/" target="_blank" rel="noreferrer">dstor.cloud</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow>The internet has deep-rooted problems that grow daily: distrust, plagiarism, and fake news. WordProof wants to create a new standard for a more reliable and trustworthy internet, with the help of blockchain technology. The WordProof Timestamp Ecosystem empowers internet users and content creators with the tools to build a safer and more trustworthy internet.</SecondRow>
                        <InnerGrid>
                            <Column style={{width: '50%'}}>
                                <Item>Copyright Protection</Item>
                                <Item>Time Machine</Item>
                                <Item>Wordpress Plugin</Item>
                            </Column>
                            <Column style={{width: '50%'}}>
                                <Item>Enable Verifiable Trust</Item>
                                <Item>Protect Your Content</Item>
                                <Item>Prepare for Next-Generation SEO</Item>
                            </Column>
                            
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second style={{backgroundImage: `url(${Word})`}}></Second>
                            <Third href="http://wordproof.com/" target="_blank" rel="noreferrer">wordproof.com</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow>Havuta LLC is a Swiss-based company, dedicated to serving the digital data capture needs of the development sector. They offer robust data solutions for impact-driven organizations. Havuta is one platform for all your research design, data collection, and data management needs. As the globally recognized symbol of proven, verified impact, their aim is to help users usher their organization into the next era of impact data collection and analysis.</SecondRow>
                        <InnerGrid>
                            <Column>
                                <Item>Analysis</Item>
                                <Item>Reporting</Item>
                                <Item>Connecting platforms cleaning</Item>
                            </Column>
                            <Column>
                                <Item>Launching surveys</Item>
                                <Item>Data cleaning</Item>
                                <Item>Scheduling and sending out reminders</Item>
                            </Column>
                            <Column>
                                <Item>Pre-design phase</Item>
                                <Item>Data Collection</Item>
                                <Item>Testing the questionnaire</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second style={{backgroundImage: `url(${Havuta})`}}></Second>
                            <Third href="http://havuta.com/" target="_blank" rel="noreferrer">havuta.com</Third>
                        </BottomRow>
                        </SwiperSlide>
                </Swiper>
            </Grid>
            <Empty>
                <IconColumnLeft to="esgconclusion" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="lips" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default AdditionalTwo;