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
  on: moment(faker.date.future()).format("yyyy-mm-DD"),
  content: <Typography>{faker.lorem.paragraph(5)}</Typography>,
}));

const clickOnDate = (val) => {
  alert(val);
};

const Template = (args) => <TimelineNav {...args} />;

export const OnTheLeft = Template.bind({});
OnTheLeft.args = {
  dates: exampleData,
  setDateFunc: clickOnDate,
  position: "left",
};

export const OnTheRight = Template.bind({});
OnTheRight.args = {
  dates: exampleData,
  setDateFunc: clickOnDate,
};

export const Alternate = Template.bind({});
Alternate.args = {
  dates: exampleData,
  setDateFunc: clickOnDate,
  position: "alternate",
};

export const HaveActiveDate = Template.bind({});
HaveActiveDate.args = {
  dates: exampleData,
  setDateFunc: clickOnDate,
  position: "left",
  activeDate: exampleData[0].on,
};
