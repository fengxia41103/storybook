import { faker } from "@faker-js/faker";
import { range, uniq } from "lodash";
import React, { useState } from "react";

import ChipListWithClickToggle from "./index";

export default {
  title: "ChipListWithClickToggle",
  component: ChipListWithClickToggle,
};

const ExampleCaller = () => {
  const [cats] = useState(uniq(range(50).map(() => faker.animal.cat())));
  const [activeList, setActiveList] = useState(cats.slice(2));

  const fullList = cats.map((cat) => ({
    id: cat,
    name: cat,
  }));

  const clickHandler = (me) => {
    if (activeList.includes(me)) {
      setActiveList(activeList.filter((x) => x !== me));
    } else {
      setActiveList([...activeList, me]);
    }
  };

  return (
    <ChipListWithClickToggle
      {...{ fullList, activeList, onClick: clickHandler }}
    />
  );
};

const Template = () => <ExampleCaller />;

export const Example = Template.bind({});
