import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import Seeds from "../images/seeds.png";

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
    background: ${props => props.theme.back8};
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        width: 100%;
        height: 80vh;
        justify-content: center;
    }
    .swiper {
        width: 75%;
        height: 75%;
        @media screen and (max-width: 768px){
            width: 95%;
            height: 95%;
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
        width: 100%;
        height: 120vh;
        justify-content: center;
    }
`;



const Article = styled(motion.div)`
    color: white; 
    width: 80%;
    font-size: 20px;
    display: flex;
    padding: 20px 0;
    line-height: 30px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    height: 20vh;
    @media screen and (max-width: 768px){
        line-height: 30px;
        height: 60vh;
    }
    span {
        margin: 0 8px;

    }

`;

const Row = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`
    color: white;
    font-size: 28px;
    line-height: 38px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    margin: 0 8px;
    width: 80%;
    text-align: center;
    @media screen and (max-width: 768px){
        line-height: 30px;
        width: 90%;
        transform: translate(0, 10%);
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
    width: 90%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 20px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span {
        margin: 0 8px;
    }
    @media screen and (max-width: 768px){
        font-size: 18px;
        transform: translate(0%, 10%);
    }
`;

const InnerGrid = styled.div`
    width: 100%;
    height: 50%;
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
    width: 90%;
    height: 20%;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    text-align: right;
    transform: translate(-10%, 0);
    span {
        margin: 0 8px;
    }
    &::marker{
        font-size: 20px;
        background-color: black;
    }
    @media screen and (max-width: 768px){
        width: 95%;
        transform: translate(-20%, 0);
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
    @media screen and (max-width: 768px){
        width: 25%;

    }
    
    
    
`;

const Second = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Seeds});
    background-repeat: no-repeat;
    background-size: (75px, auto);
    background-position: center left;
    @media screen and (max-width: 768px){
        width: 30%;

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
    @media screen and (max-width: 768px){
        width: 40%;
        transform: translate(-10%, 0);

    }
`;


const Subtitle = styled.div`
    
`;


const ESGSeeds = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animationThree = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animationThree.start({
                scale: 1, opacity: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animationThree.start({
                scale: 0.5, opacity: 0
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: '30px', 
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
        <Section id="seeds" ref={ref}>
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
                        <SecondRow><p>منصة دفع ونظام بيئي مالي لتمكين البشرية وشفاء كوكبنا. يقدم سيدس أدوات لمساعدتك أو عملك أو حركتك على تجديد كوكبنا ، مع تشجيع التعاون والتعاون وبناء المجتمع</p></SecondRow>
                        <InnerGrid>
                            <Column>
                                <Item>أكثر من 88 دولة: شارك في إنشاء عالم جديد</Item>
                                <Item>5000+ مُجدد ووكلاء تغيير</Item>
                                <Item>450+ شركاء ومتعاونين</Item>
                                <Item>عالج كوكبنا مع كل عملية شراء أو بيع</Item>
                            </Column>
                            <Column>
                                <Item>لا تدفع رسوم المعاملات</Item>
                                <Item>أن يكون لها صوت مباشر في الحكم</Item>
                                <Item>كسب المنح للمبادرات التجديدية</Item>
                                <Item>كسب الدخل / الإيرادات للمشاركة</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second></Second>
                            <Third href="https://joinseeds.earth/" target="_blank" rel="noreferrer">joinseeds.earth</Third>
                        </BottomRow>
                    </SwiperSlide>
                </Swiper>
                <Row>
                    <Text><p>سيدس هو نظام اقتصادي مبتكر وعملة مشفرة تدعم هذه القضايا باستخدام شبكة تيلوس.</p></Text>
                </Row>
                </ColumnLeft>
                <ColumnRight>
                    <Article animate={animationTwo}><p><t>بفضل الحوكمة التي بنيت عليها شركة تيلوس ، لا يجب أن يأتي التمويل المحايد الكربوني من هيئة مركزية. بدلاً من ذلك ، يمكن لأعضاء المجتمع التصويت للإفراج عن أموال الشبكة لتسلسل المبادرات التي ستنفذ بقية العملية. إذا مر التصويت ، ستكون تيلوس هي بلوكشين الوحيد الذي أصبح محايدًا للكربون من خلال التصويت المستقل اللامركزي والمستقل تمامًا. في غضون ذلك ، تتيح طبيعة</t><span>DPoS</span><t>للمجتمع التصويت لصالح المدققين الأخلاقيين مثل</t><span>TelosGreen</span><t>، وهو مدقق شبكة شهير يركز على الاستدامة.</t></p></Article>
                    <Article animate={animationTwo}><p><t>إن استهلاك طاقة أقل أو حتى التحول إلى محايد كربوني لا يكفي عندما يتعلق الأمر بالتأثير البيئي الإيجابي. يجب أن تجد المشاريع بنشاط طرقًا لتعزيز التجديد البيئي. مع توفر جميع أدوات</t><span>ESG</span><t>للمطورين ، اجتذبت تيلوس العديد من المشاريع التي تتمثل مهمتها الوحيدة في تحسين مواردنا الطبيعية والحفاظ عليها. دفع هذا شركة تيلوس إلى مرتبة متقدمة جدًا على المنافسين عندما يتعلق الأمر بالتأثيرات البيئية.</t></p></Article>
                    
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="additional" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="esgchart" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGSeeds;