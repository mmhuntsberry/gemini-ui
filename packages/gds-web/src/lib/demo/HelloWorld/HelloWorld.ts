// Required imports
import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement } from "lit/decorators.js";

// Import shared types
import { Mode } from "@nielsen-media/gds-types";

// Import styles from stylesheet
import styles from "./index.scss?inline";

// Custom Types can be added to `gds-types` package
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

// Give this new component a name
@customElement("gds-hello-world")
// Update this class to match web component name in camelCase.
export class GDSHelloWorld extends LitElement {
  // No need to do anything with styles its all set up!
  // Just add them in index.scss
  static override styles = unsafeCSS(styles);

  // Create Needed Component Props here...
  @property() color?: TextColor = "primary";
  @property() mode?: Mode = "light";
  @property() href?: string = "#";
  @property() size?: TextSize = "500";
  @property({ type: Boolean, reflect: true }) underlined?: boolean = false;
  @property() weight?: TextWeight = "regular";

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
