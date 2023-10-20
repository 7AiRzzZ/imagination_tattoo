import React, { useState } from "react";

import MenuHamburger from "./menuhamburger";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import DarkMode from "../../../tools/darkmode";

const Navbarmobile = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <header className="lg:hidden">
      <nav className="w-full fixed top-0 z-50 grid  grid-cols-3  bg-gray-200 border-b-2 border-black  ">
        <div >
          <MenuHamburger/>
        </div>

        <div className=" flex justify-center items-center py-4">
          <img
            height={50}
            width={50}
            alt=""
            src="/images/logo-imgtattoo.png"
          />
        </div>
        <div className="flex justify-center items-center">
          <button 
            type="button"
            onClick={() => {
              DarkMode();
              setShowButton(!showButton);
            }}
          >
            {showButton === false ? (
              <BsToggleOff 
              className=" text-black"
              size={30} />
            ) : (
              <BsToggleOn 
              className=" text-black"
              size={30} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbarmobile;
