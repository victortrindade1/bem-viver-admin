import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectAluno, updateAluno } from "store/slices/aluno";

import TitleBody from "components/TitleBody";
import MuiSelectForm from "components/MuiSelectForm";
import TextForm from "components/TextForm";
import MuiSwitchForm from "components/MuiSwitchForm";

import { Grid } from "./styles";

const DadosEscolares: React.FC = () => {
  const dispatch = useAppDispatch();
  const alunoState = useAppSelector(selectAluno);
  const aluno = alunoState.alunoDados;

  const validationSchema = Yup.object().shape({
    sistema: Yup.string(),
    ano: Yup.string(),
    turno: Yup.string(),
    turma: Yup.string(),
    periodo: Yup.string(),
    horarioEntrada: Yup.string(),
    horarioSaida: Yup.string(),
  });

  const defaultValues: any = useMemo(
    () => ({
      sistema: "Escola",
      ano: "1",
      turno: "1",
      turma: "1",
      periodo: "1",
      horarioEntrada: "1",
      horarioSaida: "1",
    }),
    []
  );

  const {
    control,
    register,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = useCallback(
    async (e: any) => {
      console.log(e);
      // e.preventDefault();

      // if (defaultValues[e.target.name] === e.target.value) {
      //   return;
      // }

      // const dataSubmit: any = {
      //   id: aluno.id,
      //   [e.target.name]: e.target.value,
      // };

      // await dispatch(updateAluno(dataSubmit));
    },
    [dispatch, aluno, defaultValues]
  );

  const turmaOptions = [
    {
      id: 1,
      label: "turma 1",
    },
    {
      id: 2,
      label: "turma 2",
    },
    {
      id: 3,
      label: "turma 3",
    },
  ];

  const periodoOptions = [
    {
      id: 1,
      label: "1",
    },
    {
      id: 2,
      label: "2",
    },
    {
      id: 3,
      label: "3",
    },
  ];

  const horarioEntradaOptions = [
    {
      id: 1,
      label: "1",
    },
    {
      id: 2,
      label: "2",
    },
    {
      id: 3,
      label: "3",
    },
  ];

  const horarioSaidaOptions = [
    {
      id: 1,
      label: "1",
    },
    {
      id: 2,
      label: "2",
    },
    {
      id: 3,
      label: "3",
    },
  ];

  return (
    <div>
      <TitleBody titleLabel="Dados Escolares" />
      <Grid>
        <div>
          <MuiSelectForm
            register={register}
            name={"turma"}
            label={"Turma"}
            control={control}
            errors={errors}
            options={turmaOptions}
            onChange={onSubmit}
          />
        </div>
        <div>
          <MuiSelectForm
            register={register}
            name={"periodo"}
            label={"Período"}
            options={periodoOptions}
            control={control}
            errors={errors}
            onChange={onSubmit}
          />
          <MuiSelectForm
            register={register}
            name={"horarioEntrada"}
            label={"Horário de Entrada"}
            options={horarioEntradaOptions}
            control={control}
            errors={errors}
            onChange={onSubmit}
          />
          <MuiSelectForm
            register={register}
            name={"horarioSaida"}
            label={"Horário de Saída"}
            options={horarioSaidaOptions}
            control={control}
            errors={errors}
            onChange={onSubmit}
          />
        </div>
        <div>
          <TextForm
            register={register}
            name={"matricula"}
            label={"Matrícula"}
            control={control}
            errors={errors}
          />
          <TextForm
            register={register}
            maskType="date"
            name={"dataMatricula"}
            label={"Data de Matrícula"}
            control={control}
            errors={errors}
          />
          <MuiSwitchForm label="Aluno Ativo" name="ativo" />
          <TextForm
            register={register}
            name={"observacoes"}
            label={"Observações"}
            control={control}
            errors={errors}
            isMultiline={true}
            width="100%"
          />
        </div>
      </Grid>
    </div>
  );
};

export default DadosEscolares;
