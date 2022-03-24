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

import Back from "../images/pyr4.png";

import TickBack from "../SVG/telos_logo.svg"; 

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


const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.back2};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Grid = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    
    align-items: center;
    justify-content: center;
`;

const ColumnLeft = styled.div`
    width: 25%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const ColumnRight = styled(motion.div)`
    width: 65%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

const Item = styled.div`
    width: 95%;
    height: 40px;
    display: inline-flex;
    
    align-items: center;
    justify-content: flex-end;
`;

const Icon = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 50%;
    border: 1px solid #32cd32;*/
    margin: 0 20px; 
    svg{
        transform: scale(0.7);
    }
`;

const Text = styled(motion.div)`
    font-size: 24px;
    color: white;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
    direction: rtl;
    span{
        margin: 0 8px;
    }
`;


const Highlights = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const {ref, inView} = useInView();

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                pathLength: 1, 
                transition: {
                    duration: 1.5,
                    delay: 1,
                    
                }
            });
        }
        if(!inView){
            animation.start({
                pathLength: 0, 
            })
        }
        
    }, [inView])

    const animationThree = useAnimation();
    const animationFour = useAnimation();
    const animationTwo = useAnimation();

    useEffect(() => {
        if(inView){
            animationThree.start({
                x: 0,
                transition: {
                    duration: 1
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

    useEffect(() => {
        if(inView){
            animationFour.start({
                scale: 1, y: 0, opacity: 1,
                transition: {
                    duration: 1, delay: 1
                }
            });
        }
        if(!inView){
            animationFour.start({
                scale: 0.5, y: '300px', opacity: 0
            })
        }
        
    }, [inView])

    const ContainerVariants = {
        start: {
            transition: {
              staggerChildren: 0.4
            }
        },
        end: {
            transition: {
               staggerChildren: 0.4
            }
        }
    };

    return(
        <Section id="highlights" ref={ref}> 
            <Grid >
                <ColumnLeft>
                    <img src={Back} alt="back" />
                </ColumnLeft>
                <ColumnRight variants={ContainerVariants} initial='start' animate='end'>
                    <Item>
                        <Text animate={animationThree} >تم إطلاق الشبكة في عام 2018</Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} ><t>مشروع شعبي بدون تمويل</t><span>ICO / VC</span></Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} >تفويض إثبات الحصة شبكة</Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} >إجمالي العرض: ~ 355 مليون تيلوس</Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} >العرض المتداول: 243 مليون + تيلوس</Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} >يزيد العرض المتداول بمقدار 4،100،000 تيلوس / شهر</Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item style={{height: '30px'}}>
                        <Text animate={animationThree} ><t>إجمالي حاملي المحفظة: 984 ألف</t><span>+</span></Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item style={{height: '30px'}}>
                        <Text animate={animationThree} ><t>حاملات المحفظة الأصلية: 977 ألف</t><span>+</span></Text>
                        <Icon></Icon>
                    </Item>
                    <Item style={{height: '30px'}}>
                        <Text animate={animationThree} ><t>حاملات المحفظة</t><span>ERC-20:</span><span>1.2K</span><span>+</span></Text>
                        <Icon></Icon>
                    </Item>
                    <Item style={{height: '30px'}}>
                        <Text animate={animationThree} ><t>حاملات المحفظة</t><span>BEP-20:</span><span>6.6K</span><span>+</span></Text>
                        <Icon></Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} >فائدة قوية في ملكية الموارد والحوكمة وحالة الاستخدام المالي</Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} >عمليات صندوق الاحتياطيات لمختلف الأطراف جزء لا يتجزأ من نمو الشبكة</Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} >تعمل تيلوس على تشغيل  تيلوس بلوكشين بالكامل وفقًا لما يقرره أعضاء المجتمع</Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} ><t>تقدم</t><span>REX</span><t>مكافآت</t><span>APY</span><t>عالية مقابل تجميد تيلوس</t></Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                    <Item>
                        <Text animate={animationThree} >يتم توفير الموارد التي يمكن الوصول إليها للمطورين الجدد</Text>
                        <Icon>
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path animate={animation} d="M37.6134 1.09042L37.6193 1.08946C38.4275 0.95948 38.9448 0.968941 39.7198 1.13235C42.6941 1.75598 44.5834 4.82916 43.8368 7.75879L43.8365 7.7602C43.8275 7.79515 43.8186 7.83389 43.8089 7.87616C43.7564 8.10397 43.6804 8.43434 43.4465 8.82807C43.2012 9.24115 42.7817 9.74361 42.0438 10.5359C40.6786 12.0016 38.0079 14.6813 32.6856 20.0215C32.167 20.5419 31.6232 21.0875 31.053 21.6597L31.0529 21.6597C27.1432 25.5822 24.1111 28.6102 22.014 30.6861C20.9658 31.7237 20.149 32.5256 19.5723 33.0831C19.2843 33.3615 19.0528 33.5821 18.8808 33.7419C18.7428 33.8702 18.57 34.0295 18.4455 34.1128L18.4455 34.1128L18.4405 34.1161C17.2078 34.9291 15.3793 35.23 13.9993 34.8129L13.9993 34.8129L13.994 34.8112C13.9831 34.8079 13.9721 34.8045 13.9611 34.8011C13.7013 34.7212 13.4106 34.6317 13.0843 34.4525C12.7511 34.2695 12.4177 34.0152 11.9937 33.6405C11.1825 32.9237 9.86691 31.6073 7.34207 29.0809C7.26727 29.006 7.19141 28.9301 7.11447 28.8532L7.11323 28.8519C4.91771 26.6473 3.62536 25.3415 2.85436 24.5309C2.1188 23.7575 1.76298 23.343 1.57212 22.9604L1.5721 22.9605L1.56861 22.9533C0.541405 20.8529 0.923704 18.3116 2.57627 16.6767L2.57695 16.676C2.88505 16.3718 3.16323 16.1221 3.49147 15.908C3.8207 15.6933 4.1615 15.5397 4.57015 15.3832C4.84095 15.2777 5.09232 15.1976 5.40331 15.1519C5.69339 15.1093 6.00512 15.1017 6.3847 15.1017C6.76825 15.1017 7.07835 15.1093 7.36788 15.152C7.67777 15.1977 7.92772 15.2779 8.19924 15.3799L8.21161 15.3845L8.22385 15.3895C8.55694 15.5248 9.03974 15.7478 9.31922 15.9228C9.4197 15.9858 9.52368 16.0748 9.58033 16.1236C9.65803 16.1904 9.75249 16.2749 9.85896 16.3723C10.0728 16.5678 10.3524 16.8308 10.6764 17.1409C11.3251 17.7619 12.1644 18.5836 13.0371 19.4582C13.0373 19.4584 13.0375 19.4586 13.0377 19.4588L15.4944 21.9142L25.0949 12.3089C30.1126 7.28452 32.7013 4.69654 34.1072 3.33284C35.4749 2.00618 35.8158 1.73683 36.2933 1.51868L36.3009 1.51522L36.3086 1.51188C36.6729 1.3527 37.2387 1.15302 37.6134 1.09042Z" stroke="#32cd32" stroke-width="2"/>
                        </svg>
                        </Icon>
                    </Item>
                </ColumnRight>
            </Grid>
            <Empty>
                <IconColumnLeft to="supply" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight >
                    <IconButton onClick={toggleHome}><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default Highlights;