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

export interface GDSDisplayIcon {
  foreground?: Colors;
  "foreground-level"?: ColorsLevel;
  icon: DisplayIcon;
  mode?: Mode;
  outlined?: boolean;
  size?: DisplayIconSize;
}

@customElement(`gds-display-icon`)
export class GDSDisplayIcon extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() foreground?: Colors = "gray";
  @property() "foreground-level"?: ColorsLevel = "900";
  @property() icon: DisplayIcon = "hiking";
  @property() mode?: Mode = "light";
  @property() outlined? = true;
  @property() size?: DisplayIconSize = "24";

  @state() private "icon-type": IconType = "display";

  renderIcon = () => {
    if (!this.foreground || !this["foreground-level"] || !this.size) return;

    switch (this.outlined) {
      case false:
        return icons[this.icon].fill(
          this["icon-type"],
          this.size,
          this.foreground,
          this["foreground-level"]
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
            this["foreground-level"]
          )
        ) {
          return icons[this.icon].outlined(
            this["icon-type"],
            this.size,
            this.foreground,
            this["foreground-level"]
          );
        } else {
          return icons[this.icon].fill(
            this["icon-type"],
            this.size,
            this.foreground,
            this["foreground-level"]
          );
        }
    }
  };

  override render() {
    return this.renderIcon();
  }
}
