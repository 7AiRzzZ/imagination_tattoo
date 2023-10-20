import React from "react";

import PropTypes from "prop-types";
import axios from "axios";

const Card = ({ id, className, favorite, images }) => {
  return (
    <>
      <div className={`border-[3px] border-black rounded-md shadow-2xl h-[250px] w-[250px]  ${className}`}>
        <img className="" height={250} width={250} src={images} alt="Tattoo-" />
      </div>
    </>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
