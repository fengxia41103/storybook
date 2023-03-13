import PropTypes from "prop-types";
import React, { useState } from "react";

import { Chip, Grid } from "@mui/material";

const ChipListWithClickToggle = (props) => {
  const { fullList, activeList, onClick } = props;
  const [all, setAll] = useState(false);

  const toggleAll = () => {
    // if turn on `all`, we select all available days;
    // if turn off `all`, first clear all days
    setAll(!all);
  };

  const list = fullList.map((i) => (
    <Grid item key={i.id}>
      <Chip
        label={i.name}
        variant={activeList.includes(i.id) || all ? "contained" : "outlined"}
        color={activeList.includes(i.id) || all ? "secondary" : "info"}
        onClick={() => (onClick ? onClick(i.id) : null)}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={1}>
      {list}
      <Grid item>
        <Chip
          label="all"
          variant={all ? "contained" : "outlined"}
          color={all ? "secondary" : "info"}
          onClick={toggleAll}
        />
      </Grid>
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
