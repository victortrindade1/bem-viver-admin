import React, { useMemo, useCallback, useEffect } from "react";
import { FormContainer } from "react-hook-form-mui";

import TextInputForm from "components/TextInputForm";

import { Grid } from "./styles";

const AutorizadosABuscar: React.FC = () => {
  const defaultValues: any = useMemo(
    () => ({
      contatos_buscar1_nome: "",
      contatos_buscar1_parentesco: "",
      contatos_buscar1_contato: "",
      contatos_buscar2_nome: "",
      contatos_buscar2_parentesco: "",
      contatos_buscar2_contato: "",
      contatos_buscar3_nome: "",
      contatos_buscar3_parentesco: "",
      contatos_buscar3_contato: "",
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

  return (
    <>
      <FormContainer
        defaultValues={defaultValues}
        onSuccess={(event) => handleSubmit(event)}
      >
        <Grid>
          <div>
            <TextInputForm
              name="contatos_buscar1_nome"
              label="Nome 1"
              width="100%"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="contatos_buscar1_parentesco"
              label="Grau de Parentesco"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="contatos_buscar1_contato"
              label="Contato"
              onHandleSubmit={handleSubmit}
            />
          </div>
          <div>
            <TextInputForm
              name="contatos_buscar2_nome"
              label="Nome 2"
              width="100%"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="contatos_buscar2_parentesco"
              label="Grau de Parentesco"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="contatos_buscar2_contato"
              label="Contato"
              onHandleSubmit={handleSubmit}
            />
          </div>
          <div>
            <TextInputForm
              name="contatos_buscar3_nome"
              label="Nome 3"
              width="100%"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="contatos_buscar3_parentesco"
              label="Grau de Parentesco"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="contatos_buscar3_contato"
              label="Contato"
              onHandleSubmit={handleSubmit}
            />
          </div>
        </Grid>
      </FormContainer>
    </>
  );
};

export default AutorizadosABuscar;
