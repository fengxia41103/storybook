import React from "react";

import NotFoundView from "./index";

export default {
  title: "NotFoundView",
  component: NotFoundView,
};

const Template = (args) => <NotFoundView {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WhiteFont = Template.bind({});
WhiteFont.args = {
  fontColor: "white",
};

export const ExternalImage = Template.bind({});
ExternalImage.args = {
  fontColor: "primary",
  backgroundImage:
    "https://static01.nyt.com/images/2018/11/23/arts/23shoplifterspix1/merlin_146950422_cdf94069-a72a-4dfb-ae9d-6d4222e39c29-superJumbo.jpg?quality=75&auto=webp",
};

export const AddXKCD = Template.bind({});
AddXKCD.args = {
  xkcd: true,
};
