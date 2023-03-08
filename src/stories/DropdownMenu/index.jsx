import { isNull } from "lodash";
import PropTypes from "prop-types";
import React, { useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Menu, Typography } from "@mui/material";

const DropdownMenu = (props) => {
  const { title, content, keep_open = false, titleColor = "primary" } = props;
  const [anchorEl, setAnchorEl] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isNull(content)) return null;

  return (
    <Box display="inline">
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        aria-label="options"
        onClick={handleClick}
      >
        <MoreVertIcon color={titleColor} />
        <Typography color={titleColor}>{title || null}</Typography>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box p={3} onClick={keep_open ? handleClose : null}>
          {content}
        </Box>
      </Menu>
    </Box>
  );
};

DropdownMenu.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  keep_open: PropTypes.bool,
  titleColor: PropTypes.string,
};

export default DropdownMenu;
