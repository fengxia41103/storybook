import React from "react";

import DictCard from "./index";

export default {
  title: "DictCard",
  component: DictCard,
};

const Template = (args) => <DictCard {...args} />;
export const Example = Template.bind({});

Example.args = {
  interests: {
    a: "verbase name of a",
    b: "verbose name of b",
    no_match: "verbose name of no_match",
  },
  data: {
    a: 100,
    b: 200,
    c: 300,
    this: 100,
    that: 1000,
  },
};
