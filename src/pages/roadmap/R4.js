import {useEffect} from "react";
import styled from "styled-components";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';



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
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
    display: inline-flex;
`;


const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back5};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 210vh;
    }
`;

const Grid = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        height: 190vh;
    }
`;



const Title = styled(motion.div)`
    height: 20vh;
    width: 80%;
    font-size: 48px;
    color: white;
    display: flex;
    align-items: center;
    direction: rtl;
    text-align: right;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    transform: translate(0, 20%);
    span{
        margin: 0 10px;
        @media screen and (max-width: 768px){ 
            font-size: 26px;
        }
    }
    @media screen and (max-width: 768px){
        height: 20vh;
        transform: translate(0, 0);
        font-size: 32px;
    }
`;


const BigArticle = styled(motion.div)`
    width: 80vw;
    font-size: 26px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 35px;
    height: 35vh;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 22px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 8px;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        line-height: 30px;
        padding: 0;
        height: 120vh;
    }
`;

const Article = styled(motion.div)`
    width: 80vw;
    font-size: 26px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 35px;
    height: 15vh;
    direction: rtl;
    span{
        margin: 0 8px;
        font-size: 22px;
        @media screen and (max-width: 768px){
        font-size: 20px;
        margin: 0 8px;
        }
    }
    a{
        color: aqua;
        text-decoration: none;
        margin: 0 10px;
        font-size: 22px;
        @media screen and (max-width: 768px){
        font-size: 18px;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 80%;
        line-height: 30px;
        padding: 0;
        height: 40vh;
    }
`;




const R1 = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.1
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
        <Section id="r4" ref={ref}>
            
           <Grid>
                <Title animate={animation}><span>dStor</span></Title>
                <BigArticle animate={animationTwo}><p><span>dStor</span> هي خدمة تخزين بيانات لامركزية تتمتع بمستويات عالية من المرونة والأمان يتم تطويرها حاليًا بواسطة <span>GoodBlock Technologies.</span> كأحد أعمدة الويب 3.0 ، يبسط <span>dStor</span> استخدام التخزين السحابي اللامركزي من خلال السماح للمدفوعات الورقية وإدارة البيانات عبر الشبكة لزيادة السرعة والتكرار دون الحاجة إلى إدارة العملاء ، كما تفعل منصات التخزين اللامركزية الأخرى. بفضل قدرة <span>dStor</span> على إيجاد عقد تخزين عالية الجودة داخل المنطقة الجغرافية للمستخدم ، تكون السرعة بنفس سرعة المنصات المركزية. يتيح ذلك فرصًا رائدة لصناعة التشفير بما في ذلك الألعاب اللامركزية القابلة للتطوير ، وأصول <span>NFT</span> الآمنة ، ووثائق الحوكمة غير القابلة للتلاعب ، والمزيد.</p></BigArticle>
                <Title animate={animation}><span>Telos Web Wallet 2.0</span></Title>
                <Article  animate={animationTwo}><p><t>قدم إصدار</t><a href="http://wallet.telos.net/" target="_blank" rel="noreferrer">Telos Web Wallet 2.0</a><t>واجهة سهلة للتنقل للمستخدمين لإدارة أصول التشفير المستندة إلى</t><span>Telos</span><t>في تطبيق حدسي. سيوفر التطوير المستمر مزيدًا من الوظائف وسهولة الاستخدام لحل محفظة الويب متعدد الإمكانات</t></p></Article>
               
           </Grid>
           <Empty>
                <IconColumnLeft to="r5" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r3" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R1;