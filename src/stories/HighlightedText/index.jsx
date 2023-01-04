import { isNil } from "lodash";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const HighlightedText = (props) => {
  const { highlights, text, val } = props;
  const [hide, setHide] = useState(true);

  const handle_hide_toggle = () => setHide(!hide);

  // assing a special color to text I'm interested in
  let bk_color = "";
  let font_color = "";
  if (!isNil(text)) {
    bk_color = highlights.background;
    font_color = highlights.font;
  }

  const useStyles = makeStyles({
    root: {
      backgroundColor: bk_color,
      color: font_color,
    },
  });
  const classes = useStyles();

  return (
    <Typography
      className={classes.root}
      onMouseOver={handle_hide_toggle}
      onMouseLeave={handle_hide_toggle}
      align="center"
    >
      {hide ? text : null}
      {!hide ? val.toFixed(2) : null}
    </Typography>
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
