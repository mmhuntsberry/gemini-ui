import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement } from "lit/decorators.js";
import {
  LinkColor,
  LinkSize,
  LinkWeight,
  Mode,
} from "@nielsen-media/gds-types";

import styles from "./index.scss?inline";

export interface GDSLink {
  color?: LinkColor;
  mode?: Mode;
  href?: string;
  size?: LinkSize;
  underlined?: boolean;
  weight?: LinkWeight;
}

@customElement("gds-link")
export class GDSLink extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() color?: LinkColor = "primary";
  @property() mode?: Mode = "light";
  @property() href?: string = "#";
  @property() size?: LinkSize = "500";
  @property({ type: Boolean, reflect: true }) underlined?: boolean = false;
  @property() weight?: LinkWeight = "regular";

  override render() {
    return html`
      <a
        href=${this.href}
        style="font-size: var(--gds-font-size-${this.size})"
        color=${ifDefined(this.color ? this.color : undefined)}
        mode=${ifDefined(this.mode ? this.mode : undefined)}
        weight=${ifDefined(this.weight ? this.weight : undefined)}
        underlined=${ifDefined(this.underlined === true ? true : undefined)}
      >
        <span>
          <slot></slot>
        </span>
      </a>
    `;
  }
}
