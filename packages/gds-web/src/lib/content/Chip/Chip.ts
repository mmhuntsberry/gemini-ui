import {
  ChipLeftIcon,
  ChipRightIcon,
  ChipSize,
  Colors,
  Mode,
} from "@nielsen-media/gds-types";
import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement } from "lit/decorators.js";
import styles from "./index.scss?inline";

export interface GDSChip {
  color?: Colors;
  lefticon?: ChipLeftIcon;
  righticon?: ChipRightIcon;
  mode?: Mode;
  size?: ChipSize;
  onClick?: (e: MouseEvent) => void;
}

@customElement("gds-chip")
export class GDSChip extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() color?: Colors = "gray";
  @property() lefticon?: ChipLeftIcon = "none";
  @property() righticon?: ChipRightIcon = "none";
  @property() mode?: Mode = "light";
  @property() size?: ChipSize = "regular";
  @property() onClick?: (e: MouseEvent) => void;

  getClassNames() {
    let classString = "gds-chip";

    if (this.size) {
      classString += ` ${this.size}`;
    }
    if (this.color) {
      classString += ` ${this.color === "default" ? "gray" : this.color}`;
    }
    if (this.mode) {
      classString += ` ${this.mode}`;
    }

    return classString.trim();
  }

  getActionIconSize() {
    if (this.size === "regular" || this.size === "compact") {
      return "compact";
    } else {
      return "tiny";
    }
  }
  getDisplayIconSize() {
    if (this.size === "regular" || this.size === "compact") {
      return "20";
    } else {
      return "16";
    }
  }

  getIconColor() {
    if (this.mode === "light") {
      return { foreground: "black", foregroundLevel: "0" };
    } else {
      return { foreground: "white", foregroundLevel: "0" };
    }
  }

  override render() {
    const { foreground, foregroundLevel } = this.getIconColor();
    return html`
      <div
        class="${this.getClassNames()}"
      >
        ${
          /**
           * The icon on the left will always be
           * a drag type of icon and should be handled
           * that way when we set up drag events.
           */
          this.lefticon !== "none"
            ? html`
                <gds-display-icon
                  class="left-icon"
                  icon=${this.lefticon}
                  size=${this.getDisplayIconSize()}
                  mode=${this.mode}
                  foreground=${foreground}
                  foreground-level=${foregroundLevel}
                ></gds-display-icon>
              `
            : null
        }
        <span class="gds-chip-label">
          <slot></slot>
        </span>
        ${
          this.righticon !== "none"
            ? html`
                <gds-action-icon
                  class="right-icon"
                  icon=${this.righticon}
                  size=${this.getActionIconSize()}
                  mode=${this.mode}
                  foreground=${foreground}
                  foreground-level=${foregroundLevel}
                  @click=${this.onClick}
                ></gds-action-icon>
              `
            : undefined
        }
      </div>
   </div>
    `;
  }
}
