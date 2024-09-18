import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/logo.png"


const Navigation = () => {
    const [nav, setNav] = useState(false);
    const [activeLink, setActiveLink] = useState('home'); 

  
    const handleNav = () => {
      setNav(!nav);
    };

  return (
     <nav className=' sticky top-0 flex justify-between items-center  bg-orange-500 z-50 '>
        <img src={Logo} className='ml-8 w-40 h-40 text-white' alt="Logo" />
        <ul className=' hidden md:flex space-x-7 p-10 mr-14 cursor-pointer text-white font-bold  '>
            <li>
                <Link
                to='home'
                smooth={true}
                duration={500}
                onSetActive={() => setActiveLink('home')} 
                className={activeLink === 'home' ? 'text-amber-300' : 'hover:text-gray-400'}
                > Home </Link>
            </li>
            <li>
                <Link
                   to='about'
                   smooth = {true}
                   duration={500}
                   onSetActive={() => setActiveLink('about')}
                   className={activeLink === 'about' ? 'text-amber-300' : 'hover:text-gray-400'}
                > About </Link>
            </li>
            <li>
                <Link
                   to='services'
                   smooth = {true}
                   duration={500}
                > Services </Link>
            </li>
            <li>
                <Link
                   to='portofolio'
                   smooth = {true}
                   duration={500}
                > Portofolio </Link>
            </li>
            <li>
                <Link
                   to='contact'
                   smooth = {true}
                   duration={500}
                > Contact Us </Link>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} className='mr-4 text-white' /> : <AiOutlineMenu size={20} className='mr-4 text-white' />}
        </div>
        <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500 z-50' : "fixed left-[-100%]"}>
            <ul className='p-8 text-2xl'>
               <li>
                    <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50}
                    activeClass='text-red-700'
                    className='hover:text-gray-400'
                    > Home </Link>
                </li>
                <li>
                    <Link
                    to='about'
                    smooth = {true}
                    duration={500}
                    spy={true}
                    activeClass='text-red-700'
                    > About </Link>
                </li>
                <li>
                    <Link
                    to='services'
                    smooth = {true}
                    duration={500}
                    > Services </Link>
                </li>
                <li>
                    <Link
                    to='portofolio'
                    smooth = {true}
                    duration={500}
                    > Portofolio </Link>
                </li>
                <li>
                    <Link
                    to='contact'
                    smooth = {true}
                    duration={500}
                    > Contact Us </Link>
                </li>
            </ul>
        </div>
    </nav>
      
  )
}

export default Navigation
