import MDEditor from "@uiw/react-md-editor";
import { map } from "lodash";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useMutate } from "restful-react";

import EmailIcon from "@mui/icons-material/Email";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import SimpleSnackbar from "../SimpleSnackbar";

const SendEmail = (props) => {
  // props
  const { host, url, whom, from, to } = props;

  // states
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState(`Hi ${whom},`);
  const [notification, setNotification] = useState("");

  // hooks
  const { mutate: send } = useMutate({
    verb: "POST",
    path: `${host}${url}/?`,
    mode: "same-origin",
  });

  // event handlers
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const on_subject_change = (e) => {
    setSubject(e.target.value);
  };

  const on_send = () => {
    const msg = "Email has been sent.";

    send({ ...{ from, to, subject, message } })
      .then(setMessage(""))
      .then(setNotification(msg));
  };

  const receivers = map(to, (t) => (
    <Box
      key={t}
      display="flex"
      flexDirection="row"
      alignItems="center"
      spacing={3}
    >
      <PersonOutlineIcon />
      <Link href={`mailto: ${t}`}>
        <Typography variant="body2">{t}</Typography>
      </Link>
    </Box>
  ));

  // render
  return (
    <>
      <Box display="flex" flexDirection="row">
        <EmailIcon />
        <Typography variant="body2" onClick={handleClickOpen}>
          Send email
        </Typography>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" color="secondary">
          Email&nbsp;
          {whom}
        </DialogTitle>
        <DialogContent>
          {receivers}
          <Box mt={3}>
            <DebounceInput
              element={TextField}
              autoFocus
              margin="dense"
              value={subject}
              onChange={on_subject_change}
              placeholder="Subject"
              fullWidth
              debounceTimeout={1200}
            />
          </Box>
          <Box mt={2}>
            <MDEditor
              value={message}
              onChange={setMessage}
              height={500}
              preview="edit"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={on_send}>
            Send
          </Button>
        </DialogActions>
        <SimpleSnackbar msg={notification} />
      </Dialog>
    </>
  );
};

SendEmail.propTypes = {
  // API server
  host: PropTypes.string.isRequired,

  // call url
  url: PropTypes.string.isRequired,

  // team name
  whom: PropTypes.string.isRequired,

  // from email address
  from: PropTypes.string.isRequired,

  // to email list
  to: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SendEmail;
