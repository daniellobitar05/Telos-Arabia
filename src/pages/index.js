import {useState} from "react";
import styled from "styled-components";
import Header from "../components/NavBar";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeroSection from "../components/Sections/HeroSection";
import TopSection from "../components/Sections/TopSection";
import Protocol from "../components/Sections/Protocol";
import GetStartedSection from "../components/Sections/GetStartedSection";
import OutpacingSection from "../components/Sections/OutpacingSection";
import GroundSection from "../components/Sections/GroundSection";

const Home = (props) => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
        <Header theme={theme} setTheme={setTheme} />
        {/* <TopSection /> */}
        <HeroSection />
         <GroundSection />
        <Protocol />
        {/*<GetStartedSection />
        <OutpacingSection /> */}
        </ThemeProvider>
    )
}

export default Home;