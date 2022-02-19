import styled from "styled-components";

import Video1 from "../videos/telos2.mp4";

const Section = styled.div`
    position: fixed;
    z-index: -1000;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    
`;


const VideoBack = styled.video`
    position: absolute;
    top: 0;
    left: 100;
    min-height: 100%;
    min-width: 100%;
    
    
    
`;

const TempSection = () => {
    return(
        <Section>
            <VideoBack autoPlay loop muted src={Video1} type="video.mp4" />
        </Section>
    )
}

export default TempSection;