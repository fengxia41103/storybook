import PropTypes from "prop-types";
import React from "react";
import { DebounceInput } from "react-debounce-input";

import { Card, CardContent, TextField } from "@mui/material";

const SearchTextInput = (props) => {
  const {
    title = null,
    searching = "",
    debounceTimeout = 300,
    searchChangeHandler,
  } = props;
  return (
    <Card>
      <CardContent>
        <DebounceInput
          debounceTimeout={debounceTimeout}
          element={TextField}
          label={title}
          value={searching}
          onChange={searchChangeHandler}
          fullWidth
        />
      </CardContent>
    </Card>
  );
};

SearchTextInput.propTypes = {
  searching: PropTypes.string.isRequired,
  searchChangeHandler: PropTypes.func.isRequired,

  title: PropTypes.string,
  debounceTimeout: PropTypes.number,
};

export default SearchTextInput;
