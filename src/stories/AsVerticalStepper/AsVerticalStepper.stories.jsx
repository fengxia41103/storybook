import { faker } from "@faker-js/faker";
import React from "react";

import Button from "@mui/material/Button";

import AsVerticalStepper from "./index";

export default {
  title: "AsVerticalStepper",
  component: AsVerticalStepper,
};

const Template = (args) => <AsVerticalStepper {...args} />;

export const ShortSteps = Template.bind({});
ShortSteps.args = {
  steps: [1, 2, 3, 4, 5].map((s) => ({
    label: `step ${s}`,
    description: faker.lorem.paragraph(20),
  })),

  when_confirm: <Button>Confirm</Button>,
  when_cancel: <Button>Cancel</Button>,
};

export const LongSteps = Template.bind({});
LongSteps.args = {
  steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s) => ({
    label: `step ${s}`,
    description: faker.lorem.paragraph(20),
  })),

  when_confirm: <Button>Confirm</Button>,
  when_cancel: <Button>Cancel</Button>,
};
