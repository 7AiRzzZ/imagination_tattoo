import React, { useEffect, useState } from "react";

import { BsFillDropletFill } from "react-icons/bs";

import TitleFlowers from "../../../../components/tools/title";
import CardCreation from "../../../../components/tools/cardCreation";
import axios from "axios";
import Carousel from "better-react-carousel";

const Creation = () => {
  const [creations, setCreations] = useState([]);

  useEffect(() => {
    axios
      .get("/api/creations")
      .then((response) => {
        // console.log(response.data["hydra:member"]);
        setCreations(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <section className="">
      
      <div className="flex items-center justify-center  py-8   bg-image2 h-[30rem]">
        <TitleFlowers text1="Creation" />
      </div>
      <div className=" my-24">

      <div className=" flex justify-center items-center">
        <p className=" flex font-Imperator text-2xl text-center mx-8 my-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aspernatur quis beatae incidunt unde, doloremque consectetur rerum. Aliquam dolorum voluptas minima sapiente rem ex itaque odit natus, quod corporis! Modi.</p>
      </div>
      <div className=" ">
        <Carousel cols={3} rows={1} gap={10} loop className="my-8 py-8">
        {creations.map((creation) => {
          //   console.log(création.categories);
          return (
              <Carousel.Item>
                <CardCreation className=" p-8m m-8">
                  <h1 className="text-center text-black  p-2">
                    {creation.description}
                  </h1>

                  <img
                    className="items-center justify-center flex"
                    height={230}
                    width={230}
                    src={creation.image}
                    alt="creation"
                  />
                </CardCreation>
              </Carousel.Item>
          );
        })}
        </Carousel>
      </div>
      <div className=" flex justify-center items-center my-12">
      <button type="button" className="border-[1px] border-black rounded-xl p-2 hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:bg-red-500/70 ">
              Voir les créations
            </button>
      </div>
      </div>
    </section>
  );
};

export default Creation;
