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



const ArrowDown = styled(KeyboardArrowDownIcon)`
    color: white;
`;

const ArrowUp = styled(KeyboardArrowUpIcon)`
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
    background: ${props => props.theme.back3};
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        height: 170vh;
    }
`;

const Grid = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 160vh;
    }
`;

const ColumnLeft = styled.div`
    width: 45%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 50%;
        float: none;
    }
`;

const ColumnRight = styled.div`
    width: 45%;
    height: 80%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 50%;
        float: none;
        transform: scale(0.5)  translate(10%, -10%);
    }
`;

const TopRow = styled.div`
    width: 100%;
    height: 10%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;

    h1:nth-child(1){
        transform: translate(-110%, -20%);
        &::after{
        content: "";
        width: 80%;
        height: 1px;
        background: white;
        display: block;
        transform: translate(70%, 4500%) rotate(20deg);
        }
    }
`;

const BottomRow = styled.div`
    width: 100%;
    height: 10%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    h1:nth-child(1){
        transform: translate(-50%, 20%);
        &::after{
        content: "";
        width: 50%;
        height: 1px;
        background: white;
        display: block;
        transform: translate(170%, -6500%) rotate(-30deg);
        }
    }

    h1:nth-child(2){
        transform: translate(50%, 20%);
        &::after{
        content: "";
        width: 50%;
        height: 1px;
        background: white;
        display: block;
        transform: translate(-90%, -11500%) rotate(60deg);
        }
    }

    
`;

const Item = styled.h1`
    font-size: 24px;
    color: white;
`;

const Title = styled(motion.div)`
    display: flex;
    align-items: center;
    color: white;
    font-size: 58px;
    width: 100%;
    height: 20%;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    direction: rtl;
    @media screen and (max-width: 768px){
        font-size: 42px;
        line-height: 50px;
    }
    span{
        margin: 0 8px;
    }
`;

const Subtitle = styled(motion.div)`
    display: flex;
    align-items: center;
    color: white;
    font-size: 28px;
    width: 80%;
    height: 30%;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    @media screen and (max-width: 768px){
        font-size: 24px;
        line-height: 30px;
    }
    span{
        margin: 0 8px;
    }
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;




const SupplySection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1, pathLength: 1, 
                transition: {
                   duration: 2, ease: "easeInOut", delay: 0.5
                }
            });
        }
        if(!inView){
            animation.start({
                opacity: 0, pathLength: 0
            })
        }
    }, [inView])

    

    const animationThree = useAnimation();
    const animationFour = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animationThree.start({
                x: '-10vw',
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animationThree.start({
                x: '-100vw'
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationTwo.start({
                opacity: 1, y: 0, x: '-2vw',
                transition: {
                    duration: 1, delay: 0.5,
                }
            });
        }
        if(!inView){
            animationTwo.start({
                opacity: 0, y: '100px', x: '-2vw',
            })
        }
        
    }, [inView])

    useEffect(() => {
        if(inView){
            animationFour.start({
                scale: 1, y: 0, opacity: 1,
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animationFour.start({
                scale: 0.5, opacity: 0
            })
        }
        
    }, [inView])

    return(
        <Section id="supply" ref={ref}>
            <Grid  animate={animationFour}>
                <ColumnLeft>
                    <Title animate={animationThree}>إجمالي عرض تيلوس</Title>
                    <Subtitle animate={animationTwo}><p>يبلغ إجمالي العرض الحالي لـ 355 مليون تيلوس. هذا يعني أن هناك عددًا أقل بكثير من الرموز المتاحة (التوريد) عند مقارنتها بسلسلة الكتل الأخرى.</p></Subtitle>
                    <Subtitle animate={animationTwo}><p>معدل التضخم الحالي لإجمالي العرض هو 0٪ ، والذي قد يرتفع إلى 1٪ في المستقبل لحساب المدفوعات لمنع المنتجين. حاليًا ، يتم الدفع لمنتجي الكتل والكيانات المهمة الأخرى من خلال الصناديق الاحتياطية للشبكة ، وفقًا لتصويت حاملي الرموز.</p></Subtitle>
                </ColumnLeft>
                <ColumnRight>
                <TopRow><Item>Circulating: 243M +</Item></TopRow>
                <motion.svg  width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.1954 88.09C27.9127 120.237 10.4203 158.653 3.4276 199.583C-3.56507 240.514 0.181337 282.558 14.3007 321.608C28.42 360.657 52.4291 395.375 83.9815 422.368C115.534 449.362 153.55 467.707 194.314 475.612C235.078 483.516 277.196 480.709 316.551 467.464C355.905 454.22 391.15 430.991 418.841 400.049C446.532 369.107 465.721 331.51 474.533 290.932C483.345 250.354 481.479 208.185 469.116 168.544L421.053 183.534C430.822 214.859 432.297 248.182 425.334 280.248C418.371 312.313 403.207 342.024 381.325 366.475C359.443 390.926 331.591 409.282 300.492 419.748C269.393 430.214 236.111 432.432 203.898 426.186C171.685 419.94 141.644 405.443 116.71 384.112C91.7769 362.781 72.8043 335.346 61.6469 304.488C50.4895 273.631 47.529 240.406 53.0547 208.062C58.5805 175.718 72.4035 145.36 93.1727 119.957L54.1954 88.09Z" fill="#615FE8"/>
                    <path d="M391.91 54.1954C359.763 27.9128 321.347 10.4203 280.417 3.42761C239.486 -3.56506 197.442 0.181346 158.392 14.3007C119.343 28.42 84.6251 52.4291 57.6316 83.9815C30.6381 115.534 12.2927 153.55 4.38844 194.314C-3.51587 235.078 -0.708646 277.196 12.5357 316.551C25.7801 355.905 49.0085 391.15 79.9507 418.841C110.893 446.532 148.49 465.721 189.068 474.533C229.645 483.345 271.815 481.479 311.456 469.116L296.466 421.053C265.141 430.822 231.818 432.297 199.752 425.334C167.687 418.371 137.976 403.207 113.525 381.325C89.0739 359.443 70.7183 331.591 60.2522 300.492C49.7862 269.393 47.5678 236.111 53.814 203.898C60.0602 171.685 74.5572 141.644 95.8881 116.71C117.219 91.7769 144.654 72.8043 175.512 61.6469C206.369 50.4895 239.594 47.529 271.938 53.0548C304.282 58.5805 334.64 72.4035 360.043 93.1727L391.91 54.1954Z" fill="#1AD6FF"/>
                    <path d="M438.058 375.547C461.51 341.28 475.67 301.515 479.154 260.138C482.638 218.761 475.327 177.187 457.936 139.481C440.545 101.775 413.668 69.2264 379.933 45.016C346.198 20.8055 306.759 5.76187 265.469 1.35527C224.18 -3.05132 182.455 3.32994 144.37 19.8754C106.285 36.4208 73.1444 62.5643 48.1872 95.7507C23.23 128.937 7.30995 168.031 1.98307 209.211C-3.34381 250.392 2.10472 292.25 17.7961 330.694L98.6275 297.702C88.6441 273.243 85.1776 246.612 88.5667 220.411C91.9558 194.211 102.085 169.339 117.963 148.224C133.842 127.11 154.927 110.477 179.157 99.9503C203.388 89.4236 229.935 85.3637 256.204 88.1673C282.474 90.9709 307.566 100.542 329.029 115.946C350.493 131.349 367.592 152.057 378.657 176.047C389.722 200.037 394.373 226.487 392.157 252.812C389.94 279.137 380.931 304.437 366.01 326.239L438.058 375.547Z" fill="url(#paint0_linear)"/>
                    <path d="M192.284 259.379H196.327V255.756H192.546C189.396 255.756 188.293 254.023 188.293 251.083V235.594H196.694V232.076H188.293V224.148H184.408V230.711C184.408 231.604 183.83 232.076 183.095 232.076H179V235.594H184.146V251.136C184.146 256.649 187.243 259.379 192.284 259.379Z" fill="white"/>
                    <path d="M215.583 260.062C221.989 260.062 226.767 256.439 228.29 251.346H223.984C222.724 254.549 219.259 256.281 215.636 256.281C210.018 256.281 206.5 252.658 206.29 247.198H228.552V245.36C228.552 237.484 223.617 231.394 215.321 231.394C207.865 231.394 201.932 237.012 201.932 245.728C201.932 253.918 207.235 260.062 215.583 260.062ZM206.395 243.522C206.815 238.482 210.753 235.174 215.321 235.174C219.941 235.174 223.774 238.062 224.142 243.522H206.395Z" fill="white"/>
                    <path d="M239.744 259.379H241.739V255.704H240.479C239.166 255.704 238.484 254.916 238.484 253.551V220H234.336V253.551C234.336 257.279 236.331 259.379 239.744 259.379Z" fill="white"/>
                    <path d="M291.36 260.062C297.713 260.062 301.966 256.596 301.966 251.451C301.966 240.162 285.584 245.938 285.584 239.007C285.584 236.644 287.789 234.964 291.202 234.964C294.825 234.964 296.768 236.697 297.135 239.269H301.126C300.706 234.334 296.505 231.394 291.465 231.394C285.742 231.394 281.594 234.386 281.594 239.007C281.594 249.823 297.923 243.995 297.923 251.661C297.923 254.444 295.665 256.439 291.57 256.439C287.579 256.439 285.269 254.706 284.797 251.451H280.754C281.226 256.544 284.902 260.062 291.36 260.062Z" fill="white"/>
                    <circle cx="260.901" cy="245.62" r="14.483" fill="url(#paint1_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="240" y1="0" x2="240" y2="480" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6E46DF"/>
                    <stop offset="1" stop-color="#8946DF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="260.901" y1="231.137" x2="260.901" y2="260.103" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6E46DF"/>
                    <stop offset="1" stop-color="#8946DF"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
                <BottomRow>
                <Item >Remaining: &#60; 112M</Item>
                <Item>New Circulation: <p>&#60; 4.1M per month</p></Item>
                </BottomRow>
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="depthlook" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="highlights" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default SupplySection;