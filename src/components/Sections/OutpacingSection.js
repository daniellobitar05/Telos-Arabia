import styled from "styled-components";
import {motion} from "framer-motion";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: red;
`;

const Title = styled(motion.div)`
    height: 20vh;
    color: white;
    font-size: 52px;
    display: flex;
    padding: 0 150px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: ${props => props.theme.body};
    justify-content: center;
    @media screen and (max-width: 660px){
        font-size: 24px;
        height: 20vh;
        padding-top: 20px;
        height: 20vh;
    }
`;

const Wrapper = styled.div`
    margin: 0 10%;
`;

const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 80vh;
    background: orange;
    
    grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
    grid-template-rows: 3fr 1fr 1r 1fr 1fr 1fr 1fr;
`;

const Row = styled.div`
    
`;


const OutpacingSection = () => {
    return(
        <Section>
            <Title>Outpacing the market with tech, innovation and adoption</Title>
            <Wrapper>
            <Grid>

            </Grid>
            </Wrapper>
        </Section>
    )
}

export default OutpacingSection;