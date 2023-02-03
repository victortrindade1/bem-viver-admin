import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import MuiTextInputForm from "components/MuiTextInputForm";
import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";

import { Grid } from "./styles";

const AutorizadosABuscar: React.FC = () => {
  const validationSchema = Yup.object().shape({
    contatos_buscar1_nome: Yup.string(),
    contatos_buscar1_parentesco: Yup.string(),
    contatos_buscar1_contato: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_buscar2_nome: Yup.string(),
    contatos_buscar2_parentesco: Yup.string(),
    contatos_buscar2_contato: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_buscar3_nome: Yup.string(),
    contatos_buscar3_parentesco: Yup.string(),
    contatos_buscar3_contato: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
  });

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <div>
          <MuiTextInputForm
            register={register}
            name="contatos_buscar1_nome"
            label="Nome 1"
            width="100%"
            control={control}
            errors={errors}
          />
          <MuiTextInputForm
            register={register}
            name="contatos_buscar1_parentesco"
            label="Grau de Parentesco"
            control={control}
            errors={errors}
          />
          <MuiTextInputFormMasked
            register={register}
            mask="(99) 99999-9999"
            name="contatos_buscar1_contato"
            label="Contato"
            control={control}
            errors={errors}
          />
        </div>
        <div>
          <MuiTextInputForm
            register={register}
            name="contatos_buscar2_nome"
            label="Nome 2"
            width="100%"
            control={control}
            errors={errors}
          />
          <MuiTextInputForm
            register={register}
            name="contatos_buscar2_parentesco"
            label="Grau de Parentesco"
            control={control}
            errors={errors}
          />
          <MuiTextInputFormMasked
            register={register}
            mask="(99) 99999-9999"
            name="contatos_buscar2_contato"
            label="Contato"
            control={control}
            errors={errors}
          />
        </div>
        <div>
          <MuiTextInputForm
            register={register}
            name="contatos_buscar3_nome"
            label="Nome 3"
            width="100%"
            control={control}
            errors={errors}
          />
          <MuiTextInputForm
            register={register}
            name="contatos_buscar3_parentesco"
            label="Grau de Parentesco"
            control={control}
            errors={errors}
          />
          <MuiTextInputFormMasked
            register={register}
            mask="(99) 99999-9999"
            name="contatos_buscar3_contato"
            label="Contato"
            control={control}
            errors={errors}
          />
        </div>
      </Grid>
    </form>
  );
};

export default AutorizadosABuscar;
