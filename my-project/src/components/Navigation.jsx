import React from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from "../assets/logo.png";

const Navigation = () => {
  const [nav, setNav] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [leaveTimeout, setLeaveTimeout] = React.useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setLeaveTimeout(setTimeout(() => {
      setDropdownOpen(false);
    }, 250));
  };

  const handleDropdownItemMouseEnter = () => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
    }
  };

  return (
    <nav className='sticky top-0 flex justify-between items-center bg-primary z-50'>
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
            className='hover:text-gray-400'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            duration={500}
            className='hover:text-gray-400'
          >
            About
          </Link>
        </li>
        {/* Services Dropdown */}
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a className="hover:text-slate-900 flex items-center">
            Services
            <RiArrowDropDownLine className="ml-1 transition-transform duration-300 text-2xl font-bold" />
          </a>
          
          {/* Dropdown Menu */}
          {dropdownOpen && (
            <ul
              className="absolute top-full m-2 min-w-[240px] left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 p-4 rounded-lg shadow-xl"
              onMouseEnter={handleDropdownItemMouseEnter} // Prevents closing when hovering over dropdown
              onMouseLeave={handleMouseLeave} // Closes when mouse leaves dropdown
            >
              <li>
                <a className="text-slate-800 hover:bg-slate-200 flex items-center p-2" href="#">
                  Web Development
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:bg-slate-200 flex items-center p-2" href="#">
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:bg-slate-200 flex items-center p-2" href="#">
                  SEO Services
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to='portfolio'
            smooth={true}
            duration={500}
            className='hover:text-gray-400'
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='hover:text-gray-400'
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} className='mr-4 text-white' /> : <AiOutlineMenu size={20} className='mr-4 text-white' />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#202121] z-50 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='p-8 text-2xl space-y-8 text-gray-300'>
          <li>
            <Link
              to='home'
              smooth={true}
              duration={500}
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
