import React, { useEffect, useState, useContext } from "react";
import Card from "../../../../components/tools/card";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import TitleFlowers from "../../../../components/tools/title";
import MovingText from "react-moving-text";

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
      <div className=" flex items-center justify-center my-8"></div>
      <div className="flex items-center justify-center  py-8 ">
        <TitleFlowers className="font-Imperator" text1="Tattoo" />
      </div>
      <div className="flex justify-center text-center items-center  my-8">
        <MovingText
        
          className="text-2xl font-Imperator"
          type="slideInFromLeft"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="forwards"
        >
          Besoin d'un coup de pouce créatif ? Nous sommes là pour transformer vos
          idées en réalité.
        </MovingText>
      </div>
      <div className="flex items-center justify-center pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:mx-8">
          {tattoos.map((tattoo) => {
            return (
              <div key={tattoo.id} className="mx-4 my-4">
                <h1 className="text-center mb-8">{tattoo.categories}</h1>
                <Link to={`/categorie/${tattoo.id}`}>
                  <Card
                    id={tattoo.id}
                    className="flex flex-col items-center justify-center"
                    images={tattoo.images}
                  >
                    <div className=" flex items-center justify-center  my-4  ">
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
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Tattoo;
