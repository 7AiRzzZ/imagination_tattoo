import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const D = () => {
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
                   text-center font-ImperatorBold  hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70 "
                  type="button"
                >
                  <Link to={"http://localhost:8000/"}>Accueil</Link>
                </button>
              </div>
              <div>
                <button
                  className=" lg:text-3xl lg:mx-8  text-center font-ImperatorBold  hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70"
                  type="button"
                >
                  <AnchorLink  offset={() => 100} href={"#tattoo"}>Tattoo</AnchorLink>
                </button>
              </div>

              <div>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  class="lg:text-3xl lg:mx-8  text-center font-ImperatorBold  hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  type="button"
                >
                  Categorie{" "}
                </button>
                <Link className="" to={"/categorie"}>
                  <div
                    id="dropdownHover"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-ImperatorBold text-xl hover:text-red-500/70"
                        >
                          BODY PART
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-ImperatorBold text-xl hover:text-red-500/70"
                        >
                          STYLE
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-ImperatorBold text-xl hover:text-red-500/70"
                        >
                          ANIMAL
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-ImperatorBold text-xl hover:text-red-500/70"
                        >
                          SPIRITUAL
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-ImperatorBold text-xl hover:text-red-500/70"
                        >
                          NATURE
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-ImperatorBold text-xl hover:text-red-500/70"
                        >
                          CONNECTION
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-ImperatorBold text-xl hover:text-red-500/70"
                        >
                          FANTASY
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-ImperatorBold text-xl hover:text-red-500/70"
                        >
                          SYMBOLS & QUOTES
                        </a>
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div>
                <button
                  className=" lg:text-3xl lg:mx-8  text-center font-ImperatorBold  hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70"
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
  ReactDOM.render(
    <SmoothScroll />,
    document.getElementById('content'))
};
export default D;
