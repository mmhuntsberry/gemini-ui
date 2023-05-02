import { AdjustmentBarConfig, Mode } from "@nielsen-media/gds-types";
import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import styles from "./adjustment-bar.scss?inline";

const checkIfKeyExist = <T extends object>(
  objectName: T,
  keyName: string
): boolean => Object.keys(objectName).some((key) => key === keyName);

@customElement("gds-adjustment-bar")
export class GDSAdjustmentBar extends LitElement {
  static override styles = unsafeCSS(styles);
  @property() config?: AdjustmentBarConfig = {
    reset: {
      actions: {
        handleReset: (e: MouseEvent) => null,
      },
    },
  };
  @property() mode?: Mode = "light";
  @property({ reflect: true }) searchOnly?: boolean = false;
  @state() currentlySelectedModule = "";

  override updated() {
    if (this.searchOnly) return;
    // Grabs first and last elements in adjustment and rounds the
    // borders accordingly
    const els = this.shadowRoot?.children as HTMLCollection;
    const children = els[0];
    const elementsArray = [...children.children];
    const length = elementsArray.length;
    elementsArray[0].setAttribute("rounded", "left");
    elementsArray[length - 1].setAttribute("rounded", "right");
  }

  // TODO - SET UP ON OUTSIDE CLICK
  // override connectedCallback(): void {
  //   super.connectedCallback();
  //   document.addEventListener("click", this.onOutsideClick);
  // }

  // onOutsideClick = () => {
  //   this.currentlySelectedModule = "";
  // };

  override render() {
    if (this.searchOnly) {
      return html`<gds-search
        width="full"
        id="gds-adjustment-bar-search"
        icon="search"
        aria-label="search"
        mode=${ifDefined(this.mode ? this.mode : "light")}
        @input=${this.config?.search?.actions?.handleSearchTerm}
        .handleClear=${this.config?.search?.actions?.handleClear}
      >
      </gds-search>`;
    }
    // TODO if no config reset should be rounded all
    // if (isFalse(this.config))
    //   return html`<gds-adjustment-bar-item></gds-adjustment-bar-item>`;

    return html`
      <div class="container">
        ${this.config && checkIfKeyExist(this.config, "search")
          ? html`<gds-search
              id="gds-adjustment-bar-search"
              icon="search"
              aria-label="search"
              mode=${ifDefined(this.mode ? this.mode : "light")}
              @input=${this.config?.search?.actions?.handleSearchTerm}
              .handleClear=${this.config?.search?.actions?.handleClear}
            >
            </gds-search>`
          : null}
        ${this.config && checkIfKeyExist(this.config, "filter")
          ? html` <div class="filter__container">
              <button
                id="gds-adjustment-bar-filter"
                class=""
                icon="filter"
                aria-label="filter"
                mode=${ifDefined(this.mode ? this.mode : "light")}
                @click=${(e: MouseEvent) => {
                  e.stopPropagation();
                  const button = e.target as HTMLButtonElement;
                  if (this.currentlySelectedModule === button.id) {
                    this.currentlySelectedModule = "";
                  } else {
                    this.currentlySelectedModule = button.id;
                  }
                }}
              >
                <gds-display-icon
                  icon="filter"
                  size="20"
                  foreground="gray"
                  foreground-level="1000"
                ></gds-display-icon>
                Filter
              </button>
              ${this.currentlySelectedModule === "gds-adjustment-bar-filter"
                ? html`
                          <gds-table-filter
                            .items=${this?.config?.layout?.items}
                          ></gds-table-filter>
                        </div>
                      `
                : null}
            </div>`
          : null}
        ${this.config && checkIfKeyExist(this.config, "layout")
          ? html`
              <div class="layout__container">
                <button
                  id="gds-adjustment-bar-layout"
                  class=""
                  icon="column"
                  aria-label="layout"
                  mode=${ifDefined(this.mode ? this.mode : "light")}
                  @click=${(e: MouseEvent) => {
                    e.stopPropagation();
                    const button = e.target as HTMLButtonElement;
                    if (this.currentlySelectedModule === button.id) {
                      this.currentlySelectedModule = "";
                    } else {
                      this.currentlySelectedModule = button.id;
                    }
                  }}
                >
                  <gds-display-icon
                    icon="column"
                    size="20"
                    foreground="gray"
                    foreground-level="1000"
                  ></gds-display-icon>
                  Layout
                </button>
                ${this.currentlySelectedModule === "gds-adjustment-bar-layout"
                  ? html`
                          <gds-menu-switch
                            size="compact"
                            .items=${this?.config?.layout?.items}
                          ></gds-menu-switch>
                        </div>
                      `
                  : null}
              </div>
            `
          : null}
        ${this.config && checkIfKeyExist(this.config, "sort")
          ? html` <button
              id="gds-adjustment-bar-sort"
              class=""
              icon="sort"
              aria-label="sort"
              mode=${ifDefined(this.mode ? this.mode : "light")}
              @click=${this.config?.sort?.action}
            >
              <gds-display-icon
                icon=${this.config?.sort?.value === "desc"
                  ? "arrow-down"
                  : "arrow-up"}
                size="20"
                foreground="gray"
                foreground-level="1000"
                .outlined=${false}
              ></gds-display-icon>
              Sort
            </button>`
          : null}
        ${this.config && checkIfKeyExist(this.config, "reset")
          ? html`<button
              id="gds-adjustment-bar-reset"
              aria-label="reset"
              mode=${ifDefined(this.mode ? this.mode : "light")}
              rounded="right"
              @click=${this.config?.reset?.actions.handleReset}
            >
              <gds-display-icon
                icon="reset-alt"
                size="20"
                foreground="gray"
                foreground-level="1000"
              ></gds-display-icon>
              <slot></slot>
            </button> `
          : null}
      </div>
    `;
  }
}
