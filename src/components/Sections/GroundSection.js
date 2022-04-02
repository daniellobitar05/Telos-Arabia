import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

import Fast from "../SVG/fast.svg";
import NoGas from "../SVG/nogas.svg";
import NoFront from "../SVG/nofront.svg";
import Decent from "../SVG/decent.svg";
import Eco from "../SVG/eco.svg";
import Comm from "../SVG/comm.svg";
import CPLUS from "../SVG/cplusplus.svg";
import SOLID from "../SVG/solidity.svg";


const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${props => props.theme.back2};
    height: 180vh;
`;

const HeaderText = styled(motion.div)`
    font-size: 100px;
    color: ${props => props.theme.text};
    height: 30vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 660px){
        font-size: 58px;
        height: 40vh;
    }
`;

const TextContainer = styled.div`
    width: 80%;
    height: 95vh;
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 ${props => props.theme.text};
    backdrop-filter: blur(0.5px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-rows: 1fr 1fr;
    padding: 10px;
    @media screen and (max-width: 768px){
        width: 90%;
        height: 140vh;
    }
    @media screen and (max-width: 660px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    
`;

const Image = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        height: 30%;     
    }
`;

const ImageHolder = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 660px){
        width: 50px;
        height: 50px;     
    }
    img{
        width: 100%;
        display: block;
        object-fit: cover;
        @media screen and (max-width: 660px){
            
        }
    }
`;

const Title = styled(motion.h1)`
    font-size: 30px;
    color: aqua;
    text-align: center;
    height: 25%;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 24px;
        height: 20%;
    }
`;

const Subtitle = styled(motion.div)`
    font-size: 22px;
    color: white;
    text-align: center;
    height: 40%;
    width: 70%;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    @media screen and (max-width: 660px){
        font-size: 18px;
        padding: 0px;
        width: 95%;
        height: 50%;
    }
`;



const GroundSection = () => {

    const {ref, inView} = useInView();

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
        <Section ref={ref}>
            <HeaderText animate={animation}>بلوكتشين تهد الارض</HeaderText>
            <TextContainer>
                <Column>
                    <Image><ImageHolder><img src={NoFront} alt="nofront" style={{transform: 'scale(0.8)'}}/></ImageHolder></Image>
                    <Title animate={animationTwo}>
                         لا تشغيل أمامي  
                    </Title>
                    <Subtitle animate={animationTwo}>
                    أوًلا ، المعاملات الصادرة أولتلغي وظيفًيا التشغيلالأمامي
                    </Subtitle>
                </Column>
                <Column>
                <Image><ImageHolder><img src={NoGas} alt="noGas" /></ImageHolder></Image>
                        <Title animate={animationTwo}>
                        بدون رسوم : 
                        </Title>
                        <Subtitle animate={animationTwo}>
                        لا توجد رسوم على تلوس ناتف
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image><ImageHolder><img src={Fast} alt="Fast" /></ImageHolder></Image>
                        <Title animate={animationTwo}>
                        سريع وقابل للتحجيم
                        </Title>
                        <Subtitle animate={animationTwo}>
                        تلوس من اسرع بلوكتشينات العالم: ١٠٠٠٠ تحويلة بالثانية
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image><ImageHolder><img src={Comm} alt="Comm" style={{transform: 'scale(0.8)'}}/></ImageHolder></Image>
                        <Title animate={animationTwo}>
                        حكم المجتمع
                        </Title>
                        <Subtitle animate={animationTwo}>
                        باستخدام محرك الحوكمة ، يقرر مجتمعنا كل شيء بد ًءمن المقترحات وحتى أعضاء مجلس الإدارة
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image><ImageHolder><img src={Eco} alt="Eco" /></ImageHolder></Image>
                        <Title animate={animationTwo}>
                        صديقة للبيئة
                        </Title>
                        <Subtitle animate={animationTwo}>
                        سلسلة الكتل الأكثر كفاءة في استخدام الطاقة ، نهدفي ًضا إلى تعويض جميع انبعاثات الكربون لدينا
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image><ImageHolder><img src={Decent} alt="Decent" /></ImageHolder></Image>
                        <Title animate={animationTwo}>
                        لامركزية
                        </Title>
                        <Subtitle animate={animationTwo} >
                        منتجي القوالب موجودون في جميع أنحاء العالم وليمكن أن يمتلكهم نفس الكيان
                        </Subtitle>
                        </Column>
            </TextContainer>
        </Section>
    )
}

export default GroundSection;