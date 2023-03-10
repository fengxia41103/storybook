import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";

const Page = forwardRef(({ children, title = "", ...rest }, ref) => (
  <div ref={ref} {...rest}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
