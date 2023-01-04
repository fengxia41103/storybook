import React from "react";

import SimpleSnackbar from "../SimpleSnackbar";

import PollResource from "./index";

export default {
  title: "PollResource",
  component: PollResource,
};

const Template = (args) => <PollResource {...args} />;

const examplePublicAPI =
  "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2";

const exampleSuccessHandler = (data) => (
  <SimpleSnackbar msg={JSON.stringify(data)} />
);

export const Example = Template.bind({});
Example.args = {
  resource: examplePublicAPI,
  on_success: exampleSuccessHandler,
  interval: 5,
};
