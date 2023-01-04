import PropTypes from "prop-types";
import React, { useState } from "react";

import { Button, Grid, Link, Menu, MenuItem } from "@mui/material";

const MenuBar = (props) => {
  const { root, title, items } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const links = items.map((x) => {
    const url = `${root}/${x.url}`;

    return (
      <MenuItem key={x.url} onClick={handleClose}>
        <Link href={url}>{x.text}</Link>
      </MenuItem>
    );
  });

  return (
    <Grid item xs>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {links}
      </Menu>
    </Grid>
  );
};

MenuBar.propTypes = {
  root: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default MenuBar;
