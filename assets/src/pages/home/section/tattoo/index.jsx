import React, { useEffect, useState, useContext } from "react";
import Card from "../../../../components/tools/card";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillDropletFill } from "react-icons/bs";
import Favorites from "./favorites";
import { Link } from "react-router-dom";

const Tattoo = () => {
  const [tattoos, setTattoos] = useState([]);
  let total = JSON.parse(window.localStorage.getItem("total") || "[]");

  useEffect(() => {
    axios
      .get("/api/tattoos")
      .then((response) => {
        setTattoos(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className=" bg-white">
      <hr className="border-black" />
      <div className=" flex items-center justify-center my-8">
        <input
          type="text"
          placeholder="Search"
          className="border-[1px] border-black rounded-lg w-[30rem] p-1 px-2"
          name=""
          id=""
        />
      </div>
      <div className="flex items-center justify-center  py-8 ">
        <h1 className="text-4xl pr-1"> Tattoos</h1><BsFillDropletFill size={25}/>
      </div>
      <div className="flex items-center justify-center pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:mx-8">
          {tattoos.map((tattoo) => {
            return (
              <div key={tattoo.id} className="mx-4 my-4">
                <h1 className="text-center mb-2">{tattoo.categories}</h1>
                <Link to={`/categorie/${tattoo.id}`}>
                  <Card 
                    id={tattoo.id}
                    className="m-2 flex flex-col items-center justify-center hover:scale-105 hover:transition hover:z-10"
                    images={tattoo.images}
                  />
                </Link>
                <div className=" flex items-center justify-center lg:ml-8">
                  <button type="button" className={""}>
                    {total.includes(tattoo.images) ? (
                      <AiFillHeart
                        size={30}
                        color="red"
                        onClick={() => Favorites(tattoo.images)}
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        color="red"
                        onClick={() => Favorites(tattoo.images)}
                      />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Tattoo;
