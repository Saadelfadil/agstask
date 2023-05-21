import React, { useState } from "react";
import Logo from "../assets/logo.png"

const Home = ({setIsOpen}) => {
  
  return (
    <div className="bg-[#2c2435] w-full h-screen flex flex-col items-center justify-center gap-8">
        <div className="flex justify-center items-center pt-10">
            <img className="w-20" src={Logo} alt="logo" />
        </div>
        <div className="w-full flex justify-center items-center scale-110 ">
            <a onClick={() => setIsOpen((prev) => prev = true)} href="#" className="inline-flex border items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-[#2c2435] hover:bg-[#3a2b4a] hover:text-white dark:text-gray-400 dark:bg-[#2c2435] dark:hover:text-white hover:scale-125">
                <span className="w-full">Add an issue</span>
                <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> 
        </div>
    </div>
  )
};

export default Home;
