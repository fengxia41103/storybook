import { words } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import { Grid, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const KeyValueListItem = (props) => {
  const { label, value, labelAlign = "right", valueAlign = "left" } = props;

  const Label = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontWeight: "regular",
    textTransform: "capitalize",
    textAlign: labelAlign,
  }));

  const Value = styled(ListItem)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    borderBottom: "1px solid #ccc",
    textAlign: valueAlign,
  }));

  const labelLength = words(label).length;
  const labelLengthLG =
    labelLength <= 2 ? 2 : labelLength > 6 ? 6 : labelLength;
  const labelLengthMD =
    labelLength <= 2 ? 2 : labelLength > 6 ? 6 : labelLength;

  return (
    <Grid
      container
      spacing={1}
      key={label}
      justify="flex-end"
      alignItems="bottom"
    >
      <Grid item lg={labelLengthLG} md={labelLengthMD} xs={12}>
        <Label>{label}</Label>
      </Grid>

      <Grid item lg={12 - labelLengthLG} md={12 - labelLengthMD} xs={12}>
        <Value>{value || "n/a"}</Value>
      </Grid>
    </Grid>
  );
};

KeyValueListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  labelAlign: PropTypes.string,
  valueAlign: PropTypes.string,
};

export default KeyValueListItem;
