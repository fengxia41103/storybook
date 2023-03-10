import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Snackbar from "@mui/material/Snackbar";

const SimpleSnackbar = (props) => {
  const { msg } = props;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (msg) {
      setOpen(true);
    }
  }, [msg]);

  // guard against null msg
  if (!msg) return null;

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
      message={msg}
    />
  );
};

SimpleSnackbar.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default SimpleSnackbar;
