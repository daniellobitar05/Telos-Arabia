import {useState, useRef, useEffect} from "react";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";

import Icon1 from "../SVG/slider1.svg";
import Icon2 from "../SVG/slider2.svg";
import Icon3 from "../SVG/slider3.svg";
import Icon5 from "../SVG/slider5.svg";
import Icon7 from "../SVG/slider7.svg";
import Icon6 from "../SVG/dev3.svg";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const cards = [
    {
        icon: Icon7,
        title: "تعديل تيلوس",
        subtitle: "خدمة تعديل المستندات اللامركزية مفتوحة المصدر المستخدمة لحوكمة تيلوس"
    },
    {
        icon: Icon6,
        title: "قرار تيلوس",
        subtitle: "يمكّن محرك الحوكمة التطبيقات والخدمات من إضفاء الطابع الديمقراطي على القرار بشكل ثابت يمكن التحقق منه"
    },
    {
        icon: Icon5,
        title: "dstor تيلوس",
        subtitle: "أحدثت dstor ثورة في تخزين البيانات العالمية للويب 3.0. بسرعة. موثوق. مقاومة للرقابة"
    },
    {
        icon: Icon3,
        title: "تيلوس بلوكتشين",
        subtitle: "أفضل بلوكتشين العام DPOS المحكوم والذي تم إنشاؤه باستخدام تقنية بروتوكول بلوكتشين الرائدة"
    },
    {
        icon: Icon3,
        title: "تسجيل الدخول تيلوس",
        subtitle: "تسجيل الدخول هو مزود OAuth يتيح نظام تسجيل دخول / إذن لامركزي آمن لـ تيلوس"
    },
    {
        icon: Icon2,
        title: "مقايضة تيلوس",
        subtitle: "ضاعف أزواج تداول الرمز المميز التي تقدم خدمة سيولة شبكة بانكور لمقايضات التوكنات"
    },
    {
        icon: Icon1,
        title: "مبادرات تيلوس",
        subtitle: "الأشغال هو نظام المبادرات المبني على أساس الشبكات والمبني باستخدام شركة تيلوس"
    },
]

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back4};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 140vh;
    }
    
`;

const Title = styled(motion.div)`
    font-size: 52px;
    width: 100%;
    color: ${props => props.theme.text};  
    height: 15vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        height: 35vh;
        font-size: 48px;
    }
    
    
    
`;

const Subtitle = styled(motion.div)`
    font-size: 24px;
    width: 70%;
    color: ${props => props.theme.text};
    text-align: center; 
    float: left;
    height: 15vh;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        width: 90%;
        height: 35vh;
    }
`;

const Carousel = styled(motion.div)`
    cursor: grab;
    height: 60vh;
    overflow: hidden;
    @media screen and (max-width: 768px){
        height: 60vh;
    }
    
    
`;

const InnerCarousel = styled(motion.div)`
    display: flex;
    height: 60vh;
    @media screen and (max-width: 768px){
        height: 60vh;
    }
    
   
`;

const Items = styled(motion.div)`
    min-width: 250px;
    min-height: 300px;
    padding: 30px 50px 30px 50px;
    @media screen and (max-width: 768px){
        
    }
`;

const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
    
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    box-shadow: 0 8px 26px 0 ${props => props.theme.text};
`;

const IconHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 20vh;
    
    span {
        display: flex;
        height: 75px;
        width: 75px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid aqua;
    }
`;

const SliderTitle = styled.div`
    color: aqua;
    height: 20%;
    width: 100%;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
`;

const SliderSubtitle = styled.div`
    color: white;
    height: 50%;
    width: 80%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const Empty = styled.div`
    width: 100%;
    height: 15vh;
    display: inline-flex;
    @media screen and (max-width: 768px){
        height: 10vh;
    }
    
    
`;

const IconColumnLeft = styled(LinkS)`
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const EmptyColumn = styled.div`
   width: 50%;
   height: 100%;
   float: left; 
`;

const Wrapper = styled.div`
    margin: 0 20%;
    width: 100%;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
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

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;

const DevStackSection = () => {

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
                x: 1,
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
                opacity: 0, y: '100px',
            })
        }
        
    }, [inView])

    const [width, setWidth] = useState(0);
    const carroussel = useRef();
    

    useEffect(() => {
        //console.log(carroussel.current.scrollWidth, carroussel.current.offsetWidth);
        setWidth(carroussel.current.scrollWidth - carroussel.current.offsetWidth);
    }, [])

    return(
        <Section id="devstack" ref={ref}>
            <Title animate={animation}>استكشف مجموعة مطوري شبكة تيلوس</Title>
            <Subtitle animate={animationTwo}>أصبحت شبكة تيلوس بسرعة أكبر مكدس ويب 3.0 ، مما يوفر للمطورين ورجال الأعمال الأدوات اللازمة للنجاح في الجيل التالي من اقتصاد الإنترنت اللامركزي</Subtitle>
            <Wrapper>
            <Carousel ref={carroussel}>
                <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}}>
                    {cards.map(card => {
                        return(
                            <Items>
                                <CardContainer>
                                    <IconHolder><span><img src={card.icon} alt="" key={card.title} /></span></IconHolder>
                                    <SliderTitle>{card.title}</SliderTitle>
                                    <SliderSubtitle>{card.subtitle}</SliderSubtitle>
                                </CardContainer>
                            </Items>
                        );
                    })}
                </InnerCarousel>
            </Carousel>
            </Wrapper>
            <Empty>
                <IconColumnLeft to="toolkit" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}>
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="docssection" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}>
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default DevStackSection;