import { map, uniq } from "lodash";
import moment from "moment";
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
  const { dates, setDateFunc, position = "right", activeDate } = props;

  const days = uniq(map(dates, (d) => d.on));
  days.sort();

  const isActive = (date) =>
    activeDate && moment(activeDate).format("LL") === moment(date).format("LL");

  const nav = map(days, (on) => (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Button
          variant="outlined"
          onClick={() => setDateFunc(on)}
          color={isActive(on) ? "secondary" : "primary"}
        >
          <CalendarMonthIcon />
          {on}
        </Button>
      </TimelineContent>
    </TimelineItem>
  ));

  return <Timeline position={position}>{nav}</Timeline>;
};

TimelineNav.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      on: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
  setDateFunc: PropTypes.func.isRequired,
  activeDate: PropTypes.string,
  position: PropTypes.string,
};
export default TimelineNav;
