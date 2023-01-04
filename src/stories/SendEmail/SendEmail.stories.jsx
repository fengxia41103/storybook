import { faker } from "@faker-js/faker";
import { map, range } from "lodash";
import React from "react";

import SendEmail from "./index";

export default {
  title: "SendEmail",
  component: SendEmail,
};

const Template = (args) => <SendEmail {...args} />;

export const Example = Template.bind({});
Example.args = {
  host: "192.168.1.1",
  url: "/emails",
  whom: faker.name.fullName(),
  from: faker.internet.email(),
  to: map(range(5), () => faker.internet.email()),
};
