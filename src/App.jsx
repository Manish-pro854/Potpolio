import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { ClimbingBoxLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true); // loader active at start

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for 3 seconds (you had 5 mins earlier!)
    return () => clearTimeout(timer);
  }, []);

  // ✅ Toggle overflow-y based on loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto"; // restore scroll
    }

    return () => {
      document.body.style.overflowY = "auto"; // cleanup just in case
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white z-[9999]">
        <ClimbingBoxLoader size={16} color="#F37A24" />
      </div>
    );
  }

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
