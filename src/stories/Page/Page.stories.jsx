import { faker } from "@faker-js/faker";
import React from "react";

import Button from "@mui/material/Button";

import Page from "./index";

export default {
  title: "Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Example = Template.bind({});
Page.args = {
  title: faker.animal.cat(),
  children: <Button variant="contained">Display a button</Button>,
};
