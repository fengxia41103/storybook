import { faker } from "@faker-js/faker";
import React from "react";

import Button from "@mui/material/Button";

import AsDialog from "./index";

export default {
  title: "AsDialog",
  component: AsDialog,
};

const Template = (args) => <AsDialog {...args} />;

export const TriggerAsString = Template.bind({});
TriggerAsString.args = {
  as: "click me",
  title: faker.random.alpha(5),
  content: faker.lorem.paragraph(10),
  when_confirm: "when confirm as string",
};

export const TriggerAsButton = Template.bind({});
TriggerAsButton.args = {
  as: <Button variant="contained">{faker.random.alpha(5)}</Button>,
  title: faker.random.alpha(5),
  content: faker.lorem.paragraph(10),
  when_confirm: <Button variant="contained">when confirm</Button>,
};
