import {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {IconButton} from "@mui/material";
import Icon1 from "../SVG/performance.svg";
import Icon2 from "../SVG/funding.svg";
import Comm from "../SVG/comm.svg";
import Icon4 from "../SVG/ux.svg";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 280vh;
    }
`;

const Title = styled(motion.div)`
    font-size: 82px;
    width: 100%;
    color: ${props => props.theme.text};  
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        height: 30vh;
        font-size: 52px;
    }
    
    
`;

const Grid = styled(motion.div)`
    width: 80%;
    height: 65vh;
    
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 240vh;
    }   
`;

const Column = styled(motion.div)`
    width: 25%;
    height: 50vh;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
    justify-content: center;
    margin: 10px; 
    border: 1px solid purple;
    border-radius: 20px;
    &:hover{
        background: rgb(230,230,250,0.2);
    }
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 60vh;
    }
`;

const IconContainer = styled(motion.div)`
    height: 40%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const IconHolder = styled(motion.div)`
    height: 85px;
    width: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid aqua;
    
    
    img{
        width: 50%;
        display: block;
        object-fit: cover;
        
        
        @media screen and (max-width: 768px){
            
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
        height: 40%;
    }
`;

const TopText = styled.div`
    height: 40%;
    width: 80%;
    line-height: 30px;
    color: white;
    font-size: 36px;
    text-align: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const BottomText = styled.div`
    height: 60%;
    width: 90%;
    color: white;
    font-size: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 20px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
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
const Trans4 = {
    duration: 4, 
    yoyo: Infinity,
    ease: 'easeInOut',
    delay: 2.5
}




const Empty = styled.div`
    width: 100%;
    height: 15vh;
    display: inline-flex;
    
`;

const IconColumn = styled.div`
    width: 25%;
    height: 100%
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Subtitle = styled.div`
    font-size: 24px;
    width: 50%;
    color: ${props => props.theme.text};
    text-align: center; 
    float: left;
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;


const DeveloperSection = () => {

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

    return(
        <Section id="devresources" ref={ref}>
            <Title animate={animation}>موارد المطور</Title>
            
            <Grid animate={animationTwo}>
                <Column variants={ContainerVariants} initial='start' animate='end'>
                    <IconContainer variants={CircleVariants}  transition={CircleTransition}>
                        <IconHolder><img src={Icon1} alt="logo1" /></IconHolder>
                    </IconContainer>
                    <TextContainer>
                        <TopText>أداء عالي</TopText>
                        <BottomText>معاملات سريعة ورسوم منخفضة</BottomText>
                    </TextContainer>
                </Column>
                <Column variants={ContainerVariants} initial='start' animate='end'>
                    <IconContainer variants={CircleVariants}  transition={Trans2}>
                    <IconHolder><img src={Icon2} alt="logo1" /></IconHolder>
                    </IconContainer>
                    <TextContainer>
                        <TopText>التمويل الأولي متاح</TopText>
                        <BottomText><t>تدعم الشبكة المشاريع الواعدة</t></BottomText>
                    </TextContainer>
                </Column>
                <Column variants={ContainerVariants} initial='start' animate='end'>
                    <IconContainer variants={CircleVariants}  transition={Trans3}>
                    <IconHolder><img src={Comm} alt="logo1" /></IconHolder>
                    </IconContainer>
                    <TextContainer>
                        <TopText>محاذاة المجتمع </TopText>
                        <BottomText>تم إنشاؤه لدعم العمل الذي يحركه الغرض</BottomText>
                    </TextContainer>
                </Column>
                <Column variants={ContainerVariants} initial='start' animate='end'>
                    <IconContainer variants={CircleVariants}  transition={Trans4}>
                    <IconHolder><img src={Icon4} alt="logo1" /></IconHolder>
                    </IconContainer>
                    <TextContainer>
                        <TopText>تجربة مستخدم حديثة</TopText>
                        <BottomText>لا يمكن للمستخدمين معرفة أنه مبني على بلوكتشين</BottomText>
                    </TextContainer>
                </Column>
            </Grid>
            <Empty>
                <IconColumn>
                <LinkS to="docssection" smooth={true} duration={1000} spy={true} exact="true" style={{background: 'transparent'}}><IconButton><ArrowDown /></IconButton></LinkS>
                </IconColumn>
            <Subtitle></Subtitle>
                <IconColumn>
                    <IconButton onClick={toggleHome}><ArrowUp /></IconButton>
                </IconColumn>
            </Empty>
            
        </Section>
    );
}

export default DeveloperSection;