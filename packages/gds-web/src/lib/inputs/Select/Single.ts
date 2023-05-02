import { html, LitElement, unsafeCSS } from "lit";
import { property, customElement, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { MenuItem, Mode, SelectSize } from "@nielsen-media/gds-types";

import styles from "./index.scss?inline";

export interface GDSSingleSelect {
  "aria-label"?: string;
  alt?: boolean;
  error?: boolean;
  defaultSelectedItem?: string;
  disabled?: boolean;
  id: string;
  items: MenuItem[];
  mode?: Mode;
  size?: SelectSize;
  onKeydown?: (e: CustomEvent) => void;
  onSelect?: (e: CustomEvent) => void;
}

@customElement("gds-single-select")
export class GDSSingleSelect extends LitElement {
  static override styles = unsafeCSS(styles);

  @property() "aria-label"? = "";
  @property({ type: Boolean, reflect: true }) alt? = false;

  @property() defaultSelectedItem? = ""; // takes a MenuItem id
  @property({ type: Boolean, reflect: true }) disabled? = false;
  @property({ type: Boolean, reflect: true }) error? = false;
  @property() override id = "";
  @property() items: MenuItem[] = [];
  @property() mode?: Mode = "light";
  @property() size?: SelectSize = "compact";

  @property() onKeydown? = this.handleKeydown;
  @property() onSelect? = this.handleSelect;

  @state() onOutsideClick = () => {
    this.isMenuOpen = false;
  };
  @state() isMenuOpen? = false;
  @state() currentlySelectedItem?: MenuItem = {
    id: "",
    label: "",
    value: "",
  };

  handleClick(e: CustomEvent) {
    e.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  private handleKeydown(event: CustomEvent) {
    if (event.detail.code === "Enter") {
      // TODO: This will need to be updated to handle routes
      this.currentlySelectedItem = event.detail.item;
      // this.currentModuleToggled = event.detail.item.label;
      this.onOutsideClick();
    }

    if (event.detail.code === "Escape") {
      this.onOutsideClick();
    }

    if (event.detail.code === "Tab") {
      this.onOutsideClick();
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("click", this.onOutsideClick);
    this.currentlySelectedItem = this.getDefaultSelectedItem();
  }

  handleSelect(e: CustomEvent) {
    this.currentlySelectedItem = e.detail.item;
  }

  getDefaultSelectedItem(): MenuItem {
    return (
      this.items.find((item) => item.id === this.defaultSelectedItem) || {
        id: "",
        label: "",
        value: "",
      }
    );
  }

  override render() {
    return html`
      <div class="gds-single-select">
        <gds-select
          aria-label=${this["aria-label"]}
          id=${ifDefined(this.id ? this.id : undefined)}
          ?alt=${ifDefined(this.alt ? this.alt : undefined)}
          ?disabled=${ifDefined(this.disabled ? this.disabled : undefined)}
          ?error=${ifDefined(this.error ? this.error : undefined)}
          mode=${ifDefined(this.mode ? this.mode : undefined)}
          size=${ifDefined(this.size ? this.size : undefined)}
          @click=${this.handleClick}
          >${this.currentlySelectedItem?.label || "Choose..."}</gds-select
        >
        ${this.isMenuOpen
          ? html`
              <gds-menu-single
                id="menu-${this.id}"
                ?disabled=${ifDefined(
                  this.disabled ? this.disabled : undefined
                )}
                ?error=${ifDefined(this.error ? this.error : undefined)}
                mode=${ifDefined(this.mode ? this.mode : undefined)}
                size=${ifDefined(this.size ? this.size : undefined)}
                type="standard"
                @onSelect=${this.handleSelect}
                @onKeydown=${this.handleKeydown}
                defaultSelectedItem=${this.currentlySelectedItem?.id}
                .items=${this.items}
              ></gds-menu-single>
            `
          : html``}
      </div>
    `;
  }
}
