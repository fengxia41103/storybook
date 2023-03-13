import { faker } from "@faker-js/faker";
import { map, range } from "lodash";
import moment from "moment";
import React from "react";

import { Typography } from "@mui/material";

import TimelineNav from "./index";

export default {
  title: "TimelineNav",
  component: TimelineNav,
};

const exampleData = map(range(10), () => ({
  on: moment(faker.date.future()).format("LL"),
  content: <Typography>{faker.lorem.paragraph(5)}</Typography>,
}));

const clickOnDate = (val) => alert(val);

const Template = (args) => <TimelineNav {...args} />;

export const Example = Template.bind({});
Example.args = {
  dates: exampleData,
  setDateFunc: clickOnDate,
};
