import { isEmpty, map } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import HighchartGraph from "../HighchartGraph";

const MultilineChart = (props) => {
  const { data, category_by, label_by, data_by, normalized } = props;

  if (isEmpty(data)) return null;

  const categories = map(data[0].data, (d) => d[category_by]);

  const chart_data = map(data, (d) => ({
    name: d[label_by],
    data: map(d.data, (n) => n[data_by]),
  }));

  return (
    <HighchartGraph
      type="line"
      categories={categories}
      yLabel=""
      title=""
      data={chart_data}
      normalize={!!normalized}
      legendEnabled
    />
  );
};

MultilineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.node).isRequired,
    }),
  ).isRequired,
  category_by: PropTypes.string.isRequired,
  label_by: PropTypes.string.isRequired,
  data_by: PropTypes.string.isRequired,
  normalized: PropTypes.bool,
};

export default MultilineChart;
