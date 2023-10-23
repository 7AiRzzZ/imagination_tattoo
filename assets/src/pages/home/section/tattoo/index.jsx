import React, { useEffect, useState, useContext } from "react";
import Card from "../../../../components/tools/card";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import TitleFlowers from "../../../../components/tools/title";

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
      <div class="InputContainer">
  <input placeholder="Search.." id="input" class="input" name="text" type="text">
   </input>
  
</div>
      </div>
      <div className="flex items-center justify-center  py-8 ">
        <TitleFlowers text1="Tattoo" />
      </div>
      <div className="flex justify-center text-center items-center">
        <p className="mr-1 text-xl">Vous avez besoin d'idées ?</p><span className="ml-1 text-xl"> nous sommes la pour vous en proposer</span>
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
                    className="flex items-center justify-center"
                    images={tattoo.images}
                  />
                </Link>
                <div className=" flex items-center justify-center my-2 ">
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
