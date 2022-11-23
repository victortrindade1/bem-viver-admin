import React, { useMemo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import TitleBody from "components/TitleBody";
import MuiSelectForm from "components/MuiSelectForm";
import MuiTextInputForm from "components/MuiTextInputForm";
import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";

import { Grid } from "./styles";
import MuiSwitchForm from "components/MuiSwitchForm";

const DadosEscolares: React.FC = () => {
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
    // formState: { errors },
  } = useForm({
    defaultValues,
    // shouldUnregister: true, // só submita se mudar valor
  });

  const onSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();

      if (defaultValues[event.target.name] === event.target.value) {
        return;
      }

      console.log(event);
    },
    [defaultValues]
  );

  // Trigger Enter
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        onSubmit(event);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [onSubmit]);

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
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiSelectForm
              name={"ano"}
              label={"Ano"}
              onHandleSubmit={onSubmit}
              control={control}
              width="80px"
              options={anoOptions}
            />
            <MuiSelectForm
              name={"turno"}
              label={"Turno"}
              onHandleSubmit={onSubmit}
              control={control}
              options={turnoOptions}
            />
            <MuiSelectForm
              name={"turma"}
              label={"Turma"}
              onHandleSubmit={onSubmit}
              control={control}
              options={turmaOptions}
            />
          </div>
          <div>
            <MuiSelectForm
              name={"periodo"}
              label={"Período"}
              options={periodoOptions}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiSelectForm
              name={"horarioEntrada"}
              label={"Horário de Entrada"}
              options={horarioEntradaOptions}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiSelectForm
              name={"horarioSaida"}
              label={"Horário de Saída"}
              options={horarioSaidaOptions}
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
          <div>
            <MuiTextInputForm
              name={"matricula"}
              label={"Matrícula"}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputFormMasked
              mask="99/99/9999"
              name={"dataMatricula"}
              label={"Data de Matrícula"}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiSwitchForm label="Aluno Ativo" name="ativo" />
            <MuiTextInputForm
              name={"observacoes"}
              label={"Observações"}
              onHandleSubmit={onSubmit}
              control={control}
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
