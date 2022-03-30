import {useEffect} from "react";
import styled, {keyframes} from "styled-components";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Back from "../images/pyr9.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${Back}), ${props => props.theme.back4};
    background-repeat: no-repeat;
    background-size: contain;
    @media screen and (max-width: 768px){
        height: 160vh;
    }
`;

const PageTitle = styled(motion.div)`
    font-size: 84px;
    width: 80%;
    height: 30vh;
    color: ${props => props.theme.text};  
    display: flex;
    align-items: center;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        font-size: 42px;
        text-align: center;
    }
    
`;

const Title = styled(motion.div)`
    height: 10vh;
    width: 80%;
    font-size: 62px;
    color: white;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    direction: rtl;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        transform: translate(0, 0);
        font-size: 72px;
    }
`;

const Article = styled(motion.div)`
    width: 70vw;
    font-size: 30px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 20px;
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
    }
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
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

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;



const DepthLookSection = () => {

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
        <Section id="depthlook" ref={ref}>
            <PageTitle animate={animation}>في نظرة متعمقة في اقتصاد العملة</PageTitle>
            <Title animate={animation}>منشأ</Title>
            <Article animate={animationTwo}><p><t>تم إنشاء رمز تيلوس المميز في عام 2018 عندما تم التقاط لقطة تكوين الشبكة. لقطة</t><span>Genesis</span><t>المستمدة من شبكة</t><span>EOS ,</span><t>ذات الحسابات المحددة بـ</t><span>40000 TLOS. </span><t>تم القيام بذلك للحد من إمكانات "مستثمري الحيتان" والحفاظ على توزيع الملكية بشكل عادل.</t></p></Article>
            <Article animate={animationTwo}><p><t>تم إنشاء إجمالي</t><span>330،753،222 TLOS</span><t>في هذه اللقطة الأولية. تم توزيع 12 مليون من هذه الرموز المميزة الأولية على تيلوس</t><span>Founders Rewards Pool</span><t>و شركة تيلوس. سمح ذلك للشبكة بالإطلاق بطريقة شعبية ، دون أي تمويل أولي للعملة أو رأس المال الاستثماري. يعد هذا أمرًا نادرًا في العديد من سلاسل الكتل الحديثة ، ولكنه ضرورة لأن تكون شبكات</t><span>DPoS</span><t>لا مركزية حقًا.</t></p></Article>
            <Empty>
                <IconColumnLeft to="depthlooktwo" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="supply" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
            {/* 
            <Title>Conclusion: Holding TLOS is Like Holding the Future of Telos</Title>
            <Article>As previously explained, all network initiatives are funded with the TLOS token, including the Telos Foundation, Block Producers (Validators), REX, Telos Core Devs, Economic Development Fund and Worker Proposal System. Because of this, TLOS is the funding vehicle that powers every aspect of Telos.</Article>
            <Article>When you pair this with governance, you have a token that is extremely unique. Holding TLOS allows you to take part in democratic decisions surrounding how the remaining resources are utilized.</Article>
            <Article>With this in mind, the true utility of TLOS is that it empowers the network to continue evolving, as it sustains itself in a way that mutually benefits all network users and token holders.</Article> */}
        </Section>
    )
}

export default DepthLookSection;