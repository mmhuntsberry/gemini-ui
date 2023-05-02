import React, { useEffect, useRef } from "react";
/**
 * !! NOTE
 *
 * !! DEPRECATED
 *
 * THIS COMPONENT WILL BE DELETED, IT IS NO LONGER NEEDED!
 *
 * THE GDS TABLE INPLEMENTATION HAS MOVED TO GDS-WEB PACKAGE (TABLE), THAT
 * VERSION WILL BE CANON.  THIS WILL FILE IS TO ONLY BE KEPT FOR REFERENCE UNTIL ALL
 * FEATURES HAVE BEEN MOVED OVER TO GDS WEB.  ONCE THAT IS COMPLETED THIS FILE/COMPONENT
 * WILL BE DELETED.
 */

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";

import {
  AdjustmentBarConfig,
  Colors,
  TableHeaderSize,
  TableRowSize,
  TextAlign,
} from "@nielsen-media/gds-types";
import { TableLabel } from "./table-label";
import { TableColumnMenu } from "./table-column-menu";
import "@nielsen-media/gds-web";
import "../../../index.scss";
import { GDSDisplayIcon } from "@nielsen-media/gds-web";

export type TableProps<C> = {
  adjustmentBarOptions?: string[];
  background?: Colors;
  columns?: C[];
  hasMenu?: boolean;
  headerSize?: TableHeaderSize;
  rows?: any[];
  rowSize?: TableRowSize;
  rowSelection?: boolean;
  sortable?: boolean;
  textAlignment?: TextAlign;
  title?: string;
  withHeader?: boolean;
};

export function Table<C extends ColumnDef<C, any>>({
  adjustmentBarOptions = [],
  background = "default",
  columns = [],
  hasMenu = false,
  headerSize = "tiny",
  rows = [],
  rowSelection = false, // rename this to selectable
  rowSize = "tiny",
  sortable = false,
  textAlignment = "left",
  title = "",
  withHeader = false,
}: TableProps<C>) {
  const ref = useRef(null) as any;
  const iconRef = useRef<GDSDisplayIcon>(null);
  const [initialRows] = React.useState(() => [...rows]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isMenuVisible, setIsMenuVisible] = React.useState(hasMenu);
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  // const [columnFilters, setColumnFilters] = React.useState<any>([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});

  /**
   * ROW SELECTION
   */
  // const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: initialRows,
    defaultColumn: {
      // uncomment to set default size of columns
      // minSize: 100,
      // maxSize: 200,
    },
    columns: columns,
    state: {
      sorting,
      globalFilter: "stadium",
      // columnFilters,
      columnVisibility,
    },

    enableColumnResizing: true,
    enableSorting: sortable,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    // onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
  });

  function createAdjustmentBarConfig(columns: C[]) {
    const config: AdjustmentBarConfig = {};

    adjustmentBarOptions.forEach((item: string) => {
      switch (item) {
        case "search":
          config.search = {
            actions: {
              handleSearchTerm: (e: MouseEvent) => {
                const input = e.target as HTMLInputElement;
                setGlobalFilter(input.value);
              },
              handleClear: () => {
                setGlobalFilter("");
              },
            },
          };
          break;

        case "filter":
          config.filter = {
            actions: {
              handleFilter: (e: MouseEvent) => null,
            },
          };
          break;

        case "layout":
          config.layout = {
            items: columns.map((col: C) => {
              if (!col.id) return [];
              // This creates each item in the switch menu for layout
              return {
                id: col.id.toLowerCase().split(" ").join("-"),
                label: col.id[0].toUpperCase() + col.id.slice(1),
                value: col.id.toLowerCase().split(" ").join("-"),
                checked: table.getColumn(col.id).getIsVisible(),
                action() {
                  if (!col.id) return;
                  table.getColumn(col.id).toggleVisibility();
                },
              };
            }),
          };
          break;

        default:
          break;
      }
    });
    config.reset = {
      actions: {
        handleReset: (e: MouseEvent) => {
          const btn = e.currentTarget as HTMLButtonElement;
          const search = btn.parentElement?.children[0] as HTMLInputElement;

          search.value = "";
          table.resetSorting();
          setGlobalFilter("");
        },
      },
    };
    return config;
  }

  /**
   * This function is used to show/hide the
   * sorting icon on the first column when
   * rowSelection is applied or not.
   */
  const getColumnSortClass = (index: number) => {
    if (rowSelection && index === 0) {
      return "gds-column-sort gds-column-sort--first-child";
    }

    if (rowSelection && index !== 0) {
      return "gds-column-sort gds-column-sort--has-row-selection";
    }

    return "gds-column-sort";
  };

  /**
   * This function is used to render the columnMenuButton
   * based on if hasMenu is true or false.
   *
   * This function also checks if rowSelection is enabled
   * and if it is disables sorting icon on the first column when
   * rowSelection is applied or not.
   */
  const renderColumnMenuButton = (header: any, index: number) => {
    if (index !== 0 && rowSelection === true && isMenuVisible) {
      return (
        <TableColumnMenu
          mode="light"
          disabled={false}
          size="compact"
          columnId={header.id}
          column={header}
          tableRef={table}
          sortable={sortable}
        />
      );
    }

    if (!rowSelection && isMenuVisible) {
      return (
        <TableColumnMenu
          mode="light"
          disabled={false}
          size="compact"
          columnId={header.id}
          column={header}
          tableRef={table}
          sortable={sortable}
        />
      );
    }

    return null;
  };

  /**
   * Create adjustmentbar config based on adjustmentBarOptions
   * the user included in array.
   */
  const [config, setConfig] = React.useState<AdjustmentBarConfig>(
    createAdjustmentBarConfig(columns)
  );

  useEffect(() => {
    // Because outlined is a reactive property in
    // out lit element, we have to manually set outlined
    // by setting a ref and adding an outlined property to
    // it, setting to false.
    if (iconRef.current) {
      iconRef.current.outlined = false;
    }
  }, [sorting]);

  useEffect(() => {
    if (hasMenu) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  }, [hasMenu]);

  /**
   * Create initial config
   */
  useEffect(() => {
    if (ref.current) {
      ref.current.config = config;
    }
  }, []);

  /**
   * Recreate config when columnVisibility changes/updates
   */
  useEffect(() => {
    if (ref.current) {
      ref.current.config = createAdjustmentBarConfig(columns);
    }
  }, [columnVisibility, adjustmentBarOptions.length]);

  return (
    <>
      <div className="table__adjustment-title-container">
        {title.length > 0 && (
          <h3 data-size={headerSize} className="table__title">
            {title}
          </h3>
        )}
        {adjustmentBarOptions.length ? (
          <div className="adjustment-bar">
            <gds-adjustment-bar ref={ref} mode="light"></gds-adjustment-bar>
          </div>
        ) : null}
      </div>
      <table id="gds-table" className={"gds-table-react"}>
        <thead
          className={"gds-thead"}
          data-size={headerSize}
          data-menu={hasMenu}
          data-row-selection={rowSelection}
        >
          {withHeader &&
            table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr key={headerGroup.id} className="gds-tr header__container">
                  {headerGroup.headers.map((header, index) => {
                    return (
                      <th
                        className={"gds-th"}
                        key={header.id}
                        data-size={headerSize}
                        data-background={background}
                        data-sortable={sortable}
                        style={{
                          width:
                            header.getSize() !== 0
                              ? header.getSize()
                              : undefined,
                        }}
                      >
                        <div className={"gds-thead-inner"} data-menu={hasMenu}>
                          <button
                            className={getColumnSortClass(index)}
                            data-text-alignment={textAlignment}
                            onClick={
                              rowSelection && index === 0
                                ? () => null
                                : header.column.getToggleSortingHandler()
                            }
                          >
                            <TableLabel size={headerSize} weight="bold">
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </TableLabel>

                            {{
                              asc: (
                                <gds-display-icon
                                  ref={iconRef}
                                  foreground-level="900"
                                  icon="arrow-up"
                                ></gds-display-icon>
                              ),
                              desc: (
                                <gds-display-icon
                                  ref={iconRef}
                                  foreground-level="900"
                                  icon="arrow-down"
                                ></gds-display-icon>
                              ),
                            }[header.column.getIsSorted() as string] ?? null}
                          </button>
                          {renderColumnMenuButton(header, index)}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
        </thead>
        <tbody className={"gds-tbody"}>
          {table.getRowModel().rows.map((row, i) => {
            return (
              <tr
                className="gds-tr"
                key={row.id}
                onClick={() => {
                  if (!selectedRows.includes(row.id)) {
                    setSelectedRows([...selectedRows, row.id]);
                  } else {
                    const copy = [...selectedRows];
                    const findIndex = copy.findIndex((x) => Number(x) === i);
                    copy.splice(findIndex, 1);
                    setSelectedRows(copy);
                  }
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    data-size={rowSize}
                    data-text-alignment={textAlignment}
                    style={{
                      width:
                        cell.column.getSize() !== 0
                          ? cell.column.getSize()
                          : undefined,
                    }}
                    className={
                      row.getIsSelected() === true
                        ? `${"selected"} ${"gds-td"}`
                        : "gds-td"
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
