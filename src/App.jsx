import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/ServiceMain";
import Footer from "./components/Footer";
import ServiceComponent from "./components/ServiceComponent";
import About from "./components/AboutPage";
import Carrers from "./components/Careers";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollTop />
      <Routes>
        {/* Route for Home Page (only Hero Section) */}
        <Route path="/" element={<HeroSection />} />

        {/* Route for Services Page */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/carrers" element={<Carrers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
