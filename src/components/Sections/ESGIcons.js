import styled from "styled-components";
import {useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {IconButton} from "@mui/material";
import Icon1 from "../SVG/performance.svg";
import Icon2 from "../SVG/funding.svg";
import Icon3 from "../SVG/community.svg";


const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 210vh;
    }
`;



const Grid = styled(motion.div)`
    width: 80%;
    height: 50vh;
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 150vh;
    }   
`;

const Column = styled(motion.div)`
    width: 22.5%;
    height: 100%; 
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 50px;
    
    border-radius: 20px;
    border: 1px solid purple;
    &:hover{
        background: rgb(230,230,250,0.2);
    }
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 30vh;
    }
`;

const IconContainer = styled(motion.div)`
    height: 40%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        width: 25%;
        border-radius: 50%;
        border: 1px solid aqua;
        padding: 10px;
        @media screen and (max-width: 768px){
            width: 20%;
        }
    }
`;

const TextContainer = styled.div`
    width: 100%;
    height: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 30%;
    }
`;

const TopText = styled(motion.div)`
    height: 40%;
    width: 100%;
    color: white;
    font-size: 36px;
    text-align: center;
    direction: rtl;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
    }
`;

const BottomText = styled(motion.div)`
    height: 60%;
    color: white;
    font-size: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 20px;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 768px){
        font-size: 18px;
        transform: translate(0, 50%);
    }
`;


const ContainerVariants = {
    start: {
        transition: {
          staggerChildren: 0.8
        }
    },
    end: {
        transition: {
           staggerChildren: 0.8
        }
    }
};

const CircleVariants = {
    start: {
        y: '0%'
    },
    end: {
        y: '-30%'
    }
};

const CircleTransition = {
    duration: 4, 
    yoyo: Infinity,
    ease: 'easeInOut',
};

const Trans2 = {
    duration: 4, 
    yoyo: Infinity,
    ease: 'easeInOut',
    delay: 0.5
}
const Trans3 = {
    duration: 4, 
    yoyo: Infinity,
    ease: 'easeInOut',
    delay: 1.5
}

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
   background: transparent;
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
    
    
`;


const TextColumns = styled(motion.div)`
    height: 30vh;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 90vh;
    }
`;

const TextColumn = styled(motion.div)`
    height: 100%;
    width: 50%;
    float: left;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 50%;
    }
`;

const EmptyTextColumn = styled.div`
    height: 100%;
    width: 10%;
    float: left;
    @media screen and (max-width: 768px){
        display: none;
    }
`;


const ESGIcons = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animationTwo = useAnimation();
    const animationThree = useAnimation();

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
                x: '-100vw'
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: '-20px',
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, y: '70px',
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationThree.start({
                opacity: 1, y: 0, scale: 1,
                transition: {
                    duration: 1.5, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationThree.start({
                opacity: 0, y: '100px', scale: 0.4
            })
        }
        
    }, [inView])

    return(
        <Section id="esgicons" ref={ref}>
            <Grid animate={animationThree}>
                <Column variants={ContainerVariants} initial='start' animate='end' >
                    <IconContainer variants={CircleVariants}  transition={CircleTransition}>
                        <img src={Icon1} alt="logo1" />
                    </IconContainer>
                    <TextContainer>
                        <TopText >هيكل الحوكمة</TopText>
                        <BottomText >معايير إدارة المبادرة</BottomText>
                    </TextContainer>
                </Column>
                <Column variants={ContainerVariants} initial='start' animate='end'>
                    <IconContainer variants={CircleVariants}  transition={Trans2}>
                        <img src={Icon2} alt="logo1" />
                    </IconContainer>
                    <TextContainer>
                        <TopText >مسؤول إجتماعيا</TopText>
                        <BottomText >التصرف بطريقة تفيد المجتمع</BottomText>
                    </TextContainer>
                </Column>
                <Column variants={ContainerVariants} initial='start' animate='end'>
                    <IconContainer variants={CircleVariants}  transition={Trans3}>
                        <img src={Icon3} alt="logo1" />
                    </IconContainer>
                    <TextContainer>
                        <TopText >واع بيئيا</TopText>
                        <BottomText >الحفاظ على الموارد الطبيعية في العالم</BottomText>
                    </TextContainer>
                </Column>
            </Grid>
            <TextColumns>
                <TextColumn animate={animationTwo}><p><t>وجدت دراسة</t><span>ESG Global</span><t>أن مالكي الأصول خصصوا 48٪ من أموالهم نحو</t><span>ESG</span><t>في عام 2017. وقد ارتفع هذا الرقم إلى 75٪ في عام 2019 ، ومن المتوقع أن ترتفع هذه الأرقام إلى 92٪ بحلول نهاية عام 2021. وهذا يثبت أن هناك طن من القيمة في استثمارات</t><span>ESG</span><t>سواء من منظور واع اجتماعيًا وكذلك من منظور مالي</t></p></TextColumn>
                <EmptyTextColumn />
                <TextColumn animate={animationTwo}><p><t>يمكن إرجاع تاريخ</t><span>ESG</span><t>إلى عام 2004. في ذلك الوقت ، دعا الأمين العام السابق للأمم المتحدة كوفي عنان أكثر من 50 مديرًا تنفيذيًا للمؤسسات المالية الكبرى لوضع توصيات حول كيفية دمج عناصر</t><span>ESG</span><t>في أسواق رأس المال. استفاد جميع المعنيين من التحرك نحو</t><span>ESG</span><t>نظرًا لقدرته على الكشف عن القيمة في المجالات التي تقصر فيها الأساليب التحليلية</t></p></TextColumn>
            </TextColumns>
            <Empty>
                <IconColumnLeft to="todo" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="videos" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default ESGIcons;