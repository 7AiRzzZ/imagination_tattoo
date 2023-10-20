import React from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const D = () => {
  return (
    <header>
      <nav className="bg-black fixed py-2 w-full">
        <div className="flex flex-row w-full items-center justify-center text-white text-2xl font-bold">
          <div>
            <img
              src="/images/logo-imgtattoo.png"
              alt=""
              height={70}
              width={70}
            />
          </div>
          <div>
            <ul className="flex flex-row mx-16">
              <li className=" mx-8">Accueil</li>
              <li className=" mx-8">Tattoo</li>

              <li className=" mx-8">Categorie</li>
              <li className=" mx-8">
                <Link to={"/custom"}>Custom</Link>
              </li>
            </ul>
          </div>
          <div>
            <a href="http://localhost:8000/login">
              <BiUserCircle size={30} className="mx-2 text-red-500/70" />
            </a>
          </div>
          <div cl>
            <a href="http://localhost:8000/dashboard">
              <MdOutlineFavoriteBorder
                size={30}
                className="mx-2 text-red-500/70"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default D;
