import React, { useEffect, useState } from "react";

import { BsFillDropletFill } from "react-icons/bs";

import TitleFlowers from "../../../../components/tools/title";
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
      <div className="flex items-center justify-center  py-8 ">
        <TitleFlowers text1="Creation" />
      </div>
      <div className="grid grid-cols-2 lg:grid lg:grid-cols-3">
        {creations.map((creation) => {
          //   console.log(création.categories);
          return (
            <CardCreation className=" my-12">
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
          );
        })}
      </div>
    </section>
  );
};

export default Creation;
