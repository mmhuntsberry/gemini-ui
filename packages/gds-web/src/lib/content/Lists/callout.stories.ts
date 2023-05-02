import { html, TemplateResult } from "lit";
import { GDSCallout, ListCalloutSize } from "@nielsen-media/gds-types";

import "./Callout";

export default {
  title: "Components/Content/Lists/Callout Group",
  component: "gds-callout",
  argTypes: {
    size: {
      options: ["compact", "regular", "jumbo"],
      control: { type: "radio" },
    },
    mode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    direction: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const getIconSize = (size: ListCalloutSize) => {
  switch (size) {
    case "regular":
      return "40";
    case "compact":
      return "32";
    default:
      return "48";
  }
};

const arr = new Array(10).fill(0);

const Template: Story<GDSCallout> = ({
  size = "regular",
  mode = "light",
  direction = "horizontal",
}: GDSCallout) => html`
  <gds-callout size=${size} mode=${mode} direction=${direction}>
    ${arr.map(
      (x) =>
        html`
          <gds-callout-item size=${size} mode=${mode} alignment="left">
            <gds-display-icon-bg
              mode=${mode}
              slot="icon"
              icon="dashboard"
              foreground="aqua"
              foreground-level="${mode === "light" ? "600" : "400"}"
              size=${getIconSize(size)}
              background="aqua"
              .outlined=${false}
            ></gds-display-icon-bg>
            <gds-trend
              slot="trend"
              size=${size}
              mode=${mode}
              trend="up"
              .background=${true}
            >
              5.2%
            </gds-trend>
          </gds-callout-item>
        `
    )}
  </gds-callout>
`;

export const CalloutGroup = Template.bind({});
CalloutGroup.args = {
  size: "regular",
  mode: "light",
};
