import React, { useMemo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import MuiTextInputForm from "components/MuiTextInputForm";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <div>
          <MuiTextInputForm
            name="contatos_end_logradouro"
            label="Logradouro"
            width="100%"
            onHandleSubmit={onSubmit}
            control={control}
          />
          <MuiTextInputForm
            name="contatos_end_num"
            label="Número"
            onHandleSubmit={onSubmit}
            control={control}
          />
          <MuiTextInputForm
            name="contatos_end_complemento"
            label="Complemento"
            onHandleSubmit={onSubmit}
            control={control}
            width="100%"
          />
        </div>
        <div>
          <MuiTextInputForm
            name="contatos_end_bairro"
            label="Bairro"
            onHandleSubmit={onSubmit}
            control={control}
          />
          <MuiTextInputForm
            name="contatos_end_cep"
            label="CEP"
            onHandleSubmit={onSubmit}
            control={control}
          />
          <MuiTextInputForm
            name="contatos_end_cidade"
            label="Cidade"
            onHandleSubmit={onSubmit}
            control={control}
          />
        </div>
      </Container>
    </form>
  );
};

export default Endereco;
