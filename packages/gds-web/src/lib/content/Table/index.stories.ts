import { html, TemplateResult } from "lit";

import { createColumnHelper, ColumnDef } from "@tanstack/table-core";

import "./Table";
import {
  Colors,
  Mode,
  TableHeaderSize,
  TableRowSize,
  TextAlign,
} from "@nielsen-media/gds-types";
import { people, Person, TeamData, teams } from "./data";

const teamColumnHelper = createColumnHelper<TeamData>();
const teamColumns = [
  teamColumnHelper.accessor((row) => row.teamName, {
    id: "Soccer Team",
    header: "Soccer Team",
    cell: (props) => html`<div>${props.getValue()}</div>`,
  }),
  teamColumnHelper.accessor((row) => row.stadiumName, {
    id: "Stadium Name",
    header: "Stadium Name",
    cell: (props) => html`<div>${props.getValue()}</div>`,
  }),
  teamColumnHelper.accessor((row) => row.stadiumLocation, {
    id: "Stadium Location",
    header: "Stadium Location",
    cell: (props) => html`<div>${props.getValue()}</div>`,
  }),
];

const columnHelper = createColumnHelper<Person>();

const peopleColumns = [
  columnHelper.accessor("firstName", {
    id: "firstName",
    cell: (info) => info.getValue().toString(),
    header: "First Name",
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    header: "Last Name",
    cell: (props) => props.getValue().toString(),
  }),
  columnHelper.accessor((row) => row.age, {
    id: "age",
    header: "Age",
    cell: (props) => props.getValue().toString(),
  }),
  columnHelper.accessor((row) => row.visits, {
    id: "visits",
    header: "Visits",
    cell: (props) => props.getValue().toString(),
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    header: "Status",
    cell: (props) => props.getValue().toString(),
  }),
  columnHelper.accessor((row) => row.progress, {
    id: "progress",
    header: "Profile Progress",
    cell: (props) => props.getValue().toString(),
  }),
];

export default {
  title: "Components/Content/Tables",
  component: "gds-table",
  argTypes: {
    background: {
      options: ["default", "none", "blurple", "aqua", "orange"],
      control: { type: "select" },
      defaultValue: "default",
    },
    headerSize: {
      options: ["tiny", "compact"],
      control: { type: "radio" },
      defaultValue: "compact",
    },
    mode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    rowSize: {
      options: ["tiny", "compact", "regular"],
      control: { type: "radio" },
      defaultValue: "compact",
    },
    searchOnly: {
      disable: true,
      defaultValue: false,
    },
    sortable: {
      disable: true,
      defaultValue: false,
    },
    tableTitle: {
      control: { type: "text" },
    },
    textAlignment: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
    },
    withHeader: {
      disable: true,
      defaultValue: true,
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

type Table<T> = {
  background?: Colors;
  columns: ColumnDef<T, any>[];
  data: T[];
  headerSize?: TableHeaderSize;
  mode?: Mode;
  rowSize?: TableRowSize;
  searchOnly?: boolean;
  sortable?: boolean;
  tableTitle?: string;
  textAlignment?: TextAlign;
  withHeader?: boolean;
};

const Template: Story<Table<Person>> = ({
  columns = [],
  data = [],
  background = "default",
  headerSize = "compact",
  mode = "light",
  rowSize = "compact",
  searchOnly = false,
  sortable = false,
  tableTitle = "",
  textAlignment = "left",
  withHeader = true,
}: Table<Person>) => html`
  <gds-table
    .data=${data}
    .columns=${columns}
    headerSize=${headerSize}
    background=${background}
    mode=${mode}
    rowSize=${rowSize}
    .searchOnly=${searchOnly}
    .sortable=${sortable}
    tableTitle=${tableTitle}
    textAlignment=${textAlignment}
    .withHeader=${withHeader}
  ></gds-table>
`;

const Template2: Story<Table<TeamData>> = ({
  columns = [],
  data = [],
  background = "default",
  headerSize = "compact",
  mode = "light",
  rowSize = "compact",
  searchOnly = false,
  sortable = false,
  tableTitle = "",
  textAlignment = "left",
  withHeader = true,
}: Table<TeamData>) => html`
  <gds-table
    .data=${data}
    .columns=${columns}
    headerSize=${headerSize}
    background=${background}
    mode=${mode}
    rowSize=${rowSize}
    .searchOnly=${searchOnly}
    .sortable=${sortable}
    tableTitle=${tableTitle}
    textAlignment=${textAlignment}
    .withHeader=${withHeader}
  ></gds-table>
`;

// export const Basic = Template.bind({});
// Basic.args = {
//   background: "default",
//   headerSize: "compact",
//   rowSize: "compact",
//   searchOnly: false,
//   sortable: false,
//   textAlignment: "left",
//   withHeader: true,
//   tableTitle: "Table Title",
//   mode: "light",
//   data: people,
//   columns: peopleColumns,
// };

export const Basic = Template2.bind({});
Basic.args = {
  background: "default",
  headerSize: "compact",
  rowSize: "compact",
  searchOnly: false,
  sortable: false,
  textAlignment: "left",
  withHeader: false,
  tableTitle: "Football Club Information",
  mode: "light",
  data: teams,
  columns: teamColumns,
};

export const withHeader = Template2.bind({});
withHeader.args = {
  background: "default",
  headerSize: "compact",
  rowSize: "compact",
  searchOnly: false,
  sortable: false,
  textAlignment: "left",
  withHeader: true,
  tableTitle: "Football Club Information",
  mode: "light",
  data: teams,
  columns: teamColumns,
};

export const sortable = Template2.bind({});
sortable.args = {
  background: "default",
  headerSize: "compact",
  rowSize: "compact",
  searchOnly: false,
  sortable: true,
  textAlignment: "left",
  withHeader: true,
  tableTitle: "Football Club Information",
  mode: "light",
  data: teams,
  columns: teamColumns,
};

export const globalSearch = Template2.bind({});
globalSearch.args = {
  background: "default",
  headerSize: "compact",
  rowSize: "compact",
  searchOnly: true,
  sortable: false,
  textAlignment: "left",
  withHeader: true,
  tableTitle: "Football Club Information",
  mode: "light",
  data: teams,
  columns: teamColumns,
};
