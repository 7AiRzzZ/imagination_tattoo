import React from "react";
import { FiUser} from "react-icons/fi";
import {MdOutlineFavoriteBorder} from "react-icons/md";

const FooterMobile = () =>{
    return(
<footer className="">
<hr className="border-black" />
      <div className=" bg-black">
        <div className=" grid grid-cols-3 divide-x divide-white justify-center text-center py-4 px-4">
          <div className=" flex items-center justify-center align-middle">
            <img src="/images/logo-imgtattoo.png" height={70} width={70} alt="ImaginationTattoo" />
          </div>
          <div className="flex justify-center items-center">
            <FiUser size={30} className="text-white mx-4 hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70"/>
            <MdOutlineFavoriteBorder size={30} className="text-white mx-4 hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70"/>


          </div>
          <div className="text-xs text-white text-center flex flex-col items-center justify-center ">
            <p className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70">Mentions Légales</p>
            <br />
            <p className="hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70">Politique de confidentialité</p>
          </div>
        </div>
        <hr className=" border-white mx-4" />
        <div className="text-xs text-white  divide-x divide-white text-center flex items-center justify-center py-4 ">
          <p className="pr-2 hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70"> ©ImaginationTattoo </p>
          <p className="pl-2 hover:transition hover:ease-out hover:duration-200 hover:scale-110 hover:text-red-500/70"> 2023-2023 </p>
        </div>
      </div>
</footer>
    );
};

export default FooterMobile;