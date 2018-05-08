import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array } from '@storybook/addon-knobs/react';
import { Table } from './Table';

let stories = storiesOf('Table', module);

stories.add('Default', () =>
  <Table
  tableHeaderCells={array("Table Header Cells", [
    {
        "th": "First Name"
    },
    {
        "th": "Last Name"
    },
    {
        "th": "Height"
    },
    {
        "th": "Weight"
    }
])}
tableRows={array("Table Rows", [
  {
      "firstname": "Jack",
      "lastname": "Frost",
      "height": "5'11",
      "weight": "150"
  },
  {
      "firstname": "Jimmy",
      "lastname": "Buffet",
      "height": "6'0",
      "weight": "220"
  },
  {
      "firstname": "Cory",
      "lastname": "Matthews",
      "height": "5'7",
      "weight": "130"
  }
])}
  />
);
