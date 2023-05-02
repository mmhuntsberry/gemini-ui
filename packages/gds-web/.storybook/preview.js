// .storybook/preview.js

export const parameters = {
  options: {
    storySort: {
      order: ["Foundations", "Components", "In Development", "Bug fixes"],
    },
  },
  backgrounds: {
    default: "GDS White",
    values: [
      {
        name: "Figma",
        value: "#808080",
      },
      {
        name: "GDS White",
        value: "#fff",
      },
      {
        name: "GDS Black",
        value: "#000",
      },
    ],
  },
};
