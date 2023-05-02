import {
  Colors,
  ColorsLevel,
  DisplayIcon,
  DisplayIconSize,
} from "@nielsen-media/gds-types";

import { html, TemplateResult } from "lit";

import "./DisplayIcon";

export default {
  title: "Foundations/Icons/Display Icon",
  component: "gds-display-icon",
  argTypes: {
    icon: {
      options: [
        "active-check",
        "add-circle",
        "add-custom-list",
        "add-document",
        "add-to-levels",
        "add-user",
        "add",
        "amazon",
        "android",
        "anomaly-status",
        "api",
        "app-switcher",
        "apple-logo",
        "archive",
        "arrow-down",
        "arrow-left",
        "arrow-right",
        "arrow-up",
        "attach",
        "attention",
        "bar-chart-horizontal",
        "bar-chart-vertical",
        "bring-back",
        "bring-backward",
        "bring-forward",
        "bring-front",
        "bubble-chart",
        "calculation-addition",
        "calculation-divide",
        "calculation-equal",
        "calculation-greater-than",
        "calculation-less-than",
        "calculation-multiply",
        "calculation-not-equal",
        "calculation-subtract",
        "calendar",
        "camera",
        "caret-down",
        "caret-left",
        "caret-right",
        "caret-up",
        "checkmark",
        "clear-list",
        "close",
        "collaboration",
        "collapse",
        "column",
        "comment",
        "copy",
        "crop",
        "ctv",
        "currency-dollar",
        "currency-euro",
        "currency-pound",
        "current-event",
        "custom-list",
        "cut",
        "dashboard",
        "data-cube",
        "data-grid",
        "data-pipeline",
        "database",
        "databases",
        "delete",
        "desktop-computer",
        "devices",
        "document",
        "download",
        "duplicate",
        "edit",
        "email",
        "ellipsis",
        "error",
        "expand",
        "export",
        "eye-hide",
        "eye-see",
        "favorites",
        "file-csv",
        "file-excel",
        "file-pdf",
        "file-powerpoint",
        "file-sheets",
        "file-slides",
        "file-zip",
        "filter",
        "flag",
        "flat-list",
        "flat-view",
        "folder",
        "full-screen",
        "full-screen-exit",
        "gracenote",
        "grid",
        "group",
        "hamburger-menu",
        "hiking",
        "households",
        "image",
        "inactive",
        "info",
        "laptop-computer",
        "levels",
        "link",
        "lock",
        "logout",
        "marketing-mix",
        "mass-edit",
        "menu",
        "merge",
        "microsoft",
        "move-drag-horizontal",
        "move-drag-vertical",
        "note",
        "notifications",
        "optimize",
        "organization",
        "page-first",
        "page-last",
        "paste",
        "pause",
        "pending",
        "people",
        "phone-mobile",
        "phone",
        "pin",
        "play",
        "print",
        "privacy-shield",
        "question",
        "radio-feed",
        "redo",
        "refresh",
        "report",
        "reset",
        "reset-alt",
        "retail-store",
        "save",
        "scattered-plot",
        "search",
        "selections",
        "send",
        "settings",
        "share",
        "shopping-purchase",
        "similar-segments",
        "soft-select",
        "sort-alpha",
        "spider-chart",
        "split-screen",
        "status-large",
        "status-small",
        "status",
        "story",
        "subtract",
        "sum",
        "support",
        "syndication",
        "tablet",
        "text",
        "throbber",
        "thumb-down",
        "thumb-up",
        "tree",
        "tv",
        "undo",
        "upload",
        "user-circle",
        "user-square",
        "visualization",
        "warning-alert",
        "with-begins",
        "with-ends",
        "work",
        "zoom-in",
        "zoom-out",
      ],
      control: { type: "select" },
      defaultValue: "hiking",
    },
    outlined: {
      disable: true,
      defaultValue: true,
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
    "aria-label": {
      control: { type: "text" },
    },
    size: {
      options: ["16", "24", "32", "40", "48", "64", "96"],
      control: { type: "select" },
      defaultValue: "24",
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  icon?: DisplayIcon;
  outlined?: boolean;
  size?: DisplayIconSize;
  foreground?: Colors;
  "foreground-level"?: ColorsLevel;
  "aria-label"?: string;
}

const Template: Story<ArgTypes> = ({
  icon = "hiking",
  size = "24",
  outlined = true,
  foreground = "gray",
  "foreground-level": foregroundLevel = "900",
  "aria-label": ariaLabel = "",
}: ArgTypes) => {
  return html`
    <gds-display-icon
      icon=${icon}
      size=${size}
      .outlined=${outlined}
      foreground=${foreground}
      foreground-level=${foregroundLevel}
      aria-label=${ariaLabel}
    ></gds-display-icon>
  `;
};

export const Icon = Template.bind({});

Icon.args = {
  icon: "arrow-down",
  size: "24",
  outlined: true,
  foreground: "gray",
  "foreground-level": "900",
  "aria-label": "",
};
