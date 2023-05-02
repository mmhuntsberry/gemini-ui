import { GDSSelect } from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";
import "./Select";

export default {
  title: "Internal/Components/Inputs/Select",
  component: "gds-select",
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
      options: ["compact", "regular"],
      control: { type: "select" },
      defaultValue: "regular",
    },
    width: {
      options: ["compact", "regular", "giant", "full"],
      control: { type: "select" },
      defaultValue: "compact",
    },
    "aria-label": {
      control: { type: "text" },
      defaultValue: "text",
    },
    // onClick: {
    //   action: "click",
    // },
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

const Template: Story<GDSSelect> = ({
  id = "",
  "aria-label": ariaLabel = "",
  alt = false,
  size = "regular",
  mode = "light",
  disabled = false,
  error = false,
}: GDSSelect) =>
  html`
    <gds-select
      id=${id}
      aria-label=${ariaLabel}
      ?alt=${alt}
      name="radio"
      value="label"
      size=${size}
      mode=${mode}
      ?disabled=${disabled}
      ?error=${error}
      >Choose...</gds-select
    >
  `;

export const Select = Template.bind({});
Select.args = {
  id: "1",
  size: "compact",
  mode: "light",
  error: false,
  disabled: false,
  alt: false,
  "aria-label": "An example of the select component",
};
