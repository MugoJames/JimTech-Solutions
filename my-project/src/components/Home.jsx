import React from 'react'
import home from "../assets/home.jpeg"

function Home() {
  return (
    <section
    id='home'
    className="relative bg-cover bg-center h-screen"
    style={{ 
        backgroundImage: `url(${home})`,
        height:"100vh"
     }}    
    >
         {/* Overlay */}
         <div className="absolute  inset-0 bg-black opacity-50 z-0"></div>
         {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
        <h1 className=' lg:text-5xl md:text-6xl   uppercase  mb-4 tracking-[1px] font-mono '>powered by innovation, <br /> driven by technology</h1>
        <p className="text-lg md:text-xl mb-8 text-center px-32 font-serif">  
            At the forefront of innovation, we craft cutting-edge web solutions that empower businesse's to thrive in the digital world. Driven by technology, 
            our focus is on delivering creative and functional websites that not only look stunning but also provide seamless user experiences. 
            Let's build the future of your brand together.        
        </p>
    </div>
       
    </section>
      
  )
}

export default Home
