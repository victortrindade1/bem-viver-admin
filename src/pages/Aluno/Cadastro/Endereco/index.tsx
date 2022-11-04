import React, { useMemo, useCallback, useEffect } from "react";
import { FormContainer } from "react-hook-form-mui";

import TextInputForm from "components/TextInputForm";

import { Container } from "./styles";

const Endereco: React.FC = () => {
  const defaultValues: any = useMemo(
    () => ({
      contatos_end_logradouro: "",
      contatos_end_num: "",
      contatos_end_complemento: "",
      contatos_end_bairro: "",
      contatos_end_cep: "",
      contatos_end_cidade: "",
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
    <FormContainer
      defaultValues={defaultValues}
      onSuccess={(event) => handleSubmit(event)}
    >
      <Container>
        <div>
          <TextInputForm
            name="contatos_end_logradouro"
            label="Logradouro"
            isFullWidth
            onHandleSubmit={handleSubmit}
          />
          <TextInputForm
            name="contatos_end_num"
            label="Número"
            onHandleSubmit={handleSubmit}
          />
          <TextInputForm
            name="contatos_end_complemento"
            label="Complemento"
            onHandleSubmit={handleSubmit}
            isFullWidth
          />
        </div>
        <div>
          <TextInputForm
            name="contatos_end_bairro"
            label="Bairro"
            onHandleSubmit={handleSubmit}
          />
          <TextInputForm
            name="contatos_end_cep"
            label="CEP"
            onHandleSubmit={handleSubmit}
          />
          <TextInputForm
            name="contatos_end_cidade"
            label="Cidade"
            onHandleSubmit={handleSubmit}
          />
        </div>
      </Container>
    </FormContainer>
  );
};

export default Endereco;
