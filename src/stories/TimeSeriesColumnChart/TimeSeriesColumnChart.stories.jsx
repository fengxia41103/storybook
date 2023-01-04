import React from "react";

import TimeSeriesColumnChart from "./index";

export default {
  title: "TimeSeriesColumnChart",
  component: TimeSeriesColumnChart,
};

const exampleData = [
  {
    on: "2022-12-05",
    val: 0,
  },
  {
    on: "2022-12-06",
    val: 1.0273972943238083,
  },
  {
    on: "2022-12-07",
    val: -3.4116950271742525,
  },
  {
    on: "2022-12-08",
    val: 6.611565569759654,
  },
  {
    on: "2022-12-09",
    val: -3.0052055432771776,
  },
];

const Template = (args) => <TimeSeriesColumnChart {...args} />;

export const Example = Template.bind({});
Example.args = {
  name: "Return of 24-hour",
  data: exampleData,
};
