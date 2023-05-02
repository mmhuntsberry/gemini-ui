import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  createTable,
  getCoreRowModel,
  getSortedRowModel,
  Table,
  ColumnDef,
  SortingState,
  Updater,
  getFilteredRowModel,
} from "@tanstack/table-core";
import {
  Colors,
  Mode,
  TableHeaderSize,
  TableRowSize,
  TextAlign,
} from "@nielsen-media/gds-types";

import "./TableLabel";

import styles from "./index.scss?inline";
import searchStyles from "./table-search.scss?inline";

/**
 * Declaration Merging
 * Component file will export both interface and class under
 * the same variable name GDSTable
 */
export interface GDSTable<T> {
  columns: ColumnDef<T, any>[];
  data: T[];
  background?: Colors;
  headerSize?: TableHeaderSize;
  mode?: Mode;
  rowSize?: TableRowSize;
  searchOnly?: boolean;
  sortable?: boolean;
  tableTitle?: string;
  textAlignment?: TextAlign;
  withHeader?: boolean;
}

@customElement("gds-table")
export class GDSTable<T> extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() columns: ColumnDef<T, any>[] = [];
  @property() data: T[] = [];
  @property() background?: Colors = "default";
  @property() headerSize?: TableHeaderSize = "tiny";
  @property() mode?: Mode = "light";
  @property() rowSize?: TableRowSize = "regular";
  @property({ reflect: true }) searchOnly?: boolean = false;
  @property({ reflect: true }) sortable?: boolean = false;
  @property() tableTitle?: string = "";
  @property() textAlignment?: TextAlign = "left";
  @property({ reflect: true }) withHeader?: boolean = true;

  // @ts-expect-error We expect an error here because table state is not intialized.
  @state() table: Table<T>;

  @state() sorting: SortingState = [];
  @state() globalFilter = "";

  override firstUpdated(): void {
    if (!this.table) {
      this.createTable();
    }

    this.table.setOptions((prev) => ({
      ...prev,
      state: {
        ...prev.state,
        ...this.table.initialState, // Everything breaks if we remove this line.
        sorting: this.sorting,
      },

      data: this.data ? [...this.data] : [],
    }));
  }

  /**
   * Updates sorting state.
   */
  private setSorting = (updater: Updater<SortingState>) => {
    if (!this.sortable) return;
    if (updater instanceof Function) {
      this.sorting = updater(this.sorting);
    } else {
      this.sorting = updater;
    }

    // Update table with new sorting value
    this.table.setOptions((prev) => ({
      ...prev,
      state: {
        ...prev.state,
        sorting: this.sorting,
      },
    }));
  };

  createTable() {
    this.table = createTable({
      state: {
        sorting: this.sorting,
      },
      columns: this.columns ?? [],
      data: [],
      enableFilters: true,
      enableGlobalFilter: true,
      enableSorting: this.sortable,
      renderFallbackValue: null,
      globalFilterFn: (row, columnId, filterValue: string) => {
        /**
         * There an open issue - https://github.com/TanStack/table/issues/4280
         *
         * This causes us to have to convert any column
         * that may have a number type as it value to break the
         * table when filtering.
         *
         * Here we have to coerse numbers to strings to
         * hack around the error.
         */
        const search = filterValue.toLowerCase();

        let value = row.getValue(columnId) as string;
        if (typeof value === "number") value = String(value);

        return value?.toLowerCase().includes(search);
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onGlobalFilterChange: () => this.globalFilter,
      onSortingChange: this.setSorting,
      onStateChange: () => null,
    });
  }

  override updated() {
    if (this.sortable) {
      this.table.setOptions((prev) => ({
        ...prev,
        state: {
          ...prev.state,
        },
        enableSorting: this.sortable,
      }));
    }
  }

  override render() {
    if (!this.table) return;
    /**
     * !! NOTE
     *
     * The gds-table-search component here is a temporary solution.
     * Ideally, we want to use the gds-adjustment-bar component and pass the required inputs (see Table.bak file for example).
     * But...
     * The gds-adjustment-bar component will not render in a React environment.  Nor would
     * the gds-search component.
     *
     * A temporary workaround is to create a one off component below the table component and
     * render it.  Not sure why this is a working example but it did work.  We need to think
     * through how we can approach this when the gds-adjustment-bar comes into play and we
     * aren't just searching globally.
     */
    return html` ${this.tableTitle?.length
        ? html`<div class="table-title-container">
            <h3 size=${this.headerSize} class="table-title">
              ${this.tableTitle}
            </h3>
            ${this.searchOnly
              ? html`
                  <gds-table-search
                    width="full"
                    id="gds-adjustment-bar-search"
                    icon="search"
                    aria-label="search"
                    mode=${ifDefined(this.mode ? this.mode : "light")}
                    @input=${(e: MouseEvent) => {
                      const input = e.target as HTMLInputElement;

                      this.globalFilter = input.value;
                      this.table.getState().globalFilter = input.value;
                    }}
                    .handleClear=${() => {
                      this.globalFilter = "";
                      this.table.getState().globalFilter = "";
                    }}
                  >
                  </gds-table-search>
                `
              : null}
          </div>`
        : null}

      <div
        class="gds-table"
        mode=${ifDefined(this.mode ? this.mode : undefined)}
      >
        <table class="gds-table">
          ${this.withHeader
            ? html`
                <thead>
                  ${this.table.getHeaderGroups().map((headerGroup) => {
                    return html`
                      <tr>
                        ${headerGroup.headers.map((header) => {
                          return html`
                    <th class="gds-th" size=${this.headerSize} background=${
                            this.background
                          }>
                      <div class="gds-thead-inner">
                        <button
                          class="gds-column-sort"
                          text-alignment=${this.textAlignment}
                          withSortIcon=${header.column.getIsSorted()}
                          @click=${header.column.getToggleSortingHandler()}
                        >
                          <gds-table-label class"gds-table-label" mode=${
                            this.mode
                          }>
                              ${header.column.columnDef.header}
                          </gds-table-label>
                          ${
                            this.sortable
                              ? {
                                  asc: html`<gds-display-icon
                                    ref="{iconRef}"
                                    foreground-level="900"
                                    icon="arrow-up"
                                    .outlined=${false}
                                  ></gds-display-icon>`,
                                  desc: html`<gds-display-icon
                                    ref="{iconRef}"
                                    foreground-level="900"
                                    icon="arrow-down"
                                    .outlined=${false}
                                  ></gds-display-icon>`,
                                }[header.column.getIsSorted() as string] ?? null
                              : null
                          }
                        </button>
                      </div>
                    </th>
                  `;
                        })}
                      </tr>
                    `;
                  })}
                </thead>
              `
            : null}

          <tbody class="gds-tbody">
            ${this.table.getRowModel().rows.map((row) => {
              return html`
                <tr class="gds-tr">
                  ${row.getVisibleCells().map((cell) => {
                    return html`
                      <td
                        class="gds-td"
                        text-alignment=${this.textAlignment}
                        size=${ifDefined(this.rowSize ? this.rowSize : "tiny")}
                      >
                        ${cell.getValue()}
                      </td>
                    `;
                  })}
                </tr>
              `;
            })}
          </tbody>
        </table>
      </div>`;
  }
}

/**
 * !! NOTE
 *
 * The gds-table-search component here is a temporary solution.
 * Ideally, we want to use the gds-adjustment-bar component and pass the required inputs (see Table.bak file for example).
 * But...
 * The gds-adjustment-bar component will not render in a React environment.  Nor would
 * the gds-search component.
 *
 * A temporary workaround is to create a one off component below the table component and
 * render it.  Not sure why this is a working example but it did work.  We need to think
 * through how we can approach this when the gds-adjustment-bar comes into play and we
 * aren't just searching globally.
 */

@customElement("gds-table-search")
export class GDSTableSearch extends LitElement {
  static override styles = unsafeCSS(searchStyles);
  @property() value? = "";
  @property() width? = "";
  @property() handleClear?: (e: MouseEvent) => void;

  changeValue(event: MouseEvent) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  clearValue(e: MouseEvent) {
    this.value = "";

    const input = this.shadowRoot?.querySelector("input");
    input?.focus();

    if (this.handleClear) {
      this.handleClear(e);
    }
  }

  renderActionIcon() {
    if (this.value)
      if (this.value.length > 0) {
        return html`<gds-action-icon
          icon="close"
          size="compact"
          foreground="blurple"
          foreground-level="500"
          @click=${this.clearValue}
          @blur=${this.clearValue}
        ></gds-action-icon>`;
      }

    return null;
  }

  override render() {
    return html`
      <div
        id="input-container"
        class="input-container"
        rounded="left"
        width=${ifDefined(this.width ? this.width : "")}
        @click=${(e: MouseEvent) => {
          const inputContainer = e.currentTarget as HTMLDivElement;
          const input = inputContainer.children[1] as HTMLInputElement;

          input.setAttribute("foreground", "blurple");
          input.setAttribute("foreground-level", "600");
          input.focus();
        }}
      >
        <gds-display-icon
          icon="search"
          size="20"
          foreground=${this.value ? "blurple" : "gray"}
          foreground-level=${this.value ? "600" : "1000"}
        ></gds-display-icon>
        <input
          @input="${this.changeValue}"
          id="search"
          type="text"
          placeholder="Type to Search..."
          @blur=${(e: MouseEvent) => {
            const input = e.target as HTMLDivElement;
            const icon = input.parentElement?.children[0];
            icon?.setAttribute("foreground", "gray");
            icon?.setAttribute("foreground-level", "1000");
          }}
          .value=${this.value}
        />
        ${this.renderActionIcon()}
      </div>
    `;
  }
}
