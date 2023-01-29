import { faker } from "@faker-js/faker";
import { map, range } from "lodash";
import React from "react";

import { Button } from "@mui/material";

import Glossary from "./index";

export default {
  title: "Glossary",
  component: Glossary,
};

const exampleData = map(["a", "b"], (index) => ({
  index,
  items: range(faker.random.numeric()).map((x) => ({
    id: faker.animal.cat(),
    name: faker.animal.cat(),
    description: faker.lorem.paragraph(3),
    more: x % 2 === 0 ? <Button>More info as button</Button> : null,
  })),
}));

const Template = (args) => <Glossary {...args} />;

export const Example = Template.bind({});
Example.args = {
  terms: exampleData,
};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const fullAlphabetData = map(alphabet, (index) => ({
  index,
  items: range(faker.random.numeric()).map(() => ({
    id: faker.animal.cat(),
    name: faker.animal.cat(),
    description: faker.lorem.paragraph(3),
  })),
}));

export const FullAlphabetExample = Template.bind({});
FullAlphabetExample.args = {
  terms: fullAlphabetData,
};
