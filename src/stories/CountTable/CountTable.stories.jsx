import { faker } from "@faker-js/faker";
import React from "react";

import CountTable from "./index";

export default {
  title: "CountTable",
  component: CountTable,
};

const Template = (args) => <CountTable {...args} />;

export const CountLetterC = Template.bind({});
CountLetterC.args = {
  data: faker.lorem.paragraph(50),
  count_by_lambda: (x) => x === "c",
  title: "Count by letter C",
  link_to_base: "whatever",
};

export const NoCount = Template.bind({});
NoCount.args = {
  data: faker.lorem.paragraph(50),
  count_by_lambda: (x) => x === "jsljlajdflajfla",
  title: "No Match",
  link_to_base: "whatever",
};

export const ManyCount = Template.bind({});
ManyCount.args = {
  data: faker.lorem.paragraph(50),
  count_by_lambda: (x) => x,
  title: "Many Count",
  link_to_base: "whatever",
};
