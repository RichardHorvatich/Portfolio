import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import techobj1 from '../assets/techobj1.jpg'
import ProjectsSection from './ProjectsSec';

const Home = () => {

  const navigate = useNavigate(); // Initialize useNavigate
  
  
  const handleButtonClick = () => {
    navigate('/Schedule'); // Take user to Schedule Page
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/r1.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="ReactPractice" content="LearningReactBaby" />
        <link rel="r1" href="%PUBLIC_URL%/r1.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="stylesheet" href="./output.css" />
        <title>React App</title>
      </Helmet>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      
      
      
<div className="bg-black">
  <div className="flex flex-col col-span-1 md:flex-row  p-6">
    <div className="text-white  sm:w-1/3 md:w-1/2">
      <h1 className="text-6xl font-extrabold mb-3 font-sans">Full-Stack Developer</h1> 
      <p className="text-2xl text-[#1a6969] mb-2 font-sans" >  
      React, Tailwind, Javscript, Python, SQL, CI/CD
      </p>
      <p className="text-base text-[#ffffff] mb-16 font-sans ">
      </p>
    
    <div className="flex flex-wrap-reverse   bg-[#030305]">
    
          <button className="text-[#35ebd2] bg-[#0c2e2e] text-lg h-16 w-60 flex items-center border border-[#1a6969] rounded-md justify-center m-8 mt-24 mx-auto hover:bg-[#27acac] ] hover:text-white" onClick={handleButtonClick}>
            <p className="m-6 font-semibold">Projects</p>
          </button>

          <button className="text-[#1f8d8d] bg-[#000000] text-lg h-16 w-60 flex items-center border border-[#1a6969] rounded-md justify-center m-8  mx-auto hover:bg-[#27acac] ] hover:text-gray-950" onClick={handleButtonClick}>
            <p className="m-6 font-semibold">GitHub</p>
          </button>
          </div>
        </div>
            <img src={techobj1} className="mt-2 md:mt-0 md:h-[350px] opacity-90  mx-auto hover:h-[370px]" alt="tech cube" />
    </div>
    </div>
      
      
      <ProjectsSection />
    </div>
  );
};

export default Home;