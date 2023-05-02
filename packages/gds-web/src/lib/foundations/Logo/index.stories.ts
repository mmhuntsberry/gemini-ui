// // import { GDSLogo } from "@nielsen-media/gds-types";
// import { html, TemplateResult } from "lit";

// import "./Logo";
// import type { GDSLogo } from "./Logo";

// export default {
//   title: "Foundations/Logos",
//   argTypes: {
//     logo: {
//       control: {
//         type: "select",
//         options: ["nielsen", "gracenote"],
//       },
//     },
//     "icon-only": {
//       disable: true,
//       defaultValue: false,
//     },
//     size: {
//       control: {
//         type: "select",
//         options: ["regular", "compact"],
//       },
//     },
//     mode: {
//       control: {
//         type: "select",
//         options: ["light", "dark"],
//       },
//     },
//   },
// };

// interface Story<T> {
//   (args: T): TemplateResult;
//   args?: Partial<T>;
//   argTypes?: Record<string, unknown>;
// }

// const Template: Story<GDSLogo> = ({
//   size = "regular",
//   logo = "nielsen",
//   mode = "light",
//   "icon-only": iconOnly = false,
// }: GDSLogo) => {
//   return html`<gds-logo
//     size=${size}
//     logo=${logo}
//     .icon-only=${iconOnly}
//     mode=${mode}
//   ></gds-logo>`;
// };

// export const Logos = Template.bind({});

// Logos.args = {
//   size: "regular",
//   logo: "nielsen",
//   "icon-only": false,
//   mode: "light",
// };
