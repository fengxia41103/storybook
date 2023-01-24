import PropTypes from "prop-types";
import React, { useState } from "react";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HighlightedText = (props) => {
  const { highlights, text, val } = props;
  const [hide, setHide] = useState(true);

  const handle_hide_toggle = () => setHide(!hide);

  // assing a special color to text I'm interested in
  const { background: bk_color, font: font_color } = highlights;

  const MyTypography = styled(Typography)({
    backgroundColor: bk_color,
    color: font_color,
  });

  return (
    <MyTypography
      data-testid="highlighted-text"
      onMouseOver={handle_hide_toggle}
      onMouseLeave={handle_hide_toggle}
      align="center"
    >
      {hide ? text : null}
      {!hide ? val.toFixed(2) : null}
    </MyTypography>
  );
};

HighlightedText.propTypes = {
  highlights: PropTypes.shape({
    background: PropTypes.string,
    font: PropTypes.string,
  }).isRequired,
  text: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
};

export default HighlightedText;
