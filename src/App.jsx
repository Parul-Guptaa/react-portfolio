import Navbar from "./Components/Navbar/Navbar";
import Home from  "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contactus/Contact";
import Footer from "./Components/Footer/Footer";

function App() {

  return ( <div className="bg-[#171d32] h-auto w-full  overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Skill/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App
