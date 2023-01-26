import { faker } from "@faker-js/faker";
import { LinePlot } from "d3plus-react";
import PropTypes from "prop-types";
import React, { useState } from "react";

const D3PlusGraph = (props) => {
  const { data, title, footer } = props;

  const [containerId] = useState(faker.datatype.uuid());

  const config = {
    text: "text",
    labels: true,
    footer: {
      position: "top",
      value: footer,
    },
    groupBy: "id",
    data,
  };

  // Render
  return (
    <figure id={containerId} style={{ minHeight: "500px" }}>
      <figcaption>{title}</figcaption>
      <LinePlot config={config} />
    </figure>
  );
};

D3PlusGraph.propTypes = {
  title: PropTypes.string,
  data: PropTypes.node,
  footer: PropTypes.node,
};

export default D3PlusGraph;
