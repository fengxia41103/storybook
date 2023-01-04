import { faker } from "@faker-js/faker";
import { map, range } from "lodash";
import React from "react";

import MenuBar from "./index";

export default {
  title: "MenuBar",
  component: MenuBar,
};

const Template = (args) => <MenuBar {...args} />;

export const Example = Template.bind({});
Example.args = {
  root: faker.internet.domainName(),
  title: faker.random.alpha(5),
  items: map(range(10), () => ({
    url: faker.internet.url(),
    text: faker.animal.cat(),
  })),
};
