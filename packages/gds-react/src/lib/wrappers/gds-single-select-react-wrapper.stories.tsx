import { ComponentStory as Story } from "@storybook/react";
import { GDSLabelReactWrapper } from "./GDSLabelReactWrapper";
import { GDSSingleSelectReactWrapper } from "./GDSSingleSelectReactWrapper";

export default {
  title: "Inputs/Single Select",
  component: GDSSingleSelectReactWrapper,
  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
      defaultValue: "light",
    },
    alt: {
      disable: true,
      defaultValue: false,
    },
    error: {
      disable: true,
      defaultValue: false,
    },
    disabled: {
      disable: true,
      defaultValue: false,
    },
    size: {
      options: ["regular", "compact"],
      control: { type: "select" },
      defaultValue: "regular",
    },
    onClick: {
      action: "onClick",
    },
    onKeydown: {
      action: "onKeydown",
    },
    onSelect: {
      action: "onSelect",
    },
  },
  parameters: {
    componentSubtitle: "",
  },
};

const Template: Story<any> = ({
  id = "",
  alt = false,
  defaultSelectedItem = "",
  disabled = false,
  error = false,
  items = [],
  mode = "light",
  size = "regular",
  // onClick: onClick,
  onKeydown,
  onSelect,
}) => (
  <GDSSingleSelectReactWrapper
    id={id}
    alt={alt}
    defaultSelectedItem={defaultSelectedItem}
    // disabled={disabled}
    // error={error}
    items={items}
    mode={mode}
    size={size}
    onKeydown={onKeydown}
    onSelect={onSelect}
  />
);

const Template2: Story<any> = ({
  id = "",
  alt = false,
  defaultSelectedItem = "",
  disabled = false,
  error = false,
  items = [],
  mode = "light",
  size = "regular",
  // onClick: onClick,
  onKeydown,
  onSelect,
}) => (
  <GDSLabelReactWrapper
    id={id}
    size={size}
    mode={mode}
    label="Label"
    helpText="Help Text"
  >
    <GDSSingleSelectReactWrapper
      id={id}
      alt={alt}
      defaultSelectedItem={defaultSelectedItem}
      // disabled={disabled}
      // error={error}
      items={items}
      mode={mode}
      size={size}
      onKeydown={onKeydown}
      onSelect={onSelect}
    />
  </GDSLabelReactWrapper>
);

export const SingleSelect = Template.bind({});
export const withLabel = Template2.bind({});
SingleSelect.args = {
  size: "regular",
  mode: "light",
  error: false,
  disabled: false,
  alt: false,
  items: [
    { id: "item-1", label: "Item 1", value: "item1" },
    { id: "item-2", label: "Item 2", value: "item2" },
    { id: "item-3", label: "Item 3", value: "item3" },
  ],
  // defaultSelectedItem: "item-2",
};

withLabel.args = {
  size: "regular",
  mode: "light",
  error: false,
  disabled: false,
  alt: false,
  items: [
    { id: "item-1", label: "Item 1", value: "item1" },
    { id: "item-2", label: "Item 2", value: "item2" },
    { id: "item-3", label: "Item 3", value: "item3" },
  ],
  // defaultSelectedItem: "item-2",
};
