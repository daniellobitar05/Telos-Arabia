import { useEffect } from "react";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/index.js";
import News from "./pages/News.js";
import Developers from "./pages/Developers.js";
import About from "./pages/About.js";
import Roadmap from "./pages/Roadmap.js";
import CommResources from "./pages/CommResources.js";
import GovDocumentation from "./pages/GovDocumentation.js";
import Tokenomics from "./pages/Tokenomics.js";
import ESG from "./pages/ESG.js";
import EVM from "./pages/EVM.js";
import NativeEcosystem from "./pages/NativeEcosystem.js";
import EVMEcosystem from "./pages/EVMEcosystem.js";
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
                <Route exact path="/Roadmap" element={<Roadmap />}/>
                <Route exact path="/CommResources" element={<CommResources />}/>
                <Route exact path="/GovDocumentation" element={<GovDocumentation />}/>
                <Route exact path="/Tokenomics" element={<Tokenomics />}/>
                <Route exact path="/ESG" element={<ESG />}/>
                <Route exact path="/EVM" element={<EVM />}/>
                <Route exact path="/NativeEcosystem" element={<NativeEcosystem />}/>
                <Route exact path="/EVMEcosystem" element={<EVMEcosystem />}/>
              </Routes>
            </AnimatePresence>
      </ScrollToTop>
    </Router>
  );
}


export default App;
