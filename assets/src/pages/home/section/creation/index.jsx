import React, { useEffect, useState } from "react";

import { BsFillDropletFill } from "react-icons/bs";

import CardCreation from "../../../../components/tools/cardCreation";
import axios from "axios";

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
    <section className=" bg-gray-200 ">
      <hr className=" border-black" />
      <div className="flex items-center justify-center my-4 py-8">
        <h1 className="text-4xl pr-1">Créations</h1>
        <BsFillDropletFill size={25} />
      </div>
      <div className="grid grid-cols-2 lg:grid lg:grid-cols-3">
        {creations.map((creation) => {
          //   console.log(création.categories);
          return (
            <div className="mx-4 my-4 flex flex-col items-center justify-center ">
              <CardCreation className="m-2 hover:scale-105 hover:transition">
                <div className="flex flex-col justify-center items-center">
                  <div className="m-2">
                    <h1 className="text-center text-black  px-2 border-[3px] rounded-md border-black">
                      {creation.description}
                    </h1>
                  </div>
                  <div className="w-full h-full  mt-8">
                    <img
                      className=""
                      height={330}
                      width={330}
                      src={creation.image}
                      alt="creation"
                    />
                  </div>
                </div>
              </CardCreation>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Creation;
