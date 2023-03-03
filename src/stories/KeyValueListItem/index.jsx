import PropTypes from "prop-types";
import React from "react";

import { Grid, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Label = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  fontWeight: "regular",
  textTransform: "uppercase",
  textAlign: "right",
}));

const Value = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
  borderBottom: "1px solid #ccc",
}));

const KeyValueListItem = (props) => {
  const { label, value } = props;

  return (
    <Grid
      container
      spacing={1}
      key={label}
      justify="flex-end"
      alignItems="bottom"
    >
      <Grid item lg={4} md={6} xs={12}>
        <Label>{label}</Label>
      </Grid>

      <Grid item lg={8} md={6} xs={12}>
        <Value>{value || "n/a"}</Value>
      </Grid>
    </Grid>
  );
};

KeyValueListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default KeyValueListItem;
