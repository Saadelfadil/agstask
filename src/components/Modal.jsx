
import { useState } from "react";
import Stepper from "./Stepper"

export default function Modal({ setIsOpen }) {
    
    return (
    <div className="fixed bg-[#2c2435] w-full h-full z-20 left-0 top-0">
      <div className={`absolute w-1/2 bg-[#2B2C37] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg flex flex-col gap-6`}>
        <Stepper setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
}