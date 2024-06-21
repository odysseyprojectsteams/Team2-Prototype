import React from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import ai from "../../images/ai.png";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const StaticInput = ({ placeholder }) => (
  <input
    placeholder={placeholder}
    disabled
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full justify-center items-center mb-0">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 mb-0">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="text-white font-light text-sm">
                    Example Address
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mb-0">
              <StaticInput placeholder="Address To" />
              <StaticInput placeholder="Amount (ETH)" />
              <StaticInput placeholder="Keyword (Gif)" />
              <StaticInput placeholder="Enter Message" />

              <div className="h-[1px] w-full bg-gray-400 my-2" />
              
              <button
                type="button"
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-not-allowed opacity-50"
                disabled
              >
                Send now
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center mb-0">
          <img src={ai} alt="Energetic Imagery" className="w-full h-auto max-w-md rounded-lg shadow-lg mb-0"/>
          <p className="text-white text-2xl sm:text-3xl text-center mb-0">
            See insights about your energy consumption for today  
          </p>
        </div>
      </div>
      <h1 className="text-white text-2xl sm:text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:from-blue-500 hover:to-green-400 mb-0"> 
        Have a sense for energy and save to earn your next token!
      </h1>
    </div>
  );
};

export default Welcome;