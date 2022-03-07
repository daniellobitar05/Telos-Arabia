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

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    
    align-items: center;
    justify-content: center;
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const ColumnRight = styled.div`
    width: 40%;
    height: 80vh;
    background: blue;
    display: flex;
    float: left;
`;

const GraphWrapper = styled.div`
    width: 80%;
    height: 70vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
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

const Text = styled.div`
    color: white;
    font-size: 16px;
    text-align: center;
`;

const TelosColumn = styled(motion.div)`
    max-height: 5%;
    width: 9.09%;
    float: left;
    background: purple;
`;
const ETHColumn = styled(motion.div)`
    max-height: 450%;
    width: 9.09%;
    float: left;
    background: purple;
`;
const BTCColumn = styled(motion.div)`
    max-height: 100%;
    width: 9.09%;
    float: left;
    background: purple;
`;

const ESGChart = () => {

    const {ref, inView} = useInView();

    function ChangeNumber () {
        const counters = document.querySelectorAll('.esgchart');
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

    return(
        <Section id="esgchart">
            <ColumnLeft>
            <GraphWrapper ref={ref}>
                <PositionRow>
                    <Position>
                    <Position></Position>
                        <Position><Text className="esgchart" data-target="145178" style={{transform: 'translate(0%, 40%)'}}></Text> </Position>
                        <Position></Position>
                        <Position><Text className="esgchart" data-target="24864" style={{transform: 'translate(0%, 300%)'}}></Text></Position>
                        <Position></Position>
                        <Position><Text className="esgchart" data-target="6579" style={{transform: 'translate(0%, 570%)'}}></Text></Position>
                        <Position></Position>
                    </Position>
                    <BarRow>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <BTCColumn animate={animation}></BTCColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <ETHColumn animate={animation}></ETHColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                        <TelosColumn animate={animation}></TelosColumn>
                        <EmptyGraphColumn></EmptyGraphColumn>
                    </BarRow>
                </PositionRow>   
            </GraphWrapper>
            </ColumnLeft>
            <ColumnRight></ColumnRight>
        </Section>
    )
}

export default ESGChart;