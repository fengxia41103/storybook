import { faker } from "@faker-js/faker";
import React from "react";

import PollResource from "./index";

export default {
  title: "PollResource",
  component: PollResource,
};

const Template = (args) => <PollResource {...args} />;

const examplePublicAPI =
  "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2";

export const DefaultMessage = Template.bind({});
DefaultMessage.args = {
  resource: examplePublicAPI,
};

const exampleSuccessHandler = () => console.log(faker.animal.cat());
export const SuccessHandlerPrintToConsole = Template.bind({});
SuccessHandlerPrintToConsole.args = {
  resource: examplePublicAPI,
  on_success: exampleSuccessHandler,
};
