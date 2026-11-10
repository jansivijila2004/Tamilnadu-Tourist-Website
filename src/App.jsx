import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navbar, Footer, ScrollTop } from "./components";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import HeritageNature from "./pages/HeritageNature";
import FoodCulture from "./pages/FoodCulture";
import Contact from "./pages/Contact";
import TravelGuide from "./pages/TravelGuide";

export default function App() {
  const location = useLocation();
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] };
  return (
    <>
      <ScrollTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main key={location.pathname}
          initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }} transition={t}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/heritage-nature" element={<HeritageNature />} />
            <Route path="/food-culture" element={<FoodCulture />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/travel-guide" element={<TravelGuide />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
