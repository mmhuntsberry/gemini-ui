import { html, TemplateResult } from "lit";

import type { GDSSearch } from "./Search";
import "./Search";

export default {
  title: "In Development/Components/Inputs/Search",
  component: "gds-search",
  argTypes: {
    "aria-label": {
      control: { type: "text" },
      defaultValue: "Search",
    },
    value: {
      control: { type: "text" },
      defaultValue: "",
    },
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

const Template: Story<GDSSearch> = ({
  value = "",
  width = undefined,
  mode = "",
}: GDSSearch) =>
  html`
    <gds-search
      value=${value}
      mode=${mode}
      @input=${(e: any) => console.log(e.target.value)}
      width=${width}
    ></gds-search>
  `;

export const Search = Template.bind({});
Search.args = {
  mode: "light",
  value: "",
  width: "full",
};
