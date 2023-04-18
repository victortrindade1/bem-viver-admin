import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Container } from "./styles";

interface IMuiTable {
  titles: any;
  data: any;
}

let idCounter = 0;

const MuiTable: React.FC<IMuiTable> = ({ titles, data }) => {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {titles.map((item: any) => (
                <TableCell
                  align={item[0] ? "left" : "center"}
                  key={item}
                  sx={{ fontWeight: "bold" }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, i: number) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* Este map percorre um objeto. Pra isso,
                  ele meio que transforma o objeto num array */}
                  {Object.keys(row).map((key) => {
                    // Elimina coluna id
                    if (key === "id") {
                      return null;
                    }
                    // Contador pra ter key única nas células
                    idCounter++;
                    return <TableCell key={idCounter}>{row[key]}</TableCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MuiTable;
