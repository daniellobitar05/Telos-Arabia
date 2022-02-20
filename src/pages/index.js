import {useState} from "react";
import styled from "styled-components";
import Header from "../components/NavBar";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HeroSection from "../components/Sections/HeroSection";
import TopSection from "../components/Sections/TopSection";
import Protocol from "../components/Sections/Protocol";

const Home = (props) => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
        <Header theme={theme} setTheme={setTheme} />
        <TopSection />
        <HeroSection />
        <Protocol />
        </ThemeProvider>
    )
}

export default Home;