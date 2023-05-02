import { LitElement, unsafeCSS } from "lit";
import { property, customElement, state } from "lit/decorators.js";

import {
  Colors,
  ColorsLevel,
  DisplayIcon,
  DisplayIconSize,
  IconType,
  Mode,
} from "@nielsen-media/gds-types";

import styles from "./index.scss?inline";
import icons from "./assets/icons";

export interface GDSDisplayIconBG {
  background?: Colors;
  icon?: DisplayIcon;
  mode?: Mode;
  outlined?: boolean;
  size?: DisplayIconSize;
}

@customElement(`gds-display-icon-bg`)
export class GDSDisplayIconBG extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() background?: Colors = "gray";
  @property() icon?: DisplayIcon = "hiking";
  @property() mode?: Mode = "light";
  @property({ type: Boolean, reflect: true }) outlined? = true;
  @property() size?: DisplayIconSize = "24";

  @state() "background-level"?: ColorsLevel = "100";
  @state() foreground?: Colors = "gray";
  @state() "foreground-level"?: ColorsLevel = "600";
  @state() "icon-type"?: IconType = "display";

  override updated() {
    this.foreground = this.background;
    this["foreground-level"] = this.getIconForegroundLevel();
    this["background-level"] = this.getIconBackgroundLevel();
  }

  getIconForegroundLevel = (): ColorsLevel => {
    switch (this.background) {
      case "blurple":
        return this.mode === "dark" ? "400" : "600";
      case "aqua":
        return this.mode === "dark" ? "400" : "600";
      case "eggplant":
        return this.mode === "dark" ? "400" : "500";
      case "blue":
        return this.mode === "dark" ? "400" : "600";
      case "green":
        return this.mode === "dark" ? "400" : "700";
      case "red":
        return this.mode === "dark" ? "300" : "600";
      case "orange":
        return this.mode === "dark" ? "300" : "700";
      case "yellow":
        return this.mode === "dark" ? "500" : "800";
      // Case Gray
      default:
        return this.mode === "dark" ? "600" : "400";
    }
  };

  getIconBackgroundLevel = (): ColorsLevel => {
    switch (this.background) {
      case "blurple":
        return this.mode === "dark" ? "800" : "100";
      case "red":
        return this.mode === "dark" ? "800" : "100";
      case "orange":
        return this.mode === "dark" ? "800" : "100";
      default:
        return this.mode === "dark" ? "900" : "100";
    }
  };

  renderIcon = () => {
    if (
      !this.icon ||
      !this["icon-type"] ||
      !this.size ||
      !this.foreground ||
      !this["foreground-level"]
    )
      return;
    switch (this.outlined) {
      case false:
        return icons[this.icon].fill(
          this["icon-type"],
          this.size,
          this.foreground,
          this["foreground-level"],
          this.background,
          this["background-level"]
        );
      default:
        // There's a case where the outlined version
        // of an icon doesn't exist and in which case returns
        // null.  If null, return the fill version of the icon in its place.
        if (
          icons[this.icon].outlined(
            this["icon-type"],
            this.size,
            this.foreground,
            this["foreground-level"],
            this.background,
            this["background-level"]
          )
        ) {
          return icons[this.icon].outlined(
            this["icon-type"],
            this.size,
            this.foreground,
            this["foreground-level"],
            this.background,
            this["background-level"]
          );
        } else {
          return icons[this.icon].fill(
            this["icon-type"],
            this.size,
            this.foreground,
            this["foreground-level"],
            this.background,
            this["background-level"]
          );
        }
    }
  };

  override render() {
    return this.renderIcon();
  }
}
