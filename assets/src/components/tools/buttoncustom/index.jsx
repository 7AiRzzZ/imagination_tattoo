import React from "react";
import { BsPencil } from "react-icons/bs";

const ButtonCustom = ({ onClick, className }) => {
  return (
    <button
      type="button"
      className={`flex p-2 w-20  text-center justify-center items-center my-3 hover:bg-black/50 hover:text-white ${className}`}
      onClick={onClick}
    >
      <BsPencil size={25} />
    </button>
  );
};
export default ButtonCustom;
