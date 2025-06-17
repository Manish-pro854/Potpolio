import React from "react";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Home/>
      <About/>
      <Projects/>
      {/* <Contact/> */}
    </>
  );
};

export default App;

