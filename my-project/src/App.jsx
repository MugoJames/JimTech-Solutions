import React from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About-us';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contacts from './components/ContactUs';
import SmallServices from './components/Smallservices';
import Footer from './components/Footer';
import { FaWhatsapp} from 'react-icons/fa';
import { SiImessage } from "react-icons/si";

function App() {
  return (
    <Router>
    <div>
      {/* Navigation */}
      <nav>
        <ul>
          <li><Link to='navigation' smooth={true} duration={500}></Link></li>
          <li><Link to="home" smooth={true} duration={500}></Link></li>
          <li><Link to="about" smooth={true} duration={500}></Link></li>
          <li><Link to="services" smooth={true} duration={500}></Link></li>
          <li><Link to="portfolio" smooth={true} duration={500}></Link></li>
          <li><Link to="contact" smooth={true} duration={500}></Link></li>
          <li><Link to="small-services" smooth={true} duration={500}></Link></li>
          <li><Link to="Footer" smooth={true} duration={500}></Link></li>
        </ul>
      </nav>
      
      {/* Sections */}
      <Navigation />
      <Home />
      <SmallServices/>
      <About />
      <Services />
      <Portfolio />
      <Contacts />
      <Footer />

      {/* Routing for Contact Page */}
      <Routes>
        <Route path="/contact" element={<Contacts />} />
      </Routes>

      {/* Sticky Buttons */}
      <a href="https://wa.me/254114049760" target="_blank" rel="noopener noreferrer">
        <button className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-20 ">
          <FaWhatsapp size={30} />
        </button>
      </a>

      <a href="mailto:info@jimtech.com">
        <button className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110 z-20">
          <SiImessage size={30} />
        </button>
      </a>
    </div>
  </Router>
  );
}

export default App;
