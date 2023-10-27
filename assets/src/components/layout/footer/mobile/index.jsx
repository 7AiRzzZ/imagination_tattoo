import React from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import SocialIcon from "../../../tools/SocialLink";
import FormContact from "../../../tools/form";

const FooterMobile = () => {
  return (
    <footer className=" bg-black/90">
      <div className="grid grid-cols-[40%,40%,20%] h-full w-full py-12 ">
        <div className=" flex flex-col items-center justify-center text-center">
          <SocialIcon />
          <p className=" my-8  text-2xl text-white font-ImperatorBold hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70">
            {" "}
            ©ImaginationTattoo{" "}
          </p>
          <p className="  text-2xl text-white font-ImperatorBold hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70">
            {" "}
            2023-2023{" "}
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <div className=" my-8">

         <h1 className=" text-3xl text-white uppercase font-ImperatorBold hover:transition hover:ease-out hover:duration-200 hover:text-red-500/70"> About </h1>
         <hr className=" border-[1px] border-white w-[60px]  hover:duration-200 hover:w-[90px]" />
          </div>
         <p className="text-white font-Imperator text-xl hover:transition hover:ease-out hover:duration-200 ">Innovante et engagée, notre entreprise <span className="text-red-500/70">Imagination Tattoo</span> repousse les limites pour offrir des solutions exceptionnelles à nos clients, tout en plaçant l'éthique et la qualité au cœur de notre mission.</p>

       </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className=""
            height={150}
            width={150}
            src="/images/logo-imgtattoo.png"
            alt=""
          />
         
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
