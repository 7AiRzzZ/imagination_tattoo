import React from "react";
import TitleFlowers from "../../../../components/tools/title";

const Custom = () => {
  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
  };
  return (
    <section className="bg-white">
      <hr className="border-black" />
      <div className="flex items-center justify-center my-4  py-8">
        <TitleFlowers text1={"Custom"}></TitleFlowers>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div>
          <h1 className="font-ImperatorBold  ml-12 text-3xl mb-1">
            Envie de faire parler votre créativité ?{" "}
          </h1>
          <p className="font-Imperator text-2xl mr-4">
            Montrer le nous avec notre pages dédier a la{" "}
            <span className="font-Imperator text-red-500/70"> création</span>
          </p>
          <div className="flex items-center justify-center my-8">
            <button type="button" className="border-[1px] border-black rounded-xl p-2 hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:bg-red-500/70 ">
              Atelier création
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Custom;
