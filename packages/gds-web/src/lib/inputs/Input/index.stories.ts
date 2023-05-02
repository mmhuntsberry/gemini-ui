import { html, TemplateResult } from "lit";
import type { GDSInput } from "./Input";
import "./Input";

export default {
  title: "Components/Inputs/Input",
  component: "gds-input",
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
      action: "onInput",
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

const Template: Story<GDSInput> = ({
  "aria-label": ariaLabel,
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
}: GDSInput) =>
  html`
    <gds-input
      aria-label=${ariaLabel}
      id="${id}"
      error=${error}
      ?alt=${alt}
      .icon="${icon}"
      mode=${mode}
      name=${name}
      placeholder="${placeholder}"
      ?required=${required}
      size=${size}
      type=${type}
      value="${value}"
      ?disabled=${disabled}
      ?error=${error}
      @onChange=${onChange}
      @onInput=${onInput}
    >
    </gds-input>
  `;

const Template2: Story<GDSInput> = ({
  "aria-label": ariaLabel,
  size = "regular",
  mode = "light",
  error = false,
  disabled = false,
  alt = false,
  placeholder = "",
  value = "",
  icon = { name: "none", outlined: false },
  id = "",
  name = "",
  required = false,
  type = "text",
  onChange: onChange,
  onInput: onInput,
}: GDSInput) =>
  html`
    <gds-label
      id="${id}"
      mode=${mode}
      ?required=${required}
      size=${size}
      ?disabled=${disabled}
      ?error=${error}
      helpText="Help text"
    >
      <span slot="label">Label</span>
      <gds-input
        slot="input"
        aria-label=${ariaLabel}
        id="${id}"
        error=${error}
        ?alt=${alt}
        .icon="${icon}"
        mode=${mode}
        name=${name}
        placeholder="${placeholder}"
        required=${required}
        size=${size}
        type=${type}
        value="${value}"
        ?disabled=${disabled}
        ?error=${error}
        @onChange=${onChange}
        @onInput=${onInput}
      >
      </gds-input>
    </gds-label>
  `;

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
  "aria-label": "An example of an input",
};

export const withLabel = Template2.bind({});
withLabel.args = {
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

  "aria-label": "An example of an input with a label",
};
