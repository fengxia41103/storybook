import React from "react";

import { ThemeProvider } from "@mui/material";

import LightTheme from "../LightTheme";

import NotFoundView from "./index";

export default {
  title: "NotFoundView",
  component: NotFoundView,
};

const Template = () => (
  <ThemeProvider theme={LightTheme}>
    <NotFoundView />
  </ThemeProvider>
);

export const Example = Template.bind({});
Example.args = {};
