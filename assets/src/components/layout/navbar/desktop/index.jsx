import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const D = () => {
  const [showCategorieMenu, setShowCategorieMenu] = useState(false);
  return (
    <header>
      <nav className="bg-white fixed  w-full z-50 ">
        <div className=" grid grid-cols-11 py-2 ">
          <div className=" grid col-span-1 items-center justify-center text-center">
            <img
              src="/images/logo-imgtattoo.png"
              alt=""
              height={70}
              width={70}
            />
          </div>
          <div className=" grid  2xl:col-start-2">
            <div className="flex flex-row justify-center items-center">
              <div>
                <button
                  className=" lg:text-3xl lg:mx-8 
                   text-center font-ImperatorBold  "
                  type="button"
                >
                  <Link to={"https://imagination-tattoo.dupreportfolio.fr/"}>
                    Accueil
                  </Link>
                </button>
              </div>
              <div>
                <button
                  className=" lg:text-3xl lg:mx-8  text-center font-ImperatorBold "
                  type="button"
                >
                  <Link to={"/tattoo"}>Tattoo</Link>
                </button>
              </div>

              <div>
                <button
                  className=" lg:text-3xl lg:mx-8 text-center font-ImperatorBold "
                  type="button"
                >
                  <Link className="" to={"/categorie"}>
                    <ul>
                      <li
                        className=""
                        onMouseEnter={() => setShowCategorieMenu(true)}
                        onMouseLeave={() => setShowCategorieMenu(false)}
                      >
                        categorie
                        {showCategorieMenu && (
                          <div className=" h-60 w-32 flex">
                            <ul className=" grid grid-cols-3 z-10">
                              <li className="hover:text-red-500/7">1</li>
                              <li className="hover:text-red-500/7">2</li>
                              <li className="hover:text-red-500/7">3</li>
                              <li className="hover:text-red-500/7">4</li>
                              <li className="hover:text-red-500/7">5</li>
                              <li className="hover:text-red-500/7">6</li>
                              <li className="hover:text-red-500/7">7</li>
                              <li className="hover:text-red-500/7">8</li>
                              <li className="hover:text-red-500/7">9</li>
                              <li className="hover:text-red-500/7">10</li>
                            </ul>
                          </div>
                        )}
                      </li>
                    </ul>
                  </Link>
                </button>
              </div>
              <div>
                <button
                  className=" lg:text-3xl lg:mx-8  text-center font-ImperatorBold "
                  type="button"
                >
                  <Link to={"/custom"}>Custom</Link>
                </button>
              </div>
            </div>
          </div>
          <div class="InputContainer grid col-start-7 mt-2 ml-12 ">
            <input
              placeholder="Search.."
              id="input"
              class="input "
              name="text"
              type="text"
            ></input>
          </div>
          <div className=" grid col-start-11 ">
            <div className=" flex flex-row items-center justify-center text-center">
              <div>
                <a href="http://localhost:8000/login">
                  <BiUserCircle size={30} className="" />
                </a>
              </div>
              <div className=" mx-4">
                <a href="http://localhost:8000/dashboard">
                  <MdOutlineFavoriteBorder size={30} className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className=" border-black mt-2 " />
      </nav>
    </header>
  );
};

export default D;
