import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pg from '../assets/Untitled design (1).png'



const LandingPage = () => (
  <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-900 gap-9">

    <div className="text-center md:text-left px-5">
    <p className="text-3xl md:text-3xl font-normal text-white font-Roboto">
      Hello
      </p>
      <br />
      <h1 className="text-4xl md:text-6xl font-bold text-white font-Ubuntu">
      I'm Shubham Mukherjee
      </h1>
      <br />
      <p className="text-3xl md:text-3xl font-normal text-white font-Roboto">A Web Developer</p>
      <br />
      <div className="flex justify-center md:justify-start mt-4 space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white "><FaLinkedin size={50}/></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaGithub size={50}/></a>
      </div>
    </div>

    <div className="hidden md:block">
     
      <img src={`${pg}`} alt="Graphic" className="w-96 ml-44 rounded-full " />

      
      
    </div>
  </div>
);

export default LandingPage;