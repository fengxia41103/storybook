import { faker } from "@faker-js/faker";
import { range } from "lodash";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { List, ListItem, Typography } from "@mui/material";

import SearchTextInput from "./index";

export default {
  title: "SearchTextInput",
  component: SearchTextInput,
};

const ExampleCaller = (props) => {
  const { timeout = 300 } = props;
  const [cats] = useState(range(10).map(() => faker.animal.cat()));
  const [searching, setSearching] = useState("");

  const search_filter_change = (event) => {
    const tmp = event.target.value.trim().toUpperCase();
    setSearching(tmp);
  };

  const matchingCats = cats.filter((x) => x.toUpperCase().includes(searching));

  const showCats = matchingCats.map((x) => <ListItem>{x}</ListItem>);

  return (
    <>
      <SearchTextInput
        debounceTimeout={timeout}
        title="Filter by Cat Name"
        searching={searching}
        searchChangeHandler={search_filter_change}
      />

      <Typography variant="h2">My Lovely Cats</Typography>
      <List>{showCats}</List>
    </>
  );
};

ExampleCaller.propTypes = {
  timeout: PropTypes.number,
};

const Template = (args) => <ExampleCaller {...args} />;

export const Example = Template.bind({});

export const OneSecondTimeoutExample = Template.bind({});
OneSecondTimeoutExample.args = {
  timeout: 1000,
};
