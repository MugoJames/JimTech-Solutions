import React from 'react';
import Chess from "../assets/chess.jpeg"
import SmallServices from './Smallservices';
const Hero = () => {
  return (
   <div>
    <div className='flex justify-between items-center p-6'>
      {/* Left Content */}
      <div className='text-black p-5 w-1/2 shadow-lg '>
        <h1 className='p-2 text-4xl font-averia'>Who Are We?</h1>
        <h2 className='p-2 text-3xl font-poppins'>Creative Mind's Behind Your Success!</h2>
        <p className='p-2'>
          At JimTech Solutions, we are a passionate team of developers dedicated to 
          bringing your ideas to life. With a blend of creativity and technical expertise, we craft bespoke 
          websites that not only look stunning but also deliver exceptional performance. <span className='text-blue-700'>Just like in chess, 
          every move counts.</span> We carefully plan each step of your web development journey, ensuring strategic 
          decisions lead to your success. Our mission is to empower businesses by providing innovative digital 
          solutions tailored to meet their unique needs. Let's build something amazing together!
        </p>
        <a href="/about">
          <button className='p-4 font-serif text-white bg-blue-700 rounded-xl transform transition-transform duration-300 hover:scale-105'>
            Know More About Us
          </button>
        </a> 
      </div>

      {/* Right Image */}
      <div className='w-1/2 flex justify-center'>
        <img src={Chess} alt="Chess image" className=' rounded-xl max-w-full h-auto' />
      </div>
    </div>
    <div className=''>
      <div className=' justify-center items-center text-center p-5 '  >
        <h1 className='p-2 text-4xl font-averia'>What Do We Offer ?</h1>
        <h2 className='p-2 text-3xl font-poppins'>Quality craftsmanship for your online success.</h2>
      </div>
      <div className='p-5'>
        <SmallServices />
      </div>
      <div className='p-5 bg-review my-6'>
        <ul className=' p-4 flex justify-between items-center '>
          <li>
            <span>
                <number className="text-3xl font-bold" >55+</number>
                <h4 className='font-serif' >Satisfied Customer's</h4>
            </span>
          </li>
          <li>
            <span>
                <number className="text-3xl font-bold" >70+</number>
                <h4 className='font-serif'>Finished project's</h4>
            </span>
          </li>
          <li>
            <span>
                <number className="text-3xl font-bold" >10+</number>
                <h4 className='font-serif'>Masterful Professional's</h4>
            </span>
          </li>
          <li>
            <span>
                <number className="text-3xl font-bold" >95%</number>
                <h4 className='font-serif'>Projects Delivered On Time</h4>
            </span>
          </li>
        </ul>
      </div>
    </div>
    </div>
    
  );
};

export default Hero;
