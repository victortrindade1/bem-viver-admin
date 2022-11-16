import React, { useMemo, useCallback, useEffect } from "react";
import { FormContainer, SwitchElement } from "react-hook-form-mui";
// import useMediaQuery from "@mui/material/useMediaQuery";

import TitleBody from "components/TitleBody";
import MuiSelectForm from "components/MuiSelectForm";
import TextInputForm from "components/TextInputForm";

import { Grid } from "./styles";

const DadosEscolares: React.FC = () => {
  // const isMedium = useMediaQuery("(max-width:1170px)");

  const defaultValues: any = useMemo(
    () => ({
      sistema: "Escola",
    }),
    []
  );

  const handleSubmit = useCallback(
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
        handleSubmit(event);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [handleSubmit]);

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
      <FormContainer
        defaultValues={defaultValues}
        onSuccess={(event) => handleSubmit(event)}
      >
        <Grid>
          <div>
            <MuiSelectForm
              initialValue={defaultValues.sistema}
              name={"sistema"}
              label={"Sistema"}
              options={sistemaOptions}
              onSubmit={handleSubmit}
            />
            <TextInputForm
              name={"ano"}
              label={"Ano"}
              onHandleSubmit={handleSubmit}
              width="80px"
            />
            <TextInputForm
              name={"turno"}
              label={"Turno"}
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name={"turma"}
              label={"Turma"}
              onHandleSubmit={handleSubmit}
            />
          </div>
          <div>
            <MuiSelectForm
              initialValue={defaultValues.sistema}
              name={"periodo"}
              label={"Período"}
              options={sistemaOptions}
              onSubmit={handleSubmit}
            />
            <MuiSelectForm
              initialValue={defaultValues.sistema}
              name={"horarioEntrada"}
              label={"Horário de Entrada"}
              options={sistemaOptions}
              onSubmit={handleSubmit}
            />
            <MuiSelectForm
              initialValue={defaultValues.sistema}
              name={"horarioSaida"}
              label={"Horário de Saída"}
              options={sistemaOptions}
              onSubmit={handleSubmit}
            />
          </div>
          {/* {isMedium && <div />} */}

          <div>
            <TextInputForm
              name={"observacoes"}
              label={"Observações"}
              onHandleSubmit={handleSubmit}
              isMultiline={true}
              width="100%"
            />
            <TextInputForm
              name={"matricula"}
              label={"Matrícula"}
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name={"dataMatricula"}
              label={"Data de Matrícula"}
              onHandleSubmit={handleSubmit}
            />
            <SwitchElement
              label="Aluno Ativo"
              labelPlacement="end"
              name={"ativo"}
              sx={{ margin: "16px 0px 8px" }}
            />
          </div>
        </Grid>
      </FormContainer>
    </div>
  );
};

export default DadosEscolares;
