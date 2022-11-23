import React, { useMemo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import MuiTextInputForm from "components/MuiTextInputForm";
import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <div>
            <MuiTextInputForm
              name="contatos_buscar1_nome"
              label="Nome 1"
              width="100%"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name="contatos_buscar1_parentesco"
              label="Grau de Parentesco"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputFormMasked
              mask="(99) 99999-9999"
              name="contatos_buscar1_contato"
              label="Contato"
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
          <div>
            <MuiTextInputForm
              name="contatos_buscar2_nome"
              label="Nome 2"
              width="100%"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name="contatos_buscar2_parentesco"
              label="Grau de Parentesco"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputFormMasked
              mask="(99) 99999-9999"
              name="contatos_buscar2_contato"
              label="Contato"
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
          <div>
            <MuiTextInputForm
              name="contatos_buscar3_nome"
              label="Nome 3"
              width="100%"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name="contatos_buscar3_parentesco"
              label="Grau de Parentesco"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputFormMasked
              mask="(99) 99999-9999"
              name="contatos_buscar3_contato"
              label="Contato"
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
        </Grid>
      </form>
    </>
  );
};

export default AutorizadosABuscar;
