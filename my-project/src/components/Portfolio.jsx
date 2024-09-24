import React from 'react';
import { TbWorld } from "react-icons/tb";
import PizzaParlor from "../assets/Pizza.png"
import SkullFitness from  "../assets/Skull-Fitness.png"
import JimsFruits from "../assets/Jims-Fruits.png"
const Portfolio = () => {
  const projects = [
    { 
        id: 1, 
        name: 'The Pizza Parlor', 
        url: '#', 
        image: PizzaParlor  
    },
    { 
        id: 2, 
        name: 'Skull Fitness', 
        url: 'https://skull-fitness-project.vercel.app/', 
        image: SkullFitness 
    },
    { 
        id: 3, 
        name: "Jim's Fruits", 
        url: '#', 
        image: JimsFruits
    },
  ];

  return (
    <div id="portfolio" className="p-8">
      <div className="text-center">
        <h3 className="uppercase text-1xl font-bold text-gray-500">Portfolio of our recent projects</h3>
        <h1 className="lg:text-5xl text-4xl font-averia mt-4">Take a look at our recent and featured projects.</h1>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-10">
        {projects.map((project) => (
          <div key={project.id} className="relative group shadow-lg ">
            <img
              src={ project.image } 
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h2 className="text-white text-2xl font-semibold mb-4">{project.name}</h2>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 flex items-center justify-center gap-3 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                <TbWorld className=' text-2xl ' />
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
