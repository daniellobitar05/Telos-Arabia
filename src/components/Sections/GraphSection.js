import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {Link as LinkS} from "react-scroll";
import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

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
    width: 60%;
    height: 10vh;
    text-align: center;
    color: white;
    font-size: 36px;
`;

const Columns = styled.div`
    width: 100%;
    height: 90vh;
    background: grey;
`;

const ColumnLeft = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    background: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ColumnRight = styled.div`
    width: 50%;
    height: 100%;
    float: left;
    background: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Empty = styled.div`
    width: 100%;
    height: 10vh;
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
const IconColumnRight = styled(LinkS)`
    width: 25%;
    height: 100%;
    float: right;
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

const ToggleColumn = styled.div`
    width: 12.5%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
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

    return(
        <Section id="graph">
            
            <Columns>
                <ColumnLeft>
                <Title>Telos token utility</Title>
                </ColumnLeft>
                <ColumnRight>
                <Title>Telos position in the Crypto Market</Title>
                </ColumnRight>
            </Columns>
            <Empty>
            <IconColumnLeft to="" smooth={true} duration={1000} spy={true} exact="true">
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