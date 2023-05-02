# GDSLogo

`GDSLogo` is a web component for displaying Nielsen and Gracenote logos.

[FIGMA](https://www.figma.com/file/08RyCY34fSWYCxwrFWbojr/GDS-%2F-Core-Library?node-id=8419%3A535013&t=F8vHKkTHhzOTkjpm-0)

[STORYBOOK](https://nielsen-media.gitlab.io/ma/design-libraries/gds-packages/storybook/?path=/story/foundations-logos--logos)

[REPO](https://gitlab.com/nielsen-media/ma/design-libraries/gds-packages/-/blob/main/packages/gds-web/src/lib/foundations/Logo/Logo.ts)

REACT WRAPPER COMPONENT

### Properties

| Property  | Type     | Default | Description                                           |
| --------- | -------- | ------- | ----------------------------------------------------- |
| icon-only | boolean  | false   | Whether to display only the icon portion of the logo. |
| logo      | IconType | nielsen | The name of the logo to display.                      |
| mode      | Mode     | light   | The color mode of the logo.                           |
| size      | LogoSize | regular | The size of the logo.                                 |

## Slot

NA

## Tag

---

```html
<gds-logo></gds-logo>
```

## U**sage**

TBD…

```html
<gds-logo logo="gracenote" size="compact" mode="dark" icon-only> </gds-logo>
```

## Notes

The compact size is not available for the Gracenote logo. In this case, the regular size will be displayed instead.
