import styled from "styled-components";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

import CPLUS from "../SVG/cplusplus.svg";
import SOLID from "../SVG/solidity.svg";

const Section = styled.div`
    width: 100%;
    height: 120vh;
    background: black;
    @media screen and (max-width: 660px){
       
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
    
    justify-content: center;
    @media screen and (max-width: 660px){
        font-size: 24px;
        height: 20vh;
        padding-top: 20px;
        height: 20vh;
    }
`;

const EmptyColumn = styled.div`
    width: 10%;
    height: 70vh;
    
    float: left;
    @media screen and (max-width: 660px){
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
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 60vh;
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
    @media screen and (max-width: 660px){
        float: none;
        width: 100%;
        height: 80vh;
    }
`;

const ColumnTitle = styled(motion.div)`
    font-size: 18px;
    padding-bottom: 40px;
    color: ${props => props.theme.text};
    
`;

const Image = styled(motion.img)`
    padding-bottom: 30px;   

`;

const BigTitle = styled(motion.div)`
    font-size: 24px;
    color: ${props => props.theme.text};
    padding-bottom: 30px;
    span{
        font-weight: bold;
    }
`;

const Description = styled(motion.div)`
    font-size: 24px;
    color: ${props => props.theme.text};
    padding: 0 50px;
    text-align: center;
    line-height: 15px;
    @media screen and (max-width: 660px){
        padding: 0 40px;
        font-size: 14px;
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
        console.log("use effect hook, inView = " + inView);
    }, [inView])

    return(
        <Section ref={ref}>
            <Title animate={animationThree}>دعم بروتوكولي العقد الذكي الرائدين</Title>
            <EmptyColumn></EmptyColumn>
            <ColumnLeft>
                <ColumnTitle animate={animationTwo}>تيلوس ناتيف</ColumnTitle>
                <Image src={CPLUS} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                <BigTitle animate={animationTwo}>C++<span>ناتيف</span> </BigTitle>
                <Description animate={animationTwo}><p>EOSIO C++ تدير تيلوس في الأصل تقنية العقد الذكي</p><p>المكدس اللامركزي الرائد للتطبيقات اللامركزية عالية</p><p>الإنتاجية</p></Description>
            </ColumnLeft>
            <ColumnRight>
                <ColumnTitle animate={animationTwo}>EVM تيلوس </ColumnTitle>
                <Image src={SOLID} alt=""  animate={animation} whileHover={{scale: 1.1}}/>
                <BigTitle animate={animationTwo}><span>EVM</span> صلابة</BigTitle>
                <Description animate={animationTwo}><p>مبني على EVM تيلوس هو أول بلوكشين متوافق مع </p><p>قم بنشر وتشغيل تطبيقات ايثيريوم باستخدام .EOSIO</p><p>الأكثر ادا DeFi للحصول على  EVM تيلوس</p><p>ء وأماناًالمتاح اليوم</p></Description>
            </ColumnRight>
            <EmptyColumn></EmptyColumn>
        </Section>
    );
}

export default Protocol;