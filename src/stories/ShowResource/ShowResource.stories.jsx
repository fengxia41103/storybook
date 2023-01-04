import React from "react";

import SimpleSnackbar from "../SimpleSnackbar";

import ShowResource from "./index";

export default {
  title: "ShowResource",
  component: ShowResource,
};

const Template = (args) => <ShowResource {...args} />;

const exampleSuccessHandler = (data) => (
  <SimpleSnackbar msg={JSON.stringify(data)} />
);

const examplePublicAPI =
  "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2";

export const Example = Template.bind({});
Example.args = {
  resource: examplePublicAPI,
  on_success: exampleSuccessHandler,
};
