import React, { useMemo, useState, useEffect, useCallback } from "react";
import { FaUserPlus } from "react-icons/fa";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type {
  MRT_ColumnDef,
  MRT_SortingState,
  MRT_PaginationState,
  MRT_ColumnFiltersState,
  MRT_ColumnSizingState,
  // MRT_DensityState,
  MRT_VisibilityState,
  // MRT_ColumnOrderState,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import TitlePage from "components/TitlePage";
import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
import Breadcrumb from "components/Breadcrumb";
import TitleBody from "components/TitleBody";
import TextForm from "components/TextForm";
import Table from "components/Table";
import Tag from "components/Tag";

import { useAppDispatch, useAppSelector } from "hooks";
import { store, selectProfessoresTable } from "store/slices/professoresTable";
import { showProfessor, cleanState } from "store/slices/professor";
import api from "services/api";

import { TableContainer, CellArrayContainer } from "./styles";

interface IDataTable {
  id: number;
  professor_nome: string;
  ano: string[];
  turma: string[];
  materia: string[];
  turno: string[];
}

const Professores: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const professoresTable = useAppSelector(selectProfessoresTable);

  const [professores, setProfessores] = useState<IDataTable | any>([]);

  // Table States
  const [filter, setFilter] = useState(professoresTable.filter);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const [pagination, setPagination] = useState<MRT_PaginationState>(
    professoresTable.pagination
  );
  const [sorting, setSorting] = useState<MRT_SortingState>(
    professoresTable.sorting
  );
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    professoresTable.columnFilters
  );
  const [columnVisibility, setColumnVisibility] = useState<MRT_VisibilityState>(
    professoresTable.columnVisibility
  );
  const [columnSizing, setColumnSizing] = useState<MRT_ColumnSizingState>(
    professoresTable.columnSizing
  );
  const [density, setDensity] = useState(professoresTable.density);

  const links = [
    {
      label: "Novo",
      Icon: FaUserPlus,
      url: "/professores/novo",
    },
  ];

  const linksBreadcrumb = [
    {
      url: "",
      label: "Professores",
    },
  ];

  const breakpoint = useMediaQuery("(max-width:768px)");

  const defaultValues: any = useMemo(
    () => ({
      search: professoresTable.filter,
    }),
    [professoresTable.filter]
  );

  const validationSchema = Yup.object().shape({
    search: Yup.string(),
  });

  const {
    control,
    register,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const columns = useMemo<MRT_ColumnDef<IDataTable>[]>(
    () => [
      {
        accessorKey: "professor_nome",
        header: "Nome",
      },
      {
        accessorKey: "ano",
        header: "Ano(s)",
        Cell: ({ renderedCellValue }: any) => (
          <CellArrayContainer>
            {renderedCellValue.length > 0 ? (
              renderedCellValue.map((item: any) => <Tag label={item} />)
            ) : (
              <Tag label={renderedCellValue} />
            )}
          </CellArrayContainer>
        ),
      },
      {
        accessorKey: "turma",
        header: "Turma(s)",
        Cell: ({ renderedCellValue }: any) => (
          <CellArrayContainer>
            {renderedCellValue.length > 0 ? (
              renderedCellValue.map((item: any) => <Tag label={item} />)
            ) : (
              <Tag label={renderedCellValue} />
            )}
          </CellArrayContainer>
        ),
      },
      {
        accessorKey: "materia",
        header: "Matéria(s)",
        Cell: ({ renderedCellValue }: any) => (
          <CellArrayContainer>
            {renderedCellValue.length > 0 ? (
              renderedCellValue.map((item: any) => <Tag label={item} />)
            ) : (
              <Tag label={renderedCellValue} />
            )}
          </CellArrayContainer>
        ),
      },
      {
        accessorKey: "turno",
        header: "Turno(s)",
        Cell: ({ renderedCellValue }: any) => (
          <CellArrayContainer>
            {renderedCellValue.length > 0 ? (
              renderedCellValue.map((item: any) => <Tag label={item} />)
            ) : (
              <Tag label={renderedCellValue} />
            )}
          </CellArrayContainer>
        ),
      },
    ],
    []
  );

  const loadProfessores = useCallback(
    async ({ filterInput }: any) => {
      try {
        if (!professores.length) {
          setIsLoading(true);
        } else {
          setIsRefetching(true);
        }

        const response: any = await api.get("/professores", {
          params: {
            limit: 10000,
            q: filterInput,
          },
        });
        console.log("response", response);
        const professoresResponse = response.data.items;

        if (professoresResponse.length === 0) {
          setError("search", {
            message: "Nenhum dado encontrado.",
          });
          setProfessores([]);
          setIsError(false);
          setIsLoading(false);
          setIsRefetching(false);
          setColumnFilters([]);
          return;
        }

        let anosArray: any = []; // Array com valores únicos
        let turmasArray: any = [];
        let materiasArray: any = []; // Array com valores únicos
        let turnosArray: any = []; // Array com valores únicos

        const professoresDataTable: IDataTable[] = professoresResponse.map(
          (professor: ProfessorDados) => {
            anosArray = [];
            turmasArray = [];
            materiasArray = [];
            turnosArray = [];

            professor.turmas?.map((turma: any) => {
              !anosArray.includes(turma.dados_ano.ano) &&
                anosArray.push(turma.dados_ano.ano);
              turmasArray.push(turma.turma);
              !turnosArray.includes(turma.dados_turno.turno) &&
                turnosArray.push(turma.dados_turno.turno);
              return { anosArray, turmasArray, turnosArray };
            });
            professor.materias?.map((materia: any) =>
              materiasArray.push(materia.materia)
            );

            return {
              id: professor.id,
              professor_nome: professor.professor_nome,
              ano: anosArray.sort(),
              turma: turmasArray,
              materia: materiasArray,
              turno: turnosArray,
            };
          }
        );
        setProfessores(professoresDataTable);

        setRowCount(response.data.total);
      } catch (error) {
        toast.error("Não foi possível carregar os dados.");
        setIsError(true);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    },
    [professores.length, setError]
  );

  const handleSelectProfessor = async (professor: any) => {
    const response: any = await dispatch(showProfessor(professor.id));

    navigate(`/professor/${response.payload.data.id}/cadastro`);
  };

  useEffect(() => {
    // states config table
    dispatch(
      store({
        pagination,
        sorting,
        filter,
        columnFilters,
        columnSizing,
        columnVisibility,
        density,
      })
    );
    /**
     * Limpa state Professor. A Page Professor recebe tanto novo cadastro qnt
     * professor existente
     */
    dispatch(cleanState());
  }, [
    pagination,
    dispatch,
    sorting,
    filter,
    columnFilters,
    columnSizing,
    columnVisibility,
    density,
  ]);

  // Carrega última tabela aberta
  useEffect(() => {
    loadProfessores({ filterInput: professoresTable.filter });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel="Professores">
        <>
          <Breadcrumb links={linksBreadcrumb} />

          <TitleBody
            titleLabel="Consultar professores(as)"
            customFinalScroll={10000}
          />

          <TextForm
            name={"search"}
            label={""}
            width={breakpoint ? "100%" : "60%"}
            control={control}
            errors={errors}
            register={register}
            placeholder={"Filtrar por Nome, Turma, Ano, Matéria ou Turno"}
            type="search"
            variant="outlined"
            onEnter={async (e: any) => {
              e.preventDefault();
              setFilter(e.target.value);
              setPagination({
                pageIndex: 0,
                pageSize: 15,
              });
              setSorting([]);
              await loadProfessores({ filterInput: e.target.value });
              e.target.blur();
            }}
          />

          <TableContainer>
            <Table
              onClick={handleSelectProfessor}
              data={professores}
              columns={columns}
              isError={isError}
              isLoading={isLoading}
              isRefetching={isRefetching}
              rowCount={rowCount}
              actionsLabel="Professor(a)"
              onPaginationChange={setPagination}
              pagination={pagination}
              onSortingChange={setSorting}
              sorting={sorting}
              onColumnFiltersChange={setColumnFilters}
              columnFilters={columnFilters}
              columnVisibility={columnVisibility}
              columnSizing={columnSizing}
              density={density}
              onColumnVisibilityChange={setColumnVisibility}
              onColumnSizingChange={setColumnSizing}
              onDensityChange={setDensity}
            />
          </TableContainer>
        </>
      </LightSideLayout>
    </>
  );
};

export default Professores;
