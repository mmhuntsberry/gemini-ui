import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "../../foundations/DisplayIcon/DisplayIcon";

import {
  Colors,
  ColorsLevel,
  DisplayIcon,
  Mode,
  Size,
} from "@nielsen-media/gds-types";

import styles from "./index.scss?inline";

export interface GDSActionIcon {
  "aria-label"?: string;
  disabled?: boolean;
  foreground?: Colors;
  "foreground-color"?: ColorsLevel;
  icon?: DisplayIcon;
  mode?: Mode;
  size?: Size;
}

@customElement("gds-action-icon")
export class GDSActionIcon extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() "aria-label"? = "";
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property() foreground?: Colors = "gray";
  @property() "foreground-level"?: ColorsLevel = "900";
  @property() icon?: DisplayIcon = "close";
  @property() mode?: Mode = "light";
  @property() size?: Size = "regular";

  /**
   * Action Icons sizes defer from Display Icons.
   * This function determines the correct size for
   * the icon needed.
   */
  private getIconSize(): number {
    switch (this.size) {
      case "jumbo":
        return 28;
      case "compact":
        return 20;
      case "tiny":
        return 16;
      // case regular
      default:
        return 24;
    }
  }

  override render() {
    return html`
      <button
        aria-label="${this["aria-label"] ? this["aria-label"] : undefined}"
        ?disabled=${this.disabled}
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        size=${ifDefined(this.size ? this.size : undefined)}
        type="button"
      >
        <gds-display-icon
          foreground=${this.foreground}
          foreground-level=${this.mode === "dark"
            ? "200"
            : this["foreground-level"]}
          icon=${this.icon}
          icon-type="action"
          ?outlined="true"
          size=${this.getIconSize()}
        >
        </gds-display-icon>
      </button>
    `;
  }
}
