import { faker } from "@faker-js/faker";
import React from "react";

import { Button } from "@mui/material";

import GlossaryDT from "./index";

export default {
  title: "GlossaryDT",
  component: GlossaryDT,
};

const Template = (args) => <GlossaryDT {...args} />;

export const Example = Template.bind({});
Example.args = {
  term: faker.animal.cat(),
  description: faker.lorem.paragraph(3),
};

export const ShowMoreExample = Template.bind({});
ShowMoreExample.args = {
  term: faker.animal.cat(),
  description: faker.lorem.paragraph(3),
  more: <Button type="primary">more info as a button</Button>,
};
