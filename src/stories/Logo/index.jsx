import PropTypes from "prop-types";
import React from "react";

import DefaultLogoImage from "./assets/logo.svg";

const Logo = (props) => {
  const { image_url } = props;

  return <img alt="Logo" src={image_url || DefaultLogoImage} {...props} />;
};

Logo.propTypes = {
  image_url: PropTypes.string,
};

export default Logo;
