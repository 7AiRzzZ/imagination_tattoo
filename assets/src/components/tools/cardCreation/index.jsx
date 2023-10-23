import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const CardCreation = ({className,children}) => {
  return (
    <>
      <div class={`cardcreation flex justify-center items-center ${className}`}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <div className="">
  {children}
    <hr className="my-2"/>
<Link to={`/categorie/`}>
    <button className="my-2 w-52 ml-1 flex items-center justify-center">
      Action
      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path>
      </svg>
      </button>
</Link>
  </div>
</div>
    </>
  );
};

CardCreation.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardCreation;


