import {
  AdjustmentBarConfig,
  GDSAdjustmentBar,
} from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";

import "./TableFilter";
import { AdjustmentBarFilter } from "./TableFilter";

export default {
  title: "In Development/Components/Actions/Adjustment Bar",
  component: "gds-table-filter",
  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
      defaultValue: "light",
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

// interface ArgTypes {
//   config?: AdjustmentBarConfig;
// }

const Template: Story<AdjustmentBarFilter> = ({
  id = "",
  items = [],
  mode = "light",
}: AdjustmentBarFilter) => {
  return html`
    <gds-table-filter id=${id} .items=${items} mode=${mode}></gds-table-filter>
  `;
};

export const TableFilter = Template.bind({});

TableFilter.args = {
  id: "",
  items: [
    { id: "program-name", label: "Program Name", value: "program-name" },
    { id: "network", label: "Network", value: "network" },
    { id: "season", label: "Season", value: "season" },
    { id: "episode-number", label: "Episode Number", value: "episode-number" },
    { id: "platforms", label: "platforms", value: "platforms" },
  ],
  mode: "light",
};
