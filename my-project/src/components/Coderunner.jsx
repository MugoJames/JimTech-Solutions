import De from "../assets/runningcode.jpeg";
import React, { useEffect, useState } from 'react';

const CodeDisplay = () => {
  const [displayedText, setDisplayedText] = useState('');

  const companyInfo = `
Welcome to JimTech Solutions!
At JimTech Solutions, we offer innovative web design and development services tailored to meet your business needs.
Our mission is to deliver high-quality digital solutions that empower your brand and engage your audience.

What We Offer:
- Custom Web Development
- Responsive Design
- E-commerce Solutions
- SEO Optimization
- Ongoing Support and Maintenance

Reach Out To Us!
`;

  useEffect(() => {
    const combinedText = companyInfo + '  '; 
    const fullText = combinedText + combinedText; 
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1)); 
        index++;
      } else {
        index = 0; 
      }
    }, 10); 

    return () => {
      clearInterval(interval);
    };
  }, [companyInfo]);

  return (
    <div className="relative h-screen flex items-center justify-center bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${De})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 p-8 max-w-2xl">
        <div className="mt-8 p-4 rounded shadow-md">
          <pre className="mt-2 whitespace-pre-wrap font-mono text-green-500">
            {displayedText}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeDisplay;
