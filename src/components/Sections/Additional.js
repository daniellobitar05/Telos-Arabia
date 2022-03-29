import React from "react";
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
import Corco from "../SVG/corco.svg";
import Kanda from "../SVG/kanda_logo.svg";
import New from "../SVG/newlife_logo.svg";
import Taikai from "../SVG/taikai_logo.svg";
import Peeranha from "../SVG/peeranha.svg";
import starter from "../SVG/tstarter.svg";
import Local from "../images/local_logo.png";

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
    background: ${props => props.theme.back9};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        
    }
`;

const Title = styled(motion.div)`
    font-size: 72px;
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
    @media screen and (max-width: 768px){
        width: 98%;
    }
    .swiper {
        width: 75%;
        height: 100%;
        @media screen and (max-width: 768px){
            width: 98%;
        }
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
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 36px;
    }
`;

const SecondRow = styled.div`
    width: 90%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 22px;
    line-height: 28px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
    }
    @media screen and (max-width: 768px){
       font-size: 18px; 
       line-height: 24px;
       height: 30%;
    }
`;

const InnerGrid = styled.div`
    width: 90%;
    height: 40%;
    display: flex;
    @media screen and (max-width: 768px){
        width: 98%;
    }
`;

const Column = styled.ol`
    width: 50%;
    height: 100%;
    float: left;
    list-style-type: circle;
    
    
`;

const Item = styled.li`
    width: 100%;
    height: 25%;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    text-align: right;
    direction: rtl;
    transform: translate(-15%, 0);
    font-size: 20px;
    span{
        margin: 0 8px;
    }
    &::marker{
        font-size: 20px;
        background-color: black;
    }
    @media screen and (max-width: 768px){
        transform: translate(-25%, 25%);
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
    background-image: url(${Local});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    
`;

const SecondCorco = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Corco});
    background-repeat: no-repeat;
    background-size: (75px, auto);
    background-position: center left;
    @media screen and (max-width: 768px){
        transform: scale(0.6) translate(-30%, 0);
    }
    
`;

const SecondKanda = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Kanda});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    @media screen and (max-width: 768px){
        transform: scale(0.8) translate(-30%, 0);
    }
`;

const SecondNew = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${New});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    
`;

const SecondTaikai = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Taikai});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    @media screen and (max-width: 768px){
        transform: translate(-20%, 0);
    }
    
`;

const SecondPeer = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${Peeranha});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    @media screen and (max-width: 768px){
        transform: translate(-10%, 0);
    }
    
`;

const SecondStarter = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${starter});
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
    @media screen and (max-width: 768px){
        font-size: 20px;
        transform: translate(-20%, 0);
    }
`;

const Additional = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }   

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    
    const animationThree = useAnimation();
    const animation = useAnimation();

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
            animation.start({
                x: 0, 
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '-100vw',
            })
        }
        
    }, [inView])

    return(
        <Section id="additional" ref={ref}>
            <Title animate={animation}>أمثلة بيئية إضافية</Title>
                <Grid animate={animationThree}>
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
                        <SecondRow><p>لوكال سكال هي منظمة ذات منفعة عامة تركز على تطوير اقتصادات محلية مرنة ومستدامة من خلال استخدام التكنولوجيا والعلوم والأنشطة التجديدية. إنه يوفر منظمة شاملة ومجانية الوصول ومنصة من شأنها تعزيز إنشاء واستخدام المنتجات المحلية ، وتوفير بدائل اقتصادية محلية للأنظمة المالية التقليدية ، وتعزيز ريادة الأعمال المحلية والمجتمعات المحلية ، مع الدعوة إلى المساواة الاجتماعية والعدالة الاجتماعية.</p></SecondRow>
                        <InnerGrid>
                            <Column>
                                <Item>تسهيل التعاون</Item>
                                <Item>ربط الجهات الفاعلة العالمية للتغيير</Item>
                                <Item>تمكين المجتمعات المحلية</Item>
                                <Item>120 شريكا و 22 تعاونا</Item>
                            </Column>
                            <Column>
                                <Item>نظام الدفع بدون تكلفة</Item>
                                <Item>على بلوكشين ذات الأثر البيئي الصفري</Item>
                                <Item>منصة مملوكة للمجتمع</Item>
                                <Item>التجديد والعمل المحلي</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <Second></Second>
                            <Third href="https://localscale.org/" target="_blank" rel="noreferrer">localscale.org</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}><p><t>عملة بيئية توفر حلاً إيجابيًا للاحتباس الحراري. يمكن للمستخدمين شراء رموز</t><span>TREE</span><t>وفي المقابل يقوم المزارع بزراعة شجرة. يتم اختيار كل شجرة بعناية ، مع مراعاة الموقع والنظام البيئي. يتم تحميل صورة وموقع</t><span>GPS</span><t>إلى نظام كوركو. يمتلك حاملو الرموز شجرتهم الخاصة لمدة 60 عامًا ، حيث يجمعون خلالها مكافآت كوركو كوين ، ممثلين لـ</t><span>Co2</span><t>التي تلتقطها الشجرة.</t></p></SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                <Item>ربط الاقتصاد بالموارد الطبيعية</Item>
                                <Item><t>عملة لموازنة الكربون</t><span>/ NFT</span></Item>
                            </Column>
                            <Column>
                                <Item><t>كل كوركوكوين يساوي 1 كجم من</t><span>Co2</span></Item>
                                <Item>استخدم الرمز المميز لتحقيق وفورات من متجر كوركوفادو</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondCorco></SecondCorco>
                            <Third href="https://corcocoin.org/" target="_blank" rel="noreferrer">corcocoin.org</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}><p>تمكين المجتمعات الأفريقية من جمع بيانات الطقس. تتمثل مهمةكاندا وازر بالون في بناء شبكة بالون مملوكة بالكامل للمجتمع ، على أمل تمكين طلاب الجامعات الأفارقة ليصبحوا قادة محليين في مجال تغير المناخ. يقدم هذا المشروع حلاً قابلاً للتطبيق لنقص البيانات المناخية في الوقت الحقيقي والتاريخية في غرب إفريقيا.</p></SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                <Item>مملوكة للمجتمع</Item>
                                <Item>المكافآت الرمزية</Item>
                                <Item>تم ترميزه للضعفاء</Item>
                            </Column>
                            <Column>
                                <Item>معلومات الوقت الحقيقي</Item>
                                <Item>المصدر المفتوح</Item>
                                <Item>تعمل بتقنية بلوكشين</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondKanda></SecondKanda>
                            <Third href="http://kandaweather.org/" target="_blank" rel="noreferrer">kandaweather.org</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}><p>نيو لايف هي عبارة عن منصة بحث ثقافي وإبداع اجتماعي لاستوديوهات التصميم والفنانين وتجار التجزئة والمعارض والمجلات والعلامات التجارية في طليعة الثقافة في أكثر من 107 دولة للبحث عن المواهب الناشئة والبحث عنها وتوظيفها.</p></SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                
                            </Column>
                            <Column>
                                <Item>تسريع التواصل الإبداعي</Item>
                                <Item>ملكية المستخدمين</Item>
                                <Item>البحث عن المواهب وتوظيفها</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondNew></SecondNew>
                            <Third href="https://newlife.io/" target="_blank" rel="noreferrer">newlife.io</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}><p>تايكاي هي منصة شاملة تدير تحديات الابتكار المفتوحة للمؤسسات أو الشركات التجارية. يتم حل التحديات من قبل مجتمع المبتكرين ويتم اختيار أفضل المشاريع من خلال نظام تصويت شفاف وقابل للتدقيق.</p></SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                <Item>معياري</Item>
                                <Item>شكلي</Item>
                            </Column>
                            <Column>
                                <Item>محايد للشبكة</Item>
                                <Item>يؤمن</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondTaikai></SecondTaikai>
                            <Third href="http://taikai.network/" target="_blank" rel="noreferrer">taikai.network</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}><p><t>بيرنها هو موقع إلكتروني للأسئلة والأجوبة لا مركزي يكافئ المستخدمين برموز التشفير</t><span>(PEER)</span><t>لمساهماتهم القيمة. على عكس مواقع الأسئلة والأجوبة الأخرى حيث تمتلك منظمة موقع الويب وجميع البيانات الناتجة عن المستخدمين ، فإن بيرنها مملوكة للمجتمع ويتم توزيع المكافآت على أعضاء المجتمع مقابل عملهم في تنمية النظام البيئي.</t></p></SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                
                            </Column>
                            <Column>
                                <Item>لامركزية</Item>
                                <Item>ملكية المستخدمين</Item>
                                <Item>مساهمة المكافآت</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondPeer></SecondPeer>
                            <Third href="http://peeranha.io/" target="_blank" rel="noreferrer">peeranha.io</Third>
                        </BottomRow>
                        </SwiperSlide>
                        <SwiperSlide>
                        <FirstRow>#BuiltOnTelos</FirstRow>
                        <SecondRow style={{height: '30%'}}><p><t>تجمع</t><span>T-Starter</span><t>بين الجسور عبر السلاسل ومنصة المبادلة الثابتة للسماح للمشاريع بجمع الأموال بشكل أكثر فعالية من حيث التكلفة مما هو ممكن في سلاسل الكتل الأخرى. تواجه منصات جمع الأموال الشائعة الأخرى رسومًا عالية للغاز ، مما يجعل المعاملات الصغيرة غير ميسورة التكلفة وتستبعد العديد من المستخدمين من المشاركة في مجموعات المقايضة. تستخدم T-Swaps شبكة تيلوس لحل هذه المشكلة ، مما يؤدي إلى مشاركة أوسع وبيع رمز أكثر فعالية من حيث التكلفة.</t></p></SecondRow>
                        <InnerGrid style={{height: '35%'}}>
                            <Column>
                                <Item>مجمعات المبادلة الثابتة والديناميكية</Item>
                                <Item><t>تكامل</t><span>KYC</span><t>الكامل</t></Item>
                                <Item>قائمة بدون إذن</Item>
                            </Column>
                            <Column>
                                <Item>المقايضات عبر السلاسل</Item>
                                <Item>ميزات مكافحة الاحتيال</Item>
                                <Item>نموذج الحكم</Item>
                            </Column>
                        </InnerGrid>
                        <BottomRow>
                            <First></First>
                            <SecondStarter></SecondStarter>
                            <Third href="http://tstarter.io/" target="_blank" rel="noreferrer">tstarter.io</Third>
                        </BottomRow>
                        </SwiperSlide>
                </Swiper>
            </Grid>
            <Empty>
                <IconColumnLeft to="social" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="seeds" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default Additional;