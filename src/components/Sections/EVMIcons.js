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

import Micro from "../images/evm/micro.svg";
import NoGas from "../SVG/nogas.svg";
import NoFront from "../SVG/nofront.svg";
import Decent from "../SVG/decent.svg";
import Eco from "../SVG/eco.svg";
import Comm from "../SVG/comm.svg";
import Fast from "../SVG/fast.svg";
import Friendly from "../images/evm/friendly.svg";
import Fixed from "../images/evm/fixed.svg";

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${props => props.theme.back2};
    height: 100vh;
`;

const RowEmpty = styled.div`
    width: 100%;
    height: 5vh;
    
    
`;

const RowEmptySmart = styled.div`
    width: 100%;
    height: 5vh;
    @media screen and (min-width: 768px){
        display: none; 
    }
    
`;



const TextContainer = styled.div`
    width: 80%;
    height: 85vh;
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 ${props => props.theme.text};
    backdrop-filter: blur(0.5px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-rows: 1fr 1fr;
    
    @media screen and (max-width: 768px){
        width: 95%;
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
    @media screen and (max-width: 768px){
        padding: 0;
    }
    
`;

const Image = styled(motion.img)`
    width: 35%;

    @media screen and (max-width: 768px){
        width: 40%;
    }

`;

const Title = styled(motion.h1)`
    font-size: 36px;
    width: 80%;
    color: aqua;
    text-align: center;
    direction: rtl;
    span{
        margin: 0 10px;
    }
    @media screen and (max-width: 768px){
        font-size: 18px;
        width: 90%;
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
    height: 15vh;
    display: inline-flex;
    
    @media screen and (max-width: 768px){
        height: 5vh;
    }
`;


const EVMIcons = () => {
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

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section ref={ref} id="evmicons">
            <RowEmpty></RowEmpty>
            <TextContainer>
                <Column>
                    <Image src={NoFront} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                    <Title animate={animation}>
                    لا الجري الأمامي
                    </Title>
                    
                </Column>
                <Column>
                        <Image src={NoGas} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}><t>الامتثال</t><span>ESG</span></Title>
                        
                        </Column>
                        <Column>
                        <Image src={Micro} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}><t>عملية مايكرو </t><span>DeFi</span></Title>
                       
                        </Column>
                        <Column>
                        <Image src={Friendly} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>صديق للبيئة</Title>
                       
                        </Column>
                        <Column>
                        <Image src={Fixed} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>رسوم تحويل ثابتة</Title>
                        
                        </Column>
                        <Column>
                        <Image src={Fast} alt="" animate={animation} whileHover={{scale: 1.1}}/>
                        <Title animate={animation}>قابلة للتطوير وبأسعار معقولة</Title>
                        
                        </Column>
            </TextContainer>
            <RowEmptySmart />
            <Empty>
                <IconColumnLeft to="evmwhatis" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight >
                    
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowUp /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default EVMIcons;