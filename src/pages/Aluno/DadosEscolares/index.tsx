import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import TitleBody from "components/TitleBody";
import MuiSelectForm from "components/MuiSelectForm";
import MuiTextInputForm from "components/MuiTextInputForm";
import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";
import MuiSwitchForm from "components/MuiSwitchForm";

import { Grid } from "./styles";

const DadosEscolares: React.FC = () => {
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
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = useCallback(
    async (event: any) => {
      try {
        event.preventDefault();

        if (defaultValues[event.target.name] === event.target.value) {
          return;
        }

        console.log(event);
      } catch (error) {
        console.log(error);
      }
    },
    [defaultValues]
  );

  const sistemaOptions = [
    {
      id: "Creche",
      value: "Creche",
    },
    {
      id: "Escola",
      value: "Escola",
    },
    {
      id: "Fundamental",
      value: "Fundamental",
    },
  ];

  const anoOptions = [
    {
      id: "1",
      value: "1",
    },
    {
      id: "2",
      value: "2",
    },
    {
      id: "3",
      value: "3",
    },
  ];

  const turnoOptions = [
    {
      id: "1",
      value: "1",
    },
    {
      id: "2",
      value: "2",
    },
    {
      id: "3",
      value: "3",
    },
  ];

  const turmaOptions = [
    {
      id: "1",
      value: "1",
    },
    {
      id: "2",
      value: "2",
    },
    {
      id: "3",
      value: "3",
    },
  ];

  const periodoOptions = [
    {
      id: "1",
      value: "1",
    },
    {
      id: "2",
      value: "2",
    },
    {
      id: "3",
      value: "3",
    },
  ];

  const horarioEntradaOptions = [
    {
      id: "1",
      value: "1",
    },
    {
      id: "2",
      value: "2",
    },
    {
      id: "3",
      value: "3",
    },
  ];

  const horarioSaidaOptions = [
    {
      id: "1",
      value: "1",
    },
    {
      id: "2",
      value: "2",
    },
    {
      id: "3",
      value: "3",
    },
  ];

  return (
    <div>
      <TitleBody titleLabel="Dados Escolares" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <div>
            <MuiSelectForm
              name={"sistema"}
              label={"Sistema"}
              options={sistemaOptions}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <MuiSelectForm
              name={"ano"}
              label={"Ano"}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              width="80px"
              options={anoOptions}
            />
            <MuiSelectForm
              name={"turno"}
              label={"Turno"}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              options={turnoOptions}
            />
            <MuiSelectForm
              name={"turma"}
              label={"Turma"}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              options={turmaOptions}
            />
          </div>
          <div>
            <MuiSelectForm
              name={"periodo"}
              label={"Período"}
              options={periodoOptions}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <MuiSelectForm
              name={"horarioEntrada"}
              label={"Horário de Entrada"}
              options={horarioEntradaOptions}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <MuiSelectForm
              name={"horarioSaida"}
              label={"Horário de Saída"}
              options={horarioSaidaOptions}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
          </div>
          <div>
            <MuiTextInputForm
              register={register}
              name={"matricula"}
              label={"Matrícula"}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <MuiTextInputFormMasked
              register={register}
              mask="99/99/9999"
              name={"dataMatricula"}
              label={"Data de Matrícula"}
              onBlurProp={onSubmit}
              control={control}
              errors={errors}
            />
            <MuiSwitchForm label="Aluno Ativo" name="ativo" />
            <MuiTextInputForm
              register={register}
              name={"observacoes"}
              label={"Observações"}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              isMultiline={true}
              width="100%"
            />
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default DadosEscolares;
