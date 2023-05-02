import { GDSMenuMulti } from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";

import "./Multi";

export default {
  title: "Internal/Components/Inputs/Menu",
  component: "gds-menu-multi",

  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
      defaultValue: "light",
    },
    size: {
      options: ["regular", "compact"],
      control: { type: "select" },
    },
    disabled: {
      disable: true,
    },
    type: {
      options: ["standard", "n1"],
      control: { type: "select" },
    },
    onSelect: {
      action: "onSelect",
    },
    onKeydown: {
      action: "onKeydown",
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSMenuMulti> = ({
  defaultSelectedItems = [],
  mode = "light",
  size = "compact",
  disabled = false,
  type = "standard",
  width = "",
  onKeydown,
  onSelect,
}: GDSMenuMulti) =>
  html`
    <gds-menu-multi
      .defaultSelectedItems=${defaultSelectedItems}
      .items=${[
        { id: "item-1", label: "Item 1", value: "item1" },
        { id: "item-2", label: "Item 2", value: "item2" },
        { id: "item-3", label: "Item 3", value: "item3" },
      ]}
      mode=${mode}
      size=${size}
      ?disabled=${disabled}
      type=${type}
      width=${width}
      @onSelect=${onSelect}
      @onKeydown=${onKeydown}
    >
    </gds-menu-multi>
  `;

export const Multi = Template.bind({});

Multi.args = {
  mode: "light",
  size: "compact",
  disabled: false,
  type: "standard",
  width: "256px",
  defaultSelectedItems: ["item-2"],
};
