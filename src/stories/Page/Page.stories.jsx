import { faker } from "@faker-js/faker";
import React from "react";

import Page from "./index";

export default {
  title: "Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Example = Template.bind({});
Page.args = {
  title: faker.animal.cat(),
  children: faker.lorem.words(100),
};
