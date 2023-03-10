import { map } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

import ColoredNumber from "../ColoredNumber";

const DictCard = (props) => {
  const { data, interests } = props;

  const cards = map(interests, (description, key) => {
    const val = data[key];
    return (
      <Grid item key={key} lg={4} sm={6} xs={12}>
        <Card>
          <CardHeader
            title={<Typography variant="body2">{description}</Typography>}
          />
          <CardContent>
            <ColoredNumber {...{ val }} />
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid container spacing={1}>
      {cards}
    </Grid>
  );
};

DictCard.propTypes = {
  interests: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
};

export default DictCard;
