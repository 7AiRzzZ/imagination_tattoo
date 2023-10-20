import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Custom = () => {
  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
  };
  return (
    <section className="bg-white">
      <hr className="border-black"/>
      <div className="flex items-center justify-center my-4  py-8">
        <h1 className="text-3xl">~ Custom ~</h1>
      </div>
      <hr className="border-black/30 mx-12" />
      <div className="mx-8 my-8 grid grid-cols-[80%,20%] bg-gray-100 py-8">
        <div className=" ">
          <ReactSketchCanvas
            className="border-2 border-black mx-16 h-96"
            style={styles}
            width="600"
            height="400"
            strokeWidth={1}
            strokeColor="black"
          />
        </div>
        <div className=" flex  justify-center items-center">
          <ul className=" flex flex-col justify-between items-center">
            <li className="p-2 border-[1px] w-20 border-black text-center my-3 hover:bg-red-500/50">
              stylo
            </li>
            <li className="p-2 border-[1px] w-20 border-black text-center my-3 hover:bg-red-500/50">
              gomme
            </li>
            <li className="p-2 border-[1px] w-20 border-black text-center my-3 hover:bg-red-500/50">
              Delete
            </li>
            <li className="p-2 border-[1px] w-20 border-black text-center my-3 hover:bg-red-500/50">
              Save
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-black/30 mx-12" />
      <div className="flex items-center justify-center py-10">
        <div className=" mx-8">
          <a href="">
            <p className="mx-4 border-[1px] border-black mb-1 p-1 w-40 text-center hover:bg-red-500/50">Publier</p>
            <hr className="border-red-500" />
          </a>
        </div>
        <div className=" ">
          <a href="">
            <p className="mx-4 border-[1px] border-black mb-1 p-1 w-40 text-center hover:bg-red-500/50">Sauvegarder</p>
            <hr className="border-red-500" />
          </a>
        </div>
        <div className=" mx-8">
          <a href="" >
            <p className="mx-4 border-[1px] border-black mb-1 p-1 w-40 text-center hover:bg-red-500/50">Partager</p>
            <hr className="border-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Custom;
