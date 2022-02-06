import {useState} from "react";
import styled from "styled-components";
import Header from "../components/NavBar";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";

const Home = (props) => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
        <Header theme={theme} setTheme={setTheme}>
            
        </Header>
        </ThemeProvider>
    )
}

export default Home;