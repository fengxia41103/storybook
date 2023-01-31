import { faker } from "@faker-js/faker";
import { range } from "lodash";
import React, { useState } from "react";

import { List, ListItem, Typography } from "@mui/material";

import SearchTextInput from "./index";

export default {
  title: "SearchTextInput",
  component: SearchTextInput,
};

const ExampleCaller = () => {
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
        title="Filter by Cat Name"
        searching={searching}
        searchChangeHandler={search_filter_change}
      />

      <Typography variant="h2">My Lovely Cats</Typography>
      <List>{showCats}</List>
    </>
  );
};

const Template = () => <ExampleCaller />;

export const Example = Template.bind({});
