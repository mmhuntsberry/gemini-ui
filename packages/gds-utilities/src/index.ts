import {
  Colors,
  ColorsLevel,
  DisplayIcon,
  Mode,
  Size,
} from "@nielsen-media/gds-types";

const getCalloutIconSize = (size: Size) => {
  switch (size) {
    case "regular":
      return "40";
    case "compact":
      return "32";
    default:
      return "48";
  }
};

const getListItemIconSize = (size: Size, direction: string) => {
  if (direction === "horizontal" || direction === "horizontal-fixed") {
    switch (size) {
      case "regular":
        return "20";
      case "compact":
        return "16";
      case "tiny":
        return "16";
      default:
        return "24";
    }
  } else {
    switch (size) {
      case "regular":
        return "40";
      case "compact":
        return "32";
      case "tiny":
        return "24";
      default:
        return "48";
    }
  }
};

const colorsList: Colors[] = [
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
];

const colorsLevelList: ColorsLevel[] = [
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
];

const displayIconList: DisplayIcon[] = [
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
];

const modeList: Mode[] = ["light", "dark"];

const defaultSizeList: Size[] = ["jumbo", "regular", "compact", "tiny"];

export {
  getCalloutIconSize,
  getListItemIconSize,
  colorsList,
  colorsLevelList,
  displayIconList,
  modeList,
  defaultSizeList,
};
