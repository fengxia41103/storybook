import { faker } from "@faker-js/faker";
import React from "react";

import KeyValueListItem from "./index";

export default {
  title: "KeyValueListItem",
  component: KeyValueListItem,
};

const Template = (args) => <KeyValueListItem {...args} />;

export const ShortTextValue = Template.bind({});
ShortTextValue.args = {
  label: faker.animal.cat(),
  value: faker.lorem.words(5),
};

export const LongTextValue = Template.bind({});
LongTextValue.args = {
  label: faker.animal.cat(),
  value: faker.lorem.paragraphs(3),
};

export const LongUnbrokenValue = Template.bind({});
LongUnbrokenValue.args = {
  label: faker.animal.cat(),
  value: faker.random.numeric(100),
};

export const LongTextKey = Template.bind({});
LongTextKey.args = {
  label: faker.lorem.words(10),
  value: faker.lorem.words(2),
};
