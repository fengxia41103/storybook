import { faker } from "@faker-js/faker";
import React from "react";

import D3PlusGraph from "./index";

export default {
  title: "D3PlusGraph",
  component: D3PlusGraph,
};

const Template = (args) => <D3PlusGraph {...args} />;

const exampleData = [
  {
    id: "alpha",
    x: 4,
    y: 7,
  },
  {
    id: "alpha",
    x: 5,
    y: 25,
  },
  {
    id: "alpha",
    x: 6,
    y: 13,
  },
  {
    id: "beta",
    x: 4,
    y: 17,
  },
  {
    id: "beta",
    x: 5,
    y: 8,
  },
  {
    id: "beta",
    x: 6,
    y: 13,
  },
];

export const LineChart = Template.bind({});
LineChart.args = {
  title: faker.company.catchPhrase(),
  data: exampleData,
  footer: faker.lorem.paragraphs(),
};
