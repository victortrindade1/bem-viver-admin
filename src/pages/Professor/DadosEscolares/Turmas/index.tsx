import React, { useMemo, useState, useEffect, useCallback } from "react";
import { FaClipboardList } from "react-icons/fa";
import type { MRT_ColumnDef } from "material-react-table";

import { useAppSelector } from "hooks";
import { selectProfessor } from "store/slices/professor";

import MinimalTable from "components/MinimalTable";

import { Container } from "./styles";

interface IDataTable {
  id: number;
  materia: string;
  turma: string;
  turno: string;
  ano: string;
  sistema: string;
}

const Turmas: React.FC = () => {
  const [dataTable, setDataTable] = useState<IDataTable | any>([]);

  const professorState = useAppSelector(selectProfessor);
  const professor = professorState.professorDados;

  const columns = useMemo<MRT_ColumnDef<IDataTable>[]>(
    () => [
      {
        accessorKey: "materia",
        header: "Matéria",
      },
      {
        accessorKey: "turma",
        header: "Turma",
      },
      {
        accessorKey: "turno",
        header: "Turno",
      },
      {
        accessorKey: "ano",
        header: "Ano",
      },
      {
        accessorKey: "sistema",
        header: "Sistema",
      },
    ],
    []
  );

  const handleOpenPresenceList = () => {
    console.log("handleOpenPresenceList");
  };

  const handleDataTable = useCallback(() => {
    const rowData: any = professor?.professor_horario?.map(
      (item: ProfessorHorario) => {
        return {
          id: item.id,
          materia: item.materia_horario?.materia,
          turma: item.dados_turma?.turma,
          turno: item.dados_turma?.dados_turno?.turno,
          ano: item.dados_turma?.dados_ano?.ano,
          sistema: item.dados_turma?.dados_ano?.dados_sistema?.sistema,
        };
      }
    );
    setDataTable(rowData);
  }, [professor?.professor_horario]);

  useEffect(() => {
    handleDataTable();
  }, [handleDataTable]);

  return (
    <Container>
      <MinimalTable
        onClick={handleOpenPresenceList}
        columns={columns}
        data={dataTable}
        ActionIcon={<FaClipboardList size={15} />}
        tooltipLabel="Lista de Presença"
        actionsLabel="Lista de Presença"
      />
    </Container>
  );
};

export default Turmas;
