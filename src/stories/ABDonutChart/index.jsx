import { isUndefined } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  colors,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// MUST: https://stackoverflow.com/questions/70098392/react-chartjs-2-with-chartjs-3-error-arc-is-not-a-registered-element
Chart.register(ArcElement);

const ABDonutChart = (props) => {
  const theme = useTheme();
  const { subheader, data } = props;

  const aPercent = Math.floor((data.A.val / (data.A.val + data.B.val)) * 100);
  const bPercent = Math.ceil((data.B.val / (data.A.val + data.B.val)) * 100);

  const chartData = {
    datasets: [
      {
        data: [aPercent, bPercent],
        backgroundColor: [colors.indigo[500], colors.red[600]],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: [data.A.label, data.B.label],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const labels = [
    {
      title: data.A.label,
      value: aPercent,
      icon: TrendingUpIcon,
      color: colors.indigo[500],
    },
    {
      title: data.B.label,
      value: bPercent,
      icon: TrendingDownIcon,
      color: colors.red[600],
    },
  ];

  return (
    <Card>
      <CardHeader
        title={<Typography variant="h3">{data.name}</Typography>}
        subheader={
          isUndefined(subheader) ? null : (
            <Typography variant="body2">{subheader}</Typography>
          )
        }
      />

      <CardContent>
        <Grid container spacing={1}>
          <Grid item lg={6} xs={12}>
            <Doughnut data={chartData} options={options} />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box display="flex" justifyContent="center" mt={2}>
              {labels.map(({ color, icon: Icon, title, value }) => (
                <Box key={title} p={1} textAlign="center">
                  <Icon color="action" />
                  <Typography color="textPrimary" variant="body1">
                    {title}
                  </Typography>
                  <Typography style={{ color }} variant="h2">
                    {value}
                    &nbsp;%
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ABDonutChart.propTypes = {
  subheader: PropTypes.string,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    A: PropTypes.shape({
      label: PropTypes.string,
      val: PropTypes.number,
    }).isRequired,
    B: PropTypes.shape({
      label: PropTypes.string,
      val: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ABDonutChart;
