import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import About from "./components/About";
// import Portfolio from "./components/Portfolio";
import PortfolioTabs from "./components/PortfolioTabs";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideLines from "./components/SideLines";
import PardonTheDust from "./components/PardonTheDust";


function getFaviconEl() {
  return document.getElementById("favicon");
}

function updateFavicon(favType) {
  const favicon = getFaviconEl();
  if (favType === "focus") {
    favicon.href = "../src/assets/faviconHappy.ico";
  } else {
    favicon.href = "../src/assets/faviconShocked.ico";
  }
}



function App() {

  window.onfocus = function () {
    document.title = "Mitchell Schuldinger";
    updateFavicon("focus");
  }
  window.onblur = function () {
    document.title = "Wait, come back!";
    updateFavicon("blur");
  }



  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <PortfolioTabs />
      <Experience />
      <Contact />
      <Footer />
      <SideLines />
      <SideNav />

      <PardonTheDust />

    </div>
  );
}

export default App;
