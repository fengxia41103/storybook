import PropTypes from "prop-types";
import React, { useState } from "react";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Chip, Stack, Typography } from "@mui/material";

const GlossaryDT = (props) => {
  const { term, description, more = null } = props;
  const [showMore, setShowMore] = useState(false);

  const whenMore = (
    <>
      <Chip
        color="secondary"
        label="Show less"
        deleteIcon={<ExpandLessIcon />}
        onClick={() => setShowMore(!showMore)}
      />
      <Box mt={3}>{more}</Box>
    </>
  );

  const whenLess = (
    <Chip
      color="primary"
      label="Show more"
      deleteIcon={<ExpandMoreIcon />}
      onClick={() => setShowMore(!showMore)}
    />
  );

  return (
    <Stack>
      <Typography variant="h6" color="secondary">
        {term}
      </Typography>
      <Typography variant="body1" mt={3}>
        {description}
      </Typography>

      {more ? <Box mt={3}>{showMore ? whenMore : whenLess}</Box> : null}
    </Stack>
  );
};

GlossaryDT.propTypes = {
  term: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  // any node we want to render when expanding the `showMore`
  more: PropTypes.node,
};

export default GlossaryDT;
