import styled from "styled-components"

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.body};
`;

const TempSection = () => {
    return(
        <Section></Section>
    );
}

export default TempSection;