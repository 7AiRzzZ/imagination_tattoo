import React from "react";

import PropTypes from "prop-types";

const Card = ({ id, className, children, images }) => {
  return (
    <>
      <div class="card flex items-center justify-center mx-16">
        <div class={`card__content  ${className}`}>
          <img
            className=""
            height={150}
            width={150}
            src={images}
            alt="Tattoo-"
          />
          {children}
        </div>{" "}
        <div class="card-details"></div>
        <button class="card-button"> Voir l'image</button>
      </div>
    </>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
