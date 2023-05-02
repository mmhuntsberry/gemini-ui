// import { Mode, ToastType } from "@nielsen-media/gds-types";
// import { CSSResult, html, LitElement, PropertyValues, unsafeCSS } from "lit";
// import { property, customElement } from "lit/decorators.js";

// import { classMap } from "lit/directives/class-map.js";

// import styles from "./index.scss?inline";

// const DEFAULT_TIMEOUT = 3;
// const EVENT_SHOW_TOAST = "show";
// const EVENT_HIDE_TOAST = "hide";

// @customElement("gds-toast")
// export class GDSToast extends LitElement {
//   static override styles = unsafeCSS(styles);

//   @property() public mode?: Mode = "light";
//   @property({ reflect: true }) show? = false;

//   /**
//    * Message
//    * Content within the toast.
//    * Max length of 50 characters
//    */
//   @property({ type: String })
//   public set message(newMessage: string) {
//     this._message =
//       newMessage.length > 50 ? newMessage.slice(0, 50) : newMessage;
//   }
//   public get message() {
//     return this._message;
//   }
//   public _message = "";

//   /**
//    * Type
//    * Two types of toasts: success and neutral
//    * Defaults to neutral
//    * Also sets icon and iconColor
//    */
//   @property()
//   public set type(newType: ToastType) {
//     if (newType != null) {
//       this._type = newType;

//       switch (this.type) {
//         case "success":
//           this.iconColor = "green";
//           this.icon = "active-check";
//           break;
//         case "neutral":
//         default:
//           this.icon = "note";
//           this.iconColor = "gray";
//       }
//     } else {
//       this._type = "neutral";
//     }
//   }
//   public get type() {
//     return this._type;
//   }
//   public _type: ToastType = "neutral";

//   /**
//    * Timeout
//    * Time in seconds before toast disappears
//    * Defaults to 3 but can be set to "-1" to never disappear
//    */
//   @property({ type: Number })
//   public get timeout() {
//     return this._timeout;
//   }
//   public set timeout(seconds: number) {
//     if (seconds === -1 || seconds > 0) {
//       this._timeout = seconds;
//       this.secondsLeft = seconds;
//     } else {
//       this._timeout = DEFAULT_TIMEOUT;
//       this.secondsLeft = DEFAULT_TIMEOUT;
//     }
//   }
//   public _timeout = DEFAULT_TIMEOUT;

//   /**
//    * Seconds Left
//    * This is what's being used and changed during the countdown
//    */
//   private declare secondsLeft: number;

//   /**
//    * Icon & Icon Color
//    */
//   public icon = "note";
//   public iconColor = "gray";

//   /**
//    * When toast is being hovered, pause countdown until toast is no longer being hovered
//    */
//   private handleHover(intervalID: number) {
//     const gdsToast = this.renderRoot.querySelector(".gds-toast");
//     gdsToast?.addEventListener(
//       "mouseenter",
//       () => {
//         clearInterval(intervalID);
//       },
//       { once: true }
//     );
//     gdsToast?.addEventListener(
//       "mouseleave",
//       () => {
//         this.startCountdown();
//       },
//       { once: true }
//     );
//   }

//   private hideToast() {
//     const hideToastEvent = new CustomEvent(EVENT_HIDE_TOAST);
//     this.dispatchEvent(hideToastEvent);
//     this.show = false;
//   }

//   /**
//    * Start countdown to hide toast
//    */
//   private startCountdown() {
//     const intervalID = setInterval(() => {
//       if (this.secondsLeft > 0) {
//         this.secondsLeft--;
//       } else {
//         clearInterval(intervalID);
//         this.hideToast();
//       }
//     }, 1000);

//     this.handleHover(intervalID);
//   }

//   protected override updated(changes: PropertyValues) {
//     if (changes.has("show") || changes.has("message") || changes.has("type")) {
//       if (this.show && this.timeout > 0) {
//         const countdownEvent = new CustomEvent(EVENT_SHOW_TOAST);
//         this.dispatchEvent(countdownEvent);
//         this.secondsLeft = this.timeout;
//         this.startCountdown();
//       } else {
//         // stop countdown
//       }
//     }
//   }

//   protected override render() {
//     const classes = {
//       "gds-toast": true,
//       "gds-toast__success": this.type === "success",
//       "gds-toast__neutral": this.type === "neutral",
//       "gds-toast__show": this.show,
//       "gds-toast__hide": !this.show,
//     };

//     return html`
//       <div class=${classMap(classes)}>
//         <gds-display-icon
//           size="24"
//           icon=${this.icon}
//           background="none"
//           foreground=${this.iconColor}
//           foreground-level="700"
//           ?outlined=${true}
//         >
//         </gds-display-icon>
//         <div class="gds-toast__message">${this.message}</div>
//         <gds-action-icon
//           size="compact"
//           icon="close"
//           background="transparent"
//           foreground="gray"
//           foreground-level="500"
//           @click=${this.hideToast}
//         >
//         </gds-action-icon>
//       </div>
//     `;
//   }
// }
