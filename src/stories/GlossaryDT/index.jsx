import PropTypes from "prop-types";
import React from "react";

import { Box, Typography } from "@mui/material";

const GlossaryDT = (props) => {
  const { term, description } = props;

  return (
    <Box>
      <Typography variant="h6" color="secondary">
        {term}
      </Typography>
      <Typography variant="body1" mt={3}>
        {description}
      </Typography>
    </Box>
  );
};

GlossaryDT.propTypes = {
  term: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GlossaryDT;
