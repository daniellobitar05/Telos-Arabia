import styled from "styled-components";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

import CPLUS from "../SVG/cplusplus.svg";
import SOLID from "../SVG/solidity.svg";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back3};
    @media screen and (max-width: 768px){
       
        height: 190vh;
    }

`;

const Title = styled(motion.div)`
    height: 30vh;
    color: white;
    font-size: 80px;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    justify-content: center;
    @media screen and (max-width: 768px){
        font-size: 42px;
        height: 40vh;
        
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 150vh;
    }
`;



const ColumnLeft = styled(motion.div)`
    width: 40%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid purple;
    @media screen and (max-width: 768px){
        width: 90%;
        height: 68vh;
    }

    img{
        transform: scale(1.2) translate(0, 20%);
    }
`;

const ColumnRight = styled(motion.div)`
    width: 40%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid purple;
    @media screen and (max-width: 768px){
        
        width: 90%;
        height: 78vh;
    }
`;

const ColumnTitle = styled.div`
    font-size: 48px;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 44px;
        @media screen and (max-width: 768px){
        font-size: 32px;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 36px;
    }

    
`;

const Image = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 20%;
    }

`;

const ImageHolder = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        display: block;
        object-fit: contain;
        @media screen and (max-width: 768px){
        width: 80%;
        }
    }
`;

const BigTitle = styled(motion.div)`
    font-size: 32px;
    color: ${props => props.theme.text};
    height: 10%;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 20%;
        font-size: 26px;
    }
    span{
        margin: 0 8px;
        font-size: 28px;
        
    }
`;

const Description = styled(motion.div)`
    font-size: 26px;
    color: ${props => props.theme.text};
    height: 40%;
    width: 80%;
    text-align: center;
    line-height: 30px;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        margin: 0 8px;
        font-size: 22px;
        @media screen and (max-width: 768px){
        font-size: 18px;
        }
    }
    @media screen and (max-width: 768px){
        width: 90%;
        font-size: 22px;
        line-height: 25px;
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
            <Wrapper>
            <ColumnLeft animate={animationThree}>
                <ColumnTitle >تيلوس ناتيف</ColumnTitle>
                <Image><ImageHolder><img src={CPLUS} alt="icon1" /></ImageHolder></Image>
                <BigTitle ><p><t>ناتيف</t><span>C++</span></p></BigTitle>
                <Description ><p><t>تدير تيلوس في الأصل تقنية العقد الذكي</t><span>EOSIO ++C</span><t>المكدس اللامركزي الرائد للتطبيقات اللامركزية عالية الإنتاجية</t></p></Description>
            </ColumnLeft>
            <ColumnRight animate={animationThree}>
                <ColumnTitle ><p><t>تيلوس</t><span>EVM</span></p></ColumnTitle>
                <Image><ImageHolder><img src={SOLID} alt="icon2" /></ImageHolder></Image>
                <BigTitle ><p><t>تيلوس</t><span>EVM</span></p></BigTitle>
                 <Description ><p><t>تيلوس هو أول بلوكشين متوافق مع</t><span>EVM</span><t>مبني على</t><span>EOSIO.</span><t>قم بنشر وتشغيل تطبيقات ايثيريوم باستخدام ًء وأماناً تيلوس</t><span>EVM</span><t>للحصول على</t><span>DeFi</span><t>الأكثر ادا المتاح اليوم</t></p></Description>
            </ColumnRight>
            </Wrapper>
        </Section>
    );
}

export default Protocol;