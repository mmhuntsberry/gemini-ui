// import {
//   TextColor,
//   TextWeight,
//   Mode,
//   TextSize,
// } from "@nielsen-media/gds-types";
// import { html, TemplateResult } from "lit";
// import "./HelloWorld";

// export default {
//   title: "Internal/Demo",
//   component: "gds-hello-world",
//   argTypes: {
//     mode: {
//       options: ["light", "dark"],
//       control: { type: "select" },
//       defaultValue: "light",
//     },
//     color: {
//       options: ["primary", "secondary"],
//       control: { type: "select" },
//       defaultValue: "primary",
//     },
//     size: {
//       options: [
//         "0",
//         "100",
//         "200",
//         "300",
//         "400",
//         "500",
//         "600",
//         "700",
//         "800",
//         "900",
//         "1000",
//       ],
//       control: { type: "select" },
//       defaultValue: "500",
//     },
//     underlined: {
//       disable: true,
//       defaultValue: false,
//     },
//     weight: {
//       options: ["regular", "bold"],
//       control: { type: "select" },
//       defaultValue: "bold",
//     },
//   },
// };

// interface Story<T> {
//   (args: T): TemplateResult;
//   args?: Partial<T>;
//   argTypes?: Record<string, unknown>;
// }

// interface ArgTypes {
//   color?: TextColor;
//   href?: string;
//   mode?: Mode;
//   size?: TextSize;
//   underlined?: boolean;
//   weight?: TextWeight;
// }

// const Template: Story<ArgTypes> = ({
//   mode = "light",
//   color = "primary",
//   href = "#",
//   size = "500",
//   underlined = false,
//   weight = "bold",
// }: ArgTypes) =>
//   html`
//     <gds-hello-world
//       mode=${mode}
//       color=${color}
//       href="#"
//       size=${size}
//       .underlined=${underlined}
//       .weight=${weight}
//     >
//       Hello World
//     </gds-hello-world>
//   `;

// export const HelloWorld = Template.bind({});
// HelloWorld.args = {
//   mode: "light",
//   color: "primary",
//   href: "#",
//   size: "500",
//   underlined: false,
//   weight: "bold",
// };
