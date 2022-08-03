import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {



  window.onfocus = function () {
    document.title = "Mitchell Schuldinger";
  }
  window.onblur = function () {
    document.title = "Wait, come back!";
  }



  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />

      <SocialLinks />

    </div>
  );
}

export default App;
