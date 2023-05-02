import { ComponentStory as Story } from "@storybook/react";

import { createColumnHelper } from "@tanstack/table-core";
import { GDSTableReactWrapper } from "./GDSTableReactWrapper";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const people: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
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
  title: "Content/Tables",
  component: GDSTableReactWrapper,
  argTypes: {
    headerSize: {
      options: ["tiny", "compact"],
      control: { type: "radio" },
    },
    rowSize: {
      options: ["tiny", "compact", "regular"],
      control: { type: "radio" },
    },
    background: {
      options: ["default", "none", "blurple", "aqua", "orange"],
      control: { type: "radio" },
    },
    // hasMenu: {
    //   disable: true,
    //   defaultValue: false,
    // },
    sortable: {
      disable: true,
      defaultValue: true,
    },
    searchOnly: {
      disable: true,
      defaultValue: true,
    },
    textAlignment: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
      defaultValue: "left",
    },
    tableTitle: {
      control: { type: "text" },
      defaultValue: "",
    },
    withHeader: {
      disable: true,
      defaultValue: false,
    },
  },
};

const Template: Story<any> = ({
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
}) => (
  <GDSTableReactWrapper
    data={data}
    columns={columns}
    headerSize={headerSize}
    background={background}
    mode={mode}
    rowSize={rowSize}
    searchOnly={searchOnly}
    sortable={sortable}
    tableTitle={tableTitle}
    textAlignment={textAlignment}
    withHeader={withHeader}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  tableTitle: "Premiere League Soccer Stadiums",
  headerSize: "compact",
  rowSize: "compact",
  textAlignment: "left",
  sortable: false,
  searchOnly: false,
  withHeader: true,
  columns: peopleColumns,
  data: people,
};
