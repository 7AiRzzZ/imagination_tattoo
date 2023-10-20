import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsArrowDown } from "react-icons/bs";
import CardBackground from "../../../../components/tools/cardBackground";


const Acceuil = () => {
  return (
    <section className="">
          <CardBackground className= "bg-[url('http://localhost:8000/images/tattooroom.jpg')] ">
      <div className="flex flex-col items-center justify-center pt-64">
        <div className="flex flex-row my-4">
            <h1 className=" text-6xl font-bold">Imagination</h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Tattoo . ",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-6xl text-red-500 font-bold"
              repeat={Infinity}
            />
        </div>
        <div className="flex my-16 text-center  mx-32">
          <p className="text-3xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            et odio nobis quod voluptatem commodi consequuntur facere? A hic
            vitae ducimus labore! Quas commodis?
          </p>
        </div>
        <div>
          <div className="flex justify-center mt-16 items-center">
            <a offset={() => 100} href="">
              <BsArrowDown className=" arrow bounce " size={50} onClick={""} />
            </a>
          </div>
        </div>
      </div>
          </CardBackground>
    </section>
  );
};
export default Acceuil;
