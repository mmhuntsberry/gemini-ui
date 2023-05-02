import { GDSRadio } from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";
import "./Radio";

export default {
  title: "Components/Inputs/Radio",
  component: "gds-radio",
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
    size: {
      options: ["regular", "compact"],
      control: { type: "select" },
      defaultValue: "regular",
    },
    label: {
      control: { type: "text" },
      defaultValue: "Label",
    },
    helpText: {
      control: { type: "text" },
      defaultValue: "Helper Text",
    },
    onClick: {
      action: "click",
    },
  },
  parameters: {
    componentSubtitle:
      "A radio is a graphical widget that permits the user to make a single choice.",
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSRadio> = ({
  size = "regular",
  mode = "light",
  disabled = false,
  helpText = "Help text",
  id = "radio-1",
  error = false,
  label = "Label",
  onClick,
}: GDSRadio) =>
  html`
    <gds-radio
      id=${id}
      name="radio"
      value="label"
      size=${size}
      mode=${mode}
      label=${label}
      helperText=${helpText}
      ?disabled=${disabled}
      ?error=${error}
      @onClick=${onClick}
    >
      ></gds-radio
    >
  `;

export const Radio = Template.bind({});
Radio.args = {
  size: "compact",
  mode: "light",
  label: "Label",
  helpText: "Help text",
  disabled: false,
  error: false,
};
