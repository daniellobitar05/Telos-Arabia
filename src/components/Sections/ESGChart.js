import { animateScroll as scroll } from "react-scroll";
import {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";


import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import telos from "../images/telos_logo.png";
import eth from "../images/eth_logo.png";
import btc from "../images/btc.png";



const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back7};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        height: 180vh;
    }
`;

const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 768px){
        flex-direction: column; 
        height: 170vh;
    }
`;

const ColumnLeft = styled.div`
    width: 40%;
    height: 75vh;
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

const ColumnRight = styled.div`
    width: 40%;
    height: 90vh;
    display: flex;
    float: left;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 768px){
        float: none; 
        width: 100%;
        height: 100vh;
        justify-content: center;
    }
    
`;

const GraphWrapper = styled(motion.div)`
    width: 90%;
    height: 50vh;
    border: 1px solid indigo;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(145deg, rgba(2,3,29,1) 0%, rgba(74,21,131,1) 35%, rgba(2,3,29,1) 100%);
    box-shadow: 6px 6px 20px limegreen;
    
`;

const PositionRow = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
`;

const Position = styled.div`
    height: 100%;
    width: 9.09%;
    
    float: left;
    display: flex;
    
    justify-content: center;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        
    }
`;

const PositionBTC = styled.div`
    height: 100%;
    width: 9.09%;
    float: left;
    display: flex;
    justify-content: center;
    transform: translate(15%, 20%);
    @media screen and (max-width: 768px){
        transform: translate(30%, 20%);
    }
`;

const PositionETH = styled.div`
    height: 100%;
    width: 9.09%;
    float: left;
    display: flex;
    justify-content: center;
    transform: translate(15%, 400%);
    @media screen and (max-width: 768px){
        transform: translate(80%, 400%);
    }
`;

const PositionTelos = styled.div`
    height: 100%;
    width: 9.09%;
    float: left;
    display: flex;
    justify-content: center;
    transform: translate(-20%, 460%);
    font-size: 14px;
    @media screen and (max-width: 768px){
        transform: translate(0%, 460%);
        font-size: 10px;
    }
`;

const BarRow = styled.div`
    height: 70%;
    width: 100%;
    margin-left: 40px;
    
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

const EmptyGraphColumn = styled.div`
    height: 0;
    width: 9.09%;
    float: left;
    
    
`;

const Text = styled.div`
    color: white;
    font-size: 16px;
    text-align: center;
`;

const TelosColumn = styled(motion.div)`
    max-height: 1%;
    width: 9.09%;
    float: left;
    background: purple;
    @media screen and (max-width: 768px){
        transform: translate(-30%, 0);
    }
    
`;
const BTCColumn = styled(motion.div)`
    max-height: 100%;
    width: 9.09%;
    float: left;
    background: purple;
    @media screen and (max-width: 768px){
        transform: translate(-20%, 0);
    }
    
`;
const ETHColumn = styled(motion.div)`
    max-height: 46%;
    width: 9.09%;
    float: left;
    background: purple;
    margin-left: 20px;
    margin-right: 20px;
    @media screen and (max-width: 768px){
        transform: translate(-20%, 0);
    }
    
`;

const TitleRow = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    
`;

const IconRow = styled.div`
    width: 100%;
    height: 10%;
    
    display: flex;
    
    
`;

const Subtitle = styled(motion.div)`
    font-size: 22px;
    width: 90%;
    color: ${props => props.theme.text};
    text-align: center; 
    text-shadow: black -1px 2px, #4b0082 -2px 2px, black -3px 3px;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    direction: rtl;
    @media screen and (max-width: 768px){
        width: 90%;
        height: 35vh;
        line-height: 30px;
    }
    span{
        margin: 0 8px;
        font-size: 18px;
    }
    a {
        color: aqua;
        margin: 0 8px;
    }
   
`;

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







const ESGChart = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    function ChangeNumber () {
        const counters = document.querySelectorAll('.esggraph');
        counters.forEach(counter => {
            counter.innerText = "0";

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;

                const increment = target / 100;
                
                if (c < target){
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 2);
                } else {
                    counter.innerText = target;
                }
            }
            updateCounter();
        });
    }

    useEffect(() => {
        if(inView){
            ChangeNumber();
        }
    }, [inView])

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                height: '100%',
                transition: {
                    duration: 2,
                    delay: 0.5 
                }
            });
        }
        if(!inView){
            animation.start({
                height: 0, 
            })
        }
        
    }, [inView])

    const animationThree = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animationThree.start({
                scale: 1, opacity: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animationThree.start({
                scale: 0.5, opacity: 0
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
        <Section id="esgchart" ref={ref}>
            <Grid>
            <ColumnLeft>
            <GraphWrapper animate={animationThree}>
               <PositionRow>
               <Position></Position>
               <Position></Position>
                        <PositionBTC><Text className="esggraph" data-target="126" ></Text> </PositionBTC>
                        <Position></Position>
                        <Position></Position>
                        <PositionETH><Text className="esggraph" data-target="49"></Text></PositionETH>
                        <Position></Position>
                        <Position></Position>
                        <PositionTelos style={{width: '100px'}}><Text>Telos uses less than 0.0004 TWH Annually</Text></PositionTelos>
                        <Position></Position>
                </PositionRow>  
                <BarRow>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <BTCColumn animate={animation}></BTCColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <ETHColumn animate={animation}></ETHColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <TelosColumn animate={animation}></TelosColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                    <EmptyGraphColumn></EmptyGraphColumn>
                </BarRow>
                <TitleRow>
                        <Position></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>BTC</Text></Position>
                        <Position></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>ETH</Text></Position>
                        <Position></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>TLOS</Text></Position>
                        <Position></Position>
                    </TitleRow>
                    <IconRow>
                        <Position></Position>
                        <Position></Position>
                        <Position><img src={btc} alt="" /></Position>
                        <Position></Position>
                        <Position></Position>
                        <Position><img src={eth} alt="" style={{transform: 'scale(1.1)'}}/></Position>
                        <Position></Position>
                        <Position></Position>
                        <Position><img src={telos} alt="" /></Position>
                        <Position></Position>
                    </IconRow>  
            </GraphWrapper>
            </ColumnLeft>
            <ColumnRight>
                <Subtitle animate={animationTwo}><p><a href="https://assets.website-files.com/60abb689ce5c94972a5f808a/6108322addd49b1c328100c2_Telos-Energy-Consumption-and-Competitor-Comparison-June-30-2021.pdf" target="_blank" rel="noreferrer">وجد تحليل حديث</a><t>أن تقديرات استهلاك الطاقة لشركة تيلوس أقل من أي منافس رئيسي ، حتى فيزا! بعيدًا عن التقديرات ، يقوم المجتمع حاليًا بمراجعة استهلاك الطاقة وتوليد ثاني أكسيد الكربون بناءً على تقارير مفصلة من جميع مدققي الشبكة.</t></p></Subtitle>
                <Subtitle animate={animationTwo}><p>سيسمح هذا للمستخدمين بالتنبؤ بدقة باستخدامهم للطاقة والتخفيف من حدته من خلال مشتريات ائتمان الكربون المعتمدة من المجتمع والمبادرات القائمة على تيلوس مثل مشاريع سيدس و لوكال سكال و كوركو كوين. تضمن كل هذه الجهود أن شركة تيلوس توفر المعيار الذهبي للشفافية البيئية في صناعة بلوكشين.</p></Subtitle>
                <Subtitle animate={animationTwo}><p>حتى مع هذه الإحصائيات منخفضة الطاقة بشكل لا يصدق ، فإن الشبكة تفعل المزيد. يعمل أعضاء المجتمع ومؤسسة تيلوس على جعل الشبكة محايدة تمامًا للكربون. سيتم التعامل مع ذلك بطريقة فريدة لا يمكن لأي بلوكشين آخر تحقيقها بسهولة.</p></Subtitle>
            </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="seeds" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="greenest" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGChart;