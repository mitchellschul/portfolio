import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import BottomNav from "./components/BottomNav";
import About from "./components/About";
// import Portfolio from "./components/Portfolio";
import PortfolioTabs from "./components/PortfolioTabs";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import SideLines from "./components/SideLines";
// import PardonTheDust from "./components/PardonTheDust";
import Progress from "./components/Progress";

function App() {



  window.onfocus = function () {
    document.title = "Mitchell Schuldinger";
  }
  window.onblur = function () {
    document.title = "Wait, come back!";
  }

  return (
    <div>

      <Progress />
      <NavBar />
      {/* <BottomNav /> */}
      <Home />
      <About />
      <PortfolioTabs />
      <Experience />
      <Contact />
      <Footer />
      {/* <SideLines /> */}


      {/* <PardonTheDust /> */}

    </div>
  );
}

export default App;
