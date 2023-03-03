import React, { useState } from "react";
import { DataGrid, GridColDef, GridToolbar, ptBR } from "@mui/x-data-grid";

import { Container } from "./styles";

interface IMuiDataGrid {
  data: any;
  columns: GridColDef[];
  onRowSelect?: any;
}

const MuiDataGrid: React.FC<IMuiDataGrid> = ({
  data,
  columns,
  onRowSelect,
}) => {
  const [pageSize, setPageSize] = useState(25);

  return (
    <Container>
      <DataGrid
        components={{
          Toolbar: GridToolbar,
        }}
        rows={data}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        autoHeight
        isRowSelectable={(params: any) => onRowSelect(params.row)}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </Container>
  );
};

export default MuiDataGrid;
