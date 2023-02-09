import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import TextForm from "components/TextForm";

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
          <TextForm
            register={register}
            name="contatos_end_logradouro"
            label="Logradouro"
            width="100%"
            control={control}
            errors={errors}
          />
          <TextForm
            register={register}
            name="contatos_end_num"
            label="Número"
            control={control}
            errors={errors}
          />
          <TextForm
            register={register}
            name="contatos_end_complemento"
            label="Complemento"
            control={control}
            errors={errors}
            width="100%"
          />
        </div>
        <div>
          <TextForm
            register={register}
            name="contatos_end_bairro"
            label="Bairro"
            control={control}
            errors={errors}
          />
          <TextForm
            maskType="cep"
            register={register}
            name="contatos_end_cep"
            label="CEP"
            control={control}
            errors={errors}
          />
          <TextForm
            register={register}
            name="contatos_end_cidade"
            label="Cidade"
            control={control}
            errors={errors}
          />
        </div>
      </Container>
    </form>
  );
};

export default Endereco;
