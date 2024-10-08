// components/SmallServices.js
import React from 'react';
import { SiTicktick } from 'react-icons/si';

const SmallServices = () => {
  return (
    <section
      id="small-services"
      className="  bg-white py-6 shadow-lg rounded-lg  lg:mx-20" 
    >
      <div className=" lg:p-10 mx-auto pb-2"> 
        <ul className="grid grid-cols-2 gap-4 list-none">
          <li className="flex items-center">
            <SiTicktick className="text-green-500 mr-2" />
            Custom Web Development
          </li>
          <li className="flex items-center">
            <SiTicktick className="text-green-500 mr-2" />
            E-commerce Solutions
          </li>
          <li className="flex items-center">
            <SiTicktick className="text-green-500 mr-2" />
            Website Redesign
          </li>
          <li className="flex items-center">
            <SiTicktick className="text-green-500 mr-2" />
            SEO optimization
          </li>
          <li className="flex items-center">
            <SiTicktick className="text-green-500 mr-2" />
            Website maintenance services
          </li>
          <li className="flex items-center">
            <SiTicktick className="text-green-500 mr-2" />
                Web Hosting & Domain Setup
          </li>
        </ul>
        <button className='mt-4 p-4 font-serif text-white bg-blue-700 rounded-xl transform transition-transform duration-300 hover:scale-105'>
          Explore What We Offer
        </button>
      </div>
    </section>
  );
};

export default SmallServices;
