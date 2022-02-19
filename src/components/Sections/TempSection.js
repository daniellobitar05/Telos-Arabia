import styled from "styled-components";

import Video1 from "../videos/telos1.mp4";

const Section = styled.div`
    
    background: transparent;
    width: 100%;
    overflow: hidden;
`;

const VideoBack = styled.video`
    width: 100vw;
    height: 100vh;
    
    object-fit: cover;
    background: transparent;
    z-index: -1;
    
`;

const TempSection = () => {
    return(
        <Section>
            <VideoBack autoPlay loop muted src={Video1} type="video.mp4" />
        </Section>
    )
}

export default TempSection;