import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const[show ,setShow]=useState(false);
  function showMenu(){
    setShow(prev => !prev)
  }
  return (
    <>
      <div className="">
        <div className="bg-green-500 text-white w-full h-20  mt-0 flex items-center-safe justify-between align-middle gap-5">
          <div className="text-xl font-bold text-black pl-5">
            TengexSolutions
          </div>
          <div
            className="flex
       gap-15 justify-center items-center text-white max-[720px]:hidden pr-5 "
          >
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Our services</a>
            <a href="">Signup</a>
            <a href="">Help</a>
            
          </div>
           <AiOutlineMenu onClick={showMenu} className="min-[720px]:hidden pr-5 text-5xl" />

         
          
   <div
  className={`absolute top-0 left-0 h-screen w-50 bg-amber-500
  flex flex-col items-center justify-center gap-15
  transition-transform duration-2000 ease-in-out
  ${show ? "translate-x-0" : "-translate-x-full"}`}
>
  <a href="">Home</a>
  <a href="">About us</a>
  <a href="">Our services</a>
  <a href="">Signup</a>
  <a href="">Help</a>
</div>
    
          
      </div>
      </div>
    </>
  );
}

export default Navbar;
