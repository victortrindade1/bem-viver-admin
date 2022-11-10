import React, { useMemo, useCallback, useEffect } from "react";
import { FormContainer } from "react-hook-form-mui";

import TextInputForm from "components/TextInputForm";

import { Grid } from "./styles";

const ContatosPessoais: React.FC = () => {
  const defaultValues: any = useMemo(
    () => ({
      contatos_pai_tel: "",
      contatos_pai_cel: "",
      contatos_pai_email: "",
      contatos_mae_tel: "",
      contatos_mae_cel: "",
      contatos_mae_email: "",
      contatos_resp_tel: "",
      contatos_resp_cel: "",
      contatos_resp_email: "",
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
              name="contatos_pai_tel"
              label="Telefone Pai"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="contatos_pai_cel"
              label="Celular Pai"
              onHandleSubmit={handleSubmit}
            />
          </div>
          <div>
            <TextInputForm
              name="contatos_mae_tel"
              label="Telefone Mãe"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="contatos_mae_cel"
              label="Celular Mãe"
              onHandleSubmit={handleSubmit}
            />
          </div>
          <div>
            <TextInputForm
              name="contatos_resp_tel"
              label="Telefone Responsável"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="contatos_resp_cel"
              label="Celular Responsável"
              onHandleSubmit={handleSubmit}
            />
          </div>
        </Grid>
      </FormContainer>
    </>
  );
};

export default ContatosPessoais;
