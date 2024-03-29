import React from "react";
import MaterialReactTable from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { IconButton, Tooltip } from "@mui/material";

import { ActionContainer } from "./styles";

interface IMinimalTable {
  columns: any;
  data: any;
  actionsLabel?: string;
  onClick: any;
  ActionIcon?: any;
  tooltipLabel?: string;
  actionIconColor?: string;
}

const MinimalTable: React.FC<IMinimalTable> = ({
  columns,
  data,
  actionsLabel = "",
  onClick,
  ActionIcon,
  actionIconColor,
  tooltipLabel = "",
}) => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={true}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      localization={{
        ...MRT_Localization_PT_BR,
        actions: actionsLabel,
      }}
      enableRowActions
      renderRowActions={({ row, table }) => (
        <ActionContainer actionIconColor={actionIconColor}>
          <Tooltip arrow placement="left" title={tooltipLabel}>
            <IconButton onClick={() => onClick(row.original)}>
              {ActionIcon}
            </IconButton>
          </Tooltip>
        </ActionContainer>
      )}
    />
  );
};

export default MinimalTable;
