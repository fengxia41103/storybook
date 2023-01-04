import { faker } from "@faker-js/faker";
import React from "react";

import Get from "./index";

export default {
  title: "Get",
  component: Get,
};

const Template = (args) => <Get {...args} />;

const examplePublicAPI =
  "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2";

export const DefaultMessage = Template.bind({});
DefaultMessage.args = {
  uri: examplePublicAPI,
};

const exampleSuccessHandler = () => alert(faker.animal.cat());
export const SuccessExample = Template.bind({});
SuccessExample.args = {
  uri: examplePublicAPI,
  on_success: exampleSuccessHandler,
};
