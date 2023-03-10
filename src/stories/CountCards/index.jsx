import clsx from "clsx";
import { countBy, map } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "#323E5B",
    color: "#FFF",
    height: "100%",
  },
  count: {
    fontSize: "3em",
  },
}));

const CountCards = (props) => {
  // props
  const { data, count_by_lambda, title } = props;

  // hooks
  const classes = useStyles();

  // helpers
  const cards = map(
    countBy(data, (d) => count_by_lambda(d)),
    (val, key) => {
      if (key === "undefined") return null;

      return (
        <Grid item key={key} lg={2} md={4} sm={6} xs={12}>
          <Card className={clsx(classes.card)}>
            <CardContent>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Box mt={3} mb={3}>
                  <Typography variant="h1" className={clsx(classes.count)}>
                    {val}
                  </Typography>
                </Box>
                <Typography variant="h3" color="secondary">
                  {key}
                </Typography>
                <Typography variant="body2">{title}</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      );
    },
  );

  // renders
  return cards;
};

CountCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  count_by_lambda: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CountCards;
