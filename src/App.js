import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./components/Preloader/preloader";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/LandingScreen/Home";
import Works from "./pages/Works/Works";
import About from "./pages/about/about";
import Serivce from "./pages/Service/Serivce";
import ContactUs from "./pages/ContactUs/ContactUs";
import CareerDashboard from "./pages/Career/Pages/Dashboard";
import Alljobs from "./pages/Career/Pages/AllJobs/Alljobs";
import ApplyNow from "./pages/Career/Pages/ApplyNow/ApplyNow";
import SereneSkin from "./pages/CaseStudies/SereneScreen/SereneSkin";
import RadMedia from "./pages/CaseStudies/RadMedia/RadMedia";
import BakersStreet from "./pages/CaseStudies/BakersStreet/BakersStreet";
import Toot from "./pages/CaseStudies/Toot/Toot";
import Hathkari from "./pages/CaseStudies/hathkari/Hathkari";
import CreamForest from "./pages/CaseStudies/CreamForest/CreamForest";
import Stone from "./pages/CaseStudies/TheStone/Stone";
import PawPet from "./pages/CaseStudies/PawPet/PawPet";
import Culinary from "./pages/CaseStudies/Culinary/Culinary";
import Atmabodh from "./pages/CaseStudies/Atmabodh/Atmabodh";
import Purus from "./pages/CaseStudies/Purus/Purus";
import "./App.css";
import Hylete from "./pages/CaseStudies/Hylete/Hylete";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

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

  // Log the updated mousePosition
  useEffect(() => {}, [mousePosition]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div className="App">
      {isLoading ? ( // Conditionally render the preloader based on isLoading
        <Preloader />
      ) : (
        <Router>
          <motion.div
            className="cursor"
            variants={variants}
            animate="default"
          />
          <Navbar />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/about" element={<About />} />
              <Route path="/expertise" element={<Serivce />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/careerdashboard" element={<CareerDashboard />} />
              <Route path="/alljobs" element={<Alljobs />} />
              <Route path="/applynow" element={<ApplyNow />} />
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
              <Route path="/works/purus" element={<Purus />} />
              <Route path="/works/hylete" element={<Hylete />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
