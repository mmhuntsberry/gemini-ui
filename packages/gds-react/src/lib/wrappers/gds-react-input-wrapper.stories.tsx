import { ComponentStory as Story } from "@storybook/react";
import { GDSInputReactWrapper } from "./GDSInputReactWrapper";

import type { GDSInput } from "@nielsen-media/gds-types";

export default {
  title: "Content/Inputs",
  component: GDSInputReactWrapper,
  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
      defaultValue: "light",
    },
    error: {
      disable: true,
      defaultValue: false,
    },
    disabled: {
      disable: true,
      defaultValue: false,
    },
    required: {
      disable: true,
      defaultValue: false,
    },
    alt: {
      disable: true,
      defaultValue: false,
    },
    size: {
      options: ["regular", "compact"],
      control: { type: "select" },
      defaultValue: "regular",
    },
    type: {
      control: { type: "text" },
      defaultValue: "text",
    },
    "aria-label": {
      control: { type: "text" },
      defaultValue: "text",
    },
    onChange: {
      action: "onChange",
    },
    onInput: {
      action: "input",
    },
  },
};

const Template: Story<any> = ({
  "aria-label": ariaLabel = "",
  alt = false,
  disabled = false,
  error = false,
  icon = { name: "none", outlined: false },
  id = "",
  mode = "light",
  name = "",
  size = "regular",
  placeholder = "",
  required = false,
  type = "text",
  value = "",
  onChange,
  onInput,
}: GDSInput) => (
  <GDSInputReactWrapper
    id={id}
    // error={error}
    alt={alt}
    aria-label={ariaLabel}
    icon={icon}
    mode={mode}
    name={name}
    placeholder={placeholder}
    required={required}
    size={size}
    type={type}
    value={value}
    // disabled={disabled}
    onChange={onChange}
    onInput={onInput}
  />
);

export const Input = Template.bind({});
Input.args = {
  id: "gds-input-1",
  size: "regular",
  mode: "light",
  placeholder: "Value",
  required: false,
  error: false,
  disabled: false,
  alt: false,
  icon: {
    name: "calendar",
    outlined: false,
  },
};
