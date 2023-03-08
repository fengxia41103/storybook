import { faker } from "@faker-js/faker";
import React from "react";

import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DropdownMenu from "./index";

export default {
  title: "DropdownMenu",
  component: DropdownMenu,
};

const BasicList = () => (
  <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    <nav aria-label="main mailbox folders">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
    <Divider />
    <nav aria-label="secondary mailbox folders">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  </Box>
);

const Template = (args) => <DropdownMenu {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: faker.animal.cat(),
  content: <BasicList />,
  keep_open: true,
};

export const UseTitleColor = Template.bind({});
UseTitleColor.args = {
  title: faker.animal.cat(),
  content: <BasicList />,
  keep_open: true,
  titleColor: "secondary",
};
