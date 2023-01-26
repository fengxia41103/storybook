import { countBy, map } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CountTable = (props) => {
  // props
  const { data, count_by_lambda, title } = props;

  // hooks
  const { table } = useTheme();

  // helpers
  const rows = map(
    countBy(data, (d) => count_by_lambda(d)),
    (val, key) => {
      if (key === "undefined") return null;

      return (
        <TableRow key={key}>
          <TableCell>{key}</TableCell>
          <TableCell>{val}</TableCell>
        </TableRow>
      );
    },
  );

  // renders
  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <TableContainer component={Paper}>
        <Table style={table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Data Source</TableCell>
              <TableCell>Indicator Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

CountTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  count_by_lambda: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CountTable;
