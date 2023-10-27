import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsArrowDown } from "react-icons/bs";
import CardBackground from "../../../../components/tools/cardBackground";

const Acceuil = () => {
  return (
    <section className="">
      <CardBackground className="">
        <video autoPlay loop muted src="../videos/tatouage.mp4"></video>
        <div className="flex flex-col items-center justify-center pt-56 z-40">
          <div className="flex flex-row my-4">
            <h1 className=" text-6xl  font-ImperatorBold text-white">
              Imagination
            </h1>
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
              className="text-6xl text-red-500 font-ImperatorBold"
              repeat={Infinity}
            />
          </div>
          <div className="flex  text-center mt-16 mx-32">
            <p className="text-3xl font-Imperator text-white ">
              Innovante et engagée, notre entreprise{" "}
              <span className="text-red-500/70">Imagination Tattoo</span>{" "}
              repousse les limites pour offrir des solutions exceptionnelles à
              nos clients, tout en plaçant l'éthique et la qualité au cœur de
              notre mission.
            </p>
          </div>
          <div>
            <div className="flex justify-center mt-32 items-center">
              <a offset={() => 100} href="">
                <BsArrowDown
                  className=" arrow  bounce text-white "
                  size={50}
                  onClick={""}
                />
              </a>
            </div>
          </div>
        </div>
      </CardBackground>
    </section>
  );
};
export default Acceuil;
