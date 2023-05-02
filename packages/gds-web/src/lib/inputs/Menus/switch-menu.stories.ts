import { GDSMenuSwitch } from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";

import "./SwitchMenu";

export default {
  title: "Internal/Components/Inputs/Menu",
  component: "gds-menu-switch",

  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
      defaultValue: "light",
    },
    onSelect: {
      action: "onSelect",
    },
    onKeydown: {
      action: "onKeydown",
    },
    size: {
      options: ["regular", "compact"],
      control: { type: "select" },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSMenuSwitch> = ({
  mode = "light",
  size = "compact",
}: GDSMenuSwitch) =>
  html`
    <gds-menu-switch
      .mode=${mode}
      .size=${size}
      .items=${[
        { id: "item-1", label: "Points Per Game (PPG)", value: "item1" },
        { id: "item-2", label: "Minutes Per Game (MPG)", value: "item2" },
        {
          id: "item-4",
          label: "True Shooting Percentage (TS%)",
          value: "item4",
        },
        { id: "item-5", label: "Win Shares (WS)", value: "item5" },
        {
          id: "item-6",
          label: "Player Effciency Rating (PER)",
          value: "item6",
        },
        {
          id: "item-7",
          label: "Value Over Replacement Player (VORP)",
          value: "item7",
        },
      ]}
    >
    </gds-menu-switch>
  `;

export const Switch = Template.bind({});

Switch.args = {
  mode: "light",
  size: "compact",
};
