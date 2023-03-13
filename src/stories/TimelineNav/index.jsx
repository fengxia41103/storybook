import { map, uniq } from "lodash";
import PropTypes from "prop-types";
import React from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Button } from "@mui/material";

const TimelineNav = (props) => {
  const { dates, setDateFunc } = props;

  const days = uniq(map(dates, (d) => d.on));
  days.sort();

  const nav = map(days, (on) => (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Button variant="outlined" onClick={() => setDateFunc(on)}>
          <CalendarMonthIcon />
          {on}
        </Button>
        {dates[on]}
      </TimelineContent>
    </TimelineItem>
  ));

  return <Timeline>{nav}</Timeline>;
};

TimelineNav.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      on: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
  setDateFunc: PropTypes.func.isRequired,
};
export default TimelineNav;
