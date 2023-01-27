import { indexOf, map } from "lodash";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import Tabs from "@mui/joy/Tabs";
import { Badge, List, ListItem, Typography } from "@mui/material";

import GlossaryDT from "../GlossaryDT";

const Glossary = (props) => {
  const [onTab, setOnTab] = useState(0);

  const { terms } = props;

  const indexes = terms.map((t) => t.index);

  const glossaryIndexes = map(terms, (term, index) => {
    const { index: key, items } = term;

    return (
      <Tab key={key} variant={onTab === index ? "solid" : "plain"}>
        <Badge badgeContent={items.length}>
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase", fontWeight: 500 }}
            color={onTab === index ? "primary" : "neutral"}
          >
            {key}
          </Typography>
        </Badge>
      </Tab>
    );
  });

  const glossary = map(terms, (t) => {
    const { index, items } = t;

    const descriptions = map(items, (aTerm) => (
      <ListItem key={aTerm.id} divider>
        <GlossaryDT term={aTerm.name} description={aTerm.sourceNote} />
      </ListItem>
    ));

    return (
      <TabPanel key={index} value={indexOf(indexes, index)}>
        <List>{descriptions}</List>
      </TabPanel>
    );
  });

  return (
    <Tabs
      aria-label="Glossaries"
      defaultValue={onTab}
      onChange={(event, value) => setOnTab(value)}
      size="sm"
    >
      <TabList variant="solid" color="primary">
        {glossaryIndexes}
      </TabList>

      {glossary}
    </Tabs>
  );
};

Glossary.propTypes = {
  terms: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          term: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
    }),
  ),
};

export default Glossary;
