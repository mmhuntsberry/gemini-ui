import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement } from "lit/decorators.js";

import {
  ButtonBackground,
  ButtonBorder,
  ButtonColor,
  ButtonIconPosition,
  ButtonSizes,
  ButtonWidth,
  Colors,
  ColorsLevel,
  DisplayIcon,
  Mode,
} from "@nielsen-media/gds-types";

import "../../foundations/DisplayIcon/DisplayIcon";
import styles from "./index.scss?inline";

export interface GDSButton {
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
}
@customElement("gds-button")
export class GDSButton extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() "aria-label"? = "";
  @property() background?: ButtonBackground = "solid";
  @property() color?: ButtonColor = "primary";
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property({ type: String, reflect: true }) icon?: DisplayIcon = "none";
  @property({ type: String, reflect: true })
  "icon-position"?: ButtonIconPosition = "right";
  @property() mode?: Mode = "light";
  @property() rounded?: ButtonBorder = "all";
  @property() size?: ButtonSizes = "compact";
  @property() width?: ButtonWidth;

  private getButtonIconColor = (): Colors => {
    switch (this.color) {
      case "primary":
        switch (this.background) {
          case "solid":
            return "white";
          case "outlined":
            return "blurple";
          case "transparent":
            return "blurple";
          default:
            return "white";
        }
      case "secondary":
        switch (this.background) {
          case "outlined":
            return this.mode === "dark" ? "white" : "black";
          case "transparent":
            return this.mode === "dark" ? "white" : "black";
          default:
            return this.mode === "dark" ? "black" : "white";
        }
      case "tertiary":
        switch (this.background) {
          case "outlined":
            return "blurple";
          case "transparent":
            return "blurple";
          default:
            return this.mode === "dark" ? "white" : "black";
        }
      case "danger":
        switch (this.background) {
          case "outlined":
            return "red";
          case "transparent":
            return "red";
          default:
            return "white";
        }
      default:
        return "white";
    }
  };

  private getButtonIconColorLevel = (): ColorsLevel => {
    switch (this.color) {
      case "primary":
        return this.mode === "dark" ? "400" : "500";
      case "secondary":
        return "100";
      case "tertiary":
        return this.mode === "dark" ? "400" : "500";
      case "danger":
        return this.mode === "dark" ? "400" : "500";

      default:
        return "100";
    }
  };

  override render() {
    let icon = null;
    if (this.icon !== "none" && this.background && this.color && this.mode) {
      icon = html`
        <gds-display-icon
          size=${this.size === "jumbo" ? "24" : "20"}
          icon=${this.icon}
          foreground=${this.getButtonIconColor()}
          foreground-level=${this.getButtonIconColorLevel()}
        >
        </gds-display-icon>
      `;
    }

    return html` <button
      aria-label="${this["aria-label"]}"
      background=${this.background}
      color=${ifDefined(this.color ? this.color : "primary")}
      mode=${ifDefined(this.mode ? this.mode : "light")}
      rounded=${ifDefined(this.rounded ? this.rounded : "all")}
      size=${ifDefined(this.size ? this.size : "")}
      width=${ifDefined(this.width ? this.width : "auto")}
      ?disabled="${ifDefined(this.disabled ? true : null)}"
    >
      ${this.icon !== "none" && this["icon-position"] === "left" && icon
        ? icon
        : null}
      <slot></slot>
      ${this.icon !== "none" && this["icon-position"] === "right" && icon
        ? icon
        : null}
    </button>`;
  }
}
