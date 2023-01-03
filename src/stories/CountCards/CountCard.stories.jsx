import { faker } from "@faker-js/faker";
import React from "react";

import CountCards from "./index";

export default {
  title: "CountCards",
  component: CountCards,
};

const Template = (args) => <CountCards {...args} />;

export const CountLetterC = Template.bind({});
CountLetterC.args = {
  data: faker.lorem.paragraph(50),
  count_by_lambda: (x) => x === "c",
  title: "Count by letter C",
};

export const NoCount = Template.bind({});
NoCount.args = {
  data: faker.lorem.paragraph(50),
  count_by_lambda: (x) => x === "jsljlajdflajfla",
  title: "No Match",
};

export const ManyCount = Template.bind({});
ManyCount.args = {
  data: faker.lorem.paragraph(50),
  count_by_lambda: (x) => x,
  title: "Many Count",
};
