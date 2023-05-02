import { GDSSingleSelect } from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";
import "./Single";

export default {
  title: "Components/Inputs/Select",
  component: "gds-single-select",
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
    "aria-label": {
      control: { type: "text" },
      defaultValue: "text",
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

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSSingleSelect> = ({
  "aria-label": ariaLabel = "",

  id = "",
  alt = false,
  defaultSelectedItem = "",
  disabled = false,
  error = false,
  items = [],
  mode = "light",
  size = "regular",
  // onClick: onClick,
  onKeydown: onKeydown,
  onSelect: onSelect,
}: GDSSingleSelect) =>
  html`
    <gds-single-select
      aria-label=${ariaLabel}
      id=${id}
      ?alt=${alt}
      defaultSelectedItem=${defaultSelectedItem}
      ?disabled=${disabled}
      ?error=${error}
      .items=${items}
      mode=${mode}
      size=${size}
      @onKeydown=${onKeydown}
      @onSelect=${onSelect}
    ></gds-single-select>
  `;

const Template2: Story<GDSSingleSelect> = ({
  "aria-label": ariaLabel = "",
  alt = false,
  error = false,
  defaultSelectedItem = "",
  disabled = false,
  id = "",
  items = [],
  mode = "light",
  size = "compact",
  // onClick: onClick,
  onKeydown: onKeydown,
  onSelect: onSelect,
}: GDSSingleSelect) =>
  html`
    <gds-label
      id=""
      mode=${mode}
      ?required="false"
      size=${size}
      ?disabled=${disabled}
      ?error=${error}
      helpText="Help text"
    >
      <span slot="label">Slotted Label</span>
      <gds-single-select
        slot="input"
        aria-label=${ariaLabel}
        ?alt=${alt}
        ?disabled=${disabled}
        ?error=${error}
        id=${id}
        .items=${items}
        mode=${mode}
        name="radio"
        size=${size}
        @onKeydown=${onKeydown}
        @onSelect=${onSelect}
        defaultSelectedItem=${defaultSelectedItem}
      ></gds-single-select>
    </gds-label>
  `;

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
  "aria-label": "An example of a single select",
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
  "aria-label": "An example of a single select with a label",
  // defaultSelectedItem: "item-2",
};
