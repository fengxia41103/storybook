import PropTypes from "prop-types";
import React from "react";

import { Box, Link } from "@mui/material";

import RankChart from "./index";

export default {
  title: "RankChart",
  component: RankChart,
};

const exampleData = [
  {
    symbol: "F",
    stock_id: 6,
    stock_resource: "/api/v1/stocks/6/",
    total: 288,
    positive: 288,
    on_it_count: 47,
    missing_it_count: 0,
  },
  {
    symbol: "MCD",
    stock_id: 5,
    stock_resource: "/api/v1/stocks/5/",
    total: 277,
    positive: 277,
    on_it_count: 47,
    missing_it_count: 0,
  },
  {
    symbol: "MSFT",
    stock_id: 2,
    stock_resource: "/api/v1/stocks/2/",
    total: 277,
    positive: 277,
    on_it_count: 47,
    missing_it_count: 0,
  },
  {
    symbol: "AAPL",
    stock_id: 1,
    stock_resource: "/api/v1/stocks/1/",
    total: 269,
    positive: 269,
    on_it_count: 47,
    missing_it_count: 0,
  },
  {
    symbol: "AMD",
    stock_id: 10,
    stock_resource: "/api/v1/stocks/10/",
    total: 263,
    positive: 263,
    on_it_count: 47,
    missing_it_count: 0,
  },
  {
    symbol: "BABA",
    stock_id: 7,
    stock_resource: "/api/v1/stocks/7/",
    total: 257,
    positive: 257,
    on_it_count: 47,
    missing_it_count: 0,
  },
  {
    symbol: "INTC",
    stock_id: 9,
    stock_resource: "/api/v1/stocks/9/",
    total: 255,
    positive: 255,
    on_it_count: 47,
    missing_it_count: 0,
  },
  {
    symbol: "TSM",
    stock_id: 8,
    stock_resource: "/api/v1/stocks/8/",
    total: 253,
    positive: 253,
    on_it_count: 47,
    missing_it_count: 0,
  },
  {
    symbol: "TSLA",
    stock_id: 4,
    stock_resource: "/api/v1/stocks/4/",
    total: 232,
    positive: 232,
    on_it_count: 47,
    missing_it_count: 0,
  },
  {
    symbol: "AMZN",
    stock_id: 3,
    stock_resource: "/api/v1/stocks/3/",
    total: 214,
    positive: 214,
    on_it_count: 47,
    missing_it_count: 0,
  },
];

const exampleMakeLabel = ({ id, symbol }) => (
  <Box display="inline">
    <Link href={`/stocks/${id}/historical/price`}>{symbol}</Link>
  </Box>
);
exampleMakeLabel.propTypes = {
  id: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

const Template = (args) => <RankChart {...args} />;

export const Example = Template.bind({});
Example.args = {
  make_label: exampleMakeLabel,
  ranks: exampleData,
  rank_val_name: "total",
};
