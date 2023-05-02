import { GDSRadioGroup } from "@nielsen-media/gds-types";
import { html, TemplateResult } from "lit";
import "./RadioGroup";

export default {
  title: "Components/Inputs/Radio",
  component: "gds-radio-group",
  argTypes: {
    direction: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
      defaultValue: "horizontal",
    },
    onClick: {
      action: "click",
    },
    onKeydown: {
      action: "onKeydown",
    },
  },
  parameters: {
    componentSubtitle:
      "A radio group is a collection of graphical widgets that permits the user to make a single choice.",
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSRadioGroup> = ({
  direction = "horizontal",
  onClick,
  onKeydown,
}: GDSRadioGroup) =>
  html`
    <gds-radio-group
      @onClick=${onClick}
      @onKeydown=${onKeydown}
      direction=${direction}
    >
      <gds-radio
        id="0"
        name="radio"
        value="label-0"
        size="compact"
        mode="light"
        label="Label"
        helpText="Help text"
        ?disabled="false"
        ?error="false"
      >
        ></gds-radio
      >
      <gds-radio
        id="1"
        name="radio"
        value="label-1"
        size="compact"
        mode="light"
        label="Label"
        helpText="Help text"
        ?disabled="false"
        ?error="false"
        checked
      >
        ></gds-radio
      >
      <gds-radio
        id="2"
        name="radio"
        value="label-2"
        size="compact"
        mode="light"
        label="Label"
        helpText="Help text"
        ?disabled="false"
        ?error="false"
      >
        ></gds-radio
      >
    </gds-radio-group>
  `;

export const RadioGroup = Template.bind({});
RadioGroup.args = {
  direction: "horizontal",
};
