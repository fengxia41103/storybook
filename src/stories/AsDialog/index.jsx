import PropTypes from "prop-types";
import React, { useState } from "react";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const AsDialog = (props) => {
  // props
  const { as, title, content, when_confirm } = props;

  // states
  const [open, setOpen] = useState(false);

  // event handlres
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box onClick={handleClickOpen}>{as}</Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {when_confirm}
        </DialogActions>
      </Dialog>
    </>
  );
};

AsDialog.propTypes = {
  // whatever triggers this dialog
  // most likely it's a string, but it can also be a button for example.
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]).isRequired,

  // dialog box title
  title: PropTypes.string.isRequired,

  // the component to show as dialog content
  content: PropTypes.string.isRequired,

  // confirm action
  when_confirm: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};

export default AsDialog;
