// components/SmallServices.js
import React from 'react';
import { SiTicktick } from 'react-icons/si';

const SmallServices = () => {
  return (
    <section
      id="small-services"
      className="absolute left-0 right-0 top-[800px] bg-white py-6 shadow-lg rounded-lg z-10 mx-20" 
    >
      <div className=" p-10 mx-auto pb-2"> 
        <ul className="grid grid-cols-2 gap-4 list-none">
          <li className="flex items-center">
            <SiTicktick className="text-green-500 mr-2" />
            Build my website for me
          </li>
          <li className="flex items-center">
            <SiTicktick className="text-green-500 mr-2" />
            Design my website for me
          </li>
          <li className="flex items-center">
            <SiTicktick className="text-green-500 mr-2" />
            Develop custom web applications
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
                E-commerce Solutions
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SmallServices;
