import { GDSLabel } from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";
import "./Label";

export default {
  title: "Components/Inputs/Label",
  component: "gds-label",
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
    required: {
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
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
      defaultValue: "vertical",
    },
  },
  parameters: {
    componentSubtitle: "",
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSLabel> = ({
  size = "regular",
  mode = "light",
  disabled = false,
  helpText = "",
  error = false,
  required = false,
  id = "",
}: GDSLabel) =>
  html`
    <gds-label
      id=${id}
      size=${size}
      mode=${mode}
      label="Label"
      helpText=${helpText}
      ?disabled=${disabled}
      ?error=${error}
      ?required=${required}
    >
    </gds-label>
  `;

export const Label = Template.bind({});
Label.args = {
  size: "regular",
  mode: "light",
  label: "Label",
  helpText: "Help text",
  required: false,
  disabled: false,
  error: false,
};
