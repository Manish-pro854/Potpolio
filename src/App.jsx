import React from "react";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Home/>
      <About/>
      {/* <Projects/> */}
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;

