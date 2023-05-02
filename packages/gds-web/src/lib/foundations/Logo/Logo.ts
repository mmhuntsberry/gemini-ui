import { LogoSize, Mode } from "@nielsen-media/gds-types";
import { css, LitElement } from "lit";
import { property, customElement } from "lit/decorators.js";

import { logos, icon } from "./assets/logos";

export interface GDSLogo {
  "icon-only"?: boolean;
  logo?: "nielsen" | "gracenote";
  mode?: Mode;
  size?: LogoSize;
}

@customElement(`gds-logo`)
export class GDSLogo extends LitElement {
  static override styles = [
    css`
      :host {
        display: inline-flex;
      }
    `,
  ];

  @property({ reflect: true }) "icon-only"? = false;
  @property() logo?: "nielsen" | "gracenote" = "nielsen";
  @property() mode?: Mode = "light";
  @property() size?: LogoSize = "regular";

  override render() {
    if (!this.logo) return;
    /**
     * Switch between the different logos.
     */

    if (this.logo === "gracenote") {
      if (this.mode === "light") {
        if (this.size === "regular" || this.size === "compact") {
          return logos[this.logo].regular?.light;
        }
      } else {
        return logos[this.logo].regular?.dark;
      }
    }

    if (this["icon-only"] === true) {
      if (this.mode === "light") {
        if (this.size === "compact") {
          return icon[this.logo].compact?.light;
        } else {
          return icon[this.logo].regular.light;
        }
      } else {
        if (this.size === "compact") {
          return icon[this.logo].compact?.dark;
        } else {
          return icon[this.logo].regular.dark;
        }
      }
    } else {
      if (this.mode === "light") {
        if (this.size === "compact") {
          return logos[this.logo].compact?.light;
        } else {
          return logos[this.logo].regular.light;
        }
      } else {
        if (this.size === "compact") {
          return logos[this.logo].compact?.dark;
        } else {
          return logos[this.logo].regular.dark;
        }
      }
    }
  }
}
