import PropTypes from "prop-types";
import React from "react";

import { Card, CardContent, TextField } from "@mui/material";

const SearchTextInput = (props) => {
  const { title = null, searching = "", searchChangeHandler } = props;
  return (
    <Card>
      <CardContent>
        <TextField
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
};

export default SearchTextInput;
