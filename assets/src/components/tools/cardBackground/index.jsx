import React from "react";
import PropTypes from "prop-types";

const CardBackground = ({ className, children }) => {
  return (
    <div
      className={`h-screen ${className}`}
    >
      {children}
    </div>
  );
};

CardBackground.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardBackground;