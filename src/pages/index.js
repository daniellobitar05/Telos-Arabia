import {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import Header from "../components/NavBar";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeroSection from "../components/Sections/HeroSection";
import TopSection from "../components/Sections/TopSection";
import Protocol from "../components/Sections/Protocol";
import GetStartedSection from "../components/Sections/GetStartedSection";
import OutpacingSection from "../components/Sections/OutpacingSection";
import StartedSection from "../components/Sections/StartedSection";
import NewGround from "../components/Sections/NewGround";
import Footer from "../components/Sections/Footer";
import { animationTwo, transitionTwo } from "../animations";




const Home = (props) => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
        
        <Header theme={theme} setTheme={setTheme} />
        {/* <TopSection /> */}
        <HeroSection />
        <NewGround />
        
        <Protocol />
        <StartedSection />
        {/* <GetStartedSection />  */}
        {/*<OutpacingSection /> */}
        <Footer />
        
        </ThemeProvider>
    )
}

export default Home;