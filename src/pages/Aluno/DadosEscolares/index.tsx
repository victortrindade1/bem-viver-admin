import React, { useMemo, useCallback, useEffect } from "react";
// import { SwitchElement } from "react-hook-form-mui";
import { useForm } from "react-hook-form";

// import useMediaQuery from "@mui/material/useMediaQuery";

import TitleBody from "components/TitleBody";
import MuiSelectForm from "components/MuiSelectForm";
import MuiTextInputForm from "components/MuiTextInputForm";

import { Grid } from "./styles";
import MuiSwitchForm from "components/MuiSwitchForm";

const DadosEscolares: React.FC = () => {
  // const isMedium = useMediaQuery("(max-width:1170px)");

  const defaultValues: any = useMemo(
    () => ({
      sistema: "Escola",
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

  return (
    <div>
      <TitleBody titleLabel="Dados Escolares" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <div>
            <MuiSelectForm
              initialValue={defaultValues.sistema}
              name={"sistema"}
              label={"Sistema"}
              options={sistemaOptions}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name={"ano"}
              label={"Ano"}
              onHandleSubmit={onSubmit}
              control={control}
              width="80px"
            />
            <MuiTextInputForm
              name={"turno"}
              label={"Turno"}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name={"turma"}
              label={"Turma"}
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
          <div>
            <MuiSelectForm
              initialValue={defaultValues.sistema}
              name={"periodo"}
              label={"Período"}
              options={sistemaOptions}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiSelectForm
              initialValue={defaultValues.sistema}
              name={"horarioEntrada"}
              label={"Horário de Entrada"}
              options={sistemaOptions}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiSelectForm
              initialValue={defaultValues.sistema}
              name={"horarioSaida"}
              label={"Horário de Saída"}
              options={sistemaOptions}
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
          {/* {isMedium && <div />} */}

          <div>
            <MuiTextInputForm
              name={"matricula"}
              label={"Matrícula"}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
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
