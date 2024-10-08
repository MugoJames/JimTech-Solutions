import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About-us';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs'; 
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { SiImessage } from 'react-icons/si';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  // Define styles based on the current route
  const navStyle = location.pathname === '/contact' || location.pathname === '/services' 
    ? 'h-26'  
    : 'h-26';

  return (
    <div>
      <Navigation navStyle={navStyle} /> 

      <Routes>          
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
      
      {/* Sticky Buttons */}
      <a href="https://wa.me/254114049760" target="_blank" rel="noopener noreferrer">
        <button className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-20">
          <FaWhatsapp size={30} />
        </button>
      </a>

      <a href="mailto:info@jimtech.com">
        <button className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110 z-20">
          <SiImessage size={30} />
        </button>
      </a>
    </div>
  );
}

export default App;
