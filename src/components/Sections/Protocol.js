import styled from "styled-components";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

import CPLUS from "../SVG/cplusplus.svg";
import SOLID from "../SVG/solidity.svg";

const Section = styled.div`
    width: 100%;
    height: 120vh;
    background: ${props => props.theme.back3};
    @media screen and (max-width: 768px){
       
        height: 160vh;
    }

`;

const Title = styled(motion.div)`
    height: 30vh;
    color: white;
    font-size: 80px;
    display: flex;
    padding-top: 80px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    justify-content: center;
    @media screen and (max-width: 768px){
        font-size: 42px;
        height: 40vh;
        padding-top: 20px;
    }
`;

const EmptyColumn = styled.div`
    width: 10%;
    height: 70vh;
    
    float: left;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 70vh;
    
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 50vh;
    }
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 70vh;
    
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 70vh;
    }
`;

const ColumnTitle = styled(motion.div)`
    font-size: 48px;
    padding-bottom: 40px;
    color: ${props => props.theme.text};
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    
    @media screen and (max-width: 768px){
        font-size: 42px;
        
    }
    
`;

const Image = styled(motion.img)`
    padding-bottom: 30px;   

`;

const BigTitle = styled(motion.div)`
    font-size: 24px;
    color: ${props => props.theme.text};
    padding-bottom: 30px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    span{
        font-weight: bold;
        
    }
`;

const Description = styled(motion.div)`
    font-size: 24px;
    color: ${props => props.theme.text};
    padding: 0 50px;
    text-align: center;
    line-height: 30px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    @media screen and (max-width: 768px){
        padding: 0 40px;
        font-size: 22px;
    }
`;





const Protocol = () => {

    const {ref, inView} = useInView();

    const animation = useAnimation();
    const animationTwo = useAnimation();
    const animationThree = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                scale: 1.5,
                transition: {
                    duration: 1, delay: 1
                }
            });
        }
        if(!inView){
            animation.start({
                scale: 0.2,
            })
        }
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: 0, 
                transition: {
                    duration: 1, delay: 1,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, y: '40px',
            })
        }
    }, [inView])

    useEffect(() => {
        if(inView){
            animationThree.start({
                opacity: 1, scale: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animationThree.start({
                opacity: 0, scale: 0.2,
            })
        }
        /* console.log("use effect hook, inView = " + inView); */
    }, [inView])

    return(
        <Section ref={ref}>
            <Title animate={animationThree}>دعم بروتوكولي العقد الذكي الرائدين</Title>
            <EmptyColumn></EmptyColumn>
            <ColumnLeft>
                <ColumnTitle animate={animationTwo}>تيلوس ناتيف</ColumnTitle>
                <Image src={CPLUS} alt="" animate={animation} />
                <BigTitle animate={animationTwo}>C++<span>ناتيف</span> </BigTitle>
                <Description animate={animationTwo}>تدير تيلوس في الأصل تقنية العقد الذكي ++ C EOSIO المكدس اللامركزي الرائد للتطبيقات اللامركزية عالية الإنتاجية</Description>
            </ColumnLeft>
            <ColumnRight>
                <ColumnTitle animate={animationTwo}>EVM تيلوس </ColumnTitle>
                <Image src={SOLID} alt=""  animate={animation} />
                <BigTitle animate={animationTwo}><span>EVM</span> صلابة</BigTitle>
                 <Description animate={animationTwo}>تيلوس هو أول بلوكشين متوافق مع EVM مبني على
EOSIO .قم بنشر وتشغيل تطبيقات ايثيريوم باستخدام
ًء وأماناً تيلوس EVM للحصول على DeFi الأكثر ادا
المتاح اليوم</Description>
            </ColumnRight>
            <EmptyColumn></EmptyColumn>
        </Section>
    );
}

export default Protocol;