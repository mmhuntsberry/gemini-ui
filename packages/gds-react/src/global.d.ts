import type {
  GDSActionIcon,
  GDSDisplayIcon,
  GDSChip,
  GDSLink,
  GDSButton,
  GDSCheckbox,
  GDSModuleSwitcher,
  GDSBarChart,
  GDSCard,
  GDSCallout,
  GDSCalloutItem,
  GDSListGroup,
  GDSListItem,
  GDSInput,
  GDSLabel,
  GDSMenuMulti,
  GDSMenuSingle,
  GDSMenuSwitch,
  GDSRadio,
  GDSSingleSelect,
  GDSSwitch,
  GDSTable,
  GDSDisplayIconBG,
  GDSLogo,
  GDSRadioGroup,
} from "@nielsen-media/gds-types";

import * as React from "react";

export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gds-table": GDSTable & {
        ref?: React.RefObject<GDSTable>;
      };
      "gds-action-icon": GDSActionIcon & {
        id?: string;
        ref?: React.RefObject<HTMLButtonElement>;
      };
      // ADJ BAR - STILL WIP
      "gds-adjustment-bar": any & {
        ref?: React.RefObject<HTMLButtonElement>;
      };
      "gds-button": GDSButton & {
        children: React.ReactNode;
      };
      "gds-bar-chart": GDSBarChart & {
        ref?: React.RefObject<GDSBarChart>;
      };
      "gds-card": GDSCard & {
        children?: React.ReactNode;
      };
      "gds-callout": GDSCallout & {
        children?: React.ReactNode;
      };
      "gds-callout-item": GDSCalloutItem & {
        children?: React.ReactNode;
      };
      "gds-checkbox": GDSCheckbox & {
        ref?: React.RefObject<GDSCheckbox>;
      };
      "gds-chip": GDSChip & {
        children: React.ReactNode;
      };
      "gds-display-icon": GDSDisplayIcon & {
        ref?: React.RefObject<GDSDisplayIcon>;
      };
      "gds-display-icon-bg": GDSDisplayIconBG;
      "gds-input": GDSInput & {
        ref?: React.RefObject<GDSInput>;
      };
      "gds-label": GDSLabel & {
        children?: React.ReactNode;
      };
      "gds-link": GDSLink & {
        children: React.ReactNode;
      };
      "gds-list-group": GDSListGroup & {
        children: React.ReactNode;
      };
      "gds-list-item": GDSListItem & {
        children: React.ReactNode;
      };
      "gds-logo": GDSLogo;
      "gds-menu-multi": GDSMenuMulti & {
        ref?: React.RefObject<GDSMenuMulti>;
      };
      "gds-menu-single": GDSMenuSingle & {
        ref?: React.RefObject<GDSMenuSingle>;
      };
      "gds-menu-switch": GDSMenuSwitch & {
        ref?: React.RefObject<GDSMenuSwitch>;
      };
      "gds-module-switcher": GDSModuleSwitcher;
      "gds-radio": GDSRadio & {
        ref?: React.RefObject<GDSRadio>;
      };
      "gds-radio-group": GDSRadioGroup & {
        ref?: React.RefObject<GDSRadioGroup>;
        children?: React.ReactNode;
      };
      "gds-single-select": GDSSingleSelect & {
        ref?: React.RefObject<GDSSingleSelect>;
      };
      "gds-search": GDSSingleSelect & {
        ref?: React.RefObject<GDSSingleSelect>;
      };
      "gds-switch": GDSSwitch & {
        ref?: React.RefObject<GDSSwitch>;
      };
    }
  }
}
