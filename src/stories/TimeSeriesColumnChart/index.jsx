import { map } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import HighchartGraph from "../HighchartGraph";

const TimeSeriesColumnChart = (props) => {
  const { data, name } = props;

  const categories = map(data, (d) => d.on);

  const chart_data = [
    {
      name,
      data: map(data, (d) => d.val),
    },
  ];

  return (
    <HighchartGraph
      type="column"
      categories={categories}
      yLabel=""
      title=""
      legendEnabled
      data={chart_data}
    />
  );
};

TimeSeriesColumnChart.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      val: PropTypes.number,
    }),
  ).isRequired,
};

export default TimeSeriesColumnChart;
