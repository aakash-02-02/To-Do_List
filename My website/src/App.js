import React from 'react';
import "./App.css";
import Navbar from './components/inc/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";  // For using the routers. 
import Footer from "./components/inc/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
