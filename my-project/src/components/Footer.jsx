import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdOutlineWifiCalling3, MdMarkEmailRead,MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
  <footer id="Footer" className="bg-primary text-white py-8">
    <div className="container mx-auto flex flex-wrap justify-center gap-12 ">
      {/* Company Info */}
      <div className="w-full sm:w-1/4 ">
        <h2 className="text-2xl font-bold font-averia">JimTech Solutions</h2>
        <p className="">
          JimTech Solutions offers innovative web design and development services, 
          empowering businesses through cutting-edge technology and creative solutions.
        </p>
        <div className="flex mt-4 space-x-4 text-secondary">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-primary text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-primary text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-primary text-2xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-primary text-2xl" />
          </a>
        </div>
      </div>
  
  
      {/* Quick Links */}
      <div className="">
        <h3 className="text-xl font-semibold font-averia">Quick Links</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-3 hover:text-amber-300 ">
            <MdKeyboardDoubleArrowRight />
            <a href="#">Home</a>
          </li>
          <li className="flex items-center gap-3">
            <MdKeyboardDoubleArrowRight />
            <a href="#">About</a>
          </li>
          <li className="flex items-center gap-3">
            <MdKeyboardDoubleArrowRight />
            <a href="#">Services</a>
          </li>
          <li className="flex items-center gap-3">
            <MdKeyboardDoubleArrowRight />
            <a href="#">Portfolio</a>
          </li>
          <li className="flex items-center gap-3">
            <MdKeyboardDoubleArrowRight />
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
  
      {/* Contact Info */}
      <div className="">
        <h3 className="text-xl font-semibold font-averia">Contact Us</h3>
        <p className="flex items-center gap-3 mt-4">
          <MdOutlineWifiCalling3 className="text-2xl animate-bounce" /> 
          +254 114 049 760
        </p>
        <p className="flex items-center gap-3 mt-4">
          <MdMarkEmailRead className="text-2xl" />
          info@jimtech.com
        </p>
      </div>
    </div>
  
    {/* Thin Line */}
    <div className="container mx-auto my-8">
      <hr className="border-t border-white opacity-50" />
    </div>
  
    {/* Footer Bottom */}
    <div className="container mx-auto text-center mt-8 flex flex-col sm:flex-row justify-between items-center">
      <p className="mt-4">&copy; 2024 JimTech Solutions. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-4 sm:mt-0">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
  
  
  );
};

export default Footer;
