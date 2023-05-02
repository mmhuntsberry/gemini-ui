import {
  LinkColor,
  LinkSize,
  LinkWeight,
  Mode,
} from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";
import "./Link";

export default {
  title: "Components/Navigation/Link",
  component: "gds-link",
  argTypes: {
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
      defaultValue: "light",
    },
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" },
      defaultValue: "primary",
    },
    size: {
      options: [
        "0",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "1000",
      ],
      control: { type: "select" },
      defaultValue: "500",
    },
    underlined: {
      disable: true,
      defaultValue: false,
    },
    weight: {
      options: ["regular", "bold"],
      control: { type: "select" },
      defaultValue: "bold",
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  color?: LinkColor;
  href?: string;
  mode?: Mode;
  size?: LinkSize;
  underlined?: boolean;
  weight?: LinkWeight;
}

const Template: Story<ArgTypes> = ({
  mode = "light",
  color = "primary",
  href = "#",
  size = "500",
  underlined = false,
  weight = "bold",
}: ArgTypes) =>
  html`
    <gds-link
      mode=${mode}
      color=${color}
      href=${href}
      size=${size}
      .underlined=${underlined}
      .weight=${weight}
    >
      Link Text
    </gds-link>
  `;

export const Link = Template.bind({});
Link.args = {
  mode: "light",
  color: "primary",
  href: "#",
  size: "500",
  underlined: false,
  weight: "bold",
};
