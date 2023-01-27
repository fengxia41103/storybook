import { faker } from "@faker-js/faker";
import React from "react";

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
