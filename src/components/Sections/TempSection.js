import styled from "styled-components"

import Logo from "../SVG/telos_logo.svg";
import Video from "../videos/telos1.mp4";

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 0;

    
`;

const Text = styled.h1`
    font-size: 100px;
    color: white;
    display: flex;
    padding-top: 20px;
    @media screen and (max-width: 1100px){
        text-align: center;
    }

`;

const Image = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    background: green;
`;

const TempSection = () => {
    return(
        <Section>
            {/* <Text>موطن أسرع آلة افتراضية إيثريوم</Text> */}
            <video src={Video} muted playsInline autoPlay loop></video>
        </Section>
    );
}

export default TempSection;