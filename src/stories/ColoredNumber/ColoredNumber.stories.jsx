import { faker } from "@faker-js/faker";
import React from "react";

import ColoredNumber from "./index";

export default {
  title: "ColoredNumber",
  component: ColoredNumber,
};

const Template = (args) => <ColoredNumber {...args} />;

export const PositiveNumber = Template.bind({});
PositiveNumber.args = {
  val: faker.random.numeric(5),
  unit: faker.science.unit().symbol,
  roundTo: faker.random.numeric(2),
};

export const NegativeNumber = Template.bind({});
NegativeNumber.args = {
  val: -1 * faker.random.numeric(5),
  unit: faker.science.unit().symbol,
  roundTo: faker.random.numeric(2),
};

export const Zero = Template.bind({});
Zero.args = {
  val: 0,
  unit: faker.science.unit().symbol,
  roundTo: faker.random.numeric(2),
};

export const NotNumber = Template.bind({});
NotNumber.args = {
  val: "a string",
  unit: faker.science.unit().symbol,
  roundTo: faker.random.numeric(2),
};
