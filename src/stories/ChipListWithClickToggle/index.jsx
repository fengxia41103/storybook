import PropTypes from "prop-types";
import React from "react";

import { Chip, Grid } from "@mui/material";

const ChipListWithClickToggle = (props) => {
  const { fullList, activeList, onClick } = props;

  const list = fullList.map((i) => (
    <Grid item key={i.id}>
      <Chip
        label={i.name}
        variant={activeList.includes(i.id) ? "contained" : "outlined"}
        color={activeList.includes(i.id) ? "secondary" : "info"}
        onClick={() => (onClick ? onClick(i.id) : null)}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={1}>
      {list}
    </Grid>
  );
};

ChipListWithClickToggle.propTypes = {
  fullList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  activeList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

export default ChipListWithClickToggle;
