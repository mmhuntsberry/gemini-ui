import * as React from "react";
// import "@nielsen-media/gds-web";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useKeyPress } from "../../hooks/useKeypress";
import { Header, Table } from "@tanstack/react-table";
import { MenuItemSize, Mode } from "@nielsen-media/gds-types";
import "../../../index.scss";

export type TableMenuItem = {
  id: string;
  label: string;
  value: string;
};

export type TableMenuItems = TableMenuItem[];

export type TableMenuSelectedState = {
  selectedIndex: number;
};

export type TableMenuAction = {
  type: "arrowUp" | "arrowDown" | "select" | "enter";
  payload: number;
};

export type GDSTableColumnMenuProps = {
  mode?: Mode;
  disabled?: boolean;
  size?: MenuItemSize;
  columnId: string;
  column: Header<any, unknown>;
  tableRef: Table<any>;
  sortable: boolean;
};

const items: TableMenuItems = [
  { id: "filter", label: "Filter", value: "filter" },
  { id: "asc", label: "Sort Ascending", value: "asc" },
  { id: "desc", label: "Sort Descending", value: "desc" },
  {
    id: "more-info",
    label: "More info",
    value: "more-info",
  },
  {
    id: "pin-left",
    label: "Pin Left",
    value: "pin-left",
  },
  { id: "pin-right", label: "Pin Right", value: "pin-right" },
  { id: "autosize-column", label: "Autosize Column", value: "autosize-column" },
  { id: "autosize-table", label: "Autosize Table", value: "autosize-table" },
  { id: "reset-column", label: "Reset Column", value: "reset-column" },
  { id: "reset-table", label: "Reset Table", value: "reset-table" },
];

export function TableColumnMenu({
  mode = "light",
  disabled = false,
  size = "compact",
  columnId,
  column,
  tableRef,
  sortable,
}: GDSTableColumnMenuProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [tableMenuItems, setTableMenuItems] = React.useState(items);
  const initialState: TableMenuSelectedState = { selectedIndex: -1 };

  const reducer = (state: TableMenuSelectedState, action: TableMenuAction) => {
    switch (action.type) {
      case "arrowUp":
        return {
          selectedIndex:
            state.selectedIndex !== 0
              ? state.selectedIndex - 1
              : tableMenuItems.length - 1,
        };
      case "arrowDown":
        return {
          selectedIndex:
            state.selectedIndex !== tableMenuItems.length - 1
              ? state.selectedIndex + 1
              : 0,
        };
      case "select":
        return { selectedIndex: action.payload };

      default:
        throw new Error();
    }
  };

  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // If table is not sortable remove the options from
    // column menu.
    if (!sortable) {
      setTableMenuItems(
        items.filter((x) => x.value !== "asc" && x.value !== "desc")
      );
    }
  }, [sortable]);

  React.useEffect(() => {
    if (arrowUpPressed) {
      dispatch({ type: "arrowUp", payload: -1 });
    }
  }, [arrowUpPressed]);

  React.useEffect(() => {
    if (arrowDownPressed) {
      dispatch({ type: "arrowDown", payload: -1 });
    }
  }, [arrowDownPressed]);

  const handleOutsideClick = () => {
    setIsVisible(false);
  };

  function handleMenuItemClick(
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> | null,
    id: string,
    column: Header<any, unknown>
  ) {
    switch (id) {
      case "desc":
        column.column.toggleSorting(true);
        break;
      case "asc":
        column.column.toggleSorting(false);
        break;
      case "pin-left":
        column.column.pin("left");
        break;
      case "pin-right":
        column.column.pin("right");
        break;
      case "hide":
        column.column.toggleVisibility();
        break;
      case "autosize-column":
        // TODO ADD AUTO SIZE COLUMN LOGIC
        break;
      case "autosize-table":
        // TODO ADD AUTO SIZE TABLE LOGIC
        break;
      case "reset-column":
        column.column.clearSorting();
        column.column.pin(false);
        break;
      case "reset-table":
        tableRef.resetSorting();
        tableRef.reset();
        break;
      default:
        break;
    }
  }

  const ref = useOutsideClick(handleOutsideClick);

  return (
    <div className={"gds-column-menu-wrapper"}>
      <gds-action-icon
        ref={ref}
        id={columnId}
        icon="caret-down"
        onClick={(e) => {
          // dispatch({ type: "select", payload: state.selectedIndex });
          if (isVisible) {
            if (state.selectedIndex !== -1) {
              handleMenuItemClick(null, items[state.selectedIndex].id, column);
            }
          }
          setIsVisible(!isVisible);
        }}
      ></gds-action-icon>
      <ul
        className={"gds-column-menu"}
        data-mode={mode === "light" ? "light" : "dark"}
        role="menu"
        style={{ display: isVisible ? "block" : "none" }}
      >
        {tableMenuItems.map((item, i) => (
          <li
            className={"gds-menu-item"}
            role="menuitem"
            tabIndex={-1}
            data-mode={mode === "light" ? "light" : "dark"}
            data-selected={i === state.selectedIndex ? true : false}
            key={item.id}
          >
            <button
              id={item.id}
              className={`${"gds-menu-item-button"} ${item.id}`}
              tabIndex={-1}
              disabled={i === state.selectedIndex ? true : false}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                dispatch({ type: "select", payload: i });
                handleMenuItemClick(e, item.id, column);
              }}
              data-size={size}
              data-mode={"light"}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
