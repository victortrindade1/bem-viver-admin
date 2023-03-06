import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaUserPlus, FaCommentDollar, FaPaperPlane } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GridColDef } from "@mui/x-data-grid";

import { useAppDispatch } from "hooks";

import api from "services/api";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
import TitleBody from "components/TitleBody";
import TextForm from "components/TextForm";
import MuiDataGrid from "components/MuiDataGrid";
import { showAluno } from "store/slices/aluno";

const Alunos: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [alunos, setAlunos] = useState([]);

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
      search: "",
    }),
    []
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

  const columnsTable: GridColDef[] = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 1,
    },
    {
      field: "matricula",
      headerName: "Matrícula",
      flex: 0.5,
    },
    {
      field: "ano",
      headerName: "Ano",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "turma",
      headerName: "Turma",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
  ];

  const loadAlunos = async (e: any) => {
    const response: any = await api.get(
      `/alunos?q=${e.target.value}&limit=1000`
    );

    const alunosResponse = response.data.items;

    if (alunosResponse.length === 0) {
      setError("search", {
        message: "Nenhum dado encontrado.",
      });
      setAlunos([]);
      return;
    }

    const alunosDataTable = alunosResponse.map((item: AlunoDados) => ({
      id: item.id,
      nome: item.nome,
      matricula: item.matricula,
      ano: item.dados_turma?.dados_ano?.ano,
      turma: item.dados_turma?.turma,
      status: item.statuspagamento,
    }));
    setAlunos(alunosDataTable);
    e.target.blur();
  };

  const handleSelectAluno = async (aluno: any) => {
    const response: any = await dispatch(showAluno(aluno.id));

    navigate(`/aluno/${response.payload.data.id}/cadastro`);
  };

  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel="Alunos">
        <>
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
            onEnter={(e: any) => {
              loadAlunos(e);
            }}
          />
          {alunos.length > 0 && (
            <MuiDataGrid
              data={alunos}
              columns={columnsTable}
              onRowSelect={handleSelectAluno}
            />
          )}
        </>
      </LightSideLayout>
    </>
  );
};

export default Alunos;
