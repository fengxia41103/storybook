import React from "react";

import { Box, Container, Typography } from "@mui/material";

import Page from "../Page";

import PageNotFoundImage from "./assets/404.jpg";

const NotFoundView = () => (
  <Page
    title="404"
    style={{
      backgroundImage: `url(${PageNotFoundImage})`,
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
        <Typography color="white" variant="h3">
          Ooops, I do not have what you are looking for.
        </Typography>
        <Typography color="white" variant="body1">
          Come back some other time. I am working it right now.
        </Typography>
      </Container>
    </Box>
  </Page>
);

export default NotFoundView;
