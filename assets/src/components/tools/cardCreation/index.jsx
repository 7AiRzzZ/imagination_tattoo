import React from "react";

import PropTypes from "prop-types";
import axios from "axios";

const CardCreation = ({ id, className, favorite, children }) => {
  return (
    <>
      <div className={`border-[3px] border-black rounded-md shadow-2xl h-[500px] w-[400px] flex flex-col items-center justify-center ${className}`}>
        {children}
      </div>
    </>
  );
};

CardCreation.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardCreation;
