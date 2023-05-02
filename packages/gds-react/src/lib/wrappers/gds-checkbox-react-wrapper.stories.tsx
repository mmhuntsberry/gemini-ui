import { ComponentStory as Story } from "@storybook/react";

import { GDSCheckboxReactWrapper } from "./GDSCheckboxReactWrapper";

export default {
  title: "Inputs/Checkbox",
  component: GDSCheckboxReactWrapper,
  argTypes: {
    error: {
      disable: true,
      defaultValue: false,
    },
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
      defaultValue: "light",
    },
    indeterminate: {
      disable: true,
      defaultValue: false,
    },
    // disabled: {
    //   disable: true,
    //   defaultValue: false,
    // },
    // checked: {
    //   disable: true,
    //   defaultValue: false,
    // },
    size: {
      options: ["regular", "compact"],
      control: { type: "select" },
      defaultValue: "regular",
    },
    helpText: {
      control: { type: "text" },
      defaultValue: "",
    },
    onClick: {
      action: "onClick",
    },
  },
};

const Template: Story<any> = ({
  checked = false,
  disabled = false,
  error = false,
  helpText = "",
  id = "checkbox-1",
  indeterminate = false,
  items,
  label = "Checkbox",
  mode = "light",
  size,
  value = "Checkbox 1",
  onClick,
}) => (
  <GDSCheckboxReactWrapper
    // checked={checked}
    // disabled={disabled}
    error={error}
    helpText={helpText}
    id={id}
    items={items}
    indeterminate={indeterminate}
    label={label}
    mode={mode}
    size={size}
    value={value}
    onClick={onClick}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  mode: "light",
  size: "compact",
  // checked: false,
  // disabled: false,
  error: false,
  indeterminate: false,
  items: [],
  id: "name1",
  label: "Name 1",
  value: "name1",
};
