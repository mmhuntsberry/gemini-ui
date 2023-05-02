import type { GDSLabel } from "@nielsen-media/gds-types";
import { ComponentStory as Story } from "@storybook/react";
import { GDSLabelReactWrapper } from "./GDSLabelReactWrapper";

export default {
  title: "Inputs",
  component: GDSLabelReactWrapper,
  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
      defaultValue: "light",
    },
    size: {
      options: ["regular", "compact"],
      control: { type: "select" },
      defaultValue: "regular",
    },
    // required: {
    //   disable: true,
    //   defaultValue: false,
    // },
    // error: {
    //   disable: true,
    //   defaultValue: false,
    // },
    // disabled: {
    //   disable: true,
    //   defaultValue: false,
    // },
  },
  parameters: {
    componentSubtitle: "",
  },
};

const Template: Story<any> = ({
  size = "regular",
  mode = "light",
  disabled = false,
  helpText = "",
  error = false,
  required = false,
  id = "",
}: GDSLabel) => (
  <GDSLabelReactWrapper
    id={id}
    size={size}
    mode={mode}
    label="Label"
    helpText={helpText}
    // disabled={disabled}
    // error={error}
    // required={required}
  />
);

export const Label = Template.bind({});
Label.args = {
  size: "regular",
  mode: "light",
  label: "Label",
  helpText: "Help text",
  // required: false,
  // disabled: false,
  // error: false,
};
