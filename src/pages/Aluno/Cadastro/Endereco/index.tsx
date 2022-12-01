import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import MuiTextInputForm from "components/MuiTextInputForm";
import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";

import { Container } from "./styles";

const Endereco: React.FC = () => {
  const validationSchema = Yup.object().shape({
    contatos_end_logradouro: Yup.string(),
    contatos_end_num: Yup.string(),
    contatos_end_complemento: Yup.string(),
    contatos_end_bairro: Yup.string(),
    contatos_end_cep: Yup.string()
      .min(9, "CEP incorreto.")
      .max(9, "CEP incorreto."),
    contatos_end_cidade: Yup.string(),
  });

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
      <Container>
        <div>
          <MuiTextInputForm
            register={register}
            name="contatos_end_logradouro"
            label="Logradouro"
            width="100%"
            onHandleSubmit={onSubmit}
            control={control}
            errors={errors}
          />
          <MuiTextInputForm
            register={register}
            name="contatos_end_num"
            label="Número"
            onHandleSubmit={onSubmit}
            control={control}
            errors={errors}
          />
          <MuiTextInputForm
            register={register}
            name="contatos_end_complemento"
            label="Complemento"
            onHandleSubmit={onSubmit}
            control={control}
            errors={errors}
            width="100%"
          />
        </div>
        <div>
          <MuiTextInputForm
            register={register}
            name="contatos_end_bairro"
            label="Bairro"
            onHandleSubmit={onSubmit}
            control={control}
            errors={errors}
          />
          <MuiTextInputFormMasked
            register={register}
            mask="99999-999"
            name="contatos_end_cep"
            label="CEP"
            onHandleSubmit={onSubmit}
            control={control}
            errors={errors}
          />
          <MuiTextInputForm
            register={register}
            name="contatos_end_cidade"
            label="Cidade"
            onHandleSubmit={onSubmit}
            control={control}
            errors={errors}
          />
        </div>
      </Container>
    </form>
  );
};

export default Endereco;
