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

import Telos from "../images/telos_logo.png";
import ADA from "../images/ada_logo.png";
import MATIC from "../images/matic_logo.png";
import ETH from "../images/eth_logo.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 50%;
    height: 20vh;
    text-align: center;
    color: white;
    font-size: 36px;
`;

const Column = styled.div`
    width: 70%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;


`;

const TopRow = styled.div`
    height: 20vh;
    width: 100%;
    display: inline-flex;
`;

const BigItem = styled.div`
    height: 100%;
    width: 40%;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Text = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

const Icon = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 60px;
        height: 60px;
        border-radius: 50px;
        border: 1px solid aqua;
        padding: 2px;
    }

`;

const SmallItem = styled.div`
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const Row = styled.div`
    height: 10vh;
    width: 100%;
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

const IconColumnRight = styled(LinkS)`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

`;

const ToggleColumn = styled.div`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const IconColumnLeft = styled(LinkS)`
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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




const ChartSection = () => {


    const {ref, inView} = useInView();

    function ChangeNumber () {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            counter.innerText = "0";

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;

                const increment = target / 100;
                
                if (c < target){
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 1);
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
                pathLength: 1, 
                transition: {
                    duration: 1.5,
                    delay: 1.5 
                }
            });
        }
        if(!inView){
            animation.start({
                pathLength: 0, 
            })
        }
        
    }, [inView])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <Section id="chart">
            <Title>2 + years outpacing the market with tech, innovation and adoption</Title>
            <Column ref={ref}> 
                <TopRow>
                    <SmallItem>
                        <IconWrapper>
                            <Text>ETH</Text>
                            <Icon><img src={ETH} alt="" /></Icon>
                        </IconWrapper>
                    </SmallItem>
                    <SmallItem>
                        <IconWrapper>
                            <Text>MATIC</Text>
                            <Icon ><img src={MATIC} alt="" /></Icon>
                        </IconWrapper>
                    </SmallItem>
                    <SmallItem>
                        <IconWrapper>
                            <Text>ADA</Text>
                            <Icon><img src={ADA} alt="" /></Icon>
                        </IconWrapper>
                    </SmallItem>
                    <SmallItem>
                        <IconWrapper>
                            <Text>TLOS</Text>
                            <Icon><img src={Telos} alt="" /></Icon>
                        </IconWrapper>
                    </SmallItem>
                    <BigItem></BigItem>
                </TopRow>
                <Row>
                    <SmallItem><Text className="counter" data-target="100"></Text></SmallItem>
                    <SmallItem><Text className="counter" data-target="100"></Text></SmallItem>
                    <SmallItem><Text className="counter" data-target="10"></Text></SmallItem>
                    <SmallItem><Text className="counter" data-target="100"></Text></SmallItem>
                <BigItem>Number of dApps</BigItem>
                </Row>
                <Row>
                    <SmallItem><Text className="counter" data-target="20"></Text></SmallItem>
                    <SmallItem><Text className="counter" data-target="7200"></Text></SmallItem>
                    <SmallItem><Text className="counter" data-target="257"></Text></SmallItem>
                    <SmallItem><Text className="counter" data-target="10000"></Text></SmallItem>
                <BigItem>Transactions Per Seconds</BigItem>
                </Row>
                <Row>
                    <SmallItem>
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="green" stroke-width="2"/>
                    </svg>
                    </SmallItem>
                    <SmallItem>
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="green" stroke-width="2"/>
                    </svg>
                    </SmallItem>
                    <SmallItem>
                    <svg width="40" height="40" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M14.6513 26.1373L14.6465 26.1325C9.19598 20.674 6.22986 17.6787 4.6551 15.7712C3.85746 14.805 3.26395 13.9415 2.909 13.035C2.52486 12.0539 2.5 11.2206 2.5 10.567C2.5 9.10907 2.70416 7.68647 3.41167 6.40064C4.13692 5.08255 5.2323 4.19296 6.48201 3.51397C7.05753 3.20128 7.76546 2.96059 8.40861 2.79818C9.06196 2.63319 9.84205 2.5 10.5889 2.5C12.4046 2.5 13.9361 3.59205 15.7916 5.19667C17.7894 6.9244 20.8147 9.88053 25.726 14.7726C25.7276 14.7742 25.7292 14.7757 25.7308 14.7773L35.6199 24.5271L45.509 14.7773C45.5105 14.7757 45.5121 14.7742 45.5137 14.7726C50.5402 9.76581 53.572 6.80284 55.5618 5.09958C57.4798 3.4578 58.9457 2.5 60.7698 2.5C65.1103 2.5 68.4425 5.97588 68.4425 10.2709C68.4425 10.9089 68.4324 11.7597 68.0624 12.7472C67.7143 13.676 67.12 14.5443 66.322 15.5078C64.7525 17.4027 61.7656 20.3882 56.2317 25.9004L46.5993 35.4951L55.5728 44.3841L55.5777 44.389C58.5365 47.3362 61.3353 50.2133 63.4602 52.4719C64.5211 53.5997 65.4248 54.5847 66.1002 55.3527C66.4367 55.7354 66.7296 56.079 66.9619 56.3676C67.1509 56.6025 67.4272 56.9547 67.6113 57.2986L67.615 57.3054L67.6186 57.3122C70.4693 62.7166 66.1726 68.5 60.413 68.5C59.6656 68.5 58.8568 68.4045 57.9086 67.9719C57.0609 67.5852 56.2089 66.9767 55.2361 66.1647C53.2981 64.5469 50.2927 61.6098 45.0383 56.4053L45.0379 56.4049L35.3226 46.7778L25.6073 56.4049L25.607 56.4052C20.2413 61.7205 17.2422 64.6667 15.3204 66.2593C14.3512 67.0625 13.4922 67.6634 12.6111 68.0346C11.6389 68.4442 10.8166 68.5 10.1132 68.5C8.01307 68.5 6.07051 67.7713 4.64794 66.3426C3.22566 64.9142 2.5 62.9639 2.5 60.8476C2.5 60.1612 2.54866 59.339 2.9573 58.3668C3.3277 57.4856 3.93035 56.6324 4.73375 55.6736C6.32666 53.7728 9.28623 50.799 14.6513 45.455L24.3481 35.7961L14.6513 26.1373Z" stroke="#FF0000" stroke-width="5"/>
                    </svg>
                    </SmallItem>
                    <SmallItem>
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="green" stroke-width="2"/>
                    </svg>
                    </SmallItem>
                <BigItem>Ethereum Virtual Machine</BigItem>
                </Row>
                <Row>
                    <SmallItem>
                    <svg width="40" height="40" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M14.6513 26.1373L14.6465 26.1325C9.19598 20.674 6.22986 17.6787 4.6551 15.7712C3.85746 14.805 3.26395 13.9415 2.909 13.035C2.52486 12.0539 2.5 11.2206 2.5 10.567C2.5 9.10907 2.70416 7.68647 3.41167 6.40064C4.13692 5.08255 5.2323 4.19296 6.48201 3.51397C7.05753 3.20128 7.76546 2.96059 8.40861 2.79818C9.06196 2.63319 9.84205 2.5 10.5889 2.5C12.4046 2.5 13.9361 3.59205 15.7916 5.19667C17.7894 6.9244 20.8147 9.88053 25.726 14.7726C25.7276 14.7742 25.7292 14.7757 25.7308 14.7773L35.6199 24.5271L45.509 14.7773C45.5105 14.7757 45.5121 14.7742 45.5137 14.7726C50.5402 9.76581 53.572 6.80284 55.5618 5.09958C57.4798 3.4578 58.9457 2.5 60.7698 2.5C65.1103 2.5 68.4425 5.97588 68.4425 10.2709C68.4425 10.9089 68.4324 11.7597 68.0624 12.7472C67.7143 13.676 67.12 14.5443 66.322 15.5078C64.7525 17.4027 61.7656 20.3882 56.2317 25.9004L46.5993 35.4951L55.5728 44.3841L55.5777 44.389C58.5365 47.3362 61.3353 50.2133 63.4602 52.4719C64.5211 53.5997 65.4248 54.5847 66.1002 55.3527C66.4367 55.7354 66.7296 56.079 66.9619 56.3676C67.1509 56.6025 67.4272 56.9547 67.6113 57.2986L67.615 57.3054L67.6186 57.3122C70.4693 62.7166 66.1726 68.5 60.413 68.5C59.6656 68.5 58.8568 68.4045 57.9086 67.9719C57.0609 67.5852 56.2089 66.9767 55.2361 66.1647C53.2981 64.5469 50.2927 61.6098 45.0383 56.4053L45.0379 56.4049L35.3226 46.7778L25.6073 56.4049L25.607 56.4052C20.2413 61.7205 17.2422 64.6667 15.3204 66.2593C14.3512 67.0625 13.4922 67.6634 12.6111 68.0346C11.6389 68.4442 10.8166 68.5 10.1132 68.5C8.01307 68.5 6.07051 67.7713 4.64794 66.3426C3.22566 64.9142 2.5 62.9639 2.5 60.8476C2.5 60.1612 2.54866 59.339 2.9573 58.3668C3.3277 57.4856 3.93035 56.6324 4.73375 55.6736C6.32666 53.7728 9.28623 50.799 14.6513 45.455L24.3481 35.7961L14.6513 26.1373Z" stroke="#FF0000" stroke-width="5"/>
                    </svg>
                    </SmallItem>
                    <SmallItem>
                    <svg width="40" height="40" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M14.6513 26.1373L14.6465 26.1325C9.19598 20.674 6.22986 17.6787 4.6551 15.7712C3.85746 14.805 3.26395 13.9415 2.909 13.035C2.52486 12.0539 2.5 11.2206 2.5 10.567C2.5 9.10907 2.70416 7.68647 3.41167 6.40064C4.13692 5.08255 5.2323 4.19296 6.48201 3.51397C7.05753 3.20128 7.76546 2.96059 8.40861 2.79818C9.06196 2.63319 9.84205 2.5 10.5889 2.5C12.4046 2.5 13.9361 3.59205 15.7916 5.19667C17.7894 6.9244 20.8147 9.88053 25.726 14.7726C25.7276 14.7742 25.7292 14.7757 25.7308 14.7773L35.6199 24.5271L45.509 14.7773C45.5105 14.7757 45.5121 14.7742 45.5137 14.7726C50.5402 9.76581 53.572 6.80284 55.5618 5.09958C57.4798 3.4578 58.9457 2.5 60.7698 2.5C65.1103 2.5 68.4425 5.97588 68.4425 10.2709C68.4425 10.9089 68.4324 11.7597 68.0624 12.7472C67.7143 13.676 67.12 14.5443 66.322 15.5078C64.7525 17.4027 61.7656 20.3882 56.2317 25.9004L46.5993 35.4951L55.5728 44.3841L55.5777 44.389C58.5365 47.3362 61.3353 50.2133 63.4602 52.4719C64.5211 53.5997 65.4248 54.5847 66.1002 55.3527C66.4367 55.7354 66.7296 56.079 66.9619 56.3676C67.1509 56.6025 67.4272 56.9547 67.6113 57.2986L67.615 57.3054L67.6186 57.3122C70.4693 62.7166 66.1726 68.5 60.413 68.5C59.6656 68.5 58.8568 68.4045 57.9086 67.9719C57.0609 67.5852 56.2089 66.9767 55.2361 66.1647C53.2981 64.5469 50.2927 61.6098 45.0383 56.4053L45.0379 56.4049L35.3226 46.7778L25.6073 56.4049L25.607 56.4052C20.2413 61.7205 17.2422 64.6667 15.3204 66.2593C14.3512 67.0625 13.4922 67.6634 12.6111 68.0346C11.6389 68.4442 10.8166 68.5 10.1132 68.5C8.01307 68.5 6.07051 67.7713 4.64794 66.3426C3.22566 64.9142 2.5 62.9639 2.5 60.8476C2.5 60.1612 2.54866 59.339 2.9573 58.3668C3.3277 57.4856 3.93035 56.6324 4.73375 55.6736C6.32666 53.7728 9.28623 50.799 14.6513 45.455L24.3481 35.7961L14.6513 26.1373Z" stroke="#FF0000" stroke-width="5"/>
                    </svg>
                    </SmallItem>
                    <SmallItem>
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="green" stroke-width="2"/>
                    </svg>
                    </SmallItem>
                    <SmallItem>
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="green" stroke-width="2"/>
                    </svg>
                    </SmallItem>
                <BigItem>User Governance</BigItem>
                </Row>
                <Row>
                    <SmallItem>
                    <svg width="40" height="40" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M14.6513 26.1373L14.6465 26.1325C9.19598 20.674 6.22986 17.6787 4.6551 15.7712C3.85746 14.805 3.26395 13.9415 2.909 13.035C2.52486 12.0539 2.5 11.2206 2.5 10.567C2.5 9.10907 2.70416 7.68647 3.41167 6.40064C4.13692 5.08255 5.2323 4.19296 6.48201 3.51397C7.05753 3.20128 7.76546 2.96059 8.40861 2.79818C9.06196 2.63319 9.84205 2.5 10.5889 2.5C12.4046 2.5 13.9361 3.59205 15.7916 5.19667C17.7894 6.9244 20.8147 9.88053 25.726 14.7726C25.7276 14.7742 25.7292 14.7757 25.7308 14.7773L35.6199 24.5271L45.509 14.7773C45.5105 14.7757 45.5121 14.7742 45.5137 14.7726C50.5402 9.76581 53.572 6.80284 55.5618 5.09958C57.4798 3.4578 58.9457 2.5 60.7698 2.5C65.1103 2.5 68.4425 5.97588 68.4425 10.2709C68.4425 10.9089 68.4324 11.7597 68.0624 12.7472C67.7143 13.676 67.12 14.5443 66.322 15.5078C64.7525 17.4027 61.7656 20.3882 56.2317 25.9004L46.5993 35.4951L55.5728 44.3841L55.5777 44.389C58.5365 47.3362 61.3353 50.2133 63.4602 52.4719C64.5211 53.5997 65.4248 54.5847 66.1002 55.3527C66.4367 55.7354 66.7296 56.079 66.9619 56.3676C67.1509 56.6025 67.4272 56.9547 67.6113 57.2986L67.615 57.3054L67.6186 57.3122C70.4693 62.7166 66.1726 68.5 60.413 68.5C59.6656 68.5 58.8568 68.4045 57.9086 67.9719C57.0609 67.5852 56.2089 66.9767 55.2361 66.1647C53.2981 64.5469 50.2927 61.6098 45.0383 56.4053L45.0379 56.4049L35.3226 46.7778L25.6073 56.4049L25.607 56.4052C20.2413 61.7205 17.2422 64.6667 15.3204 66.2593C14.3512 67.0625 13.4922 67.6634 12.6111 68.0346C11.6389 68.4442 10.8166 68.5 10.1132 68.5C8.01307 68.5 6.07051 67.7713 4.64794 66.3426C3.22566 64.9142 2.5 62.9639 2.5 60.8476C2.5 60.1612 2.54866 59.339 2.9573 58.3668C3.3277 57.4856 3.93035 56.6324 4.73375 55.6736C6.32666 53.7728 9.28623 50.799 14.6513 45.455L24.3481 35.7961L14.6513 26.1373Z" stroke="#FF0000" stroke-width="5"/>
                    </svg>
                    </SmallItem>
                    <SmallItem>
                    <svg  width="40" height="40" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M14.6513 26.1373L14.6465 26.1325C9.19598 20.674 6.22986 17.6787 4.6551 15.7712C3.85746 14.805 3.26395 13.9415 2.909 13.035C2.52486 12.0539 2.5 11.2206 2.5 10.567C2.5 9.10907 2.70416 7.68647 3.41167 6.40064C4.13692 5.08255 5.2323 4.19296 6.48201 3.51397C7.05753 3.20128 7.76546 2.96059 8.40861 2.79818C9.06196 2.63319 9.84205 2.5 10.5889 2.5C12.4046 2.5 13.9361 3.59205 15.7916 5.19667C17.7894 6.9244 20.8147 9.88053 25.726 14.7726C25.7276 14.7742 25.7292 14.7757 25.7308 14.7773L35.6199 24.5271L45.509 14.7773C45.5105 14.7757 45.5121 14.7742 45.5137 14.7726C50.5402 9.76581 53.572 6.80284 55.5618 5.09958C57.4798 3.4578 58.9457 2.5 60.7698 2.5C65.1103 2.5 68.4425 5.97588 68.4425 10.2709C68.4425 10.9089 68.4324 11.7597 68.0624 12.7472C67.7143 13.676 67.12 14.5443 66.322 15.5078C64.7525 17.4027 61.7656 20.3882 56.2317 25.9004L46.5993 35.4951L55.5728 44.3841L55.5777 44.389C58.5365 47.3362 61.3353 50.2133 63.4602 52.4719C64.5211 53.5997 65.4248 54.5847 66.1002 55.3527C66.4367 55.7354 66.7296 56.079 66.9619 56.3676C67.1509 56.6025 67.4272 56.9547 67.6113 57.2986L67.615 57.3054L67.6186 57.3122C70.4693 62.7166 66.1726 68.5 60.413 68.5C59.6656 68.5 58.8568 68.4045 57.9086 67.9719C57.0609 67.5852 56.2089 66.9767 55.2361 66.1647C53.2981 64.5469 50.2927 61.6098 45.0383 56.4053L45.0379 56.4049L35.3226 46.7778L25.6073 56.4049L25.607 56.4052C20.2413 61.7205 17.2422 64.6667 15.3204 66.2593C14.3512 67.0625 13.4922 67.6634 12.6111 68.0346C11.6389 68.4442 10.8166 68.5 10.1132 68.5C8.01307 68.5 6.07051 67.7713 4.64794 66.3426C3.22566 64.9142 2.5 62.9639 2.5 60.8476C2.5 60.1612 2.54866 59.339 2.9573 58.3668C3.3277 57.4856 3.93035 56.6324 4.73375 55.6736C6.32666 53.7728 9.28623 50.799 14.6513 45.455L24.3481 35.7961L14.6513 26.1373Z" stroke="#FF0000" stroke-width="5"/>
                    </svg>
                    </SmallItem>
                    <SmallItem>
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="green" stroke-width="2"/>
                    </svg>
                    </SmallItem>
                    <SmallItem>
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="green" stroke-width="2"/>
                    </svg>
                    </SmallItem>
                <BigItem>dApp Gov Engine</BigItem>
                </Row>
            </Column>
            <Empty>
                <IconColumnLeft to="features" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="purpose" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    );
}

export default ChartSection;