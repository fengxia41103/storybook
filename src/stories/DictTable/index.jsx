import { isEmpty, map } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";

import ColoredNumber from "../ColoredNumber";
import HighchartGraph from "../HighchartGraph";

const Chart = (props) => {
  const { data, interests, normalized } = props;
  const dates = map(data, (i) => i.on);
  const chart_data = map(interests, (description, key) => {
    const vals = map(data, (i) => i[key]);
    return { name: description, data: vals };
  });

  return (
    <HighchartGraph
      type="line"
      categories={dates}
      yLabel=""
      title=""
      data={chart_data}
      normalize={normalized}
      legendEnabled
    />
  );
};

const DictTable = (props) => {
  const { table } = useTheme();
  const { data, interests, chart } = props;

  if (isEmpty(data)) {
    return "No data found.";
  }

  const dates = map(data, (i) => <TableCell key={i.on}>{i.on}</TableCell>);

  const rows = map(interests, (description, key) => {
    const row = map(data, (c) => (
      <TableCell key={c.on}>
        <ColoredNumber val={c[key] ? c[key] : null} />
      </TableCell>
    ));
    return (
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          {description}
        </TableCell>
        {row}
      </TableRow>
    );
  });

  return (
    <Box mt={3}>
      {chart ? <Chart {...props} /> : null}

      <Box mt={3}>
        <TableContainer component={Paper}>
          <Table style={table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>&nbsp;</TableCell>
                {dates}
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

DictTable.propTypes = {
  interests: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.node).isRequired,
  chart: PropTypes.bool.isRequired,
  normalized: PropTypes.bool,
};

Chart.propTypes = {
  interests: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.node).isRequired,
  normalized: PropTypes.bool.isRequired,
};

export default DictTable;
