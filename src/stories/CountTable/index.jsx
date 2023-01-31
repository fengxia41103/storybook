import { countBy, map } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

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
  const { data, count_by_lambda, title, link_to_base = "" } = props;

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
          <TableCell>
            <Link to={`${link_to_base}/${key}`} underline="none">
              &rarr;
            </Link>
          </TableCell>
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
              <TableCell>Category</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>&nbsp;</TableCell>
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
  link_to_base: PropTypes.string,
};

export default CountTable;
