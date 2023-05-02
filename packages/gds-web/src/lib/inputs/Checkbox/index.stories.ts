import { html, TemplateResult } from "lit";

import "./Checkbox";
import type { GDSCheckbox } from "./Checkbox";

export default {
  title: "Components/Inputs/Checkbox",
  component: "gds-checkbox",
  argTypes: {
    "aria-label": {
      control: { type: "text" },
      defaultValue: "",
    },
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
    disabled: {
      disable: true,
      defaultValue: false,
    },
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
  parameters: {
    componentSubtitle:
      "A checkbox is a graphical widget that permits the user to make a binary choice.",
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSCheckbox> = ({
  "aria-label": ariaLabel = "",
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
}: GDSCheckbox) =>
  html`
    <gds-checkbox
      aria-label=${ariaLabel}
      ?checked=${checked}
      ?disabled=${disabled}
      error=${error}
      helpText=${helpText}
      id=${id}
      indeterminate=${indeterminate}
      mode=${mode}
      size=${size}
      .items=${items}
      label=${label}
      value=${value}
      @onClick=${onClick}
    >
    </gds-checkbox>
  `;

export const Checkbox = Template.bind({});
export const CheckboxWithoutLabel = Template.bind({});
export const NestedCheckbox = Template.bind({});
Checkbox.args = {
  mode: "light",
  size: "compact",
  checked: false,
  disabled: false,
  error: false,
  indeterminate: false,
  items: [],
  id: "name1",
  label: "Name 1",
  value: "name1",
  "aria-label": "Checkbox Example",
};
CheckboxWithoutLabel.args = {
  mode: "light",
  size: "compact",
  checked: false,
  disabled: false,
  error: false,
  indeterminate: false,
  items: [],
  id: "name1",
  label: "",
  value: "name1",
  "aria-label": "Checkbox without label example",
};
NestedCheckbox.args = {
  mode: "light",
  size: "compact",
  checked: false,
  disabled: false,
  error: false,
  indeterminate: false,
  items: [
    { id: "test1", label: "Test 1", value: "test1", checked: false },
    { id: "test2", label: "Test 2", value: "test2", checked: false },
    { id: "test3", label: "Test 3", value: "test3", checked: false },
  ],
  id: "name1",
  label: "Name 1",
  value: "name1",
  "aria-label": "Nested Checkbox Example",
};
