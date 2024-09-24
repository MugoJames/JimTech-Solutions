import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";import Logo from "../assets/logo.png";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [servicesDropdown, setServicesDropdown] = useState(false); // Controls dropdown visibility

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdownEnter = () => {
    setServicesDropdown(true); // Show dropdown on hover
  };

  const handleDropdownLeave = () => {
    setServicesDropdown(false); // Hide dropdown when not hovering
  };

  return (
    <nav className='sticky top-0 flex justify-between items-center bg-orange-500 z-50'>
      <img src={Logo} className='ml-8 w-40 h-40 text-white' alt="Logo" />
      
      {/* Desktop Menu */}
      <ul className='hidden md:flex space-x-7 p-10 mr-14 cursor-pointer text-white font-bold'>
        <li>
          <Link
            to='home'
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            onSetActive={() => setActiveLink('home')}
            className={activeLink === 'home' ? 'text-amber-300' : 'hover:text-gray-400'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('about')}
            className={activeLink === 'about' ? 'text-amber-300' : 'hover:text-gray-400'}
          >
            About
          </Link>
        </li>

        {/* Services Dropdown - Controlled by hover */}
        <div
          className='relative'
          onMouseEnter={handleDropdownEnter} // Show dropdown on hover
          onMouseLeave={handleDropdownLeave} // Hide dropdown when hover ends
        >
          <li className='flex items-center'>
            <span className={activeLink === 'services' ? 'text-amber-300' : 'hover:text-gray-400'}>
              Services
            </span>
            <RiArrowDropDownLine  className={`ml-1 transition-transform duration-300 text-2xl font-bold ${servicesDropdown ? 'rotate-180' : ''}`} />
          </li>
          
          {/* Dropdown Content */}
          {servicesDropdown && (
            <ul className='absolute top-full left-0 bg-gray-700 text-white mt-2 p-2 space-y-2 rounded-lg w-40'>
              <li className='hover:text-gray-400'>
                <Link
                  to='web-development'
                  smooth={true}
                  duration={500}
                  className='block'
                  onClick={() => setActiveLink('services')}
                >
                  Web Development
                </Link>
              </li>
              <li className='hover:text-gray-400'>
                <Link
                  to='web-design'
                  smooth={true}
                  duration={500}
                  className='block'
                  onClick={() => setActiveLink('services')}
                >
                  Web Design
                </Link>
              </li>
              <li className='hover:text-gray-400'>
                <Link
                  to='seo'
                  smooth={true}
                  duration={500}
                  className='block'
                  onClick={() => setActiveLink('services')}
                >
                  SEO Services
                </Link>
              </li>
            </ul>
          )}
        </div>

        <li>
          <Link
            to='portfolio'
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('portfolio')}
            className={activeLink === 'portfolio' ? 'text-amber-300' : 'hover:text-gray-400'}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('contact')}
            className={activeLink === 'contact' ? 'text-amber-300' : 'hover:text-gray-400'}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      
      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} className='mr-4 text-white' /> : <AiOutlineMenu size={20} className='mr-4 text-white' />}
      </div>
      
      {/* Mobile Menu */}
      <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
        <ul className='p-8 text-2xl space-y-8'>
          <li>
            <Link
              to='home'
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass='text-amber-300'
              className='hover:text-gray-400'
              onClick={handleNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass='text-amber-300'
              className='hover:text-gray-400'
              onClick={handleNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='services'
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass='text-amber-300'
              className='hover:text-gray-400'
              onClick={handleNav}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='portfolio'
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass='text-amber-300'
              className='hover:text-gray-400'
              onClick={handleNav}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass='text-amber-300'
              className='hover:text-gray-400'
              onClick={handleNav}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
