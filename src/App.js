import { useEffect } from "react";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/index.js";
import News from "./pages/News.js";
import Developers from "./pages/Developers.js";
import About from "./pages/About.js";
//import GlobalStyle from "./globalStyles";

function App() {

  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{props.children}</>
  };


  return (
    <Router>
      <ScrollToTop>
        {/* <GlobalStyle /> */}
            <AnimatePresence exitBeforeEnter>
              <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/News" element={<News />}/>
                <Route exact path="/Developers" element={<Developers />}/>
                <Route exact path="/About" element={<About />}/>
              </Routes>
            </AnimatePresence>
      </ScrollToTop>
    </Router>
  );
}


export default App;
