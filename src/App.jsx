import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Works from "./pages/Works/Works";
import SereneSkin from "./pages/CaseStudies/SereneScreen/SereneSkin";
import RadMedia from "./pages/CaseStudies/RadMedia/RadMedia";
import BakersStreet from "./pages/CaseStudies/BakersStreet/BakersStreet";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
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
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="/works/sereneskin" element={<SereneSkin />} />
          <Route path="/works/radmedia" element={<RadMedia />} />
          <Route path="/works/bakerstreet" element={<BakersStreet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
