import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Telos from "../images/telos_logo.png";
import TFD from "../images/TFD.png";
import EOS from "../images/EOS.png";
import SCR from "../images/SCR.png";
import HIVE from "../images/HIVE.png";
import Back from "../images/pyr13.png";


const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back5};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        
        height: 135vh;
    }
`;

const Columns = styled.div`
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 125vh;
    }
    
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 90vh;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 60vh;
    }
`;

const LeftTitle = styled(motion.div)`
    height: 54vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 42px;
    direction: rtl;
    z-index: 100;
    @media screen and (max-width: 768px){
        font-size: 28px;
        height: 40vh;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 36vh;
    @media screen and (max-width: 768px){
            height: 20vh; 
        }
    img{
        width: 80%;
        z-index: 0;
        transform: translate(20%, -40%);
        @media screen and (max-width: 768px){
            transform: translate(10%, -40%);
        }
    }

`;





const ColumnRight = styled.div`
    width: 50%;
    height: 90vh;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        float: none;
        width: 100%;
        height: 65vh;
    }
`;

const Title = styled(motion.div)`
    width: 80%;
    height: 15vh;
    text-align: center;
    color: white;
    font-size: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        font-size: 32px;
        
    }
`;

const GraphWrapper = styled(motion.div)`
    width: 80%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(145deg, rgba(37,38,89,1) 0%, rgba(74,21,131,1) 35%, rgba(37,38,89,1) 100%);
    z-index: 100;
    @media screen and (max-width: 768px){
        height: 50vh;
    }
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

        @media screen and (max-width: 768px){
            transform: scale(0.7) translate(0, -25%);
        }
        
    }
`;

const BarRow = styled.div`
    height: 70%;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

const EmptyGraphColumn = styled.div`
    height: 0;
    width: 9.09%;
    float: left;
    
`;

const TelosColumn = styled(motion.div)`
    max-height: 100%;
    width: 9.09%;
    float: left;
    background: purple;
`;

const TDFColumn = styled(motion.div)`
    max-height: 62.8%;
    width: 9.09%;
    float: left;
    background: purple; 
`;

const EOSColumn = styled(motion.div)`
    max-height: 24.53%;
    width: 9.09%;
    float: left;
    background: purple; 
`;

const SCRColumn = styled(motion.div)`
    max-height: 12.8%;
    width: 9.09%;
    float: left;
    background: purple; 
`;

const HiveColumn = styled(motion.div)`
    max-height: 7.8%;
    width: 9.09%;
    float: left;
    background: purple; 
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

const Text = styled.div`
    color: white;
    font-size: 16px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
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


const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
    color: white;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;

const GraphSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    function ChangeNumber () {
        const counters = document.querySelectorAll('.graphcounter');
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
                x: 0,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animationThree.start({
                x: '-100vw',
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: 0, scale: 1,
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, y: '100px', scale: 0.6,
            })
        }
        
    }, [inView])

    return(
        <Section id="graph" ref={ref}>
            
            <Columns>
                <ColumnLeft>
                <LeftTitle animate={animationThree}><t>معدل نمو مرتفع واستخدام 900000+ قاعدة حساب رقم 1 من خلال مؤشر تقييم النشاط بيتكوين و ايثيريوم يتوسعان في المستقبل</t></LeftTitle>
                <ImageWrapper><img src={Back} alt="image" /></ImageWrapper>
                </ColumnLeft>
                <ColumnRight>
                <Title animate={animationTwo}>موقع تيلوس في سوق التشفير</Title>
                <GraphWrapper animate={animationTwo}>
                    <PositionRow>
                        <Position></Position>
                        <Position><Text className="graphcounter" data-target="145178" style={{transform: 'translate(0%, 40%)'}}></Text> </Position>
                        <Position></Position>
                        <Position><Text className="graphcounter" data-target="24864" style={{transform: 'translate(0%, 300%)'}}></Text></Position>
                        <Position></Position>
                        <Position><Text className="graphcounter" data-target="6579" style={{transform: 'translate(0%, 570%)'}}></Text></Position>
                        <Position></Position>
                        <Position><Text className="graphcounter" data-target="2095" style={{transform: 'translate(0%, 660%)'}}></Text></Position>
                        <Position></Position>
                        <Position><Text className="graphcounter" data-target="1596" style={{transform: 'translate(0%, 690%)'}}></Text></Position>
                        <Position></Position>
                    </PositionRow>
                    <BarRow>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <TelosColumn animate={animation}></TelosColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <TDFColumn animate={animation}></TDFColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <EOSColumn animate={animation}></EOSColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <SCRColumn animate={animation}></SCRColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <HiveColumn animate={animation}></HiveColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                    </BarRow>
                    <TitleRow>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>TLOS</Text></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>TDF</Text></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>EOS</Text></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>SCR</Text></Position>
                        <Position></Position>
                        <Position><Text style={{transform: 'translate(0%, 20%)'}}>HIVE</Text></Position>
                        <Position></Position>
                    </TitleRow>
                    <IconRow>
                        <Position></Position>
                        <Position><img src={Telos} alt="" /></Position>
                        <Position></Position>
                        <Position><img src={TFD} alt="" /></Position>
                        <Position></Position>
                        <Position><img src={EOS} alt="" /></Position>
                        <Position></Position>
                        <Position><img src={SCR} alt="" /></Position>
                        <Position></Position>
                        <Position><img src={HIVE} alt="" /></Position>
                        <Position></Position>
                    </IconRow>
                </GraphWrapper>
                </ColumnRight>
            </Columns>
            <Empty>
                <IconColumnLeft to="utility" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="features" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default GraphSection;