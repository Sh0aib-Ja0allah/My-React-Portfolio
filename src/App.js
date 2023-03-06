import React from "react";
import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Projects2 from "./components/Projects2/Projects2";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Projects2 />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
