import styled from "styled-components"

const Section = styled.div`
    width: 100%;
    height: 20vh;
    background: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        height: 40vh;
    }
`;

const Text = styled.h1`
    font-size: 48px;
    color: white;
    display: flex;

    @media screen and (max-width: 1100px){
        text-align: center;
    }

`;

const TempSection = () => {
    return(
        <Section>
            <Text>موطن أسرع آلة افتراضية إيثريوم</Text>
        </Section>
    );
}

export default TempSection;