import { AdjustmentBarConfig } from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";

import "./AdjustmentBar";

const config: AdjustmentBarConfig = {
  search: {
    actions: {},
  },
  filter: {
    actions: {
      handleFilter: () => null,
    },
  },
  layout: {
    items: [
      {
        id: "item-1",
        label: "Points Per Game (PPG)",
        value: "item1",
        checked: false,
      },
      {
        id: "item-2",
        label: "Minutes Per Game (MPG)",
        value: "item2",
        checked: false,
      },
      {
        id: "item-4",
        label: "True Shooting Percentage (TS%)",
        value: "item4",
        checked: true,
      },
      {
        id: "item-5",
        label: "Win Shares (WS)",
        value: "item5",
        checked: false,
      },
      {
        id: "item-6",
        label: "Player Effciency Rating (PER)",
        value: "item6",
        checked: false,
      },
      {
        id: "item-7",
        label: "Value Over Replacement Player (VORP)",
        value: "item7",
        checked: false,
      },
    ],
  },
  sort: {
    value: "desc",
    defaultValue: "asc",
    action: () => null,
  },
  reset: {
    actions: {},
  },
};

export default {
  title: "In Development/Components/Actions/Adjustment Bar",
  component: "gds-adjustment-bar",
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  config?: AdjustmentBarConfig;
}

const Template: Story<ArgTypes> = ({ config = {} }: ArgTypes) => {
  return html` <gds-adjustment-bar .config=${config}></gds-adjustment-bar> `;
};

export const AdjustmentBar = Template.bind({});

AdjustmentBar.args = {
  config,
};
