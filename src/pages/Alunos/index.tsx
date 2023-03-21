import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import type {
  MRT_ColumnDef,
  MRT_SortingState,
  MRT_PaginationState,
  MRT_ColumnFiltersState,
  MRT_ColumnSizingState,
  // MRT_DensityState,
  MRT_VisibilityState,
  // MRT_ColumnOrderState,
} from "material-react-table"; // If using TypeScript (optional, but recommended)

import { useAppDispatch, useAppSelector } from "hooks";
import { showAluno } from "store/slices/aluno";
import { store, selectAlunosTable } from "store/slices/alunosTable";
import api from "services/api";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
import TitleBody from "components/TitleBody";
import TextForm from "components/TextForm";
import TagStatusPag from "components/TagStatusPag";
import Breadcrumb from "components/Breadcrumb";
import Table from "components/Table";

import { TableContainer } from "./styles";

interface IDataTable {
  id: number;
  nome: string;
  matricula: string;
  ano: string;
  turma: string;
  status: string;
}

const Alunos: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const alunosTable = useAppSelector(selectAlunosTable);

  // Table States
  const [alunos, setAlunos] = useState<IDataTable | any>([]);
  const [filter, setFilter] = useState(alunosTable.filter);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const [pagination, setPagination] = useState<MRT_PaginationState>(
    alunosTable.pagination
  );
  const [sorting, setSorting] = useState<MRT_SortingState>(alunosTable.sorting);
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    alunosTable.columnFilters
  );
  const [columnVisibility, setColumnVisibility] = useState<MRT_VisibilityState>(
    alunosTable.columnVisibility
  );
  const [columnSizing, setColumnSizing] = useState<MRT_ColumnSizingState>(
    alunosTable.columnSizing
  );
  const [density, setDensity] = useState(alunosTable.density);

  const breakpoint = useMediaQuery("(max-width:768px)");

  const links = [
    {
      label: "Novo",
      Icon: FaUserPlus,
      url: "/alunos/novo",
    },
    // {
    //   label: "Cobranças",
    //   Icon: FaCommentDollar,
    //   url: "/alunos",
    //   // disabled: true,
    // },
    // {
    //   label: "Notificações",
    //   Icon: FaPaperPlane,
    //   url: "/alunos",
    //   // disabled: true,
    // },
  ];

  const validationSchema = Yup.object().shape({
    search: Yup.string(),
  });

  const defaultValues: any = useMemo(
    () => ({
      search: alunosTable.filter,
    }),
    [alunosTable.filter]
  );

  const {
    control,
    register,
    // setFocus,
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
        accessorKey: "nome",
        header: "Nome",
      },
      {
        accessorKey: "matricula",
        header: "Matrícula",
      },
      {
        accessorKey: "ano",
        header: "Ano",
      },
      {
        accessorKey: "turma",
        header: "Turma",
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ renderedCellValue, row }: any) => (
          <TagStatusPag label={renderedCellValue} />
        ),
      },
    ],
    []
  );

  const loadAlunos = useCallback(
    async ({ filterInput }: any) => {
      try {
        if (!alunos.length) {
          setIsLoading(true);
        } else {
          setIsRefetching(true);
        }

        const response: any = await api.get("/alunos", {
          params: {
            limit: 10000,
            q: filterInput,
          },
        });

        console.log("response", response);

        const alunosResponse = response.data.items;

        if (alunosResponse.length === 0) {
          setError("search", {
            message: "Nenhum dado encontrado.",
          });
          setAlunos([]);
          setIsError(false);
          setIsLoading(false);
          setIsRefetching(false);
          setColumnFilters([]);
          // setColumnVisibility([])
          return;
        }

        const alunosDataTable: IDataTable[] = alunosResponse.map(
          (item: AlunoDados) => {
            return {
              id: item.id,
              nome: item.nome,
              matricula: item.matricula,
              ano: item.dados_turma?.dados_ano?.ano,
              turma: item.dados_turma?.turma,
              status: item.statuspagamento,
            };
          }
        );
        setAlunos(alunosDataTable);

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
    [alunos.length, setError]
  );

  const handleSelectAluno = async (aluno: any) => {
    const response: any = await dispatch(showAluno(aluno.id));

    navigate(`/aluno/${response.payload.data.id}/cadastro`);
  };

  useEffect(() => {
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
    loadAlunos({ filterInput: alunosTable.filter });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linksBreadcrumb = [
    {
      url: "",
      label: "Alunos",
    },
  ];

  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel="Alunos">
        <>
          <Breadcrumb links={linksBreadcrumb} />

          <TitleBody titleLabel="Consultar alunos" customFinalScroll={10000} />

          <TextForm
            name={"search"}
            label={""}
            width={breakpoint ? "100%" : "60%"}
            control={control}
            errors={errors}
            register={register}
            placeholder={
              "Filtrar por Nome, Matrícula, Sistema, Ano, Turma ou Status"
            }
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
              await loadAlunos({ filterInput: e.target.value });
              e.target.blur();
            }}
          />
          <TableContainer>
            <Table
              data={alunos}
              columns={columns}
              isError={isError}
              isLoading={isLoading}
              isRefetching={isRefetching}
              rowCount={rowCount}
              onClick={handleSelectAluno}
              actionsLabel="Aluno"
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

export default Alunos;
