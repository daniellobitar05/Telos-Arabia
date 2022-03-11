import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {IconButton} from "@mui/material";
import {useInView} from "react-intersection-observer";
import {Link as LinkS} from "react-scroll";
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
    background: ${props => props.theme.back13};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        
    }
`;

const Title = styled(motion.div)`
    font-size: 52px;
    width: 60%;
    color: ${props => props.theme.text};  
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-shadow: black -1px 2px, #4b0082 -2px 2px, #4b0082 -3px 3px, #4b0082 -4px 4px, black -5px 5px;
    @media screen and (max-width: 768px){
        
    }
`;

const Subtitles = styled(motion.div)`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Subtitle = styled.div`
    font-size: 18px;
    color: white;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-shadow: black -1px 2px, black -2px 2px, black -3px 3px;
`;

const ESGConclusion = () => {

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
                x: 0, opacity: 1, 
                transition: {
                    duration: 1, 
                }
            });
        }
        if(!inView){
            animation.start({
                x: '100vw', opacity: 0, 
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

    return(
        <Section id="esgconclusion" ref={ref}>
            <Title animate={animation}>Conclusion: ESG is the future, and the future is Telos!</Title>
            <Subtitles animate={animationTwo}>
            <Subtitle>The 3 pillars that make up ESG initiatives are never going away and will only become more important as time passes. While the criteria from an investment standpoint is relatively new, the principles are not. Environmental impact, social responsibility and transparent governance offer the economic advantages and stability necessary for the world to thrive.</Subtitle>
            <Subtitle>It makes sense that Telos, the most powerful, valuable and impactful blockchain would inherently advance in all three ESG strands. The fact that this happened organically, due to the missions of the community and the projects it attracted only strengthens this fact.</Subtitle>
            <Subtitle>Telos didn’t set out to become the ESG blockchain in a contrived manner, instead, this evolved naturally due to its own intrinsic ESG qualities. Three years of dedicated development has led to over 100 integrations with projects from the crypto world that are reflective of the network’s own ESG characteristics. Without a doubt there are thousands more to come.</Subtitle>
            <Subtitle>As the blockchain industry stands at a crossroads, the lack of ESG initiatives has been the primary roadblock halting mass adoption from institutional investors, major businesses and real-world users. However, this will never be a concern for Telos, the leading ESG blockchain. Developers, investors and community members can rest assured that the Telos blockchain will stand the tests of time, grow with the needs of humanity and accomplish things that haven’t even been imagined.</Subtitle>
            </Subtitles>
            <Empty>
                <IconColumnLeft to="esglatest" smooth={true} duration={1000} spy={true} exact="true">
                <IconButton><ArrowDown /></IconButton>
                </IconColumnLeft>
            <EmptyColumn></EmptyColumn>
                <IconColumnRight to="additionaltwo" smooth={true} duration={1000} spy={true} exact="true">
                    <IconButton ><ArrowUp /></IconButton>
                </IconColumnRight>
                <ToggleColumn><IconButton onClick={toggleHome}><ArrowHome /></IconButton></ToggleColumn>
            </Empty>
        </Section>
    )
}

export default ESGConclusion;