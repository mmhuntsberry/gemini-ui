import { html, TemplateResult } from "lit";
import { GDSCard } from "@nielsen-media/gds-types";

import "./Card";

export default {
  title: "Components/Content/Card",
  component: "gds-card",
  argTypes: {
    size: {
      options: ["compact", "regular"],
      control: { type: "select" },
    },
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSCard> = ({
  size = "regular",
  mode = "light",
}: GDSCard) => html`
  <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 8px;">
    <gds-card size=${size} mode=${mode} style=" grid-column: 1 / -1;">
    </gds-card>
    <gds-card size=${size} mode=${mode}> </gds-card>
    <gds-card size=${size} mode=${mode}> </gds-card>
  </div>
`;

export const Card = Template.bind({});
Card.args = {
  size: "regular",
  mode: "light",
};
