import React from 'react';
import ener from "../../images/Welcome.jpg";

const WelcomeToEn = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
          Welcome To EnerSense
        </h1>
        
        <p className="text-white text-2l sm:text-3l text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:from-blue-500 hover:to-green-400 mb-0"> 
        Thank you for choosing to be GREEN!   </p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center mt-8 md:mt-0">
        <img src={ener} alt="Energetic Imagery" className="w-full h-auto max-w-md rounded-lg shadow-lg object-cover"/>
      </div>
    </div>
  </div>
);

export default WelcomeToEn;
