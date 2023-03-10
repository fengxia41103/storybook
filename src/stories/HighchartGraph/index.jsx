import { faker } from "@faker-js/faker";
import Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
import addFunnel from "highcharts/modules/funnel";
import { filter, isNull, map } from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const HighchartGraph = (props) => {
  const [height_step] = useState(0);
  const [full_height, setFullHeight] = useState(0);
  const [containerId] = useState(faker.datatype.uuid());
  const { title } = props;

  let chart = null;

  const normalize_data = (data) => {
    // Some may have 0s or all 0s.
    const tmp = filter(data, (d) => d !== 0 && d !== "n/a");

    // if all 0s
    if (tmp.length === 0) return data;

    const base = tmp[0];
    const normalized = map(data, (d) => {
      if (d === 0) return 0;
      if (d === base) return 1;

      // both positive or negative, just straightforward normalizing
      // to reference as 1.
      if ((d > 0 && base > 0) || (d < 0 && base < 0)) {
        return d / Math.abs(base);
      }

      return (d - base) / Math.abs(base);
    });

    return normalized;
  };

  const fit_zero = (data) => {
    const tmp = [...data];
    let prev_non_zero = 0;
    for (let i = 0; i < tmp.length; i += 1) {
      const val = tmp[i];
      if (val === 0 || val === "n/a") {
        if (i > 0) {
          tmp[i] = prev_non_zero;
        }
      } else {
        prev_non_zero = tmp[i];
      }
    }
    return tmp;
  };

  const makeViz = () => {
    const {
      type,
      footer,
      categories,
      xLabel,
      yLabel,
      legendEnabled,
      data,
      normalize,
      keepNegative,
    } = props;

    // chart data can be normalized for comparison purpose
    let chart_data = data;
    if (normalize) {
      chart_data = map(chart_data, (d) => {
        const tmp = d;
        tmp.data = fit_zero(normalize_data(d.data));
        return tmp;
      });
    }

    // Set chart height dynamically
    const height = Math.max(600, height_step * categories.length);
    setFullHeight(height);

    // Chart options
    const options = {
      chart: {
        type,
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height,
        styleMode: true,
        zoomType: "xy",
      },
      title: {
        text: title,
      },
      subtitle: {
        text: footer,
      },
      xAxis: {
        categories,
        crosshair: true,
        title: {
          text: xLabel || "",
        },
      },
      yAxis: {
        title: {
          text: yLabel || "",
        },
      },
      tooltip: {
        headerFormat:
          '<h5 class="page-header">{point.key}</h5><table class="table table-striped">',
        pointFormat: "<tr><td>{series.name}</td><td>{point.y}</td></tr>",
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false,
          },
        },
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
          negativeColor: !keepNegative ? "#d52349" : null,
        },
        bar: {
          negativeColor: "#d52349",
        },
        line: {
          negativeColor: !keepNegative ? "#d52349" : null,
        },
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: "rgb(100,100,100)",
              },
            },
          },
          states: {
            hover: {
              marker: {
                enabled: false,
              },
            },
          },
          tooltip: {
            headerFormat: "<b>{series.name}</b><br>",
            pointFormat: "{point.x}, {point.y}",
          },
        },
        bubble: {
          marker: {
            enabled: true,
          },

          tooltip: {
            useHTML: true,
            pointFormat: "{point.z}",
            followPointer: true,
          },
        },
      },
      legend: {
        enabled: legendEnabled,
      },
      series: chart_data,
    };

    // Render chart
    chart = new Highcharts.Chart(containerId, options);
  };

  useEffect(() => {
    // We initializ graphy after component is mounted.

    // MUST: init module!
    HC_more(Highcharts);

    // Apply funnel after window is present
    Highcharts.setOptions({
      lang: {
        thousandsSep: ",",
      },
    });
    addFunnel(Highcharts);

    // draw
    makeViz();

    // clearnup when unmount
    return () => {
      if (isNull(chart)) return;
      chart.destroy();
    };
  });

  const adpatedMinHeight = `${full_height * 1.05} px`;

  return (
    <figure id={containerId} style={{ minHeight: adpatedMinHeight }}>
      <figcaption>{title}</figcaption>
    </figure>
  );
};

HighchartGraph.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  legendEnabled: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number),
    }),
  ).isRequired,

  footer: PropTypes.string,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
  normalize: PropTypes.bool,
  keepNegative: PropTypes.bool,
};

export default HighchartGraph;
