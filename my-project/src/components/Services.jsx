import React from 'react';
import { FaSearchLocation,FaServer,FaTools,FaShoppingCart,FaCode,FaRedoAlt } from "react-icons/fa";
const Services = () => {
  return (
    <div>
      {/* Header Section */}
      <div id='services' className='p-8 lg:flex lg:flex-col items-center'>
        <h1 className='lg:text-5xl text-4xl font-averia text-center'>Our Core Services</h1>
        <div className='bg-orange-500 w-[120px] mt-2 h-[5px] rounded-full'></div>
      </div>

      {/* Services Grid */}
      <div className='p-8 grid gap-8 lg:grid-cols-3  sm:grid-cols-2'>

        {/* First Service Card */}
        <div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
          <div className='flex items-center'>
            <FaCode className='text-4xl text-blue-500 mr-4' />
            <h3 className='text-xl font-semibold'>Custom Web Development</h3>
          </div>
          <p className='mt-4 text-gray-600'>
            We provide tailored web development solutions to meet your business needs.
          </p>
        </div>

        {/* Second Service card */}
        <div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
          <div className='flex items-center'>
            <FaShoppingCart className='text-4xl text-blue-500 mr-4' />
            <h3 className='text-xl font-semibold'>E-commerce Solutions</h3>
          </div>
          <p className='mt-4 text-gray-600'>
            We provide tailored e-commerce solutions to help you sell online with ease.
          </p>
        </div>

        {/* Third Service Card */}
        <div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
          <div className='flex items-center'>
            <FaTools  className='text-4xl text-blue-500 mr-4' />
            <h3 className='text-xl font-semibold'>Website Maintenance & Support</h3>
          </div>
          <p className='mt-4 text-gray-600'>
            We offer reliable website maintenance and support to keep your site running smoothly.          
          </p>
        </div>

        {/* Fourth Service Card */}
        <div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
          <div className='flex items-center'>
            <FaSearchLocation   className='text-4xl text-blue-500 mr-4' />
            <h3 className='text-xl font-semibold'>Search Engine Optimization (SEO)</h3>
          </div>
          <p className='mt-4 text-gray-600'>
            We specialize in Search Engine Optimization (SEO) to boost your online visibility and drive traffic.          
          </p>
        </div>

        {/* Fifth Service Card */}
        <div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
          <div className='flex items-center'>
            <FaServer  className='text-4xl text-blue-500 mr-4' />
            <h3 className='text-xl font-semibold'>Web Hosting & Domain Setup</h3>
          </div>
          <p className='mt-4 text-gray-600'>
            We provide comprehensive web hosting and domain setup services to get your site online effortlessly.          
          </p>
        </div>

        {/* Sixth Service card */}
        <div className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
          <div className='flex items-center'>
            <FaRedoAlt className='text-4xl text-blue-500 mr-4' />
            <h3 className='text-xl font-semibold'>Website Redesign</h3>
          </div>
          <p className='mt-4 text-gray-600'>
            With our services, we refresh your website with a modern look and enhanced functionality, focusing on better performance, responsiveness, and usability.          
          </p>
        </div>
      </div>
      {/*
      <div className=' p-8  '>
        <h1 className='lg:text-5xl text-4xl text-orange-500 font-averia text-center'>We Offer More Services to Meet Your Needs</h1>
      </div>
      */}
    </div>
  );
};

export default Services;
