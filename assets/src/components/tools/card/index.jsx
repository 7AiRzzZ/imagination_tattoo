import React from "react";

import PropTypes from "prop-types";

const Card = ({ id, className, favorite, images }) => {
  return (
    <>
      <div class="card mx-16">
        <div class={`card__content  ${className}`}><img className="" height={150} width={150} src={images} alt="Tattoo-" /></div>{" "}
        
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="blob blob-4"></div>
      </div>
    </>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
