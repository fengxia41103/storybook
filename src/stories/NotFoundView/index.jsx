import PropTypes from "prop-types";
import React from "react";

import { Box, Container, Typography } from "@mui/material";

import Page from "../Page";
import XKCD from "../XKCD";

import PageNotFoundImage from "./assets/404.jpg";

const NotFoundView = (props) => {
  const {
    fontColor = "primary",
    backgroundImage = PageNotFoundImage,
    xkcd = false,
  } = props;

  return (
    <Page
      title="404"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        sx={{ maxWidth: "sm" }}
      >
        <Container maxWidth="sm">
          <Typography color={fontColor} variant="h3">
            Ooops, I do not have what you are looking for.
          </Typography>
          {xkcd ? (
            <Box m={3} sx={{ maxWidth: 200 }}>
              <XKCD />
            </Box>
          ) : null}
          <Typography color={fontColor} variant="body1">
            Come back some other time. I am working it right now.
          </Typography>
        </Container>
      </Box>
    </Page>
  );
};

NotFoundView.propTypes = {
  fontColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  xkcd: PropTypes.bool,
};

export default NotFoundView;
