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
    width: 100vw;
    background: ${props => props.theme.back2};
    height: 130vh;
    @media screen and (max-width: 768px){
        height: 290vh;
    }
`;

const Empty = styled.div`
    width: 100%;
    height: 30vh;
    background: rgba(30,20,136,1);
`;

const HeaderText = styled(motion.div)`
    font-size: 100px;
    color: ${props => props.theme.text};
    height: 20vh;
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

const Grid = styled.div`
    width: 90vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 768px){
        width: 90%;
        height: 250vh;
    }
`;

const Row = styled.div`
    width: 100%;
    height: 40vh;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        height: 125vh;
    }
`;

const Item = styled(motion.div)`
    width: 27vw;
    height: 95%;
    display: flex;
    flex-direction: column;
    border: 1px solid purple;
    
    &:hover{
        background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
    }
    @media screen and (max-width: 768px){
        width: 80vw;
        height: 38vh;
        margin: 10px 0;
    }
`;

const Top = styled.div`
    width: 100%;
    height: 19vh;
    display: flex;
`;

const Text = styled.div`
    width: calc(100% - 19vh);
    height: 19vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    direction: rtl;
    h1{
       color: white;
       font-size: 38px;
       line-height: 30px;
       @media screen and (max-width: 768px){
        font-size: 32px;
        line-height: 25px;
    }
    }
`;

const Image = styled.div`
    width: 19vh;
    height: 19vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 75%;
        display: block;
        object-fit: cover;
    }
`;
const Description = styled.div`
    width: 90%;
    height: 19vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    direction: rtl;
    h1{
       color: white;
       font-size: 26px;
       line-height: 30px;
       width: 100%;
       @media screen and (max-width: 768px){
        font-size: 22px;
       line-height: 25px;
    }
    }
`;





const NewGround = () => {

    const {ref, inView} = useInView();

    const animation = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1, scale: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                opacity: 0, scale: 0.6
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                x: 0,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                x: '-100vw'
            })
        }
        
    }, [inView])

    return(
        <>
        <Empty />
        <Section ref={ref} id="ground">
            <HeaderText animate={animationTwo}>بلوكتشين تهد الارض</HeaderText>
            <Grid>
                <Row>
                    <Item animate={animation}>
                        <Top>
                            <Text><p><h1>لا تشغيل أمامي</h1></p></Text>
                            <Image><img src={NoFront} alt="nofront" style={{transform: 'scale(0.8)'}}/></Image>
                        </Top>
                        <Description><p><h1>أوًلا ، المعاملات الصادرة أولتلغي وظيفًيا التشغيلالأمامي</h1></p></Description>
                    </Item>
                    <Item animate={animation}>
                        <Top>
                            <Text><p><h1>بدون رسوم :</h1></p></Text>
                            <Image><img src={NoGas} alt="noGas" /></Image>
                        </Top>
                        <Description><p><h1> لا توجد رسوم على تلوس ناتف</h1></p></Description>
                    </Item>
                    <Item animate={animation}>
                        <Top>
                            <Text><p><h1>سريع وقابل للتحجيم</h1></p></Text>
                            <Image><img src={Fast} alt="Fast" /></Image>
                        </Top>
                        <Description><p><h1>تلوس من اسرع بلوكتشينات العالم: ١٠٠٠٠ تحويلة بالثانية</h1></p></Description>
                    </Item>
                </Row>
                <Row>
                    <Item animate={animation}>
                        <Top>
                            <Text><p><h1>حكم المجتمع</h1></p></Text>
                            <Image><img src={Comm} alt="Comm" style={{transform: 'scale(0.8)'}}/></Image>
                        </Top>
                        <Description><p><h1>باستخدام محرك الحوكمة ، يقرر مجتمعنا كل شيء بد ًءمن المقترحات وحتى أعضاء مجلس الإدارة</h1></p></Description>
                    </Item>
                    <Item animate={animation}>
                        <Top>
                            <Text><p><h1>صديقة للبيئة</h1></p></Text>
                            <Image><img src={Eco} alt="Eco" /></Image>
                        </Top>
                        <Description><p><h1>سلسلة الكتل الأكثر كفاءة في استخدام الطاقة ، نهدفي ًضا إلى تعويض جميع انبعاثات الكربون لدينا</h1></p></Description>
                    </Item>
                    <Item animate={animation}>
                        <Top>
                            <Text><p><h1>لامركزية</h1></p></Text>
                            <Image><img src={Decent} alt="Decent" /></Image>
                        </Top>
                        <Description><p><h1>منتجي القوالب موجودون في جميع أنحاء العالم وليمكن أن يمتلكهم نفس الكيان</h1></p></Description>
                    </Item>
                </Row>
            </Grid>
        </Section>
        </>
    )
}

export default NewGround;