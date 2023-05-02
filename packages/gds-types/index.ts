import { ColumnDef } from "@tanstack/table-core";

// Action Icon

export type ActionIconSize = "tiny" | "compact" | "regular" | "giant";

// AdjustmentBar
export type AdjustmentBarProps = {
  config?: AdjustmentBarConfig;
  mode?: Mode;
};

export type AdjustmentBarConfig = {
  search?: AdjustmentBarSearchConfigItems;
  filter?: AdjustmentBarFilterConfigItems;
  layout?: AdjustmentBarLayoutConfigItems;
  sort?: AdjustmentBarConfigItems;
  reset?: AdjustmentBarResetConfigItems;
};

export type AdjustmentBarConfigItems = {
  value: string;
  defaultValue: string;
  action: (e: MouseEvent) => void;
};

export type AdjustmentBarLayoutItem = {
  id: string;
  label: string;
  value: string;
  checked: boolean;
  action?: (e: MouseEvent) => void;
};

export type AdjustmentBarLayoutConfigItems = {
  items: AdjustmentBarLayoutItem[];
  defaultSelectedItems?: string[];
};

export type AdjustmentBarFilterConfigItems = {
  actions: {
    handleFilter: (e: MouseEvent) => void;
  };
};

export type AdjustmentBarSearchConfigItems = {
  actions: {
    handleClear?: (e: MouseEvent) => void;
    handleSearchTerm?: (e: MouseEvent) => void;
  };
};

export type AdjustmentBarResetConfigItems = {
  actions: {
    handleReset?: (e: MouseEvent) => void;
  };
};

// Alignments
export type TextAlign = "left" | "center" | "right";

// Buttons
export type ButtonBackground = "solid" | "outlined" | "transparent";
export type ButtonColor = "primary" | "secondary" | "tertiary" | "danger";
export type ButtonBorder = "left" | "right" | "all" | "none";
export type ButtonIconPosition = "left" | "right";
export type ButtonSizes = Size;
export type ButtonWidth = "auto" | "full";

// Card
export type CardSizes = "compact" | "regular";

// Checkbox
export type CheckboxSize = "regular" | "compact";

// Chip
export type ChipSize = "tiny" | "regular" | "compact";
export type ChipLeftIcon =
  | "none"
  | "move-drag-horizontal"
  | "move-drag-vertical";
export type ChipRightIcon = DisplayIcon;

// Colors
export type Colors =
  | "none"
  | "default"
  | "blurple"
  | "aqua"
  | "gray"
  | "eggplant"
  | "blue"
  | "green"
  | "red"
  | "yellow"
  | "orange"
  | "white"
  | "black";

export type ColorsLevel =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000";

// Icons
export type DisplayIcon =
  // Empty/No icon
  | "none"
  // IconList
  | "active-check"
  | "add-circle"
  | "add-custom-list"
  | "add-document"
  | "add-to-levels"
  | "add-user"
  | "add"
  | "amazon"
  | "android"
  | "anomaly-status"
  | "api"
  | "app-switcher"
  | "apple-logo"
  | "archive"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "attach"
  | "attention"
  | "bar-chart-horizontal"
  | "bar-chart-vertical"
  | "bring-back"
  | "bring-backward"
  | "bring-forward"
  | "bring-front"
  | "bubble-chart"
  | "calculation-addition"
  | "calculation-divide"
  | "calculation-equal"
  | "calculation-greater-than"
  | "calculation-less-than"
  | "calculation-multiply"
  | "calculation-not-equal"
  | "calculation-subtract"
  | "calendar"
  | "camera"
  | "caret-down"
  | "caret-left"
  | "caret-right"
  | "caret-up"
  | "checkmark"
  | "clear-list"
  | "close"
  | "collaboration"
  | "collapse"
  | "column"
  | "comment"
  | "copy"
  | "crop"
  | "ctv"
  | "currency-dollar"
  | "currency-euro"
  | "currency-pound"
  | "current-event"
  | "custom-list"
  | "cut"
  | "dashboard"
  | "data-cube"
  | "data-grid"
  | "data-pipeline"
  | "database"
  | "databases"
  | "delete"
  | "desktop-computer"
  | "devices"
  | "document"
  | "download"
  | "duplicate"
  | "edit"
  | "email"
  | "ellipsis"
  | "error"
  | "expand"
  | "export"
  | "eye-hide"
  | "eye-see"
  | "favorites"
  | "file-csv"
  | "file-excel"
  | "file-pdf"
  | "file-powerpoint"
  | "file-sheets"
  | "file-slides"
  | "file-zip"
  | "filter"
  | "flag"
  | "flat-list"
  | "flat-view"
  | "folder"
  | "full-screen"
  | "full-screen-exit"
  | "gracenote"
  | "grid"
  | "group"
  | "hamburger-menu"
  | "hiking"
  | "households"
  | "image"
  | "inactive"
  | "info"
  | "laptop-computer"
  | "levels"
  | "link"
  | "lock"
  | "logout"
  | "marketing-mix"
  | "mass-edit"
  | "menu"
  | "merge"
  | "microsoft"
  | "move-drag-horizontal"
  | "move-drag-vertical"
  | "note"
  | "notifications"
  | "optimize"
  | "organization"
  | "page-first"
  | "page-last"
  | "paste"
  | "pause"
  | "pending"
  | "people"
  | "phone-mobile"
  | "phone"
  | "pin"
  | "play"
  | "print"
  | "privacy-shield"
  | "question"
  | "radio-feed"
  | "redo"
  | "refresh"
  | "report"
  | "reset"
  | "reset-alt"
  | "retail-store"
  | "save"
  | "scattered-plot"
  | "search"
  | "selections"
  | "send"
  | "settings"
  | "share"
  | "shopping-purchase"
  | "similar-segments"
  | "soft-select"
  | "sort-alpha"
  | "spider-chart"
  | "split-screen"
  | "status-large"
  | "status-small"
  | "status"
  | "story"
  | "subtract"
  | "sum"
  | "support"
  | "syndication"
  | "tablet"
  | "text"
  | "throbber"
  | "thumb-down"
  | "thumb-up"
  | "tree"
  | "tv"
  | "undo"
  | "upload"
  | "user-circle"
  | "user-square"
  | "visualization"
  | "warning-alert"
  | "with-begins"
  | "with-ends"
  | "work"
  | "zoom-in"
  | "zoom-out";

export type DisplayIconSize =
  | "16"
  | "20"
  | "24"
  | "32"
  | "40"
  | "48"
  | "64"
  | "96";
export type DisplayIconPadding = "2" | "4" | "6" | "8";

// General
export type Size = "jumbo" | "regular" | "compact" | "tiny";
export type TextColor = "primary" | "secondary";
export type TextWeight = "regular" | "bold";
export type TextSize =
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000";

// Global Navigation
export type GlobalNavigationLogo = "nielsen" | "gracenote";
export type GlobalNavigationActions = {
  hamburger: {
    enabled: boolean;
    action?: (e: CustomEvent) => void;
  };
  search: {
    enabled: boolean;
    action?: (e: CustomEvent) => void;
  };
  notifications: {
    enabled: boolean;
    action?: (e: CustomEvent) => void;
  };
  support: {
    enabled: boolean;
    action?: (e: CustomEvent) => void;
  };
  switcher: {
    enabled: boolean;
    action?: (e: CustomEvent) => void;
  };
  user: {
    enabled: boolean;
    action?: (e: CustomEvent) => void;
  };
};

export type GlobalNavigationType = "gracenote" | "n1" | "standard";

// Icons
export type IconType = "action" | "display";

// Input
export type InputLabelSize = "compact" | "regular";
export type InputSize = "compact" | "regular";
export type InputIcon = {
  name: DisplayIcon;
  outlined: boolean;
};

export type InputType = "email" | "password" | "text";

// Links
export type LinkColor = "primary" | "secondary";
export type LinkSize =
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000";
export type LinkWeight = "regular" | "bold";

// ListCallout
export type ListCalloutSize = "compact" | "regular" | "jumbo";
export type ListGroupSize = "tiny" | "compact" | "regular" | "jumbo";
export type ListCalloutDirection =
  | "vertical"
  | "horizontal"
  | "horizontal-fixed";
export type ListItemWeight = "regular" | "semibold" | "bold";
export type ListItemSize = "compact" | "regular" | "jumbo";

export type ListCalloutItemAlignment = "left" | "center" | "right";
export type ListCalloutItemSize =
  | "tiny"
  | "compact"
  | "regular"
  | "jumbo"
  | "giant";

export type LogoSize = "regular" | "compact";

// Menus
export type MenuSize = "regular" | "compact";
export type MenuItem = {
  id: string;
  label: string;
  value: string;
};
export type MenuItemSize = "tiny" | "compact";
export type MenuType = "standard" | "n1";
export type MenuWidth = string | undefined;

// Module Switcher
export type ModuleSwitcherType = "standard" | "n1";
export type ModuleSwitcherBackground = ButtonBackground;

// Select
export type SelectSize = "compact" | "regular";

// Tables
export type TableHeaderSize = "tiny" | "compact";
export type TableRowSize = "tiny" | "compact" | "regular";

// Theme
export type Mode = "light" | "dark";

// Radio
export type RadioSize = "compact" | "regular";

// Switch
export type SwitchSize = "compact" | "regular";

// Toast
export type ToastType = "neutral" | "success";

// Trend
export type TrendSize = "compact" | "regular" | "jumbo" | "giant";
export type Trend = "up" | "down" | "zero";

// User
export type User = {
  name: string;
};

// Component Props
export type GDSActionIcon = {
  "aria-label"?: string;
  disabled?: boolean;
  foreground?: Colors;
  "foreground-color"?: ColorsLevel;
  icon?: DisplayIcon;
  mode?: Mode;
  size?: Size;
};

export type GDSAdjustmentBar = {
  // TBD
};

export type GDSButton = {
  "aria-label"?: string;
  background?: ButtonBackground;
  color?: ButtonColor;
  disabled?: boolean;
  icon?: DisplayIcon;
  "icon-position"?: ButtonIconPosition;
  mode?: Mode;
  rounded?: ButtonBorder;
  size?: ButtonSizes;
  width?: ButtonWidth;
};

export type GDSCard = {
  size?: CardSizes;
  mode?: Mode;
};

export type GDSCallout = {
  direction?: ListCalloutDirection;
  mode?: Mode;
  size?: ListCalloutSize;
};

export type GDSCalloutItem = {
  alignment?: ListCalloutItemAlignment;
  color?: Colors;
  "color-level": ColorsLevel;
  label?: string;
  mode?: Mode;
  size?: ListCalloutSize;
  value?: string;
  weight?: ListItemWeight;
};

export type GDSChip = {
  size?: ChipSize;
  color?: Colors;
  lefticon?: ChipLeftIcon;
  righticon?: ChipRightIcon;
  mode?: Mode;
  onClick?: (e: MouseEvent) => void;
};

export type GDSDisplayIcon = {
  foreground?: Colors;
  "foreground-level"?: ColorsLevel;
  icon: DisplayIcon;
  mode?: Mode;
  outlined?: boolean;
  size?: DisplayIconSize;
};

export type GDSDisplayIconBG = {
  background?: Colors;
  icon: DisplayIcon;
  mode?: Mode;
  outlined?: boolean;
  size?: DisplayIconSize;
};

export type GDSCheckbox = {
  "aria-label"?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  helpText?: string;
  id: string;
  indeterminate?: boolean;
  items?: GDSCheckbox[];
  label?: string;
  mode?: Mode;
  size?: CheckboxSize;
  value?: string;
  onClick?: (e: CustomEvent) => void;
};

export type GDSGlobalNavigation = {
  actions?: GlobalNavigationActions;
  logo?: GlobalNavigationLogo;
  mode?: Mode;
  modules?: MenuItem[];
  title?: string;
  type?: GlobalNavigationType;
  user?: User;
};

export type GDSInput = {
  "aria-label"?: string;
  alt?: boolean;
  disabled?: boolean;
  error?: boolean;
  id: string;
  icon?: InputIcon | undefined;
  mode?: Mode;
  name?: string;
  placeholder?: string;
  required?: boolean;
  size?: InputSize;
  type?: InputType;
  value?: string;
  onChange?: (e: CustomEvent) => void;
  onInput?: (e: CustomEvent) => void;
};

export type GDSLabel = {
  disabled?: boolean;
  error?: boolean;
  helpText?: string;
  id: string;
  label?: string;
  mode?: Mode;
  name?: string;
  required?: boolean;
  size?: InputLabelSize;
  value?: string;
};

export type GDSLink = {
  color?: LinkColor;
  mode?: Mode;
  href?: string;
  size?: LinkSize;
  underlined?: boolean;
  weight?: LinkWeight;
};

export type GDSListItem = {
  body?: string;
  color?: Colors;
  direction?: ListCalloutDirection;
  divider?: boolean;
  heading?: string;
  mode?: Mode;
  size?: ListItemSize;
  weight?: ListItemWeight;
};

export type GDSListGroup = {
  direction?: ListCalloutDirection;
  mode?: Mode;
  size?: ListGroupSize;
};

export type GDSLogo = {
  "icon-only"?: false;
  logo?: "nielsen" | "gracenote";
  mode?: Mode;
  size?: LogoSize;
};

export type GDSMenuSingle = {
  defaultSelectedItem?: string;
  disabled?: boolean;
  divider?: boolean;
  /**
   * Items is optional in this type because of how React works with web components.
   * we have to attach items using a ref element in React.  Pain but mandatory for now...
   * */
  items?: MenuItem[];
  mode?: Mode;
  size?: MenuSize;
  type?: MenuType;
  width?: MenuWidth;
  onSelect?: (e: CustomEvent) => void;
  onKeydown?: (e: CustomEvent) => void;
};

export type GDSMenuMulti = {
  defaultSelectedItems?: string[]; // array of ids
  disabled?: boolean;
  divider?: boolean;
  /**
   * Items is optional in this type because of how React works with web components.
   * we have to attach items using a ref element in React.  Pain but mandatory for now...
   * */
  items?: MenuItem[];
  mode?: Mode;
  size?: MenuSize;
  type?: MenuType;
  width?: MenuWidth;
  onSelect?: (e: CustomEvent) => void;
  onKeydown?: (e: CustomEvent) => void;
};

export type SwitchMenuItem = MenuItem & {
  checked: boolean;
  action?: (e: MouseEvent) => void;
};

export type GDSMenuSwitch = {
  id: string;
  /**
   * Items is optional in this type because of how React works with web components.
   * we have to attach items using a ref element in React.  Pain but mandatory for now...
   * */
  items?: SwitchMenuItem[];
  mode?: Mode;
  size?: MenuSize;
  width?: string | undefined;
};

export type GDSModuleSwitcher = {
  disabled?: boolean;
  mode?: Mode;
  type?: ModuleSwitcherType;
};

export type GDSRadio = {
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  helpText?: string;
  id: string;
  label?: string;
  mode?: Mode;
  name?: string;
  size?: RadioSize;
  value?: string;
  onClick?: (e: CustomEvent) => void;
};

export type GDSRadioGroup = {
  direction: "horizontal" | "vertical";
  id: string;
  onClick?: (e: Event) => void;
  onKeydown?: (e: KeyboardEvent) => void;
};

export type GDSSearch = {
  "aria-label"?: string;
  mode?: Mode;
  value?: string | undefined;
  width?: "full" | undefined;
};

export type GDSSelect = {
  "aria-label"?: string;
  alt?: boolean;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  id: string;
  mode?: Mode;
  name?: string;
  size?: SelectSize;
  // onClick?: (e: CustomEvent) => void;
};

export type GDSSingleSelect = {
  "aria-label"?: string;
  alt?: boolean;
  error?: boolean;
  defaultSelectedItem?: string;
  disabled?: boolean;
  id: string;
  items: MenuItem[];
  mode?: Mode;
  size?: SelectSize;
  onKeydown?: (e: CustomEvent) => void;
  onSelect?: (e: CustomEvent) => void;
};

export type GDSSwitch = {
  checked?: boolean;
  disabled?: boolean;
  helpText?: string;
  id: string;
  label?: string;
  mode?: Mode;
  size?: SwitchSize;
  onChange?: (e: CustomEvent) => void;
};

export type GDSToast = {
  mode?: Mode;
  show?: boolean;
  message?: string;
  type?: ToastType;
  timeout?: number;
};

export type GDSTrend = {
  background?: boolean;
  mode?: Mode;
  trend?: Trend;
  size?: TrendSize;
};

// Charts
export type GDSBarChart = {
  mode?: Mode;
  data: any[];
  y: (d: any) => typeof d;
  x: (d: any) => typeof d;
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingInner?: number;
  paddingOuter?: number;
  tickFontSize?: string;
  chartTitle?: string;
  xAxisTitle?: string;
  yAxisTitle?: string;
};

export type GDSTable<T> = {
  columns: ColumnDef<T, any>[];
  data: T[];
  background?: Colors;
  headerSize?: TableHeaderSize;
  mode?: Mode;
  rowSize?: TableRowSize;
  searchOnly?: boolean;
  sortable?: boolean;
  tableTitle?: string;
  textAlignment?: TextAlign;
  withHeader?: boolean;
};

export type GDSTableLabel = {
  mode?: Mode;
  weight?: "regular" | "bold";
};
