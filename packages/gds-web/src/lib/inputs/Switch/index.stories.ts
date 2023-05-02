import { GDSSwitch } from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";
import "./Switch";

export default {
  title: "Components/Inputs/Switch",
  component: "gds-switch",
  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
      defaultValue: "light",
    },
    checked: {
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
    label: {
      control: { type: "text" },
      defaultValue: "",
    },
    helpText: {
      control: { type: "text" },
      defaultValue: "",
    },
    onChange: {
      action: "onChange",
    },
  },
  parameters: {
    componentSubtitle:
      "A switch is a graphical widget that permits the user to make a binary choice.",
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSSwitch> = ({
  size = "regular",
  mode = "light",
  checked = false,
  disabled = false,
  helpText = "",

  label = "Label",
  onChange: onChange,
}: GDSSwitch) =>
  html`
    <gds-switch
      size=${size}
      mode=${mode}
      label=${label}
      helpText=${helpText}
      ?disabled=${disabled}
      .checked=${checked}
      @onChange=${onChange}
    >
      ></gds-switch
    >
  `;

export const Switch = Template.bind({});
Switch.args = {
  size: "compact",
  mode: "light",
  helpText: "Help Text",
  label: "Label",
  checked: false,
  disabled: false,
};
export const noLabel = Template.bind({});
noLabel.args = {
  size: "compact",
  mode: "light",
  checked: false,
  disabled: false,
};
