import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement } from "lit/decorators.js";
import { MenuItem, Mode } from "@nielsen-media/gds-types";
import styles from "./filter.scss?inline";

export type AdjustmentBarFilterProps = {
  id: string;
  items: any[];
  mode: Mode;
};

@customElement("gds-filter")
export class GDSFilter extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() override id = "";
  @property() items: MenuItem[] = [];
  @property() mode?: Mode = "light";
  @property() name = "";
  @property() value = "";
  @property() defaultSelectedClause? = ["and-1"];
  @property() defaultSelectedColumn? = [];

  override connectedCallback(): void {
    super.connectedCallback();
  }

  handleClear = () => null;

  override render() {
    return html` <li class="filter-container" mode=${this.mode}>
      <gds-single-select
        .items=${[
          { id: "and-1", label: "AND", value: "" },
          { id: "or-1", label: "OR", value: "" },
        ]}
        defaultSelectedItem=${this.defaultSelectedClause}
      ></gds-single-select>
      <gds-single-select
        .items=${this.items}
        defaultSelectedItem=${this.defaultSelectedColumn}
      ></gds-single-select>
      <gds-input
        id=${`filter-${this.name}`}
        .icon=${{
          name: "search",
        }}
        name=${this.name}
        placeholder="Search..."
        value=${ifDefined(this.value ? this.value : undefined)}
      ></gds-input>

      <gds-action-icon
        icon="close"
        @click=${(e: MouseEvent) => {
          const btn = e.currentTarget as HTMLButtonElement;
          btn.parentElement?.remove();
        }}
      ></gds-action-icon>
    </;o>`;
  }
}
