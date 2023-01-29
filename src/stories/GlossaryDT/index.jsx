import PropTypes from "prop-types";
import React, { useState } from "react";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack, Typography } from "@mui/material";

const GlossaryDT = (props) => {
  const { term, description, more = null } = props;
  const [showMore, setShowMore] = useState(false);

  const whenMore = (
    <>
      <ExpandLessIcon />
      Show less
      <Box mt={3}>{more}</Box>
    </>
  );

  const whenLess = (
    <>
      <ExpandMoreIcon />
      Show more
    </>
  );

  return (
    <Stack>
      <Typography variant="h6" color="secondary">
        {term}
      </Typography>
      <Typography variant="body1" mt={3}>
        {description}
      </Typography>

      {more ? (
        <Box mt={3} onClick={() => setShowMore(!showMore)}>
          {showMore ? whenMore : whenLess}
        </Box>
      ) : null}
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
