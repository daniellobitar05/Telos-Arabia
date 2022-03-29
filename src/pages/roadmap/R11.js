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
    background: ${props => props.theme.back12};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 170vh;
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
        height: 160vh;
    }
`;



const Title = styled(motion.div)`
    height: 20vh;
    width: 90%;
    font-size: 48px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    transform: translate(0, 20%);
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    span{
        margin: 0 10px;
        @media screen and (max-width: 768px){ 
            font-size: 26px;
        }
    }
    @media screen and (max-width: 768px){
        height: 30vh;
        transform: translate(0, 0);
        font-size: 32px;
    }
`;


const Article = styled(motion.div)`
    width: 70vw;
    font-size: 24px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: right;
    padding: 30px 0;
    direction: rtl;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    line-height: 30px;
    span{
        margin: 0 8px;
        font-size: 20px;
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
        <Section id="r11" ref={ref}>
            
           <Grid>
                <Title animate={animation}><p><t>سوق ومعرض</t><span>NFT</span><t>جدارية</t></p></Title>
                <Article  animate={animationTwo}><p><t>مع تكاليف سكك منخفضة للغاية ، وعدم وجود مقدمة ، وبصمة كربونية منخفضة ، تم تعيين</t><span>Telos EVM</span><t>ليكون النظام الأساسي الأكثر ملاءمة للفنان في جميع أنحاء الصناعة. يعد سوق ومعرض</t><span>NFT</span><t>الجداري جزءًا أساسيًا في تسهيل هذا النظام البيئي الإبداعي المزدهر. قم بشراء وبيع وتداول وعرض مجموعات</t><span>NFT</span><t>الخاصة بك بسهولة وتنمية محفظة الأعمال الفنية اللامركزية الخاصة بك.</t></p></Article>
                <Title animate={animation}><p><t>خاص</t><span>Telos</span></p></Title>
                <Article  animate={animationTwo}><p><t>ستعمل</t><span>Telos Private</span><t>على تمكين معاملات </t><t>"الخاصة تمامًا"</t><span>(ZK)</span><t>لإثبات المعرفة الصفرية "لمستخدمي</t><span>Telos.</span><t>ستستخدم</t><span>Telos Private</span><t>سلسلة جانبية منفصلة برمز معدل للسماح بمعاملات</t><span>ZK</span><t>والجسور من وإلى</t><span>Telos.</span><t>ستكون السلسلة الجانبية لامركزية ويديرها منتجو كتلة</t><span>Telos,</span><t>ويتم اختيارهم من خلال تصويت المستخدم.</t></p></Article> 
           </Grid>
           <Empty>
                <IconColumnLeft to="r14" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="r10" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default R1;