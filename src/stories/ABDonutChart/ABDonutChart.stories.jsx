import React from "react";

import ABDonutChart from "./index";

export default {
  title: "ABDonutChart",
  component: ABDonutChart,
};

const Template = (args) => <ABDonutChart {...args} />;

export const Example = Template.bind({});
Example.args = {
  subheader: "Sub header",
  data: {
    name: "Name",
    A: {
      label: "A's label",
      val: 78,
    },
    B: {
      label: "B's label",
      val: 22,
    },
  },
};
