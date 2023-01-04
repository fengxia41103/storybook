import { faker } from "@faker-js/faker";
import React from "react";

import HighlightedText from "./index";

export default {
  title: "HighlightedText",
  component: HighlightedText,
};

const Template = (args) => <HighlightedText {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: faker.animal.cat(),
  val: 100,
  highlights: {
    background: faker.color.rgb(),
    font: faker.color.rgb(),
  },
};
