import { svg, TemplateResult } from "lit";
import {
  Colors,
  ColorsLevel,
  DisplayIconSize,
  IconType,
} from "@nielsen-media/gds-types";

const prefix = "gds";

const getPaddingForDisplayIconWithBackground = (
  iconType: IconType,
  size: DisplayIconSize
): number => {
  switch (size) {
    case "96":
      return 12;
    case "64":
      return 8;
    case "48":
      return 8;
    case "40":
      return 6;
    case "32":
      return 6;
    case "24":
      return 4;
    case "20":
      return 4;
    case "16":
      return 2;
    default:
      return 0;
  }
};

const getFillColorString = (f: Colors, fl: ColorsLevel) => {
  switch (f) {
    case "white":
      return "var(--gds-white)";
    case "black":
      return "var(--gds-black)";

    default:
      return `var(--${prefix}-${f}-${fl})`;
  }
};

type Icons = {
  [key: string]: Icon;
};

type Icon = {
  fill: (
    it: IconType,
    s: DisplayIconSize,
    f: Colors,
    fl: ColorsLevel,
    b?: Colors,
    bl?: ColorsLevel
  ) => TemplateResult;
  outlined: (
    it: IconType,
    s: DisplayIconSize,
    f: Colors,
    fl: ColorsLevel,
    b?: Colors,
    bl?: ColorsLevel
  ) => TemplateResult | null;
};

const icons: Icons = {
  "active-check": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
      width=${s}
      height=${s}
      viewBox="0 0 24 24"
      style="padding: ${
        b !== "none" ? getPaddingForDisplayIconWithBackground(it, s) + "px" : 0
      };
       background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
        fill: ${getFillColorString(f, fl)}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM16.7071 8.79289C16.3165 8.40237 15.6834 8.40237 15.2929 8.79289L10.5 13.5858L8.20709 11.2929C7.81657 10.9024 7.18338 10.9024 6.79285 11.2929C6.40233 11.6834 6.4029 12.3172 6.79342 12.7077L9.29285 15.2071L9.31574 15.23C9.4191 15.3335 9.55276 15.4674 9.68152 15.5681C9.82193 15.678 10.1258 15.888 10.5538 15.8676C10.955 15.8485 11.2348 15.6342 11.3566 15.5347C11.4821 15.4323 11.6175 15.2967 11.7344 15.1798L11.7571 15.1571L16.7063 10.2079L16.7071 10.2071C17.0976 9.81658 17.0976 9.18342 16.7071 8.79289Z"
      />
    </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
      width=${s}
      height=${s}
      viewBox="0 0 24 24"
      style="padding: ${
        b !== "none" ? getPaddingForDisplayIconWithBackground(it, s) + "px" : 0
      };
         background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
        fill: ${getFillColorString(f, fl)}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12ZM16.7071 8.79289C16.3165 8.40237 15.6834 8.40237 15.2929 8.79289L10.5 13.5858L8.20709 11.2929C7.81657 10.9024 7.18338 10.9024 6.79285 11.2929C6.40233 11.6834 6.4029 12.3172 6.79342 12.7077L9.29285 15.2071L9.31574 15.23C9.4191 15.3335 9.55276 15.4674 9.68152 15.5681C9.82193 15.678 10.1258 15.888 10.5538 15.8676C10.955 15.8485 11.2348 15.6342 11.3566 15.5347C11.4821 15.4323 11.6175 15.2967 11.7344 15.1798L11.7571 15.1571L16.7063 10.2079L16.7071 10.2071C17.0976 9.81658 17.0976 9.18342 16.7071 8.79289Z"
      />
    </svg>`,
  },
  "add-circle": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        />
      </svg>`,
  },
  "add-custom-list": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.00049 8H4.00049C3.4482 8 3.00049 7.55228 3.00049 7C3.00049 6.44772 3.4482 6 4.00049 6H6.00049V4C6.00049 3.44772 6.4482 3 7.00049 3C7.55277 3 8.00049 3.44772 8.00049 4V6H10.0005C10.5526 6 11.0002 6.44789 11.0005 7C11.0005 7.55227 10.5528 8 10.0005 8H8.00049V10C8.00049 10.5523 7.55277 11 7.00049 11C6.4482 11 6.00049 10.5523 6.00049 10V8ZM13.5006 8H21.5006V6H13.5006V8ZM13.5006 18H21.5006V16H13.5006V18ZM9.00061 17C9.00061 18.1046 8.10518 19 7.00061 19C5.89604 19 5.00061 18.1046 5.00061 17C5.00061 15.8954 5.89604 15 7.00061 15C8.10518 15 9.00061 15.8954 9.00061 17ZM11.0006 17C11.0006 19.2091 9.20975 21 7.00061 21C4.79147 21 3.00061 19.2091 3.00061 17C3.00061 14.7909 4.79147 13 7.00061 13C9.20975 13 11.0006 14.7909 11.0006 17Z"
        />
      </svg>`,
    outlined: () => null,
  },
  "add-document": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.2929 2.29289C14.1054 2.10536 13.851 2 13.5858 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.41421C20 8.149 19.8946 7.89464 19.7071 7.70711L14.2929 2.29289ZM11 14V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16H9C8.44772 16 8 15.5523 8 15C8 14.4477 8.44772 14 9 14H11ZM14 9.5H18.5L13 4V8.5C13 9.05228 13.4477 9.5 14 9.5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 11.5C13 10.9477 12.5523 10.5 12 10.5C11.4477 10.5 11 10.9477 11 11.5V13.5H9C8.44772 13.5 8 13.9477 8 14.5C8 15.0523 8.44772 15.5 9 15.5H11V17.5C11 18.0523 11.4477 18.5 12 18.5C12.5523 18.5 13 18.0523 13 17.5V15.5H15C15.5523 15.5 16 15.0523 16 14.5C16 13.9477 15.5523 13.5 15 13.5H13V11.5ZM14.2929 2.29289C14.1054 2.10536 13.851 2 13.5858 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.41421C20 8.149 19.8946 7.89464 19.7071 7.70711L14.2929 2.29289ZM18 20H6V4H13V8C13 8.55228 13.4477 9 14 9H18V20Z"
        />
      </svg>`,
  },
  add: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12Z"
          />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M20 12C20 13.1046 19.1046 13.5 18 13.5H13.5V18C13.5 19.1046 13.1046 20 12 20C10.8954 20 10.5 19.1046 10.5 18V13.5H6C4.89543 13.5 4 13.1046 4 12C4 10.8954 4.89543 10.5 6 10.5H10.5V6C10.5 4.89543 10.8954 4 12 4C13.1046 4 13.5 4.89543 13.5 6V10.5H18C19.1046 10.5 20 10.8954 20 12Z"
          />
      </svg>`,
  },
  "add-to-levels": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.0005 4C21.0005 3.44772 20.5528 3 20.0005 3C19.4482 3 19.0005 3.44772 19.0005 4V11H13.0005C11.8959 11 11.0005 11.8954 11.0005 13V19H4.00049C3.4482 19 3.00049 19.4477 3.00049 20C3.00049 20.5523 3.4482 21 4.00049 21H11.0005C12.1051 21 13.0005 20.1046 13.0005 19V13H19.0005C20.1051 13 21.0005 12.1046 21.0005 11V4ZM4.00049 8H6.00049V10C6.00049 10.5523 6.4482 11 7.00049 11C7.55277 11 8.00049 10.5523 8.00049 10V8H10.0005C10.5528 8 11.0005 7.55227 11.0005 7C11.0002 6.44789 10.5526 6 10.0005 6H8.00049V4C8.00049 3.44772 7.55277 3 7.00049 3C6.4482 3 6.00049 3.44772 6.00049 4V6H4.00049C3.4482 6 3.00049 6.44772 3.00049 7C3.00049 7.55228 3.4482 8 4.00049 8Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "add-user": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM15 14C12.33 14 7 15.34 7 18V20H23V18C23 15.34 17.67 14 15 14ZM5 15C5.55228 15 6 14.5523 6 14V12H8C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10H6V8C6 7.44772 5.55228 7 5 7C4.44772 7 4 7.44772 4 8V10H2C1.44772 10 1 10.4477 1 11C1 11.5523 1.44772 12 2 12H4V14C4 14.5523 4.44772 15 5 15Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM15 6C16.1 6 17 6.9 17 8C17 9.1 16.1 10 15 10C13.9 10 13 9.1 13 8C13 6.9 13.9 6 15 6ZM15 14C12.33 14 7 15.34 7 18V20H23V18C23 15.34 17.67 14 15 14ZM9 18C9.22 17.28 12.31 16 15 16C17.7 16 20.8 17.29 21 18H9ZM5 15C5.55228 15 6 14.5523 6 14V12H8C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10H6V8C6 7.44772 5.55228 7 5 7C4.44772 7 4 7.44772 4 8V10H2C1.44772 10 1 10.4477 1 11C1 11.5523 1.44772 12 2 12H4V14C4 14.5523 4.44772 15 5 15Z"
          />
      </svg>`,
  },
  amazon: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.3444 14.2927C17.2987 14.2264 17.2527 14.1614 17.2069 14.0968C16.8348 13.5717 16.4802 13.0712 16.4802 12.0678V8.32754C16.4802 8.19751 16.4809 8.06836 16.4816 7.94021C16.4897 6.50613 16.4971 5.19754 15.4756 4.19645C14.5997 3.31204 13.1446 3 12.0317 3C9.85528 3 7.42734 3.85231 6.91819 6.67661C6.86429 6.9766 7.07182 7.13364 7.25996 7.17778L9.47614 7.4296C9.68367 7.41854 9.83354 7.20436 9.87371 6.98865C10.0637 6.01542 10.84 5.54789 11.7122 5.54789C12.1826 5.54789 12.7167 5.72848 12.9952 6.17146C13.2822 6.61312 13.2777 7.20289 13.2736 7.73025C13.2731 7.79168 13.2727 7.85227 13.2727 7.91168V8.2252C13.067 8.24933 12.8516 8.2722 12.6296 8.29576C11.421 8.42406 10.0206 8.57272 8.97176 9.05544C7.53986 9.70657 6.53434 11.0315 6.53434 12.9789C6.53434 15.4746 8.03057 16.7222 9.95695 16.7222C11.5827 16.7222 12.4724 16.3193 13.7265 14.9769C13.7892 15.0723 13.8455 15.1602 13.8985 15.243C14.1977 15.71 14.393 16.0148 15.0374 16.5777C15.2076 16.6731 15.4327 16.6695 15.5834 16.526C16.0401 16.0996 16.8693 15.3432 17.3368 14.9318C17.5235 14.7708 17.4904 14.5104 17.3444 14.2927ZM12.8449 13.2142C12.4819 13.8914 11.9037 14.3057 11.2612 14.3057C10.3852 14.3057 9.87088 13.6034 9.87088 12.5645C9.87088 10.5193 11.6191 10.148 13.2722 10.148C13.2722 10.2704 13.2733 10.3934 13.2744 10.5168C13.2825 11.4427 13.2907 12.3869 12.8449 13.2142Z"
          />
          <path
            d="M20.0776 18.3741C17.8885 20.0881 14.7139 21 11.9798 21C8.14944 21 4.69918 19.4976 2.08843 16.9964C1.88364 16.7997 2.06642 16.5311 2.31245 16.6838C5.12963 18.4234 8.61284 19.4706 12.2104 19.4706C14.6375 19.4706 17.3051 18.9366 19.7595 17.8311C20.1298 17.6649 20.4401 18.0906 20.0776 18.3741Z"
          />
          <path
            d="M18.4323 17.1803C19.1371 17.09 20.7088 16.89 20.9886 17.27C21.2687 17.6498 20.6803 19.2111 20.4152 19.9149L20.4132 19.92C20.3334 20.1322 20.505 20.217 20.6858 20.0561C21.8605 19.014 22.1641 16.8294 21.9234 16.5129C21.6845 16.2006 19.6308 15.9303 18.3775 16.8644C18.1849 17.0093 18.2179 17.2067 18.4323 17.1803Z"
          />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  android: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.44366 2.91333C10.2001 2.4908 11.072 2.25 12 2.25C12.928 2.25 13.7999 2.4908 14.5563 2.91333L15.1098 2.35984C15.2563 2.21339 15.4937 2.21339 15.6402 2.35984C15.7866 2.50628 15.7866 2.74372 15.6402 2.89016L15.1959 3.33446C16.4449 4.29419 17.25 5.80307 17.25 7.5H6.75C6.75 5.80307 7.55509 4.29419 8.80413 3.33446L8.35983 2.89016C8.21339 2.74372 8.21339 2.50628 8.35983 2.35984C8.50628 2.21339 8.74372 2.21339 8.89017 2.35984L9.44366 2.91333ZM10.5 5.25C10.5 5.66421 10.1642 6 9.75 6C9.33579 6 9 5.66421 9 5.25C9 4.83579 9.33579 4.5 9.75 4.5C10.1642 4.5 10.5 4.83579 10.5 5.25ZM14.25 6C14.6642 6 15 5.66421 15 5.25C15 4.83579 14.6642 4.5 14.25 4.5C13.8358 4.5 13.5 4.83579 13.5 5.25C13.5 5.66421 13.8358 6 14.25 6Z"
          />
          <path
            d="M3.75 9.375C3.75 8.75368 4.25368 8.25 4.875 8.25C5.49632 8.25 6 8.75368 6 9.375V13.875C6 14.4963 5.49632 15 4.875 15C4.25368 15 3.75 14.4963 3.75 13.875V9.375Z"
          />
          <path
            d="M9 18V20.625C9 21.2463 9.50368 21.75 10.125 21.75C10.7463 21.75 11.25 21.2463 11.25 20.625V18H12.75V20.625C12.75 21.2463 13.2537 21.75 13.875 21.75C14.4963 21.75 15 21.2463 15 20.625V18H15.75C16.5784 18 17.25 17.3284 17.25 16.5V8.25H6.75V16.5C6.75 17.3284 7.42157 18 8.25 18H9Z"
          />
          <path
            d="M18 9.375C18 8.75368 18.5037 8.25 19.125 8.25C19.7463 8.25 20.25 8.75368 20.25 9.375V13.875C20.25 14.4963 19.7463 15 19.125 15C18.5037 15 18 14.4963 18 13.875V9.375Z"
          />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "anomaly-status": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.9386 13C19.4465 16.9463 16.0801 20 12.0005 20C7.92088 20 4.5545 16.9463 4.06239 13H8.55474L10.3728 10.0911L13.7503 17.3285L17.4604 13H19.9386ZM19.9386 11H16.5406L14.2507 13.6715L10.6282 5.90894L7.44624 11H4.06238C4.55446 7.0537 7.92086 4 12.0005 4C16.0801 4 19.4465 7.0537 19.9386 11ZM22.0005 12C22.0005 17.5228 17.5233 22 12.0005 22C6.47764 22 2.00049 17.5228 2.00049 12C2.00049 6.47715 6.47764 2 12.0005 2C17.5233 2 22.0005 6.47715 22.0005 12Z"
          />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  api: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M14 12L12 14L10 12L12 10L14 12ZM12 6L14.12 8.12L16.62 5.62L12 1L7.38 5.62L9.88 8.12L12 6ZM6 12L8.12 9.88L5.62 7.38L1 12L5.62 16.62L8.12 14.12L6 12ZM18 12L15.88 14.12L18.38 16.62L23 12L18.38 7.38L15.88 9.88L18 12ZM12 18L9.88 15.88L7.38 18.38L12 23L16.62 18.38L14.12 15.88L12 18Z"
          />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "app-switcher": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M4 6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6Z"
          />
          <path
            d="M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6Z"
          />
          <path
            d="M16 6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6Z"
          />
          <path
            d="M4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12Z"
          />
          <path
            d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z"
          />
          <path
            d="M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12Z"
          />
          <path
            d="M4 18C4 19.1046 4.89543 20 6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18Z"
          />
          <path
            d="M10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18Z"
          />
          <path
            d="M16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18Z"
          />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "apple-logo": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M17.3768 12.5416C17.3677 10.9842 18.075 9.81042 19.5033 8.94495C18.7044 7.80317 17.4959 7.17519 15.9027 7.05416C14.3943 6.93542 12.7439 7.93105 12.1396 7.93105C11.501 7.93105 10.0406 7.09527 8.89156 7.09527C6.52017 7.1318 4 8.98149 4 12.7448C4 13.8569 4.20372 15.0055 4.61116 16.1884C5.15594 17.7458 7.11989 21.5617 9.16853 21.5C10.2398 21.4749 10.9974 20.7418 12.3914 20.7418C13.7442 20.7418 14.4446 21.5 15.6395 21.5C17.7064 21.4703 19.4827 18.0016 20 16.4396C17.228 15.1357 17.3768 12.6215 17.3768 12.5416ZM14.9711 5.57669C16.1316 4.20199 16.0263 2.95059 15.992 2.50073C14.9665 2.56011 13.7808 3.19722 13.1056 3.98048C12.3617 4.82083 11.9245 5.85986 12.0183 7.03133C13.1262 7.11582 14.1379 6.54721 14.9711 5.57669Z"
          />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  archive: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" d="m19.15 3.55 1.39 1.68c.29.34.46.79.46 1.27V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6.5c0-.48.17-.93.46-1.27l1.38-1.68C5.12 3.21 5.53 3 6 3h12c.47 0 .88.21 1.15.55ZM17.76 5H6.24l-.8.97h13.13L17.76 5ZM12 17l-4-4h2.55v-3h2.9v3H16l-4 4Z" clip-rule="evenodd"/>
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24 5H17.76L18.57 5.97H5.44L6.24 5ZM5 19V8H19V19H5ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z"
          />
      </svg>`,
  },
  "arrow-down": {
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M19.0876 12.9123C19.4771 12.5228 19.4771 11.8912 19.0876 11.5017C18.6983 11.1124 18.0672 11.1121 17.6776 11.5011L12.7929 16.377L12.7929 5.20703C12.7929 4.65474 12.3452 4.20703 11.7929 4.20703C11.2406 4.20703 10.7929 4.65475 10.7929 5.20703L10.7929 16.377L5.9082 11.5011C5.51857 11.1121 4.88749 11.1124 4.49821 11.5017C4.10867 11.8913 4.10867 12.5228 4.49821 12.9123L11.0858 19.4999C11.4763 19.8904 12.1095 19.8904 12.5 19.4999L19.0876 12.9123Z"
          />
      </svg>`,
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 32 32"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
            x="1"
            y="1"
            width="30"
            height="30"
            rx="15"
            stroke-width="2"
          />
          <path
            fill="#fff"
            transform="rotate(90) translate(0, -32)"
            d="M16.7053 8.7053C16.3158 8.31576 15.6842 8.31576 15.2947 8.7053C14.9054 9.09459 14.9051 9.72566 15.2941 10.1153L20.17 15H9C8.44771 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H20.17L15.2941 21.8847C14.9051 22.2743 14.9054 22.9054 15.2947 23.2947C15.6842 23.6842 16.3158 23.6842 16.7053 23.2947L23.2929 16.7071C23.6834 16.3166 23.6834 15.6834 23.2929 15.2929L16.7053 8.7053Z"
          />
      </svg>`,
  },
  "arrow-left": {
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M10.8805 19.2946C11.27 19.6841 11.9016 19.6841 12.2911 19.2946C12.6804 18.9053 12.6807 18.2742 12.2917 17.8846L7.41579 12.9999L18.5858 12.9999C19.1381 12.9999 19.5858 12.5522 19.5858 11.9999C19.5858 11.4476 19.1381 10.9999 18.5858 10.9999L7.41579 10.9999L12.2917 6.11524C12.6807 5.7256 12.6804 5.09453 12.2911 4.70524C11.9016 4.3157 11.27 4.3157 10.8805 4.70524L4.29289 11.2928C3.90237 11.6833 3.90237 12.3165 4.29289 12.707L10.8805 19.2946Z"
          />
      </svg>`,
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 32 32"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
            x="1"
            y="1"
            width="30"
            height="30"
            rx="15"
            stroke-width="2"
          />
          <path
            fill="#fff"
            transform="rotate(-180) translate(-32, -32)"
            d="M16.7053 8.7053C16.3158 8.31576 15.6842 8.31576 15.2947 8.7053C14.9054 9.09459 14.9051 9.72566 15.2941 10.1153L20.17 15H9C8.44771 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H20.17L15.2941 21.8847C14.9051 22.2743 14.9054 22.9054 15.2947 23.2947C15.6842 23.6842 16.3158 23.6842 16.7053 23.2947L23.2929 16.7071C23.6834 16.3166 23.6834 15.6834 23.2929 15.2929L16.7053 8.7053Z"
  f        />
      </svg>`,
  },
  "arrow-right": {
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M12.7053 4.70524C12.3158 4.3157 11.6842 4.3157 11.2947 4.70524C10.9054 5.09453 10.9051 5.7256 11.2941 6.11524L16.17 10.9999H5C4.44771 10.9999 4 11.4476 4 11.9999C4 12.5522 4.44772 12.9999 5 12.9999H16.17L11.2941 17.8846C10.9051 18.2742 10.9054 18.9053 11.2947 19.2946C11.6842 19.6841 12.3158 19.6841 12.7053 19.2946L19.2929 12.707C19.6834 12.3165 19.6834 11.6833 19.2929 11.2928L12.7053 4.70524Z"
          />
      </svg>`,
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 32 32"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="30" height="30" rx="15" stroke-width="2" />
        <path
          fill="#fff"
          d="M16.7053 8.7053C16.3158 8.31576 15.6842 8.31576 15.2947 8.7053C14.9054 9.09459 14.9051 9.72566 15.2941 10.1153L20.17 15H9C8.44771 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H20.17L15.2941 21.8847C14.9051 22.2743 14.9054 22.9054 15.2947 23.2947C15.6842 23.6842 16.3158 23.6842 16.7053 23.2947L23.2929 16.7071C23.6834 16.3166 23.6834 15.6834 23.2929 15.2929L16.7053 8.7053Z"
        />
      </svg>`,
  },
  "arrow-up": {
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.49821 11.0875C4.10867 11.477 4.10867 12.1086 4.49821 12.4981C4.88749 12.8874 5.51857 12.8877 5.90821 12.4988L10.7929 7.62282L10.7929 18.7928C10.7929 19.3451 11.2406 19.7928 11.7929 19.7928C12.3452 19.7928 12.7929 19.3451 12.7929 18.7928V7.62282L17.6776 12.4988C18.0672 12.8877 18.6983 12.8874 19.0876 12.4981C19.4771 12.1086 19.4771 11.477 19.0876 11.0875L12.5 4.49992C12.1095 4.1094 11.4763 4.1094 11.0858 4.49992L4.49821 11.0875Z"
        />
      </svg>`,
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 32 32"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="30" height="30" rx="15" stroke-width="2" />
          <path
            fill="#fff"
            transform="rotate(-90) translate(-32, 0)"
            d="M16.7053 8.7053C16.3158 8.31576 15.6842 8.31576 15.2947 8.7053C14.9054 9.09459 14.9051 9.72566 15.2941 10.1153L20.17 15H9C8.44771 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H20.17L15.2941 21.8847C14.9051 22.2743 14.9054 22.9054 15.2947 23.2947C15.6842 23.6842 16.3158 23.6842 16.7053 23.2947L23.2929 16.7071C23.6834 16.3166 23.6834 15.6834 23.2929 15.2929L16.7053 8.7053Z"
          />
      </svg>`,
  },
  attach: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z"
          />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  attention: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 3H10V15H14V3ZM14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z"

          />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "bar-chart-horizontal": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 3.5C2.44772 3.5 2 3.94772 2 4.5V21C2 21.5523 2.44772 22 3 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H4V4.5C4 3.94772 3.55228 3.5 3 3.5ZM7.00012 7V9H14.0001V7L7.00012 7ZM7.00012 11L7.00012 13H17.0001V11L7.00012 11ZM7.00012 15V17H11.0001V15H7.00012Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "bar-chart-vertical": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 3.5C2.44772 3.5 2 3.94772 2 4.5V21C2 21.5523 2.44772 22 3 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H4V4.5C4 3.94772 3.55228 3.5 3 3.5ZM7.00012 17H9.00012V10H7.00012V17ZM11.0001 17H13.0001V7H11.0001V17ZM15.0001 17H17.0001V13H15.0001V17Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "bring-back": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 2C16.1046 2 17 2.89543 17 4V15C17 16.1046 16.1046 17 15 17H4C2.89543 17 2 16.1046 2 15V4C2 2.89543 2.89543 2 4 2H15ZM4 15H15V4H4V15Z"
        />
        <path
          d="M18.5 12C18.5 11.4477 18.9477 11 19.5 11H21C21.5523 11 22 11.4477 22 12V20C22 21.1046 21.1046 22 20 22H12C11.4477 22 11 21.5523 11 21V19.5C11 18.9477 11.4477 18.5 12 18.5H17.5C18.0523 18.5 18.5 18.0523 18.5 17.5V12Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "bring-backward": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 2C10.1046 2 11 2.89543 11 4V9C11 10.1046 10.1046 11 9 11H4C2.89543 11 2 10.1046 2 9V4C2 2.89543 2.89543 2 4 2H9ZM4 9H9V4H4V9Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13 15C13 13.8954 13.8954 13 15 13H20C21.1046 13 22 13.8954 22 15V20C22 21.1046 21.1046 22 20 22H15C13.8954 22 13 21.1046 13 20V15ZM15 20H20V15H15V20Z"
        />
        <path
          d="M16 7H12V12H7V16C7 16.5523 7.44772 17 8 17H12V12H17V8C17 7.44772 16.5523 7 16 7Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "bring-foreward": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 3H9V5H11V3C11 1.89543 10.1046 1 9 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H5V9H3V3ZM19 13V15H21V21H15V19H13V21C13 22.1046 13.8954 23 15 23H21C22.1046 23 23 22.1046 23 21V15C23 13.8954 22.1046 13 21 13H19ZM9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V9C7 7.89543 7.89543 7 9 7Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "bring-front": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 2H14C15.1046 2 16 2.89543 16 4V14C16 15.1046 15.1046 16 14 16H4C2.89543 16 2 15.1046 2 14V4C2 2.89543 2.89543 2 4 2Z"
        />
        <path
          d="M18 13V11H21C21.5523 11 22 11.4477 22 12V20C22 21.1046 21.1046 22 20 22H12C11.4477 22 11 21.5523 11 21V18H13V20H20C20 17.6667 20 15.3333 20 13H18Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "bubble-chart": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.27622 6.37768C4.10528 3.28358 7.28564 1.4474 10.3797 2.27646C13.4738 3.10553 15.31 6.28588 14.481 9.37998C13.6519 12.4741 10.4715 14.3103 7.37744 13.4812C4.28333 12.6521 2.44716 9.47179 3.27622 6.37768ZM13.8621 13.8322C14.4625 11.5916 16.7655 10.262 19.006 10.8624C21.2466 11.4627 22.5762 13.7657 21.9759 16.0063C21.3755 18.2468 19.0725 19.5765 16.832 18.9761C14.5914 18.3758 13.2618 16.0728 13.8621 13.8322ZM5.55152 17.6731C5.98035 16.0727 7.62536 15.1229 9.22576 15.5518C10.8262 15.9806 11.7759 17.6256 11.3471 19.226C10.9183 20.8264 9.27324 21.7761 7.67284 21.3473C6.07245 20.9185 5.1227 19.2735 5.55152 17.6731Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
       <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.8621 4.20831C7.83493 3.66514 5.75125 4.86815 5.20807 6.89532C4.66489 8.92249 5.8679 11.0062 7.89508 11.5493C9.92225 12.0925 12.0059 10.8895 12.5491 8.86235C13.0923 6.83517 11.8893 4.75149 9.8621 4.20831ZM3.27622 6.37768C4.10528 3.28358 7.28564 1.4474 10.3797 2.27646C13.4738 3.10553 15.31 6.28588 14.481 9.37998C13.6519 12.4741 10.4715 14.3103 7.37744 13.4812C4.28333 12.6521 2.44716 9.47179 3.27622 6.37768ZM18.4884 12.7942C17.3148 12.4797 16.1084 13.1762 15.794 14.3498C15.4795 15.5235 16.176 16.7298 17.3496 17.0443C18.5232 17.3587 19.7296 16.6623 20.044 15.4886C20.3585 14.315 19.662 13.1087 18.4884 12.7942ZM13.8621 13.8322C14.4625 11.5916 16.7655 10.262 19.006 10.8624C21.2466 11.4627 22.5762 13.7657 21.9759 16.0063C21.3755 18.2468 19.0725 19.5765 16.832 18.9761C14.5914 18.3758 13.2618 16.0728 13.8621 13.8322ZM8.70812 17.4836C8.17465 17.3407 7.62632 17.6573 7.48338 18.1907C7.34043 18.7242 7.65702 19.2725 8.19048 19.4155C8.72395 19.5584 9.27229 19.2418 9.41523 18.7084C9.55817 18.1749 9.24159 17.6266 8.70812 17.4836ZM5.55152 17.6731C5.98035 16.0727 7.62536 15.1229 9.22576 15.5518C10.8262 15.9806 11.7759 17.6256 11.3471 19.226C10.9183 20.8264 9.27324 21.7761 7.67284 21.3473C6.07245 20.9185 5.1227 19.2735 5.55152 17.6731Z"
        />
      </svg>`,
  },
  "calculation-addition": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 10.5H13.5V3H10.5V10.5H3V13.5H10.5V21H13.5V13.5H21V10.5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "calculation-divide": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 7.5C13.2426 7.5 14.25 6.49264 14.25 5.25C14.25 4.00736 13.2426 3 12 3C10.7574 3 9.75 4.00736 9.75 5.25C9.75 6.49264 10.7574 7.5 12 7.5ZM3 10.5V13.5H21V10.5H3ZM14.25 18.75C14.25 19.9926 13.2426 21 12 21C10.7574 21 9.75 19.9926 9.75 18.75C9.75 17.5074 10.7574 16.5 12 16.5C13.2426 16.5 14.25 17.5074 14.25 18.75Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "calculation-equal": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 9.75H3V6.75H21V9.75ZM21 14.25H3V17.25H21V14.25Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "calculation-greater-than": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
         <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.4928 11.9999L4.95605 2.45093L3.45605 5.04893L15.4951 11.9999L3.45605 18.9509L4.95605 21.5489L21.4928 11.9999Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "calculation-less-than": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
         <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.50732 11.9999L19.0441 2.45093L20.5441 5.04893L8.50507 11.9999L20.5441 18.9509L19.0441 21.5489L2.50732 11.9999Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "calculation-multiply": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
         <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.4242 6.6967L17.3032 4.57495L11.9999 9.87895L6.69668 4.57495L4.57568 6.6967L9.87893 12L4.57568 17.3032L6.69668 19.4242L11.9999 14.121L17.3032 19.4242L19.4242 17.3032L14.1209 12L19.4242 6.6967Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "calculation-not-equal": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
         <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 9.75007V6.75007H16.7633L18.924 3.00757L16.326 1.50757L13.299 6.75007H3V9.75007H11.5673L8.96925 14.2501H3V17.2501H7.23675L5.076 20.9926L7.674 22.4926L10.701 17.2501H21V14.2501H12.4327L15.0308 9.75007H21Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "calculation-subtract": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 10.5H3V13.5H21V10.5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  calendar: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12ZM13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12ZM17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12ZM19 4H18V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V4H8V3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  camera: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.17 4L9 2H15L16.83 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H7.17ZM7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7C9.24 7 7 9.24 7 12ZM15.2 11.9998C15.2 13.7671 13.7674 15.1998 12 15.1998C10.2327 15.1998 8.80005 13.7671 8.80005 11.9998C8.80005 10.2325 10.2327 8.7998 12 8.7998C13.7674 8.7998 15.2 10.2325 15.2 11.9998Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.12 4L15.95 6H20V18H4V6H8.05L9.88 4H14.12ZM15 2H9L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2ZM12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7Z"
        />
      </svg>`,
  },
  "caret-down": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.7453 8.4565c.4598-.4599 1.2053-.4603 1.6657-.001L12 13.0348l4.5891-4.5791c.4604-.4594 1.2059-.459 1.6657.0009.4603.4602.4603 1.2064 0 1.6666l-5.4195 5.4195c-.4613.4613-1.2093.4613-1.6706 0l-5.4195-5.4195c-.4603-.4602-.4603-1.2064 0-1.6666Z" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "caret-left": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.835 5.745c.4599.4599.4603 1.2054.0009 1.6657L11.2568 12l4.5791 4.5891c.4594.4603.459 1.2058-.0009 1.6657-.4602.4602-1.2064.4602-1.6666 0l-5.4195-5.4195c-.4614-.4613-.4614-1.2093 0-1.6707l5.4195-5.4195c.4602-.4602 1.2064-.4602 1.6666 0Z"/>
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "caret-right": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.745 18.2547c-.4598-.4598-.4602-1.2053-.0008-1.6657l4.5791-4.5891-4.5791-4.5891c-.4594-.4604-.459-1.2059.0009-1.6657.4602-.4603 1.2064-.4603 1.6666 0l5.4195 5.4195c.4613.4613.4613 1.2093 0 1.6706l-5.4195 5.4195c-.4602.4603-1.2064.4603-1.6666 0Z" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "caret-up": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.2547 15.5433c-.4598.4598-1.2053.4602-1.6657.0009l-4.5891-4.5792-4.5891 4.5792c-.4604.4593-1.2059.4589-1.6657-.0009-.4603-.4603-.4603-1.2064 0-1.6667l5.4195-5.4194c.4613-.4614 1.2093-.4614 1.6706 0l5.4195 5.4194c.4603.4603.4603 1.2064 0 1.6667Z"/>
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  checkmark: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.2547 15.5433c-.4598.4598-1.2053.4602-1.6657.0009l-4.5891-4.5792-4.5891 4.5792c-.4604.4593-1.2059.4589-1.6657-.0009-.4603-.4603-.4603-1.2064 0-1.6667l5.4195-5.4194c.4613-.4614 1.2093-.4614 1.6706 0l5.4195 5.4194c.4603.4603.4603 1.2064 0 1.6667Z"/>
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "clear-list": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.99961 17.9996C4.44733 17.9996 3.99961 18.4473 3.99961 18.9996C3.99961 19.5519 4.44733 19.9996 4.99961 19.9996L18.9996 19.9996C19.5519 19.9996 19.9996 19.5519 19.9996 18.9996C19.9996 18.4473 19.5519 17.9996 18.9996 17.9996L4.99961 17.9996Z"
        />
        <path
          d="M3.99961 14.9996C3.99961 14.4473 4.44733 13.9996 4.99961 13.9996L18.9996 13.9996C19.5519 13.9996 19.9996 14.4473 19.9996 14.9996C19.9996 15.5519 19.5519 15.9996 18.9996 15.9996L4.99961 15.9996C4.44733 15.9996 3.99961 15.5519 3.99961 14.9996Z"
        />
        <path
          d="M13.9996 9.99961C13.4473 9.99961 12.9996 10.4473 12.9996 10.9996C12.9996 11.5519 13.4473 11.9996 13.9996 11.9996L18.9996 11.9996C19.5519 11.9996 19.9996 11.5519 19.9996 10.9996C19.9996 10.4473 19.5519 9.99961 18.9996 9.99961L13.9996 9.99961Z"
        />
        <path
          d="M5.66628 7.99961L3.66628 9.99961C3.29809 10.3678 3.29809 10.9648 3.66628 11.3329C4.03447 11.7011 4.63142 11.7011 4.99961 11.3329L6.99961 9.33295L8.99961 11.3329C9.3678 11.7011 9.96476 11.7011 10.3329 11.3329C10.7011 10.9648 10.7011 10.3678 10.3329 9.99961L8.33295 7.99961L10.3329 5.99961C10.7011 5.63142 10.7011 5.03447 10.3329 4.66628C9.96476 4.29809 9.3678 4.29809 8.99961 4.66628L6.99961 6.66628L4.99961 4.66628C4.63142 4.29809 4.03447 4.29809 3.66628 4.66628C3.29809 5.03447 3.29809 5.63142 3.66628 5.99961L5.66628 7.99961Z"
        />
        <path
          d="M12.9996 6.99961C12.9996 6.44733 13.4473 5.99961 13.9996 5.99961L18.9996 5.99961C19.5519 5.99961 19.9996 6.44733 19.9996 6.99961C19.9996 7.5519 19.5519 7.99961 18.9996 7.99961L13.9996 7.99961C13.4473 7.99961 12.9996 7.5519 12.9996 6.99961Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  close: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          d="M18.2951 7.11498C18.6845 6.72562 18.6845 6.09435 18.2951 5.70498C17.9057 5.31562 17.2745 5.31562 16.8851 5.70498L12.0001 10.59L7.11511 5.70498C6.72575 5.31562 6.09447 5.31562 5.70511 5.70498C5.31575 6.09435 5.31575 6.72562 5.70511 7.11498L10.5901 12L5.70511 16.885C5.31575 17.2743 5.31575 17.9056 5.70511 18.295C6.09447 18.6843 6.72575 18.6843 7.11511 18.295L12.0001 13.41L16.8851 18.295C17.2745 18.6843 17.9057 18.6843 18.2951 18.295C18.6845 17.9056 18.6845 17.2743 18.2951 16.885L13.4101 12L18.2951 7.11498Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  collaboration: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0.998047C10.8933 0.998047 10 1.89138 10 2.99805C10 4.10471 10.8933 4.99805 12 4.99805C13.1067 4.99805 14 4.10471 14 2.99805C14 1.89138 13.1067 0.998047 12 0.998047ZM14.8267 6.09805C14.0467 5.75138 13.0867 5.49805 12 5.49805C10.9133 5.49805 9.95333 5.75805 9.17333 6.09805C8.45333 6.41805 8 7.13805 8 7.92471V8.99805H16V7.92471C16 7.13805 15.5467 6.41805 14.8267 6.09805ZM5 13.998C3.89333 13.998 3 14.8914 3 15.998C3 17.1047 3.89333 17.998 5 17.998C6.10667 17.998 7 17.1047 7 15.998C7 14.8914 6.10667 13.998 5 13.998ZM7.82667 19.098C7.04667 18.7514 6.08667 18.498 5 18.498C3.91333 18.498 2.95333 18.758 2.17333 19.098C1.45333 19.418 1 20.138 1 20.9247V21.998H9V20.9247C9 20.138 8.54667 19.418 7.82667 19.098ZM17 15.998C17 14.8914 17.8933 13.998 19 13.998C20.1067 13.998 21 14.8914 21 15.998C21 17.1047 20.1067 17.998 19 17.998C17.8933 17.998 17 17.1047 17 15.998ZM19 18.498C20.0867 18.498 21.0467 18.7514 21.8267 19.098C22.5467 19.418 23 20.138 23 20.9247V21.998H15V20.9247C15 20.138 15.4533 19.418 16.1733 19.098C16.9533 18.758 17.9133 18.498 19 18.498ZM11 9.99805V13.4177L8.00391 15.1298L8.99618 16.8663L12 15.1498L15.0039 16.8663L15.9962 15.1298L13 13.4177V9.99805H11Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  collapse: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          d="M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  column: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          d="M4 5C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H4ZM8.33 17H5V7H8.33V17ZM13.67 17H10.34V7H13.67V17ZM19 17H15.67V7H19V17Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  comment: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 3C21.1 3 21.99 3.9 21.99 5L21.9987 20.5839C21.9992 21.4751 20.9217 21.9217 20.2916 21.2916L18 19H4C2.9 19 2 18.1 2 17V5C2 3.9 2.9 3 4 3H20ZM7 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H7C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6ZM17 10H7C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10ZM17 14H7C6.44772 14 6 14.4477 6 15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          d="M21.99 5C21.99 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V17C2 18.1 2.9 19 4 19H18L20.2916 21.2916C20.9217 21.9217 21.9992 21.4751 21.9987 20.5839L21.99 5ZM20 5V18.17L18.83 17H4V5H20ZM6 14C6 13.4477 6.44772 13 7 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H7C6.44772 15 6 14.5523 6 14ZM6 11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H7C6.44772 12 6 11.5523 6 11ZM6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8Z"
        />
      </svg>`,
  },
  copy: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          d="M16 2C16 1.44772 15.5523 1 15 1H4C2.9 1 2 1.9 2 3V16C2 16.5523 2.44772 17 3 17C3.55228 17 4 16.5523 4 16V3H15C15.5523 3 16 2.55228 16 2ZM14.5858 5C14.851 5 15.1054 5.10536 15.2929 5.29289L20.7071 10.7071C20.8946 10.8946 21 11.149 21 11.4142V21C21 22.1 20.1 23 19 23H7.99C6.89 23 6 22.1 6 21L6.01 7C6.01 5.9 6.9 5 8 5H14.5858ZM14 11C14 11.5523 14.4477 12 15 12H19.5L14 6.5V11Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          d="M16 2C16 1.44772 15.5523 1 15 1H4C2.9 1 2 1.9 2 3V16C2 16.5523 2.44772 17 3 17C3.55228 17 4 16.5523 4 16V3H15C15.5523 3 16 2.55228 16 2ZM15.2929 5.29289C15.1054 5.10536 14.851 5 14.5858 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11.4142C21 11.149 20.8946 10.8946 20.7071 10.7071L15.2929 5.29289ZM8 21V7H14V11C14 11.5523 14.4477 12 15 12H19V21H8Z"
        />
      </svg>`,
  },
  crop: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          d="M17 15H19V7C19 5.9 18.1 5 17 5H9V7H17V15ZM7 17V2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V5H2C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H5V17C5 18.1 5.9 19 7 19H17V22C17 22.5523 17.4477 23 18 23C18.5523 23 19 22.5523 19 22V19H22C22.5523 19 23 18.5523 23 18C23 17.4477 22.5523 17 22 17H7Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  ctv: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.1818 4H3.8182C2.8182 4 2 4.8 2 5.7778v10.6666c0 .9778.8182 1.7778 1.8182 1.7778h4.5454V20h7.2728v-1.7778h4.5454c1 0 1.8091-.8 1.8091-1.7778L22 5.7778C22 4.8 21.1818 4 20.1818 4Zm0 12.4444H3.8182V5.7778h16.3636v10.6666ZM4.7273 13.7778v1.7778h1.8182c0-.9867-.8091-1.7778-1.8182-1.7778Zm0-2.6667v1.2711c1.7909 0 3.2454 1.4222 3.2454 3.1734h1.3c0-2.4534-2.0363-4.4445-4.5454-4.4445Zm0-2.6667v1.289c3.2818 0 5.9545 2.6044 5.9545 5.8222H12c0-3.9289-3.2636-7.1112-7.2727-7.1112Z"/>
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "currency-dollar": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7998 10.9C9.52982 10.31 8.79982 9.7 8.79982 8.75C8.79982 7.66 9.80982 6.9 11.4998 6.9C13.2798 6.9 13.9398 7.75 13.9998 9H16.2098C16.1398 7.28 15.0898 5.7 12.9998 5.19V3H9.99982V5.16C8.05982 5.58 6.49982 6.84 6.49982 8.77C6.49982 11.08 8.40982 12.23 11.1998 12.9C13.6998 13.5 14.1998 14.38 14.1998 15.31C14.1998 16 13.7098 17.1 11.4998 17.1C9.43982 17.1 8.62982 16.18 8.51982 15H6.31982C6.43982 17.19 8.07982 18.42 9.99982 18.83V21H12.9998V18.85C14.9498 18.48 16.4998 17.35 16.4998 15.3C16.4998 12.46 14.0698 11.49 11.7998 10.9Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "currency-euro": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18.5C12.49 18.5 10.32 17.08 9.24 15H15V13H8.58C8.53 12.67 8.5 12.34 8.5 12C8.5 11.66 8.53 11.33 8.58 11H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5C16.61 5.5 18.09 6.09 19.23 7.07L21 5.3C19.41 3.87 17.3 3 15 3C11.08 3 7.76 5.51 6.52 9H3V11H6.06C6.02 11.33 6 11.66 6 12C6 12.34 6.02 12.67 6.06 13H3V15H6.52C7.76 18.49 11.08 21 15 21C17.31 21 19.41 20.13 21 18.7L19.22 16.93C18.09 17.91 16.62 18.5 15 18.5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "currency-pound": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 21C15.93 21 17.62 19.83 18 18L16.25 17.12C16 18.21 15.33 19 14 19H9.1C9.93 18 10.6 16.66 10.6 15C10.6 14.65 10.57 14.31 10.52 14H14V12H9.82C9 10.42 8 9.6 8 8C8 6.07 9.57 4.5 11.5 4.5C13 4.5 14.29 5.45 14.78 6.78L16.63 6C15.83 3.95 13.84 2.5 11.5 2.5C8.46 2.5 6 4.96 6 8C6 9.78 6.79 10.9 7.49 12H6V14H8.47C8.55 14.31 8.6 14.64 8.6 15C8.6 17.7 6 19 6 19V21H14Z"
          fill="#111218"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "custom-event": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.0005 3C20.1005 3 21.0005 3.9 21.0005 5V19C21.0005 20.1 20.1005 21 19.0005 21H5.00049C3.90049 21 3.00049 20.1 3.00049 19V5C3.00049 3.9 3.90049 3 5.00049 3H19.0005ZM7.00049 7H17.0005V9H7.00049V7ZM7.00049 11H11.0005V13H7.00049V11ZM7.00049 15H11.0005V17H7.00049V15ZM17.0005 11H13.0005V17H17.0005V11Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.0005 3C20.1005 3 21.0005 3.9 21.0005 5V19C21.0005 20.1 20.1005 21 19.0005 21H5.00049C3.90049 21 3.00049 20.1 3.00049 19V5C3.00049 3.9 3.90049 3 5.00049 3H19.0005ZM7.00049 7H17.0005V9H7.00049V7ZM7.00049 11H11.0005V13H7.00049V11ZM7.00049 15H11.0005V17H7.00049V15ZM17.0005 11H13.0005V17H17.0005V11Z"
        />
      </svg>`,
  },
  "custom-list": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM7 18C7 18.5523 7.44772 19 8 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H8C7.44772 17 7 17.4477 7 18ZM7 12C7 12.5523 7.44772 13 8 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H8C7.44772 11 7 11.4477 7 12ZM8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H8Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  cut: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.64 7.64C9.87 7.14 10 6.59 10 6C10 3.79 8.21 2 6 2C3.79 2 2 3.79 2 6C2 8.21 3.79 10 6 10C6.59 10 7.14 9.87 7.64 9.64L10 12L7.64 14.36C7.14 14.13 6.59 14 6 14C3.79 14 2 15.79 2 18C2 20.21 3.79 22 6 22C8.21 22 10 20.21 10 18C10 17.41 9.87 16.86 9.64 16.36L12 14L19 21H22V20L9.64 7.64ZM6 8C4.9 8 4 7.11 4 6C4 4.89 4.9 4 6 4C7.1 4 8 4.89 8 6C8 7.11 7.1 8 6 8ZM6 20C4.9 20 4 19.11 4 18C4 16.89 4.9 16 6 16C7.1 16 8 16.89 8 18C8 19.11 7.1 20 6 20ZM12 12.5C11.72 12.5 11.5 12.28 11.5 12C11.5 11.72 11.72 11.5 12 11.5C12.28 11.5 12.5 11.72 12.5 12C12.5 12.28 12.28 12.5 12 12.5ZM19 3L13 9L15 11L22 4V3H19Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  dashboard: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 4C21 3.44772 20.5523 3 20 3H14C13.4477 3 13 3.44772 13 4V8C13 8.55228 13.4477 9 14 9H20C20.5523 9 21 8.55228 21 8V4ZM11 4C11 3.44772 10.5523 3 10 3H4C3.44772 3 3 3.44772 3 4V12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12V4ZM21 12C21 11.4477 20.5523 11 20 11H14C13.4477 11 13 11.4477 13 12V20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V12ZM11 16C11 15.4477 10.5523 15 10 15H4C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H10C10.5523 21 11 20.5523 11 20V16Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 4C21 3.44772 20.5523 3 20 3H14C13.4477 3 13 3.44772 13 4V8C13 8.55228 13.4477 9 14 9H20C20.5523 9 21 8.55228 21 8V4ZM11 4C11 3.44772 10.5523 3 10 3H4C3.44772 3 3 3.44772 3 4V12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12V4ZM21 12C21 11.4477 20.5523 11 20 11H14C13.4477 11 13 11.4477 13 12V20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V12ZM11 16C11 15.4477 10.5523 15 10 15H4C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H10C10.5523 21 11 20.5523 11 20V16Z"
        />
      </svg>`,
  },
  "data-cube": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 4C3 3.45 3.45 3 4 3H6V1H4C2.34 1 1 2.34 1 4V6H3V4ZM3 20V18H1V20C1 21.66 2.34 23 4 23H6V21H4C3.45 21 3 20.55 3 20ZM18 1H20C21.66 1 23 2.34 23 4V6H21V4C21 3.45 20.55 3 20 3H18V1ZM21 20C21 20.55 20.55 21 20 21H18V23H20C21.66 23 23 21.66 23 20V18H21V20ZM19 9.13V14.87C19 15.59 18.62 16.25 18 16.6L13 19.48C12.69 19.66 12.35 19.75 12 19.75C11.65 19.75 11.31 19.66 11 19.48L6 16.6C5.38 16.25 5 15.59 5 14.87V9.13C5 8.41 5.38 7.75 6 7.39L11 4.52C11.31 4.34 11.65 4.25 12 4.25C12.35 4.25 12.69 4.34 13 4.52L18 7.4C18.62 7.75 19 8.41 19 9.13ZM7 14.87L11 17.17V12.57L7 10.24V14.87ZM8.04 8.53L12 10.84L15.96 8.53L12 6.25L8.04 8.53ZM13 17.17L17 14.87V10.24L13 12.57V17.17Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "data-grid": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 5V8H5V5H20ZM15 19H10V10H15V19ZM5 10H8V19H5V10ZM17 19V10H20V19H17Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "data-pipeline": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.77969 8.20768C3.31623 9.12659 3.00049 10.4659 3.00049 12C3.00049 13.5341 3.31623 14.8734 3.77969 15.7923C3.81669 15.8657 3.85372 15.9348 3.89067 16H14.4308C14.3864 15.8373 14.3463 15.6733 14.31 15.5088C14.0406 14.2858 13.9617 12.9229 14.0173 11.6156C14.0717 10.3345 14.257 9.07057 14.5413 8L3.89067 8C3.85372 8.06517 3.81669 8.13432 3.77969 8.20768ZM15.326 6L7.15943 6C6.60238 5.41735 5.88707 5 5.02663 5C3.61272 5 2.59681 6.11175 1.99396 7.30704C1.36217 8.5597 1.00049 10.2204 1.00049 12C1.00049 13.7796 1.36217 15.4403 1.99396 16.693C2.59681 17.8883 3.61272 19 5.02663 19C5.8865 19 6.60032 18.5853 7.15918 18H15.2947C15.4636 18.2562 15.6534 18.4938 15.8667 18.7071C16.0542 18.8946 16.3086 19 16.5738 19H20.0609C20.0652 19 20.0695 19 20.0737 19C22.0067 19 23.5737 15.866 23.5737 12C23.5737 8.13408 22.0068 5.00012 20.0738 5C20.0738 5 20.0738 5 20.0738 5H20.0737C20.0737 5 20.0737 5 20.0736 5L16.5735 5.00012C16.3152 5.00016 16.0669 5.10012 15.8807 5.27906C15.6743 5.47747 15.4901 5.72286 15.326 6ZM18.7079 13.7784C18.6335 13.2108 18.5853 12.5517 18.5755 11.7888C18.603 10.191 18.9401 8.84 19.3877 7.94468C19.7075 7.30515 19.9651 7.0939 20.0737 7.02666C20.1824 7.0939 20.44 7.30515 20.7598 7.94468C21.227 8.87919 21.5737 10.3102 21.5737 12C21.5737 13.6898 21.227 15.1208 20.7598 16.0553C20.44 16.6948 20.1824 16.9061 20.0737 16.9733C19.9651 16.9061 19.7075 16.6948 19.3877 16.0553C19.0956 15.471 18.8505 14.6927 18.7079 13.7784Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  database: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.82079 3.66795C6.15216 2.78037 8.36059 2 12.0005 2C15.6404 2 17.8488 2.78037 19.1802 3.66795C19.8447 4.11095 20.2744 4.57029 20.5455 4.94576C20.6805 5.13256 20.7745 5.29632 20.8383 5.42388C20.8701 5.48761 20.8944 5.54222 20.9124 5.58608C20.9215 5.608 20.9289 5.62724 20.935 5.64359L20.943 5.66592L20.9463 5.67541L20.9478 5.67974L20.9485 5.68179C20.9488 5.68279 20.9492 5.68377 20.0005 6L20.9492 5.68377C20.9832 5.78574 21.0005 5.89252 21.0005 6V18.5C21.0005 18.7271 20.9232 18.9474 20.7814 19.1247L20.0005 18.5C20.7814 19.1247 20.7809 19.1253 20.7804 19.1258L20.7795 19.127L20.7774 19.1296L20.7726 19.1355L20.7608 19.1498C20.7518 19.1605 20.7406 19.1735 20.7273 19.1887C20.7006 19.219 20.665 19.258 20.6201 19.3042C20.5303 19.3967 20.4031 19.5183 20.2344 19.6588C19.8968 19.9402 19.3949 20.2958 18.6977 20.6444C17.2988 21.3439 15.1441 22 12.0005 22C8.82476 22 6.64607 21.2035 5.23599 20.3575C4.53482 19.9368 4.03347 19.5097 3.69963 19.1759C3.53283 19.0091 3.40797 18.8657 3.3209 18.7581C3.27736 18.7043 3.24323 18.6595 3.21801 18.6251C3.2054 18.6079 3.195 18.5933 3.18676 18.5815L3.17601 18.5659L3.17183 18.5598L3.17004 18.5571L3.16921 18.5559C3.16882 18.5553 3.16844 18.5547 4.00049 18L3.16844 18.5547C3.05893 18.3904 3.00049 18.1974 3.00049 18V6C3.00049 5.89252 3.01782 5.78574 3.0518 5.68377L4.00049 6C3.0518 5.68377 3.05213 5.68279 3.05247 5.68179L3.05316 5.67974L3.05463 5.67541L3.05793 5.66592L3.066 5.64359C3.07207 5.62724 3.07952 5.608 3.08854 5.58608C3.10657 5.54222 3.13083 5.48761 3.1627 5.42388C3.22648 5.29632 3.32052 5.13256 3.45543 4.94576C3.7266 4.57029 4.15629 4.11095 4.82079 3.66795ZM5.17828 5.98671C5.32847 5.80752 5.56591 5.5749 5.93019 5.33205C6.84882 4.71963 8.64038 4 12.0005 4C15.3606 4 17.1522 4.71963 18.0708 5.33205C18.4351 5.5749 18.6725 5.80752 18.8227 5.98671C18.8134 5.99927 18.804 6.01204 18.7942 6.025C18.5552 6.34376 18.1749 6.77987 17.6258 7.21913C16.5403 8.08751 14.7576 9 12.0005 9C9.24341 9 7.46065 8.08751 6.37518 7.21913C5.8261 6.77987 5.44581 6.34376 5.20674 6.025C5.19701 6.01203 5.18753 5.99927 5.17828 5.98671ZM5.00049 8.6788V11.6914C5.0444 11.7493 5.09935 11.8183 5.16599 11.8961C5.39973 12.1688 5.77611 12.5473 6.32395 12.9308C7.40896 13.6903 9.2094 14.5 12.0005 14.5C14.7916 14.5 16.592 13.6903 17.677 12.9308C18.2249 12.5473 18.6012 12.1688 18.835 11.8961C18.9016 11.8183 18.9566 11.7493 19.0005 11.6914V8.6788C18.9595 8.71282 18.9177 8.74685 18.8752 8.78087C17.4607 9.91249 15.2434 11 12.0005 11C8.75757 11 6.54032 9.91249 5.12579 8.78087C5.08327 8.74685 5.0415 8.71282 5.00049 8.6788ZM19.0005 14.4425C18.9431 14.4847 18.8843 14.527 18.824 14.5692C17.409 15.5597 15.2094 16.5 12.0005 16.5C8.79157 16.5 6.59202 15.5597 5.17703 14.5692C5.11668 14.527 5.05785 14.4847 5.00049 14.4425V17.6437C5.03335 17.6794 5.07107 17.7189 5.11385 17.7616C5.3425 17.9903 5.71616 18.3132 6.26498 18.6425C7.35491 19.2965 9.17622 20 12.0005 20C14.8569 20 16.7022 19.4061 17.8033 18.8556C18.3561 18.5792 18.7292 18.3098 18.9541 18.1224C18.9703 18.1089 18.9858 18.0958 19.0005 18.0831V14.4425ZM4.82605 17.4357L4.82691 17.4369C4.82619 17.4359 4.82591 17.4355 4.82605 17.4357Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  databases: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0005 1.5C6.68399 1.5 4.66405 2.64015 3.4768 3.8965C2.89557 4.51155 2.53734 5.12974 2.3227 5.60148C2.21525 5.83764 2.143 6.03878 2.09625 6.18718C2.07285 6.26148 2.05574 6.32285 2.04375 6.36915C2.03775 6.3923 2.03303 6.41172 2.02943 6.42714L2.02484 6.44723L2.02315 6.45498L2.02245 6.45826L2.02213 6.45975C2.02213 6.45975 2.02183 6.46115 3.00049 6.66667L2.02183 6.46115C2.00764 6.52873 2.00049 6.59817 2.00049 6.66723V18C2.00049 18.5523 2.4482 19 3.00049 19C3.55277 19 4.00049 18.5523 4.00049 18V6.79884L4.00385 6.78808C4.02888 6.70861 4.07284 6.58423 4.14312 6.42977C4.28395 6.12027 4.52728 5.69678 4.93042 5.27017C5.71193 4.44318 7.19198 3.5 10.0005 3.5C10.8242 3.5 11.9241 3.54845 12.9381 3.63395C13.9847 3.7222 14.8312 3.84175 15.2097 3.95678C15.7381 4.11739 16.2966 3.81924 16.4573 3.29082C16.6179 2.76241 16.3197 2.20384 15.7913 2.04322C15.1827 1.85822 14.1349 1.72776 13.1061 1.64102C12.0447 1.55153 10.8882 1.5 10.0005 1.5ZM14.0005 5C10.7953 5 8.83451 5.69831 7.64286 6.50535C7.04858 6.90783 6.6626 7.32636 6.41789 7.67057C6.29619 7.84175 6.21098 7.99234 6.15284 8.11049C6.12378 8.16952 6.10152 8.22037 6.08484 8.26159C6.0765 8.28219 6.06956 8.30039 6.06386 8.316L6.05622 8.33745L6.05306 8.34668L6.05164 8.35092L6.05097 8.35294C6.05065 8.35392 6.05033 8.3549 7.00049 8.66667L6.05033 8.3549C6.01731 8.45552 6.00049 8.56132 6.00049 8.66723V19.3333C6.00049 19.5283 6.05748 19.719 6.16444 19.882L7.00049 19.3333C6.16444 19.882 6.16482 19.8826 6.1652 19.8831L6.166 19.8844L6.16774 19.887L6.17173 19.893L6.18182 19.9078C6.1895 19.9189 6.19907 19.9326 6.21061 19.9486C6.23368 19.9805 6.26462 20.0219 6.30388 20.0711C6.38238 20.1696 6.49429 20.3001 6.6433 20.4515C6.94154 20.7545 7.38802 21.1407 8.01128 21.5205C9.26583 22.2852 11.1966 23 14.0005 23C16.7716 23 18.6783 22.4122 19.9221 21.7805C20.5416 21.4658 20.9889 21.1441 21.2911 20.8882C21.4421 20.7604 21.5565 20.6494 21.6378 20.5644C21.6784 20.5219 21.7108 20.4859 21.7354 20.4575C21.7477 20.4433 21.758 20.431 21.7665 20.4208L21.7777 20.407L21.7823 20.4014L21.7843 20.3988L21.7852 20.3976C21.7857 20.397 21.7861 20.3965 21.0005 19.7778L21.7861 20.3965C21.925 20.2201 22.0005 20.0022 22.0005 19.7778V8.6667C22.0005 8.56079 21.9837 8.45552 21.9506 8.3549L21.0005 8.66667C21.9506 8.3549 21.9503 8.35392 21.95 8.35294L21.9493 8.35092L21.9479 8.34668L21.9448 8.33745L21.9371 8.316C21.9314 8.30039 21.9245 8.28219 21.9161 8.26159C21.8995 8.22037 21.8772 8.16952 21.8481 8.11049C21.79 7.99234 21.7048 7.84175 21.5831 7.67057C21.3384 7.32636 20.9524 6.90783 20.3581 6.50535C19.1665 5.69831 17.2057 5 14.0005 5ZM8.76436 8.16132C8.49558 8.34335 8.30965 8.51776 8.18377 8.65959C8.38948 8.93362 8.7087 9.29967 9.16242 9.66841C10.092 10.4239 11.6228 11.2222 14.0005 11.2222C16.3782 11.2222 17.9089 10.4239 18.8386 9.66841C19.2923 9.29967 19.6115 8.93362 19.8172 8.65959C19.6913 8.51776 19.5054 8.34335 19.2366 8.16132C18.4595 7.63503 16.9203 7 14.0005 7C11.0807 7 9.54147 7.63503 8.76436 8.16132ZM8.00049 13.7346V11.3C9.26182 12.293 11.2028 13.2222 14.0005 13.2222C16.7982 13.2222 18.7392 12.293 20.0005 11.3V13.7346C19.7431 14.1731 19.397 14.6669 18.7145 15.1002C17.8993 15.6178 16.4978 16.1111 14.0005 16.1111C11.5032 16.1111 10.1016 15.6178 9.2865 15.1002C8.60402 14.6669 8.25784 14.1732 8.00049 13.7346ZM19.7865 16.7887C19.8603 16.7418 19.9316 16.6943 20.0005 16.6464V19.3604L19.9989 19.3618C19.809 19.5225 19.4906 19.7564 19.0164 19.9973C18.0727 20.4767 16.4794 21 14.0005 21C11.5543 21 9.98515 20.3814 9.0522 19.8128C8.58171 19.526 8.26256 19.2455 8.06861 19.0485C8.04389 19.0234 8.0212 18.9996 8.00049 18.9774V16.6464C8.0694 16.6943 8.14069 16.7418 8.21448 16.7887C9.441 17.5674 11.2478 18.1111 14.0005 18.1111C16.7532 18.1111 18.56 17.5674 19.7865 16.7887Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  delete: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0005 5L9.00049 5V4C9.00049 3.44772 9.4482 3 10.0005 3H14.0005C14.5528 3 15.0005 3.44772 15.0005 4V5ZM9.00049 5H20.0005C20.5528 5 21.0005 5.44772 21.0005 6C21.0005 6.55229 20.5528 7 20.0005 7H19.0005V20C19.0005 21.1046 18.1051 22 17.0005 22H7.00049C5.89592 22 5.00049 21.1046 5.00049 20V7H4.00049C3.4482 7 3.00049 6.55229 3.00049 6C3.00049 5.44772 3.4482 5 4.00049 5H9.00049ZM11.0005 10V17C11.0005 17.5523 10.5528 18 10.0005 18C9.4482 18 9.00049 17.5523 9.00049 17V10C9.00049 9.44772 9.4482 9 10.0005 9C10.5528 9 11.0005 9.44772 11.0005 10ZM14.0005 9C14.5528 9 15.0005 9.44772 15.0005 10V17C15.0005 17.5523 14.5528 18 14.0005 18C13.4482 18 13.0005 17.5523 13.0005 17V10C13.0005 9.44772 13.4482 9 14.0005 9Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5L15 5V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V5Z"
        />
        <path
          d="M11 17V10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17Z"
        />
        <path
          d="M15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V10Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 5H4C3.44772 5 3 5.44772 3 6C3 6.55229 3.44772 7 4 7H5V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V7H20C20.5523 7 21 6.55229 21 6C21 5.44772 20.5523 5 20 5H9ZM7 7V20H17V7H7Z"
        />
      </svg>`,
  },
  "desktop-computer": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.1818 3H3.8182C2.8182 3 2 3.81 2 4.8v10.8c0 .99.8182 1.8 1.8182 1.8h6.3636v1.8H8.3636V21h7.2728v-1.8h-1.8182v-1.8h6.3636c1 0 1.8182-.81 1.8182-1.8V4.8c0-.99-.8182-1.8-1.8182-1.8Zm0 12.6H3.8182V4.8h16.3636v10.8Z" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  devices: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H22V4H4C2.9 4 2 4.9 2 6V17H0V20H14V17H4V6ZM23 8H17C16.45 8 16 8.45 16 9V19C16 19.55 16.45 20 17 20H23C23.55 20 24 19.55 24 19V9C24 8.45 23.55 8 23 8ZM22 17H18V10H22V17Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  document: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.2929 2.29289C14.1054 2.10536 13.851 2 13.5858 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.41421C20 8.149 19.8946 7.89464 19.7071 7.70711L14.2929 2.29289ZM18.5 9.5H14C13.4477 9.5 13 9.05228 13 8.5V4L18.5 9.5ZM9 12.5H15C15.5523 12.5 16 12.9477 16 13.5C16 14.0523 15.5523 14.5 15 14.5H9C8.44772 14.5 8 14.0523 8 13.5C8 12.9477 8.44772 12.5 9 12.5ZM9 16.5H15C15.5523 16.5 16 16.9477 16 17.5C16 18.0523 15.5523 18.5 15 18.5H9C8.44772 18.5 8 18.0523 8 17.5C8 16.9477 8.44772 16.5 9 16.5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
       <path
          d="M8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17ZM8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13ZM14.2929 2.29289C14.1054 2.10536 13.851 2 13.5858 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.41421C20 8.149 19.8946 7.89464 19.7071 7.70711L14.2929 2.29289ZM18 20H6V4H13V8C13 8.55228 13.4477 9 14 9H18V20Z"
        />
      </svg>`,
  },
  download: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 15C18.4477 15 18 15.4477 18 16V18H6V16C6 15.4477 5.55228 15 5 15C4.44772 15 4 15.4477 4 16V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V16C20 15.4477 19.5523 15 19 15ZM16.2943 11.7057C16.6841 11.3159 16.6841 10.6841 16.2943 10.2943C15.9051 9.90511 15.2743 9.9045 14.8843 10.293L13 12.17V5C13 4.44771 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V12.17L9.11568 10.293C8.72572 9.9045 8.09489 9.90511 7.70568 10.2943C7.31594 10.6841 7.31594 11.3159 7.70568 11.7057L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929L16.2943 11.7057Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  duplicate: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 19C7 20.1046 7.89543 21 9 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7H9C7.89543 7 7 7.89543 7 9V19ZM3 15C3 16.1046 3.89543 17 5 17H6V15V8.5C6 7.11929 7.11929 6 8.5 6H15H17V5C17 3.89543 16.1046 3 15 3H5C3.89543 3 3 3.89543 3 5V15ZM13 11V13H11C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15H13V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H15V11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
       <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 19C7 20.1046 7.89543 21 9 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7H17V5C17 3.89543 16.1046 3 15 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H7V19ZM9 7H15V5H5V15H7V9C7 7.89543 7.89543 7 9 7ZM19 19L9 19V9H19V19ZM13.125 11.375V13.125H11.375C10.8918 13.125 10.5 13.5168 10.5 14C10.5 14.4832 10.8918 14.875 11.375 14.875H13.125V16.625C13.125 17.1082 13.5168 17.5 14 17.5C14.4832 17.5 14.875 17.1082 14.875 16.625V14.875H16.625C17.1082 14.875 17.5 14.4832 17.5 14C17.5 13.5168 17.1082 13.125 16.625 13.125H14.875V11.375C14.875 10.8918 14.4832 10.5 14 10.5C13.5168 10.5 13.125 10.8918 13.125 11.375Z"
        />
      </svg>`,
  },
  edit: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
         <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3c-1.1046 0-2 .8954-2 2v14c0 1.1046.8954 2 2 2h14c1.1046 0 2-.8954 2-2v-7h-2v7H5V5h7V3H5Zm4 9.9115a1 1 0 0 1 .2892-.7034l6.5679-6.6367 2.5715 2.5715-6.6367 6.5679a.9999.9999 0 0 1-.7034.2892H9.5a.5.5 0 0 1-.5-.5v-1.5885Zm11.805-8.1567c.26.26.26.6799 0 .9398l-1.2198 1.2199-2.4997-2.4997 1.2199-1.2198a.6637.6637 0 0 1 .9398 0l1.5598 1.5598Z" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3c-1.1046 0-2 .8954-2 2v14c0 1.1046.8954 2 2 2h14c1.1046 0 2-.8954 2-2v-7h-2v7H5V5h7V3H5Zm4 9.9115a1 1 0 0 1 .2892-.7034l6.5679-6.6367 2.5715 2.5715-6.6367 6.5679a.9999.9999 0 0 1-.7034.2892H9.5a.5.5 0 0 1-.5-.5v-1.5885Zm11.805-8.1567c.26.26.26.6799 0 .9398l-1.2198 1.2199-2.4997-2.4997 1.2199-1.2198a.6637.6637 0 0 1 .9398 0l1.5598 1.5598Z"/>
      </svg>`,
  },
  ellipsis: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  email: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L13.06 12.3375C12.4115 12.7428 11.5885 12.7428 10.94 12.3375L4 8V6L10.94 10.3375C11.5885 10.7428 12.4115 10.7428 13.06 10.3375L20 6V8Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L10.94 12.3375C11.5885 12.7428 12.4115 12.7428 13.06 12.3375L20 8V18ZM13.06 10.3375C12.4115 10.7428 11.5885 10.7428 10.94 10.3375L4 6H20L13.06 10.3375Z"
        />
      </svg>`,
  },
  error: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM11 6V12H13V6H11ZM12 17.5C12.8284 17.5 13.5 16.8284 13.5 16C13.5 15.1716 12.8284 14.5 12 14.5C11.1716 14.5 10.5 15.1716 10.5 16C10.5 16.8284 11.1716 17.5 12 17.5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 11V4H9V11H11ZM0 10C0 4.48 4.47 0 9.99 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 9.99 20C4.47 20 0 15.52 0 10ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10ZM10 15.5C10.8284 15.5 11.5 14.8284 11.5 14C11.5 13.1716 10.8284 12.5 10 12.5C9.17157 12.5 8.5 13.1716 8.5 14C8.5 14.8284 9.17157 15.5 10 15.5Z"
        />
      </svg>`,
  },
  expand: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  export: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.00073 6C4.00073 4.89543 4.89616 4 6.00073 4H9.00073C9.55302 4 10.0007 4.44772 10.0007 5C10.0007 5.55228 9.55302 6 9.00073 6H6.00073V18H18.0007V15C18.0007 14.4477 18.4484 14 19.0007 14C19.553 14 20.0007 14.4477 20.0007 15V18C20.0007 19.1046 19.1053 20 18.0007 20H6.00073C4.89616 20 4.00073 19.1046 4.00073 18V6ZM16.5865 6H14.0007C13.4484 6 13.0007 5.55228 13.0007 5C13.0007 4.44772 13.4484 4 14.0007 4H19.0007C19.553 4 20.0007 4.44772 20.0007 5V10C20.0007 10.5523 19.553 11 19.0007 11C18.4484 11 18.0007 10.5523 18.0007 10V7.41421L13.4149 12C13.0244 12.3905 12.3913 12.3905 12.0007 12C11.6102 11.6095 11.6102 10.9763 12.0007 10.5858L16.5865 6Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "eye-hide": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5.99995C15.79 5.99995 19.17 8.12995 20.82 11.5C20.23 12.72 19.4 13.77 18.41 14.62L19.82 16.03C21.21 14.8 22.31 13.26 23 11.5C21.27 7.10995 17 3.99995 12 3.99995C10.73 3.99995 9.51 4.19995 8.36 4.56995L10.01 6.21995C10.66 6.08995 11.32 5.99995 12 5.99995ZM10.93 7.13995L13 9.20995C13.57 9.45995 14.03 9.91995 14.28 10.49L16.35 12.56C16.43 12.22 16.49 11.86 16.49 11.49C16.5 9.00995 14.48 6.99995 12 6.99995C11.63 6.99995 11.28 7.04995 10.93 7.13995ZM2.01 3.86995L4.69 6.54995C3.06 7.82995 1.77 9.52995 1 11.5C2.73 15.89 7 19 12 19C13.52 19 14.98 18.71 16.32 18.18L19.74 21.6L21.15 20.19L3.42 2.44995L2.01 3.86995ZM9.51 11.37L12.12 13.98C12.08 13.99 12.04 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 11.45 9.51 11.42 9.51 11.37ZM6.11 7.96995L7.86 9.71995C7.63 10.27 7.5 10.87 7.5 11.5C7.5 13.98 9.52 16 12 16C12.63 16 13.23 15.87 13.77 15.64L14.75 16.62C13.87 16.86 12.95 17 12 17C8.21 17 4.83 14.87 3.18 11.5C3.88 10.07 4.9 8.88995 6.11 7.96995Z"
        />
      </svg>`,
  },
  "eye-see": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6C15.79 6 19.17 8.13 20.82 11.5C19.17 14.87 15.79 17 12 17C8.21 17 4.83 14.87 3.18 11.5C4.83 8.13 8.21 6 12 6ZM12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z"
        />
      </svg>`,
  },
  favorites: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.2158 7.78864C17.883 7.20955 17.5264 6.11301 16.6462 6.0371L11.81 5.62008L9.92125 1.17031C9.57632 0.357705 8.42451 0.358017 8.08003 1.17081L6.19005 5.63008L1.36168 6.03971C0.480251 6.11449 0.122845 7.21275 0.791443 7.79196L4.46005 10.9701L3.35846 15.6921C3.1575 16.5536 4.09173 17.2325 4.84905 16.7755L9.00005 14.2701L13.1549 16.7778C13.9116 17.2345 14.8454 16.5568 14.6458 15.6957L13.55 10.9701L17.2158 7.78864Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2158 10.7886C20.883 10.2095 20.5264 9.11301 19.6462 9.0371L14.81 8.62008L12.9212 4.17031C12.5763 3.35771 11.4245 3.35802 11.08 4.17081L9.19005 8.63008L4.36168 9.03971C3.48025 9.11449 3.12284 10.2128 3.79144 10.792L7.46005 13.9701L6.35846 18.6921C6.1575 19.5536 7.09173 20.2325 7.84905 19.7755L12 17.2701L16.1549 19.7778C16.9116 20.2345 17.8454 19.5568 17.6458 18.6957L16.55 13.9701L20.2158 10.7886ZM12 15.4001L8.24005 17.6701L9.24005 13.3901L5.92005 10.5101L10.3 10.1301L12 6.10008L13.71 10.1401L18.09 10.5201L14.77 13.4001L15.77 17.6801L12 15.4001Z"
        />
      </svg>`,
  },
  "file-csv": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5858 0C17.851 0 18.1054 0.105357 18.2929 0.292893L22.2071 4.20711C22.3946 4.39464 22.5 4.649 22.5 4.91421V23C22.5 23.5523 22.0523 24 21.5 24H2.5C1.94772 24 1.5 23.5523 1.5 23V1C1.5 0.447715 1.94772 0 2.5 0H17.5858ZM6.5 13.5H8.5V11.5H6.5V13.5ZM6.5 10.5H8.5V8.5H6.5V10.5ZM9.5 8.5V10.5H11.5V8.5H9.5ZM11.5 7.5H9.5V5.5C9.5 5.22386 9.27614 5 9 5C8.72386 5 8.5 5.22386 8.5 5.5V7.5H6.5V5.5C6.5 5.22386 6.27614 5 6 5C5.72386 5 5.5 5.22386 5.5 5.5V7.5H4.5C4.22386 7.5 4 7.72386 4 8C4 8.27614 4.22386 8.5 4.5 8.5H5.5V10.5H4.5C4.22386 10.5 4 10.7239 4 11C4 11.2761 4.22386 11.5 4.5 11.5H5.5V13.5H3V1.5H17.25V4.25C17.25 4.80228 17.6977 5.25 18.25 5.25H21V13.5H15.5V11.5H16.5C16.7761 11.5 17 11.2761 17 11C17 10.7239 16.7761 10.5 16.5 10.5H15.5V8.5H16.5C16.7761 8.5 17 8.27614 17 8C17 7.72386 16.7761 7.5 16.5 7.5H15.5V5.5C15.5 5.22386 15.2761 5 15 5C14.7239 5 14.5 5.22386 14.5 5.5V7.5H12.5V5.5C12.5 5.22386 12.2761 5 12 5C11.7239 5 11.5 5.22386 11.5 5.5V7.5ZM14.5 11.5V13.5H12.5V11.5H14.5ZM14.5 8.5V10.5H12.5V8.5H14.5ZM11.5 11.5H9.5V13.5H11.5V11.5ZM6.70034 16.7037C6.14625 16.7037 5.72272 16.9107 5.42976 17.3247C5.13679 17.7386 4.99031 18.3055 4.99031 19.0251C4.99031 19.7512 5.12405 20.3148 5.39154 20.7161C5.6654 21.1109 6.10167 21.3084 6.70034 21.3084C6.9742 21.3084 7.25124 21.2765 7.53147 21.2128C7.8117 21.1492 8.11422 21.06 8.43903 20.9454V22.1586C8.13969 22.2796 7.84354 22.3688 7.55058 22.4261C7.25761 22.4834 6.92962 22.5121 6.56659 22.5121C5.85965 22.5121 5.28009 22.3688 4.8279 22.0822C4.37571 21.7892 4.04135 21.3816 3.82481 20.8594C3.60827 20.3308 3.5 19.7162 3.5 19.0156C3.5 18.3278 3.62419 17.7195 3.87258 17.1909C4.12096 16.6623 4.4808 16.2483 4.95209 15.949C5.42976 15.6497 6.0125 15.5 6.70034 15.5C7.03788 15.5 7.37543 15.5446 7.71298 15.6337C8.0569 15.7165 8.38489 15.8312 8.69697 15.9777L8.22886 17.1527C7.9741 17.0317 7.71617 16.9266 7.45504 16.8375C7.20029 16.7483 6.94872 16.7037 6.70034 16.7037ZM13.9104 20.525C13.9104 21.13 13.6906 21.6141 13.2512 21.9771C12.8181 22.3338 12.2003 22.5121 11.3978 22.5121C10.6782 22.5121 10.0349 22.3752 9.46809 22.1013V20.7543C9.7929 20.8944 10.1273 21.025 10.4712 21.146C10.8215 21.2606 11.1686 21.3179 11.5125 21.3179C11.8691 21.3179 12.1207 21.2511 12.2672 21.1173C12.42 20.9772 12.4965 20.8021 12.4965 20.5919C12.4965 20.4199 12.436 20.2734 12.315 20.1524C12.2003 20.0314 12.0443 19.92 11.8468 19.8181C11.6494 19.7098 11.4233 19.5952 11.1686 19.4741C11.0093 19.3977 10.8374 19.3086 10.6527 19.2067C10.468 19.0984 10.2897 18.9678 10.1177 18.815C9.95212 18.6558 9.81519 18.4647 9.70692 18.2418C9.59865 18.0189 9.54452 17.7514 9.54452 17.4393C9.54452 16.8279 9.7515 16.3534 10.1655 16.0159C10.5795 15.672 11.1431 15.5 11.8564 15.5C12.2131 15.5 12.5506 15.5414 12.869 15.6242C13.1875 15.707 13.525 15.8248 13.8817 15.9777L13.4136 17.1049C13.1015 16.9776 12.8213 16.8789 12.5729 16.8088C12.3245 16.7387 12.0698 16.7037 11.8086 16.7037C11.5348 16.7037 11.3246 16.7674 11.1781 16.8948C11.0316 17.0222 10.9584 17.1877 10.9584 17.3915C10.9584 17.6336 11.0667 17.8246 11.2832 17.9647C11.4997 18.1049 11.8214 18.2768 12.2481 18.4806C12.5984 18.6462 12.8945 18.8182 13.1365 18.9965C13.3849 19.1748 13.576 19.385 13.7097 19.627C13.8435 19.869 13.9104 20.1684 13.9104 20.525ZM18.1786 22.4165L20.5 15.5955H19.0384L17.7487 19.6557C17.7232 19.7257 17.685 19.8563 17.634 20.0473C17.5894 20.232 17.5417 20.4295 17.4907 20.6396C17.4461 20.8434 17.4143 21.0154 17.3952 21.1555C17.3761 21.0154 17.3411 20.8434 17.2901 20.6396C17.2392 20.4295 17.1882 20.232 17.1373 20.0473C17.0863 19.8563 17.0513 19.7257 17.0322 19.6557L15.752 15.5955H14.2904L16.6023 22.4165H18.1786Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "file-excel": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
         <path
          d="M8.25 12H5.25V9H8.25V12ZM8.25 4.5H5.25V7.5H8.25V4.5ZM15.75 4.5H9.75V7.5H15.75V4.5ZM15.75 9H9.75V12H15.75V9ZM22.2071 4.20711C22.3946 4.39464 22.5 4.649 22.5 4.91421V23C22.5 23.5523 22.0523 24 21.5 24H2.5C1.94772 24 1.5 23.5523 1.5 23V1C1.5 0.447716 1.94772 0 2.5 0H17.5858C17.851 0 18.1054 0.105357 18.2929 0.292893L22.2071 4.20711ZM3 1.5V13.5H21V5.25H18.25C17.6977 5.25 17.25 4.80228 17.25 4.25V1.5H3ZM5.60625 18.3825L3.3645 21.75H4.95L6.381 19.527L7.7835 21.75H9.46725L7.2255 18.3908L9.2865 15.3225H7.7385L6.43425 17.3745L5.175 15.3225H3.5355L5.60625 18.3825ZM10.0312 15.3225V21.75H14.5763V20.5605H11.4465V15.3225H10.0312ZM14.9655 19.6147C14.9505 19.9694 15.0248 20.3222 15.1815 20.6408C15.3257 20.9222 15.5337 21.1659 15.789 21.3525C16.0544 21.5436 16.3537 21.6826 16.671 21.762C17.0076 21.8489 17.3539 21.8925 17.7015 21.8918C18.0923 21.8994 18.4821 21.8489 18.858 21.7418C19.1621 21.6552 19.4464 21.5103 19.695 21.315C19.9132 21.1399 20.0873 20.9162 20.2035 20.6618C20.3187 20.4045 20.3771 20.1254 20.3745 19.8435C20.3876 19.5315 20.3078 19.2227 20.145 18.9562C20.003 18.7369 19.8177 18.5488 19.6005 18.4035C19.4048 18.2729 19.1911 18.1719 18.966 18.1035C18.753 18.0405 18.5865 17.9978 18.4665 17.9738C18.0645 17.8718 17.739 17.787 17.4915 17.7218C17.291 17.6728 17.0953 17.6063 16.9065 17.523C16.7933 17.4795 16.695 17.4045 16.623 17.307C16.57 17.2142 16.5441 17.1085 16.548 17.0018C16.5432 16.8813 16.5745 16.7622 16.638 16.6597C16.6979 16.5695 16.7761 16.4928 16.8675 16.4347C16.9623 16.3739 17.0676 16.3312 17.178 16.3088C17.2904 16.2846 17.405 16.2722 17.52 16.272C17.681 16.269 17.8418 16.2825 18 16.3125C18.1386 16.338 18.2713 16.3889 18.3915 16.4625C18.5077 16.5368 18.6023 16.6402 18.666 16.7625C18.7409 16.9104 18.7824 17.073 18.7875 17.2388H20.1555C20.1672 16.9103 20.0966 16.5842 19.95 16.29C19.8128 16.0333 19.617 15.8126 19.3785 15.6458C19.1286 15.4739 18.8488 15.3503 18.5535 15.2812C18.2366 15.2055 17.9118 15.168 17.586 15.1695C17.2942 15.1702 17.0037 15.2093 16.722 15.2858C16.4449 15.3595 16.1829 15.4813 15.948 15.6458C15.7221 15.8062 15.5333 16.0134 15.3945 16.2533C15.2488 16.5158 15.1758 16.8125 15.183 17.1127C15.1732 17.3571 15.2227 17.6002 15.3272 17.8213C15.4316 18.0424 15.588 18.2349 15.783 18.3825C15.9694 18.5241 16.1756 18.6376 16.395 18.7192C16.6242 18.8073 16.8586 18.8809 17.097 18.9398C17.331 19.0065 17.562 19.0657 17.79 19.1205C17.9986 19.1677 18.2032 19.2308 18.402 19.3095C18.5638 19.3696 18.7122 19.4611 18.8385 19.5788C18.894 19.6339 18.9375 19.6999 18.9662 19.7728C18.9949 19.8456 19.0081 19.9236 19.005 20.0018C19.0108 20.1461 18.9662 20.2879 18.879 20.403C18.7944 20.5086 18.6866 20.5933 18.564 20.6505C18.4357 20.7107 18.2992 20.7516 18.159 20.772C18.0249 20.7922 17.8896 20.8028 17.754 20.8035C17.5718 20.8041 17.3903 20.7812 17.214 20.7352C17.0509 20.6955 16.8968 20.6256 16.7595 20.529C16.6289 20.4335 16.5225 20.3086 16.449 20.1645C16.3671 19.9931 16.3275 19.8046 16.3335 19.6147H14.9655Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "file-pdf": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
         <path
          d="M18.2929 0.292893C18.1054 0.105357 17.851 0 17.5858 0H2.5C1.94772 0 1.5 0.447715 1.5 1V23C1.5 23.5523 1.94772 24 2.5 24H21.5C22.0523 24 22.5 23.5523 22.5 23V4.91421C22.5 4.649 22.3946 4.39464 22.2071 4.20711L18.2929 0.292893ZM21 13.5H18V7.5H15V13.5H13.5V4.5H10.5V13.5H9V6H6V13.5H3V1.5H17.25V4.25C17.25 4.80228 17.6977 5.25 18.25 5.25H21V13.5ZM6.5145 15.3225C6.86472 15.3129 7.21338 15.3725 7.5405 15.498C7.8013 15.6 8.03639 15.7582 8.229 15.9615C8.40387 16.15 8.53589 16.3742 8.616 16.6185C8.77801 17.1138 8.77801 17.6479 8.616 18.1432C8.53656 18.3895 8.4045 18.6154 8.229 18.8055C8.03615 19.0083 7.80112 19.1663 7.5405 19.2682C7.21343 19.3939 6.86477 19.4538 6.5145 19.4445H5.0295V21.75H3.6165V15.3225H6.5145ZM6.1275 18.3458C6.28419 18.3464 6.44068 18.3346 6.5955 18.3105C6.73534 18.2903 6.86986 18.2429 6.9915 18.171C7.10767 18.0997 7.2025 17.9984 7.266 17.8778C7.33425 17.7218 7.36949 17.5534 7.36949 17.3831C7.36949 17.2129 7.33425 17.0445 7.266 16.8885C7.20228 16.768 7.10751 16.6668 6.9915 16.5953C6.86951 16.5241 6.73514 16.4768 6.5955 16.4557C6.44064 16.432 6.28417 16.4202 6.1275 16.4205H5.0295V18.3458H6.1275ZM12.3915 15.3225C12.7856 15.3194 13.1772 15.3862 13.548 15.5198C13.8969 15.6472 14.2134 15.85 14.475 16.1138C14.7476 16.3964 14.9563 16.7343 15.087 17.1045C15.2428 17.5527 15.3175 18.0251 15.3075 18.4995C15.312 18.938 15.2513 19.3748 15.1275 19.7955C15.018 20.1711 14.8327 20.5203 14.583 20.8215C14.335 21.1134 14.0243 21.3454 13.674 21.5002C13.2693 21.6742 12.8319 21.7589 12.3915 21.7485H9.6165V15.3225H12.3915ZM12.2925 20.5605C12.4946 20.5607 12.6954 20.5273 12.8865 20.4615C13.0809 20.3938 13.2567 20.2813 13.3995 20.133C13.561 19.961 13.6838 19.7564 13.7595 19.533C13.8563 19.2431 13.902 18.9386 13.8945 18.633C13.8976 18.3378 13.8659 18.0433 13.8 17.7555C13.7453 17.5125 13.6395 17.2839 13.4895 17.085C13.3399 16.8946 13.1428 16.7469 12.918 16.6567C12.638 16.5502 12.34 16.4993 12.0405 16.5068H11.0325V20.5568L12.2925 20.5605ZM20.8065 15.3225V16.5105H17.7V17.9955H20.3925V19.0935H17.7V21.75H16.2885V15.3225H20.8065Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "file-powerpoint": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.2929 0.292893C18.1054 0.105357 17.851 0 17.5858 0H2.5C1.94772 0 1.5 0.447715 1.5 1V23C1.5 23.5523 1.94772 24 2.5 24H21.5C22.0523 24 22.5 23.5523 22.5 23V4.91421C22.5 4.649 22.3946 4.39464 22.2071 4.20711L18.2929 0.292893ZM17.25 1.5V4.25C17.25 4.80228 17.6977 5.25 18.25 5.25H21V13.5H17.1908C17.7195 12.588 17.9986 11.5529 18 10.4988C18.0014 9.44462 17.7251 8.40872 17.1988 7.49533C16.6726 6.58195 15.915 5.82334 15.0023 5.29586C14.0897 4.76838 13.0541 4.49066 12 4.49066C10.9459 4.49066 9.91033 4.76838 8.99766 5.29586C8.08499 5.82334 7.3274 6.58195 6.80115 7.49533C6.27491 8.40872 5.99858 9.44462 6.00001 10.4988C6.00143 11.5529 6.28054 12.588 6.80925 13.5H3V1.5H17.25ZM15.3472 13.5H10.815L12.75 10.7362V6.0675C13.5438 6.2002 14.2873 6.5438 14.9027 7.06234C15.5182 7.58087 15.983 8.25529 16.2485 9.01502C16.514 9.77476 16.5704 10.5919 16.4118 11.3809C16.2533 12.1699 15.8856 12.9018 15.3472 13.5ZM6.7665 15.3225C7.11672 15.3129 7.46538 15.3725 7.7925 15.498C8.0533 15.6 8.28839 15.7582 8.481 15.9615C8.65587 16.15 8.78789 16.3742 8.868 16.6185C9.03001 17.1138 9.03001 17.6479 8.868 18.1432C8.78856 18.3895 8.6565 18.6154 8.481 18.8055C8.28815 19.0083 8.05312 19.1663 7.7925 19.2682C7.46543 19.3939 7.11677 19.4538 6.7665 19.4445H5.2815V21.75H3.8685V15.3225H6.7665ZM6.3795 18.3458C6.53619 18.3464 6.69268 18.3346 6.8475 18.3105C6.98734 18.2903 7.12186 18.2429 7.2435 18.171C7.35967 18.0997 7.4545 17.9984 7.518 17.8778C7.58626 17.7218 7.62149 17.5534 7.62149 17.3831C7.62149 17.2129 7.58626 17.0445 7.518 16.8885C7.45428 16.768 7.35951 16.6668 7.2435 16.5953C7.12151 16.5241 6.98714 16.4768 6.8475 16.4557C6.69264 16.432 6.53617 16.4202 6.3795 16.4205H5.2815V18.3458H6.3795ZM12.7695 15.3225C13.1197 15.3129 13.4684 15.3725 13.7955 15.498C14.0563 15.6 14.2914 15.7582 14.484 15.9615C14.6589 16.15 14.7909 16.3742 14.871 16.6185C15.033 17.1138 15.033 17.6479 14.871 18.1432C14.7916 18.3895 14.6595 18.6154 14.484 18.8055C14.2912 19.0083 14.0561 19.1663 13.7955 19.2682C13.4684 19.3939 13.1198 19.4538 12.7695 19.4445H11.2845V21.75H9.8715V15.3225H12.7695ZM12.3825 18.3458C12.5392 18.3464 12.6957 18.3346 12.8505 18.3105C12.9903 18.2903 13.1249 18.2429 13.2465 18.171C13.3627 18.0997 13.4575 17.9984 13.521 17.8778C13.5893 17.7218 13.6245 17.5534 13.6245 17.3831C13.6245 17.2129 13.5893 17.0445 13.521 16.8885C13.4573 16.768 13.3625 16.6668 13.2465 16.5953C13.1245 16.5241 12.9901 16.4768 12.8505 16.4557C12.6956 16.432 12.5392 16.4202 12.3825 16.4205H11.2845V18.3458H12.3825ZM15.3705 16.5105V15.3225H20.6355V16.5105H18.7095V21.75H17.2965V16.5105H15.3705Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "file-sheets": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.0005 3C20.1005 3 21.0005 3.9 21.0005 5V19C21.0005 20.1 20.1005 21 19.0005 21H5.00049C3.90049 21 3.00049 20.1 3.00049 19V5C3.00049 3.9 3.90049 3 5.00049 3H19.0005ZM13 19H19.0005V15.5H13V19ZM11 19V15.5H5.00049V19H11ZM5.00049 13.5H11V10H5.00049V13.5ZM5.00049 8H11V5H5.00049V8ZM13 5H19.0005V8H13V5ZM19.0005 10H13V13.5H19.0005V10Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "file-slides": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 4L20 4V20H4V4ZM7 7C5.89543 7 5 7.89543 5 9V15C5 16.1046 5.89543 17 7 17H17C18.1046 17 19 16.1046 19 15V9C19 7.89543 18.1046 7 17 7H7ZM7 9H17L17 15H7V9Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "file-zips": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.2929 2.29289C14.1054 2.10536 13.851 2 13.5858 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8.41421C20 8.149 19.8946 7.89464 19.7071 7.70711L14.2929 2.29289ZM6 20V4H8V6H10V8H8V10H10V12H8V14H10V16H8V18H10V20H6ZM10 18V16H12V14H10V12H12V10H10V8H12V6H10V4H14V7C14 7.55228 14.4477 8 15 8H18V20H12V18H10Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  filter: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 17C10 17.5523 10.4477 18 11 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H11C10.4477 16 10 16.4477 10 17ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4ZM6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H7C6.44772 11 6 11.4477 6 12Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  flag: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 6L13 4H5V21H7V14H12L13 16H20V6H14Z" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 6L13 4H5V21H7V14H12L13 16H20V6H14ZM18 14H14L13 12H7V6H12L13 8H18V14Z"
        />
      </svg>`,
  },
  "flat-list": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 18C14 17.4477 13.5523 17 13 17H5C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H13C13.5523 19 14 18.5523 14 18ZM20 10C20 9.44772 19.5523 9 19 9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11H19C19.5523 11 20 10.5523 20 10ZM4 14C4 14.5523 4.44772 15 5 15H19C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13H5C4.44772 13 4 13.4477 4 14ZM5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H19C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5H5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "flat-view": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  folder: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.17 6L11.17 8H20V18H4V6H9.17ZM10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
        />
      </svg>`,
  },
  "full-screen-exit": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 16H8V19H10V14H5V16ZM8 8H5V10H10V5H8V8ZM14 19H16V16H19V14H14V19ZM16 8V5H14V10H19V8H16Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "full-screen": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  gracenote: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.75 15C14.0972 15 16 13.0972 16 10.75C16 8.40279 14.0972 6.5 11.75 6.5C9.40279 6.5 7.5 8.40279 7.5 10.75C7.5 13.0972 9.40279 15 11.75 15ZM17 7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7ZM11.75 19C13.8211 19 15.5 18.2165 15.5 17.25C15.5 16.2835 13.8211 15.5 11.75 15.5C9.67893 15.5 8 16.2835 8 17.25C8 18.2165 9.67893 19 11.75 19Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  grid: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM8 20H4V16H8V20ZM8 14H4V10H8V14ZM8 8H4V4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM20 20H16V16H20V20ZM20 14H16V10H20V14ZM20 8H16V4H20V8Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  group: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H24V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V18H18V16.39C18 15.21 17.32 14.13 16.24 13.65ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H24V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V18H18V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z"
        />
      </svg>`,
  },
  "hamburger-menu": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  hiking: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4998 5.5C14.5998 5.5 15.4998 4.6 15.4998 3.5C15.4998 2.4 14.5998 1.5 13.4998 1.5C12.3998 1.5 11.4998 2.4 11.4998 3.5C11.4998 4.6 12.3998 5.5 13.4998 5.5ZM17.4998 10.78C16.2698 10.41 15.2798 9.61 14.6998 8.6L13.6998 7C13.2898 6.35 12.5898 6 11.8598 6C11.0798 6 10.2698 6.5 10.0798 7.44C9.8898 8.38 6.9998 23 6.9998 23H9.0998L10.8998 15L12.9998 17V23H14.9998V15.5L12.8998 13.5L13.4998 10.5C14.4998 11.65 15.9098 12.51 17.4998 12.84V23H18.9998V9H17.4998V10.78ZM7.4298 13.13L5.3098 12.72C4.7698 12.61 4.4098 12.09 4.5198 11.55L5.2798 7.62C5.4898 6.54 6.5398 5.83 7.6198 6.04L8.7798 6.27L7.4298 13.13Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  households: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L6 7.58V6H4V9.11L1 11.4L2.21 12.99L4 11.62V21H11V15H13V21H20V11.62L21.79 12.98L23 11.4L12 3ZM10 1C10 2.66 8.66 4 7 4C6.45 4 6 4.45 6 5H4C4 3.34 5.34 2 7 2C7.55 2 8 1.55 8 1H10Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L6 7.58V6H4V9.11L1 11.4L2.21 12.99L4 11.62V21H20V11.62L21.79 12.98L23 11.4L12 3ZM18 19H13V15H11V19H6V10.1L12 5.52L18 10.1V19ZM10 1C10 2.66 8.66 4 7 4C6.45 4 6 4.45 6 5H4C4 3.34 5.34 2 7 2C7.55 2 8 1.55 8 1H10Z"
        />
      </svg>`,
  },
  image: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM14.14 11.8604L11.14 15.7304L9 13.1404L6 17.0004H18L14.14 11.8604Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z"
        />
      </svg>`,
  },
  inactive: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.37 8.45 20 10.15 20 12C20 16.42 16.42 20 12 20Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  info: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12ZM13 18L13 12H11L11 18H13ZM12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 11L11 18H13L13 11H11Z" />
        <path
          d="M12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 12C22 17.52 17.53 22 12.01 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12.01 2C17.53 2 22 6.48 22 12ZM20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z"
        />
      </svg>`,
  },
  "laptop-computer": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.6667 17.25c.9166 0 1.6583-.7875 1.6583-1.75l.0083-8.75c0-.9625-.75-1.75-1.6666-1.75H5.3333c-.9166 0-1.6666.7875-1.6666 1.75v8.75c0 .9625.75 1.75 1.6666 1.75H2V19h20v-1.75h-3.3333ZM5.3333 6.75h13.3334v8.75H5.3333V6.75Z" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  levels: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.0005 3C20.5528 3 21.0005 3.44772 21.0005 4V11C21.0005 12.1046 20.1051 13 19.0005 13H13.0005V19C13.0005 20.1046 12.1051 21 11.0005 21H4.00049C3.4482 21 3.00049 20.5523 3.00049 20C3.00049 19.4477 3.4482 19 4.00049 19H11.0005V13C11.0005 11.8954 11.8959 11 13.0005 11H19.0005V4C19.0005 3.44772 19.4482 3 20.0005 3Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  link: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
          d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H9C8.44772 11 8 11.4477 8 12ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  lock: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z"
        />
      </svg>`,
  },
  logout: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.7061 8.70611C17.3161 8.31614 16.6839 8.31614 16.2939 8.70611C15.9048 9.09522 15.9038 9.72577 16.2917 10.1161L17.17 11H10C9.44771 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13H17.17L16.2946 13.8754C15.9051 14.2649 15.9043 14.8966 16.2925 15.2875C16.6826 15.6804 17.3181 15.6819 17.7096 15.2904L20.2929 12.7071C20.6834 12.3166 20.6834 11.6834 20.2929 11.2929L17.7061 8.70611ZM5 5H11C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.5523 21 12 20.5523 12 20C12 19.4477 11.5523 19 11 19H5V5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "marketing-mix": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 3.5C2.44772 3.5 2 3.94772 2 4.5V21C2 21.5523 2.44772 22 3 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H4V9H13.9996V7L4 7V4.5C4 3.94772 3.55228 3.5 3 3.5ZM7.99963 15V13H17.9996V15H7.99963ZM5.99963 10L5.99963 12H10.9996V10H5.99963ZM14.9996 18V16H19.9996V18H14.9996Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "mass-edit": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4H14V8H10V4ZM4 16H8V20H4V16ZM8 10H4V14H8V10ZM4 4H8V8H4V4ZM20 4H16V8H20V4ZM11 20.0002V17.8602L16.96 11.9102L19.08 14.0302L13.1 20.0002H11ZM14 12.03V10H10V14H12.03L14 12.03ZM19.4399 10.15L20.8499 11.56C21.0499 11.76 21.0499 12.07 20.8499 12.27L19.7899 13.33L17.6699 11.21L18.7299 10.15C18.9299 9.95 19.2399 9.95 19.4399 10.15Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  menu: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  merge: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2949 19.705C16.6843 20.0944 17.3156 20.0944 17.705 19.705C18.0943 19.3156 18.0943 18.6844 17.7049 18.295L15 15.59L13.59 17L16.2949 19.705ZM7.49995 8H10.9999V13.59L6.29495 18.295C5.90559 18.6844 5.90559 19.3156 6.29495 19.705C6.68431 20.0944 7.31559 20.0944 7.70495 19.705L12.9999 14.41V8H16.5L11.9999 3.5L7.49995 8Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  microsoft: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.75 3.75H20.25V11.25H12.75V3.75ZM11.25 12.75H3.75V20.25H11.25V12.75ZM20.25 12.75H12.75V20.25H20.25V12.75ZM11.25 3.75H3.75V11.25H11.25V3.75Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "move-drag-horizontal": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 11C4.9 11 4 10.1 4 9C4 7.9 4.9 7 6 7C7.1 7 8 7.9 8 9C8 10.1 7.1 11 6 11ZM14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9ZM20 9C20 7.9 19.1 7 18 7C16.9 7 16 7.9 16 9C16 10.1 16.9 11 18 11C19.1 11 20 10.1 20 9ZM16 15C16 16.1 16.9 17 18 17C19.1 17 20 16.1 20 15C20 13.9 19.1 13 18 13C16.9 13 16 13.9 16 15ZM14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15ZM8 15C8 13.9 7.1 13 6 13C4.9 13 4 13.9 4 15C4 16.1 4.9 17 6 17C7.1 17 8 16.1 8 15Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "move-drag-vertical": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  note: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 3H19C20.1 3 21 3.9 21 5V14.5858C21 14.851 20.8946 15.1054 20.7071 15.2929L15.2929 20.7071C15.1054 20.8946 14.851 21 14.5858 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H10ZM15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7H7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H15ZM14 14.9091V19L19 14H14.9091C14.407 14 14 14.407 14 14.9091Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 5V14H15C14.4477 14 14 14.4477 14 15V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H14.5858C14.851 21 15.1054 20.8946 15.2929 20.7071L20.7071 15.2929C20.8946 15.1054 21 14.851 21 14.5858V5C21 3.9 20.1 3 19 3ZM12 13C12 13.5523 11.5523 14 11 14H8C7.44772 14 7 13.5523 7 13C7 12.4477 7.44772 12 8 12H11C11.5523 12 12 12.4477 12 13ZM17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9Z"
        />
      </svg>`,
  },
  notifications: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
        />
      </svg>`,
  },
  optimize: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.001 16C13.3147 16 16.001 13.3137 16.001 10C16.001 6.68629 13.3147 4 10.001 4C6.68727 4 4.00098 6.68629 4.00098 10C4.00098 13.3137 6.68727 16 10.001 16ZM16.3208 14.9056C17.3739 13.551 18.001 11.8487 18.001 10C18.001 5.58172 14.4193 2 10.001 2C5.5827 2 2.00098 5.58172 2.00098 10C2.00098 14.4183 5.5827 18 10.001 18C11.8497 18 13.5519 17.3729 14.9066 16.3199L19.5868 21.0001C19.9774 21.3906 20.6105 21.3906 21.0011 21.0001C21.3916 20.6096 21.3916 19.9764 21.0011 19.5859L16.3208 14.9056ZM6.25098 8.275H8.00098V13.5833H6.25098V8.275ZM9.18241 6H10.8157V13.5833H9.18241V6ZM12.001 10.3333H13.6343V13.5833H12.001V10.3333Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  organization: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 11V4C17 3.44772 16.5523 3 16 3H8C7.44772 3 7 3.44772 7 4V7H4C3.44772 7 3 7.44772 3 8V21H11V17H13V21H21V12C21 11.4477 20.5523 11 20 11H17ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM11 15H9V13H11V15ZM11 11H9V9H11V11ZM11 7H9V5H11V7ZM15 15H13V13H15V15ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "page-first": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 16.59L13.41 12L18 7.41L16.59 6L10.59 12L16.59 18L18 16.59ZM7.59 18H5.59L5.59 6H7.59L7.59 18Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "page-last": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.58984 16.59L10.1798 12L5.58984 7.41L6.99984 6L12.9998 12L6.99984 18L5.58984 16.59ZM15.9998 18H17.9998V6H15.9998L15.9998 18Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  paste: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 2H14.82C14.4 0.84 13.3 0 12 0C10.7 0 9.6 0.84 9.18 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V4C21 2.9 20.1 2 19 2ZM12 2C12.55 2 13 2.45 13 3C13 3.55 12.55 4 12 4C11.45 4 11 3.55 11 3C11 2.45 11.45 2 12 2ZM19 20H5V4H7V6C7 6.55228 7.44772 7 8 7H16C16.5523 7 17 6.55228 17 6V4H19V20Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  pause: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM10 16C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8C9.44772 8 9 8.44772 9 9V15C9 15.5523 9.44772 16 10 16ZM14 16C14.5523 16 15 15.5523 15 15V9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V15C13 15.5523 13.4477 16 14 16Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12ZM10 16C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8C9.44772 8 9 8.44772 9 9V15C9 15.5523 9.44772 16 10 16ZM14 16C14.5523 16 15 15.5523 15 15V9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V15C13 15.5523 13.4477 16 14 16Z"
        />
      </svg>`,
  },
  pending: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM12.25 7.83398C12.25 7.41977 11.9142 7.08398 11.5 7.08398C11.0858 7.08398 10.75 7.41977 10.75 7.83398V12.9157L15.1025 15.636C15.4538 15.8555 15.9165 15.7488 16.136 15.3975C16.3555 15.0462 16.2488 14.5835 15.8975 14.364L12.25 12.0843V7.83398Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12ZM12.25 7.83398C12.25 7.41977 11.9142 7.08398 11.5 7.08398C11.0858 7.08398 10.75 7.41977 10.75 7.83398V12.9157L15.1025 15.636C15.4538 15.8555 15.9165 15.7488 16.136 15.3975C16.3555 15.0462 16.2488 14.5835 15.8975 14.364L12.25 12.0843V7.83398Z"
        />
      </svg>`,
  },
  people: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 13.75C6.66 13.75 2 14.92 2 17.25V19H16V17.25C16 14.92 11.34 13.75 9 13.75ZM9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 13.75C6.66 13.75 2 14.92 2 17.25V19H16V17.25C16 14.92 11.34 13.75 9 13.75ZM4.34 17C5.18 16.42 7.21 15.75 9 15.75C10.79 15.75 12.82 16.42 13.66 17H4.34ZM9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z"
        />
      </svg>`,
  },
  phone: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
        />
      </svg>`,
  },
  "phone-mobile": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.3846 2H8.6154C7.4477 2 6.5 3.0182 6.5 4.2727v15.4546C6.5 20.9818 7.4477 22 8.6154 22h6.7692c1.1677 0 2.1154-1.0182 2.1154-2.2727V4.2727C17.5 3.0182 16.5523 2 15.3846 2ZM12 21.0909c-.7023 0-1.2692-.6091-1.2692-1.3636 0-.7546.5669-1.3637 1.2692-1.3637.7023 0 1.2692.6091 1.2692 1.3637 0 .7545-.5669 1.3636-1.2692 1.3636Zm3.8077-3.6364H8.1923V4.7273h7.6154v12.7272Z"/>
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  pin: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 2H7C6.45 2 6 2.45 6 3C6 3.55 6.45 4 7 4H8V9C8 10.66 6.66 12 5 12V14H10.97V21L11.97 22L12.97 21V14H19V12C17.34 12 16 10.66 16 9V4H17C17.55 4 18 3.55 18 3C18 2.45 17.55 2 17 2Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 4V9C14 10.12 14.37 11.16 15 12H9C9.65 11.14 10 10.1 10 9V4H14ZM17 2H7C6.45 2 6 2.45 6 3C6 3.55 6.45 4 7 4H8V9C8 10.66 6.66 12 5 12V14H10.97V21L11.97 22L12.97 21V14H19V12C17.34 12 16 10.66 16 9V4H17C17.55 4 18 3.55 18 3C18 2.45 17.55 2 17 2Z"
        />
      </svg>`,
  },
  play: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM10.8 15.8999L14.9333 12.7999C15.4667 12.3999 15.4667 11.5999 14.9333 11.1999L10.8 8.09993C10.4704 7.85272 10 8.08791 10 8.49993V15.4999C10 15.912 10.4704 16.1471 10.8 15.8999Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12ZM10.8 15.8999L14.9333 12.7999C15.4667 12.3999 15.4667 11.5999 14.9333 11.1999L10.8 8.09993C10.4704 7.85272 10 8.08791 10 8.49993V15.4999C10 15.912 10.4704 16.1471 10.8 15.8999Z"
        />
      </svg>`,
  },
  print: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 8H5C3.34 8 2 9.34 2 11V17H6V21H18V17H22V11C22 9.34 20.66 8 19 8ZM16 19H8V14H16V19ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12ZM18 3H6V7H18V3Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 8H19C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8H6V3H18V8ZM16 5H8V8H16V5ZM16 19V17V15H8V19H16ZM18 13V15H20V11C20 10.45 19.55 10 19 10H5C4.45 10 4 10.45 4 11V15H6V13H18ZM19 11.5C19 12.0523 18.5523 12.5 18 12.5C17.4477 12.5 17 12.0523 17 11.5C17 10.9477 17.4477 10.5 18 10.5C18.5523 10.5 19 10.9477 19 11.5Z"
        />
      </svg>`,
  },
  "privacy-shield": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09Z"
        />
      </svg>`,
  },
  question: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9999 0.333334C5.55992 0.333334 0.333252 5.56 0.333252 12C0.333252 18.44 5.55992 23.6667 11.9999 23.6667C18.4399 23.6667 23.6666 18.44 23.6666 12C23.6666 5.56 18.4399 0.333334 11.9999 0.333334ZM11.9999 21.3333C6.85492 21.3333 2.66659 17.145 2.66659 12C2.66659 6.855 6.85492 2.66667 11.9999 2.66667C17.1449 2.66667 21.3333 6.855 21.3333 12C21.3333 17.145 17.1449 21.3333 11.9999 21.3333ZM13.1666 18.4167C13.1666 19.061 12.6443 19.5833 11.9999 19.5833C11.3556 19.5833 10.8333 19.061 10.8333 18.4167C10.8333 17.7723 11.3556 17.25 11.9999 17.25C12.6443 17.25 13.1666 17.7723 13.1666 18.4167ZM15.5816 11.7083L14.5316 12.7817C13.6916 13.6333 13.1666 14.3333 13.1666 16.0833H10.8333V15.5C10.8333 14.2167 11.3583 13.05 12.1983 12.1983L13.6449 10.7283C14.0766 10.3083 14.3333 9.725 14.3333 9.08333C14.3333 7.8 13.2833 6.75 11.9999 6.75C10.7166 6.75 9.66659 7.8 9.66659 9.08333H7.33325C7.33325 6.505 9.42159 4.41667 11.9999 4.41667C14.5783 4.41667 16.6666 6.505 16.6666 9.08333C16.6666 10.11 16.2466 11.0433 15.5816 11.7083Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "radio-feed": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.0005 5.4551c0-.8034.6538-1.4615 1.454-1.3888 7.6759.6972 13.789 6.8101 14.4808 14.4802.0721.8001-.586 1.4535-1.3894 1.4535-.8033 0-1.446-.6538-1.5342-1.4522-.67-6.0693-5.4903-10.8894-11.5596-11.5591-.7981-.0881-1.4516-.7306-1.4516-1.5336Zm0 5.8185c0-.8035.6557-1.4655 1.451-1.351 4.4607.6418 7.9907 4.1716 8.628 8.6272.1137.7952-.5484 1.4502-1.3517 1.4502-.8034 0-1.4394-.6578-1.5984-1.4453-.5766-2.8561-2.8283-5.1076-5.6846-5.6839-.787-.1587-1.4443-.7944-1.4443-1.5972ZM6.0006 20c1.1046 0 2-.8955 2-2 0-1.1046-.8954-2-2-2s-2 .8954-2 2c0 1.1045.8954 2 2 2Z" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  redo: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4 10.6C16.5499 8.99 14.15 8 11.4999 8C7.28868 8 3.66796 10.4852 1.99713 14.0666C1.70718 14.6881 2.06746 15.3943 2.71862 15.6096C3.37081 15.8251 4.06594 15.4644 4.37957 14.8533C5.70476 12.2711 8.39151 10.5 11.4999 10.5C13.4499 10.5 15.2299 11.22 16.62 12.38L12.9999 16H21.9999V7L18.4 10.6Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  refresh: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 16L15 12H18C18 8.69 15.31 6 12 6C10.99 6 10.03 6.25 9.2 6.7L7.74 5.24C8.97 4.46 10.43 4 12 4C16.42 4 20 7.58 20 12H23L19 16ZM6 12C6 15.31 8.69 18 12 18C13.01 18 13.97 17.75 14.8 17.3L16.26 18.76C15.03 19.54 13.57 20 12 20C7.58 20 4 16.42 4 12H1L5 8L9 12H6Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  report: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.2929 2.29289C14.1054 2.10536 13.851 2 13.5858 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.41421C20 8.149 19.8946 7.89464 19.7071 7.70711L14.2929 2.29289ZM18.5 9.5H14C13.4477 9.5 13 9.05228 13 8.5V4L18.5 9.5ZM9.25 14.275H7.5V19.5833H9.25V14.275ZM12.4 12H10.7667V19.5833H12.4V12ZM15.6667 16.3333H14.0333V19.5833H15.6667V16.3333Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5858 2C13.851 2 14.1054 2.10536 14.2929 2.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V20C20 21.1 19.1 22 18 22H5.99C4.89 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H13.5858ZM6 20H18V9H14C13.4477 9 13 8.55228 13 8V4H6V20ZM9.6665 12.984H7.9165V18.2923H9.6665V12.984ZM12.8165 10.709H11.1832V18.2923H12.8165V10.709ZM16.0832 15.0423H14.4498V18.2923H16.0832V15.0423Z"
        />
      </svg>`,
  },
  "reset-alt": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.878h1.789V3.53H4v8.348Zm8.791-5.068h-1.789l1.912-1.912a.894.894 0 1 0-1.265-1.265L8.285 6.997a1 1 0 0 0 0 1.414l3.364 3.364a.895.895 0 0 0 1.265-1.264l-1.912-1.912h1.79a4.92 4.92 0 1 1-1.435 9.625c-.403-.122-.943-.451-1.367-.738-.398-.27-.938-.235-1.276.106-.367.371-.37.976.048 1.29a6.708 6.708 0 1 0 4.03-12.072Z"/>
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  reset: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 13C6 11.35 6.67 9.85 7.76 8.76L6.34 7.34C4.9 8.79 4 10.79 4 13C4 17.08 7.05 20.44 11 20.93V18.91C8.17 18.43 6 15.97 6 13ZM20 13C20 8.58 16.42 5 12 5C11.94 5 11.88 5.01 11.82 5.01L12.91 3.92L11.5 2.5L8 6L11.5 9.5L12.91 8.09L11.83 7.01C11.89 7.01 11.95 7 12 7C15.31 7 18 9.69 18 13C18 15.97 15.83 18.43 13 18.91V20.93C16.95 20.44 20 17.08 20 13Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "retail-store": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM5.00001 19V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V19H5.00001Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM13 5H14.96L15.5 9.52C15.55 9.91 15.43 10.3 15.17 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5ZM8.49001 9.52L9.04001 5H11V9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52ZM4.04001 9.36L5.05001 5H7.02001L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.03001 10.21 3.94001 9.78 4.04001 9.36ZM5.00001 19V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V19H5.00001Z"
        />
      </svg>`,
  },
  save: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16C15 17.66 13.66 19 12 19ZM15 9H5V5H15V9Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"
        />
      </svg>`,
  },
  "scattered-plot": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 9C12.6569 9 14 7.65685 14 6C14 4.34315 12.6569 3 11 3C9.34315 3 8 4.34315 8 6C8 7.65685 9.34315 9 11 9ZM7 17C8.65685 17 10 15.6569 10 14C10 12.3431 8.65685 11 7 11C5.34315 11 4 12.3431 4 14C4 15.6569 5.34315 17 7 17ZM19.6001 18C19.6001 19.6569 18.257 21 16.6001 21C14.9432 21 13.6001 19.6569 13.6001 18C13.6001 16.3431 14.9432 15 16.6001 15C18.257 15 19.6001 16.3431 19.6001 18Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7772 3.10297C10.1768 2.67414 8.53179 3.62389 8.10297 5.22429C7.67414 6.82469 8.62389 8.4697 10.2243 8.89852C11.8247 9.32735 13.4697 8.3776 13.8985 6.7772C14.3273 5.1768 13.3776 3.53179 11.7772 3.10297ZM10.0348 5.74241C10.1778 5.20894 10.7261 4.89236 11.2596 5.0353C11.793 5.17824 12.1096 5.72658 11.9667 6.26004C11.8237 6.79351 11.2754 7.11009 10.7419 6.96715C10.2085 6.82421 9.89187 6.27587 10.0348 5.74241ZM7.7772 11.103C6.1768 10.6741 4.53179 11.6239 4.10297 13.2243C3.67414 14.8247 4.62389 16.4697 6.22429 16.8985C7.82469 17.3273 9.4697 16.3776 9.89852 14.7772C10.3273 13.1768 9.3776 11.5318 7.7772 11.103ZM6.03481 13.7424C6.17775 13.2089 6.72609 12.8924 7.25956 13.0353C7.79302 13.1782 8.1096 13.7266 7.96666 14.26C7.82372 14.7935 7.27538 15.1101 6.74192 14.9672C6.20845 14.8242 5.89187 14.2759 6.03481 13.7424ZM14.103 17.2243C14.5318 15.6239 16.1768 14.6741 17.7772 15.103C19.3776 15.5318 20.3273 17.1768 19.8985 18.7772C19.4697 20.3776 17.8247 21.3273 16.2243 20.8985C14.6239 20.4697 13.6741 18.8247 14.103 17.2243ZM17.2596 17.0353C16.7261 16.8924 16.1778 17.2089 16.0348 17.7424C15.8919 18.2759 16.2085 18.8242 16.7419 18.9672C17.2754 19.1101 17.8237 18.7935 17.9667 18.26C18.1096 17.7266 17.793 17.1782 17.2596 17.0353Z"
        />
      </svg>`,
  },
  search: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8645 14.3208H15.0515L14.7633 14.0429C15.7719 12.8696 16.3791 11.3465 16.3791 9.68954C16.3791 5.99485 13.3842 3 9.68954 3C5.99485 3 3 5.99485 3 9.68954C3 13.3842 5.99485 16.3791 9.68954 16.3791C11.3465 16.3791 12.8696 15.7719 14.0429 14.7633L14.3208 15.0515V15.8645L18.7594 20.2943C19.1501 20.6842 19.7827 20.6838 20.173 20.2936L20.2936 20.173C20.6838 19.7827 20.6842 19.1501 20.2943 18.7594L15.8645 14.3208ZM9.68954 14.3208C7.12693 14.3208 5.05832 12.2521 5.05832 9.68954C5.05832 7.12693 7.12693 5.05832 9.68954 5.05832C12.2521 5.05832 14.3208 7.12693 14.3208 9.68954C14.3208 12.2521 12.2521 14.3208 9.68954 14.3208Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  selections: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0001 7.00004H13.0001V9.00004H22.0001V7.00004ZM22.0001 15H13.0001V17H22.0001V15ZM6.24721 10.2904C5.85689 10.6821 5.22276 10.6827 4.83175 10.2917L2.70511 8.16504C2.31575 7.77568 2.31575 7.1444 2.70511 6.75504C3.09447 6.36568 3.72575 6.36568 4.11511 6.75504L5.53011 8.17004L9.06448 4.63566C9.45419 4.24596 10.086 4.24596 10.4757 4.63566C10.8649 5.02488 10.8655 5.65575 10.477 6.04566L6.24721 10.2904ZM6.24721 18.2904C5.85689 18.6821 5.22276 18.6827 4.83175 18.2917L2.70511 16.165C2.31575 15.7757 2.31575 15.1444 2.70511 14.755C3.09447 14.3657 3.72575 14.3657 4.11511 14.755L5.53011 16.17L9.06448 12.6357C9.45419 12.246 10.086 12.246 10.4757 12.6357C10.8649 13.0249 10.8655 13.6558 10.477 14.0457L6.24721 18.2904Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  send: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.00784 19.4855C2.00886 20.2029 2.74259 20.6859 3.40191 20.4032L20.8565 12.9191C21.6644 12.5727 21.6644 11.4273 20.8565 11.0809L3.40191 3.59682C2.74259 3.31412 2.00886 3.79709 2.00784 4.51447L2 10L14.5 12L2 14L2.00784 19.4855Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.01 6.03L11.52 9.25L4 8.25L4.01 6.03ZM11.51 14.75L4 17.97V15.75L11.51 14.75ZM3.40191 3.59682C2.74259 3.31412 2.00886 3.79709 2.00784 4.51447L2 10L14 12L2 14L2.00784 19.4855C2.00886 20.2029 2.74259 20.6859 3.40191 20.4032L20.8565 12.9191C21.6644 12.5727 21.6644 11.4273 20.8565 11.0809L3.40191 3.59682Z"
        />
      </svg>`,
  },
  settings: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.70956 3.23001C8.82091 2.50828 9.43358 2 10.1492 2H13.8521C14.5363 2 15.1873 2.47829 15.3033 3.23001L15.3046 3.23846L15.5723 5.07765C15.844 5.21094 16.104 5.35867 16.3551 5.52021L18.1906 4.80283L18.2188 4.79371C18.7953 4.60689 19.5654 4.76764 19.957 5.44211L21.8148 8.56906L21.8238 8.58551C22.1531 9.19031 22.0188 9.97959 21.4438 10.4269L21.4346 10.434L19.9304 11.5761C19.9393 11.7161 19.9437 11.8574 19.9437 12C19.9437 12.1433 19.9392 12.2833 19.9314 12.4199L21.4202 13.5639C22.0253 14.0149 22.1562 14.8129 21.8022 15.4324L21.798 15.4398L19.9455 18.5578C19.5744 19.1968 18.809 19.435 18.1619 19.1904L18.1515 19.1864L16.3419 18.4792C16.0937 18.6383 15.8333 18.787 15.5608 18.9213L15.2952 20.7461C15.2003 21.5341 14.5165 22 13.8521 22H10.1492C9.4247 22 8.84497 21.4906 8.7068 20.819L8.70092 20.7904L8.42902 18.9224C8.15723 18.7891 7.89726 18.6413 7.64614 18.4798L5.81064 19.1972L5.78248 19.2063C5.20601 19.3931 4.43579 19.2324 4.04424 18.5579L2.18643 15.4309L2.17748 15.4145C1.84814 14.8097 1.98241 14.0204 2.55749 13.5731L2.56663 13.566L4.07111 12.4237C4.06207 12.2814 4.05761 12.1394 4.05761 12C4.05761 11.8554 4.06432 11.7114 4.07559 11.5709L2.58399 10.4383C1.97636 9.98772 1.84445 9.18812 2.19904 8.5676L2.20324 8.56025L4.05586 5.44207C4.42698 4.80318 5.19233 4.56498 5.83941 4.80962L5.84981 4.81355L7.65932 5.52083C7.90758 5.36167 8.16794 5.21302 8.44044 5.07868L8.70956 3.23001ZM7.52912 12C7.52912 9.62214 9.47143 7.71621 11.8301 7.62818C9.47151 7.7163 7.5293 9.6222 7.5293 12C7.5293 14.373 9.46376 16.2761 11.816 16.3713C9.46368 16.2762 7.52912 14.3731 7.52912 12ZM8.99951 12C8.99951 10.3862 10.3198 9 11.9995 9C13.6792 9 14.9995 10.3862 14.9995 12C14.9995 13.6138 13.6792 15 11.9995 15C10.3198 15 8.99951 13.6138 8.99951 12Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.70956 3.23001C8.82091 2.50828 9.43358 2 10.1492 2H13.8521C14.5363 2 15.1873 2.47829 15.3033 3.23001L15.3046 3.23846L15.5723 5.07765C15.844 5.21094 16.104 5.35867 16.3551 5.52021L18.1906 4.80283L18.2188 4.79371C18.7953 4.60689 19.5654 4.76764 19.957 5.44211L21.8148 8.56906L21.8238 8.58551C22.1531 9.19031 22.0188 9.97959 21.4438 10.4269L21.4346 10.434L19.9304 11.5761C19.9393 11.7161 19.9437 11.8574 19.9437 12C19.9437 12.1433 19.9392 12.2833 19.9314 12.4199L21.4202 13.5639C22.0253 14.0149 22.1562 14.8129 21.8022 15.4324L21.798 15.4398L19.9455 18.5578C19.5744 19.1968 18.809 19.435 18.1619 19.1904L18.1515 19.1864L16.3419 18.4792C16.0937 18.6383 15.8333 18.787 15.5608 18.9213L15.2952 20.7461C15.2003 21.5341 14.5165 22 13.8521 22H10.1492C9.4247 22 8.84497 21.4906 8.7068 20.819L8.70092 20.7904L8.42902 18.9224C8.15723 18.7891 7.89726 18.6413 7.64614 18.4798L5.81064 19.1972L5.78248 19.2063C5.20601 19.3931 4.43579 19.2324 4.04424 18.5579L2.18643 15.4309L2.17748 15.4145C1.84814 14.8097 1.98241 14.0204 2.55749 13.5731L2.56663 13.566L4.07111 12.4237C4.06207 12.2814 4.05761 12.1394 4.05761 12C4.05761 11.8554 4.06432 11.7114 4.07559 11.5709L2.58399 10.4383C1.97636 9.98772 1.84445 9.18812 2.19904 8.5676L2.20324 8.56025L4.05586 5.44207C4.42698 4.80318 5.19233 4.56498 5.83941 4.80962L5.84981 4.81355L7.65932 5.52083C7.90758 5.36167 8.16794 5.21302 8.44044 5.07868L8.70956 3.23001ZM10.6185 4L10.257 6.48373L9.71955 6.69699C9.24409 6.88566 8.7977 7.14429 8.38081 7.45073L7.93725 7.77679L5.54954 6.84359L4.18399 9.14197L6.22317 10.6904L6.12534 11.2849C6.08405 11.5358 6.05761 11.7813 6.05761 12C6.05761 12.2427 6.07703 12.4919 6.11377 12.7151L6.2116 13.3096L4.17242 14.858L5.53797 17.1564L7.9279 16.2223L8.37218 16.5514C8.79574 16.8652 9.22952 17.1131 9.70798 17.303L10.2454 17.5163L10.6069 20H13.3827L13.7443 17.5163L14.2817 17.303C14.7572 17.1143 15.2036 16.8557 15.6205 16.5493L16.064 16.2232L18.4517 17.1564L19.8187 14.8556L17.8233 13.3222L17.8933 12.755C17.9244 12.5035 17.9437 12.2531 17.9437 12C17.9437 11.7471 17.9244 11.5091 17.8875 11.2849L17.7897 10.6904L19.8288 9.14197L18.4633 6.84359L16.0734 7.77765L15.6291 7.44856C15.2055 7.13482 14.7717 6.88685 14.2933 6.69699L13.7558 6.48373L13.3943 4H10.6185ZM12.0006 9.625C10.6168 9.625 9.52912 10.7224 9.52912 12C9.52912 13.2776 10.6168 14.375 12.0006 14.375C13.3844 14.375 14.4721 13.2776 14.4721 12C14.4721 10.7224 13.3844 9.625 12.0006 9.625ZM7.52912 12C7.52912 9.56507 9.56578 7.625 12.0006 7.625C14.4355 7.625 16.4721 9.56507 16.4721 12C16.4721 14.4349 14.4355 16.375 12.0006 16.375C9.56578 16.375 7.52912 14.4349 7.52912 12Z"
        />
      </svg>`,
  },
  share: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "shopping-purchase": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H18C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15H7L8.1 13H15.55ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H18C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
        />
      </svg>`,
  },
  "similar-segments": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5ZM10.4461 14.968L14.968 10.4461C15.5635 10.7981 16.2582 11 17 11C19.2091 11 21 9.20914 21 7C21 4.79086 19.2091 3 17 3C14.7909 3 13 4.79086 13 7C13 7.74178 13.2019 8.43641 13.5538 9.03191L9.03191 13.5538C8.43641 13.2019 7.74178 13 7 13C4.79086 13 3 14.7909 3 17C3 19.2091 4.79086 21 7 21C9.20914 21 11 19.2091 11 17C11 16.2582 10.7981 15.5635 10.4461 14.968ZM17 5C15.8954 5 15 5.89543 15 7C15 8.10457 15.8954 9 17 9C18.1046 9 19 8.10457 19 7C19 5.89543 18.1046 5 17 5ZM5 17C5 15.8954 5.89543 15 7 15C8.10457 15 9 15.8954 9 17C9 18.1046 8.10457 19 7 19C5.89543 19 5 18.1046 5 17Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "soft-select": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.00049 9C3.00049 6 5.50049 3 9.00049 2L2.99954 2C2.44724 2 2.0005 2.44623 2.0005 2.99852L2.00049 9ZM4.00049 13C4.00049 8.02944 8.02993 4 13.0005 4C17.9711 4 22.0005 8.02944 22.0005 13C22.0005 17.9706 17.9711 22 13.0005 22C8.02993 22 4.00049 17.9706 4.00049 13ZM17.0005 14C17.5528 14 18.0005 13.5523 18.0005 13C18.0005 12.4477 17.5528 12 17.0005 12H14.0005V9C14.0005 8.44772 13.5528 8 13.0005 8C12.4482 8 12.0005 8.44772 12.0005 9V12H9.00049C8.4482 12 8.00049 12.4477 8.00049 13C8.00049 13.5523 8.4482 14 9.00049 14H12.0005V17C12.0005 17.5523 12.4482 18 13.0005 18C13.5528 18 14.0005 17.5523 14.0005 17V14H17.0005Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.00049 2C5.50049 3 3.00049 6 2.00049 9L2.0005 2.99852C2.0005 2.44623 2.44724 2 2.99954 2L9.00049 2ZM13.0005 6C9.1345 6 6.00049 9.13401 6.00049 13C6.00049 16.866 9.1345 20 13.0005 20C16.8665 20 20.0005 16.866 20.0005 13C20.0005 9.13401 16.8665 6 13.0005 6ZM4.00049 13C4.00049 8.02944 8.02993 4 13.0005 4C17.9711 4 22.0005 8.02944 22.0005 13C22.0005 17.9706 17.9711 22 13.0005 22C8.02993 22 4.00049 17.9706 4.00049 13ZM18.0005 13C18.0005 13.5523 17.5528 14 17.0005 14H14.0005V17C14.0005 17.5523 13.5528 18 13.0005 18C12.4482 18 12.0005 17.5523 12.0005 17V14H9.00049C8.4482 14 8.00049 13.5523 8.00049 13C8.00049 12.4477 8.4482 12 9.00049 12H12.0005V9C12.0005 8.44772 12.4482 8 13.0005 8C13.5528 8 14.0005 8.44772 14.0005 9V12H17.0005C17.5528 12 18.0005 12.4477 18.0005 13Z"
        />
      </svg>`,
  },
  "sort-alpha": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9401 4.6598H10.2201L12.5801 2.2998L14.9401 4.6598ZM10.2501 19.3698H14.9101L12.5801 21.6998L10.2501 19.3698ZM6.1001 6.2698L1.6001 17.7298H3.4401L4.3601 15.2798H9.4701L10.3901 17.7298H12.2301L7.7401 6.2698H6.1001ZM4.9701 13.6398L6.9101 8.4598L8.8501 13.6398H4.9701ZM15.7301 16.1398H21.8501V17.7298H13.3201V16.4398L19.2401 7.8798H13.3601V6.2798H21.6601V7.5398L15.7301 16.1398Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "spider-chart": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 2C12.5523 2 13 2.44772 13 3V9.58579L17.7929 4.79289C18.1834 4.40237 18.8166 4.40237 19.2071 4.79289C19.5976 5.18342 19.5976 5.81658 19.2071 6.20711L14.4142 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H14.4142L19.2071 17.7929C19.5976 18.1834 19.5976 18.8166 19.2071 19.2071C18.8166 19.5976 18.1834 19.5976 17.7929 19.2071L13 14.4142V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V14.4142L6.20711 19.2071C5.81658 19.5976 5.18342 19.5976 4.79289 19.2071C4.40237 18.8166 4.40237 18.1834 4.79289 17.7929L9.58579 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H9.58579L4.79289 6.20711C4.40237 5.81658 4.40237 5.18342 4.79289 4.79289C5.18342 4.40237 5.81658 4.40237 6.20711 4.79289L11 9.58579V3C11 2.44772 11.4477 2 12 2Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "split-screen": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 2H6C4.9 2 4 2.9 4 4V9C4 10.1 4.9 11 6 11H18C19.1 11 20 10.1 20 9V4C20 2.9 19.1 2 18 2ZM18 13H6C4.9 13 4 13.9 4 15V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V15C20 13.9 19.1 13 18 13Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 4V9H6V4H18ZM18 2H6C4.9 2 4 2.9 4 4V9C4 10.1 4.9 11 6 11H18C19.1 11 20 10.1 20 9V4C20 2.9 19.1 2 18 2ZM18 15V20H6V15H18ZM18 13H6C4.9 13 4 13.9 4 15V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V15C20 13.9 19.1 13 18 13Z"
        />
      </svg>`,
  },
  "status-large": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="6" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "status-small": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="4" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  status: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  story: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H9V12L7.5 11L6 12V4Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
         <path
          d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z"
        />
      </svg>`,
  },
  subtract: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12C5 11.1716 5.58763 10.5 6.3125 10.5H17.6875C18.4124 10.5 19 11.1716 19 12C19 12.8284 18.4124 13.5 17.6875 13.5H6.3125C5.58763 13.5 5 12.8284 5 12Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12C5 11.1716 5.58763 10.5 6.3125 10.5H17.6875C18.4124 10.5 19 11.1716 19 12C19 12.8284 18.4124 13.5 17.6875 13.5H6.3125C5.58763 13.5 5 12.8284 5 12Z"
        />
      </svg>`,
  },
  sum: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 4H6V6L12.5 12L6 18V20H18V17H11L16 12L11 7H18V4Z" />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  support: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.17 12.17L15.07 11.25C15.64 10.68 16 9.88 16 9C16 6.79 14.21 5 12 5C9.79 5 8 6.79 8 9H10C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9C14 9.55 13.78 10.05 13.41 10.41L12.17 11.67C11.45 12.4 11 13.4 11 14.5V15H13C13 13.5 13.45 12.9 14.17 12.17ZM12 18.5C12.5523 18.5 13 18.0523 13 17.5C13 16.9477 12.5523 16.5 12 16.5C11.4477 16.5 11 16.9477 11 17.5C11 18.0523 11.4477 18.5 12 18.5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5C11 16.9477 11.4477 16.5 12 16.5C12.5523 16.5 13 16.9477 13 17.5ZM15.07 11.75L14.17 12.67C13.45 13.4 13 14 13 15.5H11V15C11 13.9 11.45 12.9 12.17 12.17L13.41 10.91C13.78 10.55 14 10.05 14 9.5C14 8.4 13.1 7.5 12 7.5C10.9 7.5 10 8.4 10 9.5H8C8 7.29 9.79 5.5 12 5.5C14.21 5.5 16 7.29 16 9.5C16 10.38 15.64 11.18 15.07 11.75Z"
        />
      </svg>`,
  },
  syndication: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.36559 7.67207C8.33609 7.17523 9.00037 6.16519 9.00037 5C9.00037 3.34315 7.65722 2 6.00037 2C4.34351 2 3.00037 3.34315 3.00037 5C3.00037 6.44528 4.02239 7.65186 5.38314 7.93644L5.82619 11.2593C3.60709 11.9675 2 14.0461 2 16.5C2 19.5376 4.46243 22 7.5 22C9.95378 22 12.0323 20.3931 12.7405 18.1742L16.064 18.6174C16.3486 19.978 17.5551 21 19.0004 21C20.6572 21 22.0004 19.6569 22.0004 18C22.0004 16.3431 20.6572 15 19.0004 15C17.8351 15 16.8251 15.6643 16.3282 16.6349L12.9914 16.19C12.9337 15.1511 12.5877 14.1892 12.032 13.3829L17.7071 7.70772C18.0987 7.89508 18.5373 8 19.0004 8C20.6572 8 22.0004 6.65685 22.0004 5C22.0004 3.34315 20.6572 2 19.0004 2C17.3435 2 16.0004 3.34315 16.0004 5C16.0004 5.46322 16.1054 5.90192 16.2928 6.2936L10.6179 11.9685C9.81154 11.4126 8.84948 11.0664 7.81046 11.0086L7.36559 7.67207ZM7.5 19.5C9.15685 19.5 10.5 18.1569 10.5 16.5C10.5 14.8431 9.15685 13.5 7.5 13.5C5.84315 13.5 4.5 14.8431 4.5 16.5C4.5 18.1569 5.84315 19.5 7.5 19.5Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  tablet: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 0H4.5C3.12 0 2 1.12 2 2.5V21.5C2 22.88 3.12 24 4.5 24H18.5C19.88 24 21 22.88 21 21.5V2.5C21 1.12 19.88 0 18.5 0ZM11.5 23C10.67 23 10 22.33 10 21.5C10 20.67 10.67 20 11.5 20C12.33 20 13 20.67 13 21.5C13 22.33 12.33 23 11.5 23ZM19 19H4V3H19V19Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  text: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 4V7H7.5V19H10.5V7H15.5V4H2.5ZM21.5 9H12.5V12H15.5V19H18.5V12H21.5V9Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  throbber: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5424 8.14002C16.385 6.56927 14.5199 5.49235 12.4923 5.13241C11.6766 4.98761 11 4.32865 11 3.50022C11 2.67179 11.6744 1.99065 12.4957 2.09871C15.4059 2.48158 18.1956 3.96918 19.9576 6.36042C21.8597 8.94187 22.4448 12.4102 20.9487 16.2989C20.6513 17.0721 19.741 17.3707 19 17.0002C18.259 16.6297 17.9717 15.7313 18.25 14.951C19.2839 12.0521 18.7359 9.75979 17.5424 8.14002Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "thumb-down": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14C1 15.1 1.9 16 3 16H9.31L8.36 20.57L8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.42 16.41C16.78 16.05 17 15.55 17 15V5C17 3.9 16.1 3 15 3ZM19 3V15H23V3H19Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14C1 15.1 1.9 16 3 16H9.31L8.36 20.57L8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.42 16.41C16.78 16.05 17 15.55 17 15V5C17 3.9 16.1 3 15 3ZM15 15L10.66 19.34L12 14H3V12L6 5H15V15ZM19 3H23V15H19V3Z"
        />
      </svg>`,
  },
  "thumb-up": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 21H5V9H1V21ZM23 10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21ZM9 9L13.34 4.66L12 10H21V12L18 19H9V9ZM1 9H5V21H1V9Z"
        />
      </svg>`,
  },
  tree: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 11C21.5523 11 22 10.5523 22 10V4C22 3.44772 21.5523 3 21 3H16C15.4477 3 15 3.44772 15 4V6H9V4C9 3.44772 8.55228 3 8 3H3C2.44772 3 2 3.44772 2 4V10C2 10.5523 2.44772 11 3 11H8C8.55228 11 9 10.5523 9 10V8H11V17C11 17.5523 11.4477 18 12 18H15V20C15 20.5523 15.4477 21 16 21H21C21.5523 21 22 20.5523 22 20V14C22 13.4477 21.5523 13 21 13H16C15.4477 13 15 13.4477 15 14V16H13V8H15V10C15 10.5523 15.4477 11 16 11H21Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 11C21.5523 11 22 10.5523 22 10V4C22 3.44772 21.5523 3 21 3H16C15.4477 3 15 3.44772 15 4V6H9V4C9 3.44772 8.55228 3 8 3H3C2.44772 3 2 3.44772 2 4V10C2 10.5523 2.44772 11 3 11H8C8.55228 11 9 10.5523 9 10V8H11V17C11 17.5523 11.4477 18 12 18H15V20C15 20.5523 15.4477 21 16 21H21C21.5523 21 22 20.5523 22 20V14C22 13.4477 21.5523 13 21 13H16C15.4477 13 15 13.4477 15 14V16H13V8H15V10C15 10.5523 15.4477 11 16 11H21ZM7 9H4V5H7V9ZM17 15H20V19H17V15ZM17 5H20V9H17V5Z"
        />
      </svg>`,
  },
  tv: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 11C21.5523 11 22 10.5523 22 10V4C22 3.44772 21.5523 3 21 3H16C15.4477 3 15 3.44772 15 4V6H9V4C9 3.44772 8.55228 3 8 3H3C2.44772 3 2 3.44772 2 4V10C2 10.5523 2.44772 11 3 11H8C8.55228 11 9 10.5523 9 10V8H11V17C11 17.5523 11.4477 18 12 18H15V20C15 20.5523 15.4477 21 16 21H21C21.5523 21 22 20.5523 22 20V14C22 13.4477 21.5523 13 21 13H16C15.4477 13 15 13.4477 15 14V16H13V8H15V10C15 10.5523 15.4477 11 16 11H21Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  undo: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 8C9.85 8 7.45 8.99 5.6 10.6L2 7V16H11L7.38 12.38C8.77 11.22 10.54 10.5 12.5 10.5C15.5991 10.5 18.292 12.2704 19.6192 14.8518C19.9339 15.4638 20.6299 15.8256 21.2836 15.6105C21.9384 15.395 22.3003 14.6845 22.0074 14.0605C20.3279 10.4824 16.7089 8 12.5 8Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  upload: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 15.0001C18.4477 15.0001 18 15.4478 18 16.0001V18.0001H6V16.0001C6 15.4478 5.55228 15.0001 5 15.0001C4.44772 15.0001 4 15.4478 4 16.0001V18.0001C4 19.1001 4.9 20.0001 6 20.0001H18C19.1 20.0001 20 19.1001 20 18.0001V16.0001C20 15.4478 19.5523 15.0001 19 15.0001ZM7.70568 8.29441C7.31594 8.68415 7.31594 9.31604 7.70568 9.70578C8.09489 10.095 8.72572 10.0956 9.11568 9.70714L11 7.83009V15.0001C11 15.5524 11.4477 16.0001 12 16.0001C12.5523 16.0001 13 15.5524 13 15.0001V7.83009L14.8843 9.70714C15.2743 10.0956 15.9051 10.095 16.2943 9.70578C16.6841 9.31604 16.6841 8.68415 16.2943 8.29441L12.7071 4.7072C12.3166 4.31668 11.6834 4.31668 11.2929 4.7072L7.70568 8.29441Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "user-circle": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6Z"
        />
      </svg>`,
  },
  "user-square": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 19V5H5V19H6V17.97C6 15.47 9.97 14.39 12 14.39C14.03 14.39 18 15.47 18 17.97V19H19ZM5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3ZM12 7C10.3371 7 9 8.33714 9 10C9 11.6629 10.3371 13 12 13C13.6629 13 15 11.6629 15 10C15 8.33714 13.6629 7 12 7Z"
        />
      </svg>`,
  },
  visualization: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.5 3H19.5C20.6 3 21.5 3.9 21.5 5V19C21.5 20.1 20.6 21 19.5 21H4.5C3.4 21 2.5 20.1 2.5 19V5C2.5 3.9 3.4 3 4.5 3ZM11 17H13V7H11V17ZM7 17H9V10H7V17ZM17 17H15V13H17V17Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17ZM19.5 19.1H4.5V5H19.5V19.1ZM19.5 3H4.5C3.4 3 2.5 3.9 2.5 5V19C2.5 20.1 3.4 21 4.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3Z"
        />
      </svg>`,
  },
  "warning-alert": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.1345 3.49506C11.5197 2.82977 12.4802 2.82977 12.8654 3.49506L22.1309 19.4992C22.5169 20.1659 22.0358 21.0002 21.2655 21.0002H2.73441C1.96407 21.0002 1.48301 20.1659 1.86898 19.4992L11.1345 3.49506ZM13 9.5H11V14.5H13V9.5ZM12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7836 6.36382C11.8799 6.19747 12.12 6.19747 12.2163 6.36382L19.3128 18.6248C19.4092 18.7914 19.289 19 19.0964 19H4.90351C4.71094 19 4.59067 18.7914 4.68714 18.6248L11.7836 6.36382ZM12.8654 3.49481C12.4802 2.82953 11.5197 2.82953 11.1345 3.49481L1.86898 19.499C1.48301 20.1656 1.96407 21 2.73441 21H21.2655C22.0358 21 22.5169 20.1656 22.1309 19.499L12.8654 3.49481ZM13 17C13 16.4477 12.5522 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5522 18 13 17.5523 13 17ZM13 9.99999H11V14.5H13V9.99999Z"
        />
      </svg>`,
  },
  "with-begins": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.00049 20V4H6.00049V6L3.00049 6L3.00049 18H6.00049V20H1.00049ZM13.0005 4L13.0005 20H8.00049L8.00049 18H11.0005L11.0005 6L8.00049 6L8.00049 4H13.0005ZM19.0005 12C19.0005 10.8954 19.8959 10 21.0005 10C22.1051 10 23.0005 10.8954 23.0005 12C23.0005 13.1046 22.1051 14 21.0005 14C19.8959 14 19.0005 13.1046 19.0005 12ZM16.0005 10C14.8959 10 14.0005 10.8954 14.0005 12C14.0005 13.1046 14.8959 14 16.0005 14C17.1051 14 18.0005 13.1046 18.0005 12C18.0005 10.8954 17.1051 10 16.0005 10Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  "with-ends": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0005 20L11.0005 4H16.0005L16.0005 6L13.0005 6L13.0005 18L16.0005 18L16.0005 20L11.0005 20ZM23.0005 20L18.0005 20L18.0005 18L21.0005 18L21.0005 6L18.0005 6V4H23.0005L23.0005 20ZM5.00049 12C5.00049 13.1046 4.10506 14 3.00049 14C1.89592 14 1.00049 13.1046 1.00049 12C1.00049 10.8954 1.89592 10 3.00049 10C4.10506 10 5.00049 10.8954 5.00049 12ZM8.00049 14C9.10506 14 10.0005 13.1046 10.0005 12C10.0005 10.8954 9.10506 10 8.00049 10C6.89592 10 6.00049 10.8954 6.00049 12C6.00049 13.1046 6.89592 14 8.00049 14Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => null,
  },
  work: {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 16V15H3.01L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10ZM20 7H15.99V5L13.99 3H9.99L7.99 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7ZM14 7H10V5H14V7Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM4 9H20V14H15V11H9V14H4V9ZM13 15H11V13H13V15ZM19 19H5V16H9V17H15V16H19V19Z"
        />
      </svg>`,
  },
  "zoom-in": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM10 10H12V9H10V7H9V9H7V10H9V12H10V10Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
       <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5C7.01 5 5 7.01 5 9.5ZM10 10H12V9H10V7H9V9H7V10H9V12H10V10Z"
        />
      </svg>`,
  },
  "zoom-out": {
    fill: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM7 9H12V10H7V9Z"
        />
      </svg>`,
    outlined: (
      it = "display",
      s = "24",
      f = "gray",
      fl = "900",
      b = "none",
      bl = "100"
    ) => svg`<svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        style="padding: ${
          b !== "none"
            ? getPaddingForDisplayIconWithBackground(it, s) + "px"
            : 0
        };
           background-color: ${b ? `var(--${prefix}-${b}-${bl})` : ""};
          fill: ${getFillColorString(f, fl)}"
        xmlns="http://www.w3.org/2000/svg"
      >
       <path
          d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14ZM7 9H12V10H7V9Z"
        />
      </svg>`,
  },
};

export default icons;
