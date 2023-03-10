import { faker } from "@faker-js/faker";
import React from "react";

import HighchartGraph from "./index";

export default {
  title: "HighchartGraph",
  component: HighchartGraph,
};

const Template = (args) => <HighchartGraph {...args} />;

const exampleCategories = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const exampleData = [
  {
    name: "Tokyo",
    data: [
      49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6,
      54.4,
    ],
  },
  {
    name: "New York",
    data: [
      83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6,
      92.3,
    ],
  },
  {
    name: "London",
    data: [
      48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2,
    ],
  },
  {
    name: "Berlin",
    data: [
      42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1,
    ],
  },
];

export const ColumnChart = Template.bind({});
ColumnChart.args = {
  title: faker.company.catchPhrase(),
  type: "column",
  footer: faker.lorem.paragraphs(),
  categories: exampleCategories,
  legendEnabled: true,
  data: exampleData,
  normalize: false,
  keepNegative: true,
  xLabel: faker.animal.cat(),
  yLabel: faker.science.unit().name,
};

export const BarChart = Template.bind({});
BarChart.args = {
  title: faker.company.catchPhrase(),
  type: "bar",
  footer: faker.lorem.paragraphs(),
  categories: exampleCategories,
  legendEnabled: true,
  data: exampleData,
  normalize: false,
  keepNegative: true,
  xLabel: faker.animal.cat(),
  yLabel: faker.science.unit().name,
};

const examplePieData = [
  {
    name: "feng",
    data: [
      {
        name: "Chrome",
        y: 70.67,
        sliced: true,
        selected: true,
      },
      {
        name: "Edge",
        y: 14.77,
      },
      {
        name: "Firefox",
        y: 4.86,
      },
      {
        name: "Safari",
        y: 2.63,
      },
      {
        name: "Internet Explorer",
        y: 1.53,
      },
      {
        name: "Opera",
        y: 1.4,
      },
      {
        name: "Sogou Explorer",
        y: 0.84,
      },
      {
        name: "QQ",
        y: 0.51,
      },
      {
        name: "Other",
        y: 2.6,
      },
    ],
  },
];

export const PieChart = Template.bind({});
PieChart.args = {
  title: faker.company.catchPhrase(),
  type: "pie",
  footer: faker.lorem.paragraphs(),
  categories: exampleCategories,
  legendEnabled: true,
  data: examplePieData,
};
