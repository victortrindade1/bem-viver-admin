import React, { useMemo, useEffect, useCallback, useState } from "react";
import { FaPlus, FaInfoCircle } from "react-icons/fa";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { MRT_ColumnDef } from "material-react-table";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import TitlePage from "components/TitlePage";
import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
import Breadcrumb from "components/Breadcrumb";
import TitleBody from "components/TitleBody";
import TextForm from "components/TextForm";
import MinimalTable from "components/MinimalTable";

// import { useAppDispatch } from "hooks";

import api from "services/api";

import { TableContainer } from "./styles";

interface IDataTable {
  id: number;
  turma: string;
  turno: string;
  ano: string;
  sistema: string;
}

const Turmas: React.FC = () => {
  const [turmas, setTurmas] = useState<IDataTable[]>([]);

  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const links = [
    {
      label: "Nova Turma",
      Icon: FaPlus,
      url: "/turmas/novo",
    },
  ];

  const linksBreadcrumb = [
    {
      url: "",
      label: "Turmas",
    },
  ];

  const breakpoint = useMediaQuery("(max-width:768px)");

  const defaultValues: any = useMemo(
    () => ({
      search: "",
    }),
    []
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

  const loadTurmas = useCallback(
    async ({ filterInput }: any) => {
      try {
        const response: any = await api.get("/turmas", {
          params: {
            limit: 10000,
            q: filterInput,
          },
        });

        const turmasResponse = response.data.items;

        if (turmasResponse.length === 0) {
          setError("search", {
            message: "Nenhum dado encontrado.",
          });
          return;
        }

        const turmasDataTable: IDataTable[] = turmasResponse.map(
          (turma: TurmaDados) => {
            return {
              id: turma.id,
              turma: turma.turma,
              turno: turma.dados_turno?.turno,
              ano: turma.dados_ano?.ano,
              sistema: turma.dados_ano?.dados_sistema?.sistema,
            };
          }
        );

        setTurmas(turmasDataTable);
      } catch (error) {
        console.log({ error });
        toast.error("Não foi possível carregar os dados.");
        return;
      }
    },
    [setError]
  );

  const handleSelectTurma = async (turma: any) => {
    // const response: any = await dispatch(showTurma(turma.id));
    // navigate(`/turma/${response.payload.data.id}/cadastro`);
  };

  // Carrega última tabela aberta
  useEffect(() => {
    loadTurmas({ filterInput: "" });
  }, [loadTurmas]);

  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel="Turmas">
        <>
          <Breadcrumb links={linksBreadcrumb} />

          <TitleBody titleLabel="Consultar turmas" />

          <TextForm
            name={"search"}
            label={""}
            width={breakpoint ? "100%" : "60%"}
            control={control}
            errors={errors}
            register={register}
            placeholder={"Procurar por turma"}
            type="search"
            variant="outlined"
            onEnter={async (e: any) => {
              e.preventDefault();
              await loadTurmas({ filterInput: e.target.value });
              e.target.blur();
            }}
          />

          <TableContainer>
            <MinimalTable
              onClick={handleSelectTurma}
              data={turmas}
              columns={columns}
              actionsLabel="Informações"
              ActionIcon={<FaInfoCircle />}
              tooltipLabel="Mais informações"
            />
          </TableContainer>
        </>
      </LightSideLayout>
    </>
  );
};

export default Turmas;
