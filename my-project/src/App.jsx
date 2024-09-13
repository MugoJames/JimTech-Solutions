import React from 'react'
import { Link } from 'react-scroll';
import Home from './components/Home'
import Navigation from './components/Navigation';
import About from './components/About-us';
function App() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <ul>
          <li><Link to='navigation' smooth={true} duration={500}></Link></li>
          <li><Link to="home" smooth={true} duration={500} ></Link></li>
          <li><Link to="about" smooth={true} duration={500} ></Link></li>
        </ul>
      </nav>
      {/* Sections */}
      <Navigation/>
      <Home/>
      <About/>
      
      
    </div>
  )
}

export default App
