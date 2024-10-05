import React from 'react';
import Inn from "../assets/Inn.jpeg";
import Ad from "../assets/Ad.jpeg";
import De from "../assets/De.jpeg";
import Coderunner from "../components/Coderunner"
function About() {
  return (
    <div id='about' className='p-8 pt-52 relative'>
      <div className='lg:flex lg:justify-between lg:items-center gap-2'>

        {/* Left Content Section */}
        <div className='lg:w-1/2 bg-white shadow-xl p-12  z-10'>
          <div className='mb-4'>
            <h1 className='text-4xl font-serif'>About Us</h1>
            <div className='bg-orange-500 w-12 mt-2 h-[5px] rounded-full'></div>
          </div>

          <h2 className='text-2xl font-bold mb-4'>
            Who are We ?
          </h2>

          <p className='text-gray-600'>
            <strong>JimTech Solutions</strong> is a team of dedicated professionals passionate about empowering businesses with cutting-edge digital solutions. We specialize in turning your ideas into reality through innovative web technologies. Whether you need web development, mobile apps, or modern web design, we’re committed to delivering solutions that drive growth and enhance your business's efficiency.
          </p>

          <p className='mt-4 text-gray-600'>
            With a focus on client-first strategies, we strive to exceed your expectations by blending creativity with advanced technology, addressing complex challenges, and helping your business thrive in the digital landscape.
          </p>
        </div>

        {/* Running code */}
        <div className='lg:w-1/2 lg:h-[400px]  lg:-ml-0 lg:-mt-8 overflow-hidden rounded-xl'>
            <Coderunner />
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className='mt-16'>
        <div className='p-8'>
          <h1 className='text-4xl font-serif'>Why Choose Us?</h1>
          <div className='bg-orange-500 w-[100px] mt-2 h-[5px] rounded-full'></div>
          <p className='mt-4 text-gray-600 lg:mr-40'>
            We believe in building lasting relationships with our clients by delivering personalized solutions. Our passion for innovation, combined with a deep understanding of your needs, sets us apart in helping you achieve your business goals.
          </p>
        </div>
        <div className='lg:p-8'>
          <h1 className='text-3xl font-serif'>Here's how we stand out:</h1>
          <div className='p-4 lg:flex gap-4'>
            <div className='relative bg-cover p-6  rounded-xl m-1' style={{ backgroundImage: `url(${Inn})` }}>

              {/* Overlay */}
              <div className='absolute inset-0 bg-black bg-opacity-50 rounded-xl '></div>

              <div className=' relative z-10  '>
                <h2 className='text-white text-2xl  font-mono'>We are innovative:</h2>
                <p className='mt-2 text-white font-serif'>
                  Always pushing the boundaries to deliver cutting-edge solutions that drive your success.
                </p>
              </div>
            </div>

            <div className='relative bg-cover p-6 rounded-xl m-1' style={{ backgroundImage: `url(${Ad})` }}>

              {/* Overlay */}
              <div className='absolute inset-0 bg-black bg-opacity-50 rounded-xl '></div>

              <div className=' relative z-10 '>
                <h2 className=' text-white text-2xl font-mono'>We are adaptable:</h2>
                <p className='mt-2 text-white font-serif'>
                  Ready to evolve with your business and the ever-changing market trends.
                </p>
              </div>
            </div>

            <div className='relative bg-cover p-6 rounded-xl m-1 ' style={{ backgroundImage: `url(${De})` }}>
              
              {/* Overlay */}
              <div className='absolute inset-0 bg-black bg-opacity-50 rounded-xl '></div>

              <div className=' relative z-10 '>
                <h2 className=' text-white text-2xl font-serif'>We are dedicated:</h2>
                <p className='mt-2 text-white font-serif'>
                  Our commitment to your success is unwavering, ensuring every project meets your vision.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Marquee Effect 
      <div className='marquee rounded-xl bg-orange-500 text-xl font-serif '>
        <span>Check out our Services! We offer a wide range of web development and design solutions to meet your needs. Don't miss out!</span>
      </div>
      */}
    </div>
  );
}

export default About;
