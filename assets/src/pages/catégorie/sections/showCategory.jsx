import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowCategory = () => {
  const id = useParams().id;
  const [tattoo, setTattoo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/tattoos/${id}`).then((response) => {
      setTattoo(response.data);
    });
  }, []);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col"> 
          {tattoo.categories}
          <img src={tattoo.images} alt="" />
          <p>{tattoo.description}</p>
        </div>
      </div>
    </>
  );
};

export default ShowCategory;
