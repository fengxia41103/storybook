import { faker } from "@faker-js/faker";
import React from "react";

import SimpleSnackbar from "./index";

export default {
  title: "SimpleSnackbar",
  component: SimpleSnackbar,
};

const Template = (args) => <SimpleSnackbar {...args} />;

export const Example = Template.bind({});
Example.args = {
  msg: faker.lorem.words(2),
};
