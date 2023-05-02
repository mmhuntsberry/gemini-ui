import { html, TemplateResult } from "lit";

import { GDSMenuSingle } from "@nielsen-media/gds-types";
import "./Single";

export default {
  title: "Internal/Components/Inputs/Menu",
  component: "gds-menu-single",

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

const Template: Story<GDSMenuSingle> = ({
  defaultSelectedItem = "",
  mode,
  size,
  onSelect,
  onKeydown,
}: GDSMenuSingle) =>
  html`
    <gds-menu-single
      defaultSelectedItem=${defaultSelectedItem}
      .mode=${mode}
      .size=${size}
      .items=${[
        { id: "item-1", label: "Item 1", value: "item1" },
        { id: "item-2", label: "Item 2", value: "item2" },
        { id: "item-3", label: "Item 3", value: "item3" },
      ]}
      @onKeydown=${onKeydown}
      @onSelect=${onSelect}
    >
    </gds-menu-single>
  `;

export const Single = Template.bind({});

Single.args = {
  mode: "light",
  size: "compact",
  defaultSelectedItem: "item-2",
};
