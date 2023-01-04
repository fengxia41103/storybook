import React from "react";

import Logo from "./index";

export default {
  title: "Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const DefaultLogo = Template.bind({});
DefaultLogo.args = {};

const exampleImage =
  "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/voigtlander_ba347b_nokton_classic_35mm_f_1_4_1636035849_1494428.jpg";

export const LogoUseImageUrl = Template.bind({});
LogoUseImageUrl.args = {
  image_url: exampleImage,
};
