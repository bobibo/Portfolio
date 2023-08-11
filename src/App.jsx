// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 50,
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3"> © ALEXIS HOUREUX 2023</h6>
      </footer>
    </div>
  );
};

// change the port to 3000




export default App;
