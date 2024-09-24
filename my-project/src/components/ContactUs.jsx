import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import { TfiEmail } from "react-icons/tfi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { LuCalendarClock } from "react-icons/lu";
import { BsSendFill } from "react-icons/bs";
import contact from "../assets/contact.jpeg"
import send from "../assets/send.jpeg"
function Contacts() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    message: '',
    emailSubject:''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    validateForm();
  };

  const validateForm = () => {
    const form = document.querySelector("[data-form]");
    if (form) {
      setIsFormValid(form.checkValidity());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data to EmailJS
    emailjs.send('service_rocj3k8', 'template_9c8zak7', {
      from_name: formValues.fullName,
      email: formValues.email,
      emailSubject: formValues.emailSubject,
      message: formValues.message,
    }, 'JIqbpne1dmoOi8Qi5')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send email...', error);
      });
  
    // Reset form after submission
    setFormValues({
      fullName: '',
      email: '',
      emailSubject: '',
      message: ''
    });
    setIsFormValid(false);
  };
  

    return (
    <div id="contact" >
        <div className=' p-8'>
            <h1 className='capitalize text-[28px]'></h1>
        <div className='bg-orange-yellow-crayola w-10 mt-2 h-[5px] rounded-full'></div>
      </div>
      <div className='lg:flex '>
        <div 
            className=' relative shadow-2xl rounded-[20px] border-jet p-10 m-10 bg-cover ' 
            style={{ 
              backgroundImage: `url(${contact})` ,
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}
            
            >

          {/* Overlay */}
          <div className='absolute inset-0 bg-black opacity-35 rounded-[20px]'></div>

          <div className=' relative z-10'>
            <h2 className=' text-zinc-950 font-serif '>Contact Info</h2>
          </div>
            <ul className='grid grid-cols-1 gap-15px p-4'>
                <li className='min-w-full flex items-center gap-[16px] '>
                    <div className='relative  bg-zinc-600 border border-slate-600 w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 '>
                        <TfiEmail className=' text-amber-600'/> 
                    </div>
                    <div>
                        <p className='text-light-gray-70 uppercase mb-[2px] text-[15px] font-averia '>Email</p>
                        <a className='text-white-2 text-[13px]' href="mailto:jamonjoroge816@gmail.com">info@jimtech.com</a>
                    </div>
                </li>
            </ul>
            <ul className='grid grid-cols-1 gap-15px p-4'>
                <li className='min-w-full flex items-center gap-[16px] '>
                    <div className='relative bg-zinc-600 border border-slate-600 w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 '>
                        <IoPhonePortraitOutline className=' text-amber-600 ' /> 
                    </div>
                    <div>
                        <p className='text-light-gray-70 uppercase mb-[2px] text-[15px] font-averia '>phone</p>
                        <a className='text-white-2 text-[13px]' href="mailto:jamonjoroge816@gmail.com">+254 114 049 760</a>
                    </div>
                </li>
            </ul>
            <ul className='grid grid-cols-1 gap-15px p-4'>
                <li className='min-w-full flex items-center gap-[16px] '>
                    <div className='relative bg-zinc-600  border border-slate-600 w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 '>
                        <SlLocationPin className=' text-amber-600 ' /> 
                    </div>
                    <div>
                        <p className='text-light-gray-70 uppercase mb-[2px] text-[15px] font-averia '>Location</p>
                        <a className='text-white-2 text-[13px]' href="mailto:jamonjoroge816@gmail.com">Nairobi, Kahawa Sukari, Kenya</a>
                    </div>
                </li>
            </ul>
            <ul className='grid grid-cols-1 gap-15px p-4'>
                <li className='min-w-full flex items-center gap-[16px] '>
                    <div className='relative bg-zinc-600 border border-slate-600 w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-shadow-1 '>
                        <LuCalendarClock className=' text-amber-600 ' /> 
                    </div>
                    <div>
                        <p className='text-light-gray-70 uppercase mb-[2px] text-[15px] font-averia '>Business Hours</p>
                        <a className='text-white-2 text-[13px]' href="mailto:jamonjoroge816@gmail.com">Available 24/7</a>
                    </div>
                </li>
            </ul>
        </div>
        <div 
          className=' z-10 relative shadow-2xl rounded-[20px] border-jet p-10 m-10'
          style={{ 
            backgroundImage: `url(${send})` ,
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}
        >

           {/* Overlay */}
           <div className='absolute inset-0 bg-black opacity-35 rounded-[20px]'></div>
            <div className='relative z-20  '>
              <h3 className='mb-[20px] text-[20px] font-serif z-10 '>Send Us A Message</h3>
              <form data-form onSubmit={handleSubmit} className=' z-10 ' >
                <div className='lg:grid lg:grid-cols-2 gap-[25px] mb-[25px]'>
                      <input 
                        className=' mb-6 bg-transparent  outline-none py-[13px] px-[20px] text-[14px] font-normal border border-jet rounded-[14px] focus:border-orange-500 focus:invalid:border-red-700 placeholder-black' 
                        type="text" 
                        name='fullName' 
                        placeholder='Full name' 
                        value={formValues.fullName}
                        onChange={handleInputChange}
                        required
                      />

                      <input 
                        className='text-black mb-6 bg-transparent outline-none py-[13px] px-[20px] text-[14px] font-normal border border-jet rounded-[14px] focus:border-orange-500 focus:invalid:border-red-700 placeholder-black' 
                        type="email" 
                        name='email' 
                        placeholder='Email address' 
                        value={formValues.email}
                        onChange={handleInputChange}
                        required
                      />
                  </div> 
                  <input 
                      className='text-white-2 mb-6 bg-transparent outline-none py-[13px] px-[20px] w-full text-[14px] font-normal border border-jet rounded-[14px] focus:border-orange-500 focus:invalid:border-red-700 placeholder-black' 
                      type="text"
                      name='emailSubject'
                      placeholder='Email subject'
                      value={formValues.emailSubject}
                      onChange={handleInputChange}
                      required
                  />
                  <textarea 
                      className='min-h[100px] max-h-[600px] resize-y mb-[25px] h-[140px] w-full text-white-2 bg-transparent outline-none py-[13px] px-[20px] text-[14px] font-normal border border-jet rounded-[14px] focus:border-orange-500 focus:invalid:border-red-700 placeholder-black' 
                      name="message" 
                      placeholder='Your Message'
                      value={formValues.message}
                      onChange={handleInputChange}
                      required
                  ></textarea>

                  <button 
                    type='submit'
                    disabled={!isFormValid}
                    className={` relative w-full bg-slate-300  shadow-xl text-orange-yellow-crayola flex items-center justify-center gap-[10px] py-[13px] px-[20px] rounded-[14px] text-[14px] capitalize shadow-shadow-3  ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <BsSendFill className=' text-amber-600  ' /> Send Message
                  </button>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

