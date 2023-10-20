import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./styles";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";

const MenuHamburger = () => {
  return (
    <Menu left styles={styles}>
      <div className=" flex flex-col h-full w-full ">
        <div className=" flex justify-center items-center ">
          <img
            className=" flex justify-center items-center mt-12"
            height={150}
            width={150}
            alt=""
            src="/images/logo-imgtattoo.png"
          />
        </div>
        <div>
          <ul className=" flex flex-col justify-center items-center text-start text-4xl text-black my-28 font-cinzelextrabold dark:text-white">
            <li className="py-2">Accueil</li>
            <li className="py-2">Tattoos</li>
            <li className="py-2">Catégories</li>
            <li className="py-2">Custom</li>
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center  ">
          <BiUserCircle className="text-red-600 mr-4" size={40} />
          <AiOutlineShopping className="text-red-600 ml-4" size={40} />
        </div>
        <span className="font-cinzelextrabold text-xs text-black flex justify-center items-center my-4">
          {" "}
          &copy; Tous droits réservés{" "}
        </span>
      </div>
    </Menu>
  );
};

export default MenuHamburger;
