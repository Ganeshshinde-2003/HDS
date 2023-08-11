import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Works from "./pages/Works/Works";
import SereneSkin from "./pages/CaseStudies/SereneScreen/SereneSkin";
import RadMedia from "./pages/CaseStudies/RadMedia/RadMedia";
import BakersStreet from "./pages/CaseStudies/BakersStreet/BakersStreet";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer/Footer";
import Toot from "./pages/CaseStudies/Toot/Toot";
import Hathkari from "./pages/CaseStudies/hathkari/Hathkari";
import CreamForest from "./pages/CaseStudies/CreamForest/CreamForest";
import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/about/about";
import Stone from "./pages/CaseStudies/TheStone/Stone";
import PawPet from "./pages/CaseStudies/PawPet/PawPet";
import Culinary from "./pages/CaseStudies/Culinary/Culinary";
import Atmabodh from "./pages/CaseStudies/Atmabodh/Atmabodh";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Check if e.target is valid and over any text content
      const isOverText = Boolean(e.target?.textContent?.trim());

      // Add or remove the class based on cursor position
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        if (isOverText) {
          cursor.classList.add("text-mode");
        } else {
          cursor.classList.remove("text-mode");
        }
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div className="App">
      <Router>
        <motion.div className="cursor" variants={variants} animate="default" />
        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/works/sereneskin" element={<SereneSkin />} />
            <Route path="/works/radmedia" element={<RadMedia />} />
            <Route path="/works/bakerstreet" element={<BakersStreet />} />
            <Route path="/works/toot" element={<Toot />} />
            <Route path="/works/hathkari" element={<Hathkari />} />
            <Route path="/works/creamforest" element={<CreamForest />} />
            <Route path="/works/thestone" element={<Stone />} />
            <Route path="/works/pawpet" element={<PawPet />} />
            <Route path="/works/culinary" element={<Culinary />} />
            <Route path="/works/atmabodh" element={<Atmabodh />} />
          </Routes>
        </AnimatePresence>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
