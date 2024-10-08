import React from 'react'
import home from "../assets/Home.jpeg"
import Hero from './Hero';
import { FaCircleArrowDown } from "react-icons/fa6";

function Home() {

  const handlescroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }
  return (
    <div>
      <section
      id='home'
      className="relative  bg-center h-screen"
      style={{ 
          backgroundImage: `url(${home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Full height
          width: '100%', // Full width
          display: 'flex', // Center content
          alignItems: 'center',
          justifyContent: 'center',
     }}    
    >
       {/* Overlay */}
      <div className="absolute  inset-0 bg-black opacity-50 z-0"></div>
         {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
        <h5 className='text-2xl font-serif font-bold' >JimTech Solution's</h5>
        <h1 className=' text-4xl lg:text-6xl   uppercase  mb-4 tracking-[1px] font-averia '>powered by innovation, <br /> driven by technology</h1>
        <p className="text-lg md:text-xl mb-8 text-center lg:px-32 font-serif">  
            At the forefront of innovation, we craft cutting-edge web solutions that empower businesse's to thrive in the digital world. Driven by technology, 
            our focus is on delivering creative and functional websites that not only look stunning but also provide seamless user experiences. 
            Let's build the future of your brand together.        
        </p>
        <FaCircleArrowDown 
          onClick={handlescroll}
          className=' w-12 h-12 text-white animate-bounce mt-20 cursor-pointer '
        /> 
      </div> 
    </section>
    <Hero />
    </div>

      
  )
}

export default Home
