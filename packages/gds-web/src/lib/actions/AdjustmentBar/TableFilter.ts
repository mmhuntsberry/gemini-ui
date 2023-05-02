import { html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { property, customElement } from "lit/decorators.js";
import { MenuItem, Mode } from "@nielsen-media/gds-types";
import styles from "./table-filter.scss?inline";
import { GDSFilter } from "./Filter";
import { GDSSingleSelect } from "../../inputs/Select/Single";

export type AdjustmentBarFilter = {
  id: string;
  items: any[];
  mode: Mode;
};

@customElement("gds-table-filter")
export class GDSTableFilter extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() override id = "";
  @property() items: MenuItem[] = [];
  @property() mode?: Mode = "light";
  @property() filters: any = {
    "table-filter-0": {
      clause: "",
      column: "program-name",
      value: "Hello world!",
    },
    "table-filter-1": {
      clause: "and-1",
      column: "network",
      value: "Hello world!",
    },
  };

  handleClear = () => {
    const list = this.shadowRoot?.querySelectorAll("li[role='menu']");
    // const arr = Array.from(list);
  };

  addFilter = () => {
    const list = this.shadowRoot?.querySelector("ul[role='menu']");
    const el = new GDSFilter();
    el.items = this.items;
    el.name = `table-filter-${Object.keys(this.filters).length}`;

    el.addEventListener("input", (e) => {
      const filter = e.target as LitElement;
      const input = filter.shadowRoot?.querySelector(
        "gds-input"
      ) as HTMLInputElement;
    });

    el.addEventListener("blur", (e) => {
      const filter = e.target as LitElement;
      const input = filter.shadowRoot?.querySelector(
        "gds-input"
      ) as HTMLInputElement;
      const [clause, column] = filter.shadowRoot?.querySelectorAll(
        "gds-single-select"
      ) as NodeListOf<GDSSingleSelect>;

      this.filters = this.filters = {
        ...this.filters,
        [input.name]: {
          clause: clause.currentlySelectedItem?.label,
          column: column.currentlySelectedItem?.label,
          value: input.value,
        },
      };
    });

    // Append a new input
    list?.appendChild(el);
  };

  override firstUpdated() {
    const list = this.shadowRoot?.querySelector("ul[role='menu']");
    Object.keys(this.filters)
      .slice(1)
      .map((x) => {
        const el = new GDSFilter();
        el.items = this.items;
        el.value = this.filters[x].value;
        el.name = `table-filter-${Object.keys(this.filters).length}`;
        el.defaultSelectedClause = this.filters[x].clause;
        el.defaultSelectedColumn = this.filters[x].column;
        list?.appendChild(el);
      });
  }

  override render() {
    return html` <div class="filter-container" mode=${this.mode}>
      <section class="container-header">
        <h5 class="header-title">Table Filters</h5>
        <gds-button
          aria-label="select-none"
          size="tiny"
          background="transparent"
          @keydown=${() => null}
          @click=${(e: MouseEvent) => {
            // e.stopPropagation();
            const btn = e.currentTarget as HTMLButtonElement;

            btn.focus();
            this.blur();
            this.handleClear();
          }}
          >Remove All</gds-button
        >
      </section>

      <ul
        id=${this.id}
        role="menu"
        mode=${ifDefined(this.mode ? this.mode : undefined)}
      >
        <li
          tabindex="-1"
          role="menu-item"
          mode=${ifDefined(this.mode ? this.mode : undefined)}
          @keydown="${() => null}"
        >
          <p>Where..</p>
          <gds-single-select
            .items=${this.items}
            defaultSelectedItem=${[this.filters["table-filter-0"].column]}
          ></gds-single-select>
          <gds-input
            name="table-filter-0"
            id="table-filter-0"
            .icon=${{
              name: "search",
            }}
            placeholder="Search..."
          ></gds-input>
          <gds-action-icon icon="close"></gds-action-icon>
        </li>
      </ul>
      <div class="add-filter-container">
        <gds-button
          @click=${this.addFilter}
          size="tiny"
          background="outlined"
          icon="add-circle"
          icon-position="left"
          >Add Filter</gds-button
        >
      </div>
    </div>`;
  }
}
