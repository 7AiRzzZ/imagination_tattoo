import React from "react";

import PropTypes from "prop-types";

const Card = ({ id, className, favorite, images }) => {
  return (
    <>
      <div class="container mx-16">
        <div class={`card ${className}`}>
          {" "}
          <img
            className=""
            height={150}
            width={150}
            src={images}
            alt="Tattoo-"
          />
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;

