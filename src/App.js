import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu/Menu";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait"> {/* Maneja las transiciones */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
