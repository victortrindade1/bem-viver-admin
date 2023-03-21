import React from "react";
import MaterialReactTable from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { IconButton, Tooltip } from "@mui/material";
import { FaAddressCard } from "react-icons/fa";

interface ITable {
  columns: any;
  data: any;
  isError: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  rowCount: number;
  onClick: any;
  actionsLabel: string;
  onPaginationChange: any;
  pagination: any;
  onSortingChange: any;
  sorting: any;
  onColumnFiltersChange: any;
  columnFilters: any;
  columnVisibility: any;
  columnSizing: any;
  density: any;
  onColumnVisibilityChange: any;
  onColumnSizingChange: any;
  onDensityChange: any;
}

const Table: React.FC<ITable> = ({
  columns,
  data,
  isError,
  isLoading,
  isRefetching,
  rowCount,
  onClick,
  actionsLabel = "",
  onPaginationChange,
  pagination,
  onSortingChange,
  sorting,
  onColumnFiltersChange,
  columnFilters,
  columnVisibility,
  columnSizing,
  density,
  onColumnVisibilityChange,
  onColumnSizingChange,
  onDensityChange,
}) => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection={false}
      enableColumnOrdering
      enableStickyHeader
      enableGlobalFilter={false}
      muiTableContainerProps={{ sx: { maxHeight: "600px" } }}
      enableStickyFooter
      localization={{
        ...MRT_Localization_PT_BR,
        actions: actionsLabel,
      }}
      enableRowActions
      enableColumnResizing
      renderRowActions={({ row, table }) => (
        <div>
          <Tooltip arrow placement="left" title="Cadastro">
            <IconButton onClick={() => onClick(table.getRow(row.id))}>
              <FaAddressCard />
            </IconButton>
          </Tooltip>
        </div>
      )}
      getRowId={(row: any) => row?.data?.id}
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: "error",
              children: "Error loading data",
            }
          : undefined
      }
      rowCount={rowCount}
      state={{
        isLoading: isLoading,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        pagination,
        // sorting: sorting[0]?.id !== "" ? sorting : undefined,
        sorting,
        columnFilters,
        columnVisibility,
        columnSizing,
        density,
      }}
      onPaginationChange={onPaginationChange}
      onSortingChange={onSortingChange}
      onColumnFiltersChange={onColumnFiltersChange}
      onColumnVisibilityChange={onColumnVisibilityChange}
      onColumnSizingChange={onColumnSizingChange}
      onDensityChange={onDensityChange}
      // autoResetPageIndex={false}
      autoResetAll={false}
    />
  );
};

export default Table;
