import React, { useContext } from "react";

import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BiArrowFromRight } from "react-icons/bi";
import DashCard from "../../components/tools/cardDashboard";
import { UserContext } from "../../components/context/userProvider";

const DashBoard = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <section className="grid grid-cols-11 bg-gray-200/70 overflow-x-hidden">
      <div className="h-screen bg-red-500 flex flex-col fixed justify-between py-2 px-2">
        <div className=" flex flex-col items-center  mt-4">
          <img
            className="rounded-full border-[3px] border-black"
            src=""
            height={50}
            width={50}
            alt="profil img"
          />
          <a href="http://localhost:8000/">
            <AiOutlineHome className="my-2" size={30} />
          </a>
        </div>
        <div className=" flex flex-col items-center mb-4 ">
          <a href="">
            <BsPencil size={30} />
          </a>
          <a href="">
            <AiOutlineSetting className="my-2" size={30} />
          </a>
          <a href="">
            <BiArrowFromRight size={30} />
          </a>
        </div>
      </div>
      <div className="col-span-11 ml-[66px] w-full h-full">
        <div className="grid grid-cols-2 h-screen mr-16">
          <div className="containDashboard border-[3px] border-black ml-8 mr-4 my-4 py-4 px-4">
            <div className=" grid grid-cols-3 items-center justify-between h-28 ">
              <div className="flex items-center justify-center p-4p">
                <img src="/images/logo-imgtattoo.png" alt="" width={100} />
                custom
              </div>
            </div>
          </div>
          <div className="containDashboard border-[3px] border-black mr-8 ml-4 my-4 py-4 px-4">
            <div className=" grid grid-cols-3 items-center justify-between h-28 ">
              <div className="flex items-center justify-center p-4p">
                <img src="/images/logo-imgtattoo.png" alt="" width={100} />
                post
              </div>
            </div>
          </div>
          <div className="containDashboard border-[3px] border-black mx-8 mb-4 col-span-3   items-center justify-evenly py-4 px-4">
            <div className=" grid grid-cols-7 items-center justify-between h-28 ">
                {user.favoris.map((favoris, key) => {
                  return (
                    <div key={key}>
                      <img src={favoris} alt="" width={100} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DashBoard;
