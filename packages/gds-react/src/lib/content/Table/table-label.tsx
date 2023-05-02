import React from "react";
import "../../../index.scss";

export type TableLabelProps = {
  children: React.ReactNode;
  size: string;
  weight: string;
};

export function TableLabel(props: TableLabelProps) {
  return (
    <span
      className={"gds-table-label"}
      data-size={props.size}
      data-weight={props.weight}
    >
      {props.children}
    </span>
  );
}
