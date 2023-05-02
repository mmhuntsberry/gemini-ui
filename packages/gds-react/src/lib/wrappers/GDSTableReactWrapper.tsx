import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { GDSTable } from "@nielsen-media/gds-web";

export const GDSTableReactWrapper = createComponent({
  elementClass: GDSTable,
  react: React,
  tagName: "gds-table",
});
