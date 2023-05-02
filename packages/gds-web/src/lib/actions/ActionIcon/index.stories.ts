import { html, TemplateResult } from "lit";
import "prismjs";
import "lit-code";
import type { GDSActionIcon } from "./ActionIcon";
import "./ActionIcon";
import "../../content/Table/Table";
import "./index.stories.scss";
import { createColumnHelper } from "@tanstack/table-core";

type Property = {
  propertyName: string;
  type: string;
  default: string;
  description: string;
};

const properties: Property[] = [
  {
    propertyName: "aria-label",
    type: "string",
    default: "",
    description: "Accessibility label for the button.",
  },
  {
    propertyName: "disabled",
    type: "boolean",
    default: "false",
    description: "If true, the button is disabled and cannot be clicked.",
  },
  {
    propertyName: "foreground",
    type: "Colors",
    default: "gray",
    description: "Color of the icon.",
  },
  {
    propertyName: "foreground-level",
    type: "ColorsLevel",
    default: "900",
    description: "Color Level of the icon.",
  },
  {
    propertyName: "icon",
    type: "DisplayIcon",
    default: "hiking",
    description:
      "Icon to display in the button. Can be any icon available in the DisplayIcon type.",
  },
  {
    propertyName: "mode",
    type: "Mode",
    default: "light",
    description: "Color Mode",
  },
  {
    propertyName: "size",
    type: "Size",
    default: "regular",
    description: "Size of the Icon.",
  },
];

const columnHelper = createColumnHelper<Property>();
const propertiesColumns = [
  columnHelper.accessor((row) => row.propertyName, {
    id: "propertyName",
    header: "Property Name",
    cell: (props) => html`<div>${props.getValue()}</div>`,
  }),
  columnHelper.accessor((row) => row.type, {
    id: "type",
    header: "Type",
    cell: (props) => html`<div>${props.getValue()}</div>`,
  }),
  columnHelper.accessor((row) => row.default, {
    id: "default",
    header: "Default",
    cell: (props) => html`<div>${props.getValue()}</div>`,
  }),
  columnHelper.accessor((row) => row.description, {
    id: "Description",
    header: "Description",
    cell: (props) => html`<div>${props.getValue()}</div>`,
  }),
];

export default {
  title: "Components/Actions/Action Icon",
  component: "gds-action-icon",
  argTypes: {
    icon: {
      options: [
        "archive",
        "caret-down",
        "close",
        "copy",
        "delete",
        "duplicate",
        "eye-hide",
        "eye-see",
        "favorites",
        "info",
        "menu",
        "notifications",
        "search",
        "settings",
      ],
      control: { type: "select" },
    },
    foreground: {
      control: {
        type: "select",
        options: [
          "none",
          "default",
          "blurple",
          "aqua",
          "gray",
          "eggplant",
          "blue",
          "green",
          "red",
          "yellow",
          "orange",
        ],
      },
    },
    "foreground-level": {
      control: {
        type: "select",
        options: [
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
      },
    },
    mode: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    "aria-label": {
      control: { type: "text" },
    },
    onClick: {
      action: "click",
    },
    size: {
      options: ["jumbo", "regular", "compact", "tiny"],
      control: { type: "select" },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<GDSActionIcon> = ({
  "aria-label": ariaLabel = "",
  disabled = false,
  foreground = "gray",
  "foreground-level": foregroundLevel = "900",
  icon = "close",
  mode = "light",
  size = "regular",
}: GDSActionIcon) => {
  return html`
    <main>
    <h1 class="gds-size-800-semibold">GDSActionIcon</h2>
      <p>
        GDSActionIcon is a web component that represents an action or function.
        It is a button with a display icon inside. The user can interact with
        the button by clicking or tapping on it.
      </p>
      <gds-link>FIGMA</gds-link>
      <gds-link>REPO</gds-link>
      <gds-link>REACT WRAPPER</gds-link>
      <h2 class="gds-size-600-semibold my-space-0 mt-space-500">Example</h2>
      <em class="d-block gds-size-300-regular text-gray-400 mb-space-500">
        Use the Storybook controls below to toggle different properties on the component.
      </em>
      <gds-action-icon
        class="d-block mb-space-500"
        aria-label=${ariaLabel}
        icon=${icon}
        size=${size}
        foreground=${foreground}
        foreground-level=${foregroundLevel}
        ?disabled=${disabled}
        mode=${mode}
        @click=${() => console.log("Click")}
      ></gds-action-icon>

      <h2 class="gds-size-600-semibold">Properties</h2>
      <gds-table
        .data=${properties}
        .columns=${propertiesColumns}
        headerSize="regular"
        background="default"
        mode="light"
        rowSize="regular"
        .searchOnly=${false}
        .sortable=${false}
        textAlignment="left"
        .withHeader=${true}
      ></gds-table>
      <h2 class="gds-size-600-semibold">Slots</h2>
      <p>
        NA
      </p>
      <h2 class="gds-size-600-semibold">Tag</h2>
      <p>
        TBD...
      </p>
     <h2 class="gds-size-600-semibold">Usage</h2>
      <p>
        TBD...
      </p>
    </main>
  `;
};

export const ActionIcon = Template.bind({});
ActionIcon.args = {
  mode: "light",
  size: "regular",
  icon: "close",
  foreground: "gray",
  "foreground-level": "900",
  disabled: false,
};

// @ts-expect-error Template interface should be extended.
ActionIcon.parameters = {
  docs: {
    source: {
      code: "<gds-action-icon></gds-action-icon>",
      language: "html",
      type: "auto",
    },
  },
};
