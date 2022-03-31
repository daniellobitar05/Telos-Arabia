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
       height: 130vh; 
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
        font-size: 52px;
        line-height: 40px;
    }
`;

const Grid = styled(motion.div)`
    width: 80%;
    height: 70vh;
    @media screen and (max-width: 768px){
        width: 98%;
        height: 100vh;
    }
    .swiper {
        width: 75%;
        height: 100%;
        @media screen and (max-width: 768px){
            width: 98%;
            height: 100vh;
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
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 20px;
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
    height: 30%;
    display: flex;
    @media screen and (max-width: 768px){
        width: 98%;
    }
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
    direction: rtl;
    text-align: right;
    font-size: 18px;
    transform: translate(-20%, 0);
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
    
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
    @media screen and (max-width: 768px){
        transform: scale(0.8) translate(-30%, 0);
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
        transform: scale(0.9) translate(-20%, 0);
    }
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
                x: '-100vw', opacity: 0, 
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, scale: 1, 
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, scale: 0.5
            })
        }
        
    }, [inView])

    return(
        <Section id="additionaltwo" ref={ref}>
            <Title animate={animation}>أمثلة بيئية إضافية</Title>
                <Grid animate={animationTwo}>
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
                        <SecondRow><p><t>منصة بيانات شفافة وجديرة بالثقة ، تبني حلولاً لمكافحة التحديات الأخلاقية في الذكاء الاصطناعي وصناعة البيانات الضخمة ، بمساعدة تقنية بلوكشين. تقديم قوة عاملة عالمية لجمع وتنظيم البيانات من المناطق والمجتمعات المتأثرة بالصراع. تهدف</t><span>Unbiased</span><t>من خلال حلولها إلى المساهمة في الابتكار وتحسين المجتمعات.</t></p></SecondRow>
                        <InnerGrid>
                            <Column>
                                <Item>شرح البيانات</Item>
                                <Item>جمع البيانات</Item>
                                <Item>سوق البيانات</Item>
                            </Column>
                            <Column>
                                <Item>الشفافية</Item>
                                <Item>ضمان الجودة</Item>
                                <Item>بيانات غير متحيزة</Item>
                            </Column>
                            <Column>
                                <Item>رضا العاملين</Item>
                                <Item>حسابات خالية من البريد العشوائي</Item>
                                <Item>القوى العاملة العالمية</Item>
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
                        <SecondRow><p><span>HeartChurch</span><t>هي أول كنيسة بلوكشين تم إنشاؤها للتأثير على العالم. يتكون</t><t>المشروع من فريق من المهنيين ذوي القيم المسيحية ورسالة لتلبية الاحتياجات الجسدية والروحية من خلال المعرفة والتضامن والمحبة. توفر المنظمة فرصًا لأولئك الموجودين في البلدان الخاضعة للإدارة السيئة سياسيًا ، مما يساعد الأفراد من هذه المناطق على النمو على منصات بلوكشين وفي مجتمعاتهم المحلية. خدم</t><t>مشروعهم الرائد</t><span>"Pan del cielo"</span><t>أكثر من 3000 شخص في فنزويلا</t></p></SecondRow>
                        <InnerGrid>
                            <Column style={{width: '10%'}}>
                               
                            </Column>
                            <Column style={{width: '80%'}}>
                                <Item>تقديم التوجيه الروحي والأخلاقي داخل بلوكشين</Item>
                                <Item>حارب من أجل الحرية في الحياة ، ضد الظلم والرق</Item>
                                <Item>ضمان حقوق الإنسان الأساسية للبشرية جمعاء</Item>
                                <Item>تنمية المجتمعات الدينية الداعمة والقادة المسيحيين الفعالين</Item>
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
                        <SecondRow><p>جو جديد تمامًا من الحرية. الحرية في القول ، والقيام ، والتعامل ، والبناء معًا. صُمم بكثافة ، وبُني بمثابرة ، وبُني بالحرية والحرية من أجل مستقبل أفضل. تزودك المناقشات بالأدوات اللازمة لبناء مجتمع حول العالم لتحقيق رؤيتك الجماعية. إنه محرك بناء مجتمع يساعدك على تحويل رؤيتك إلى المستقبل.</p></SecondRow>
                        <InnerGrid>
                            <Column style={{width: '50%'}}>
                                <Item>الاستفادة من المنصات الاجتماعية الحالية الخاصة بك</Item>
                                <Item><t>رمز أصلي</t><span>(ATMOS)</span></Item>
                                <Item><t>دعم</t><span>NFT</span><t>القادم</t></Item>
                            </Column>
                            <Column style={{width: '50%'}}>
                                <Item>ترتيب المحتوى ونظام المكافآت</Item>
                                <Item>تعزيز حرية الكلام والنزاهة</Item>
                                <Item>وحدة إعلان لا مركزية فريدة من نوعها</Item>
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
                        <SecondRow><p><t>التخزين اللامركزي هو عنصر أساسي في</t><span>Web3.0</span><t>لا يحتوي على حل مناسب حتى الآن.</t><span>dStor</span><t>أخيرًا يحل هذه المشكلة.</t><span>dStor</span><t>هو التطبيق الوحيد القابل للتطوير للتخزين اللامركزي المتاح حاليًا ، والذي تم إنشاؤه باستخدام نموذج اقتصادي يفيد المستخدمين ومشغلي العقد.</t></p></SecondRow>
                        <InnerGrid>
                            <Column style={{width: '20%'}}>
                               
                            </Column>
                            <Column style={{width: '60%'}}>
                                <Item>المرونة: الوصول إلى البيانات من أي مكان</Item>
                                <Item>السرعة: تسليم البيانات بسرعة</Item>
                                <Item>الأمان: احمِ ملفاتك من العبث</Item>
                                <Item>التوفير في التكلفة: تعظيم الإيرادات</Item>
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
                        <SecondRow><p><t>يعاني الإنترنت من مشاكل عميقة الجذور تنمو يوميًا: عدم الثقة ، والانتحال ، والأخبار المزيفة. يريد</t><span>WordProof</span><t>إنشاء معيار جديد لإنترنت أكثر موثوقية وجديرة بالثقة ، بمساعدة تقنية بلوكشين. يتيح نظام</t><span>WordProof Timestamp Ecosystem</span><t>لمستخدمي الإنترنت ومنشئي المحتوى الأدوات اللازمة لبناء إنترنت أكثر أمانًا وموثوقية.</t></p></SecondRow>
                        <InnerGrid>
                            <Column style={{width: '50%'}}>
                                <Item>حماية حقوق النشر</Item>
                                <Item>آلة الزمن</Item>
                                <Item>وورد البرنامج المساعد</Item>
                            </Column>
                            <Column style={{width: '50%'}}>
                                <Item>تمكين الثقة القابلة للتحقق</Item>
                                <Item>حماية المحتوى الخاص بك</Item>
                                <Item>استعد للجيل القادم من تحسين محركات البحث</Item>
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