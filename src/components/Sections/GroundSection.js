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
    background: black;
    height: 140vh;
`;

const HeaderText = styled(motion.div)`
    font-size: 100px;
    color: ${props => props.theme.text};
    padding: 80px 50px;
    text-align: center;
    @media screen and (max-width: 660px){
        font-size: 70px;
    }
`;

const TextContainer = styled.div`
    width: 80%;
    height: 90vh;
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 ${props => props.theme.text};
    backdrop-filter: blur(0.5px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 50px;
    @media screen and (max-width: 768px){
        width: 80%;
        height: 500px;
        top: 45%;
        width: 90%;
    }
    @media screen and (max-width: 660px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        top: 80%;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    
`;

const Image = styled(motion.img)`
    width: 35%;

    @media screen and (max-width: 660px){
        width: 30%;
    }

`;

const Title = styled(motion.h1)`
    font-size: 30px;
    color: aqua;
    text-align: center;
    @media screen and (max-width: 660px){
        font-size: 18px;
        
    }
`;

const Subtitle = styled(motion.div)`
    font-size: 22px;
    color: white;
    text-align: center;
    padding: 0 20px;
    @media screen and (max-width: 660px){
        font-size: 14px;
        padding: 0px;
    }
`;



const GroundSection = () => {

    const {ref, inView} = useInView();

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                pathLength: 1, scale: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                pathLength: 0, scale: 0.2,
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
                opacity: 0, y: '40px',
            })
        }
        
    }, [inView])

    return(
        <Section ref={ref}>
            <HeaderText animate={animation}>بلوكتشين تهد الارض</HeaderText>
            <TextContainer>
                <Column>
                    <Image src={NoFront} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                    <Title animate={animation}>
                         لا تشغيل أمامي  
                    </Title>
                    <Subtitle animate={animationTwo}>
                    أوًلا ، المعاملات الصادرة أولتلغي وظيفًيا التشغيلالأمامي
                    </Subtitle>
                </Column>
                <Column>
                        <Image src={NoGas} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                        بدون رسوم : 
                        </Title>
                        <Subtitle animate={animationTwo}>
                        لا توجد رسوم على تلوس ناتف
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Fast} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                        سريع وقابل للتحجيم
                        </Title>
                        <Subtitle animate={animationTwo}>
                        تلوس من اسرع بلوكتشينات العالم: ١٠٠٠٠ تحويلة بالثانية
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Comm} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                        حكم المجتمع
                        </Title>
                        <Subtitle animate={animationTwo}>
                        باستخدام محرك الحوكمة ، يقرر مجتمعنا كل شيء بد ًءمن المقترحات وحتى أعضاء مجلس الإدارة
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Eco} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
                        صديقة للبيئة
                        </Title>
                        <Subtitle animate={animationTwo}>
                        سلسلة الكتل الأكثر كفاءة في استخدام الطاقة ، نهدفي ًضا إلى تعويض جميع انبعاثات الكربون لدينا
                        </Subtitle>
                        </Column>
                        <Column>
                        <Image src={Decent} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>
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