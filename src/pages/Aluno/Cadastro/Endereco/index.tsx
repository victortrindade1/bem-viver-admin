import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectAluno, updateAluno } from "store/slices/aluno";

import TextForm from "components/TextForm";

import { cepFormat } from "utils/yup";

import { Container } from "./styles";

const Endereco: React.FC = () => {
  const dispatch = useAppDispatch();
  const alunoState = useAppSelector(selectAluno);
  const aluno = alunoState.alunoDados;

  const validationSchema = Yup.object().shape({
    contatos_end_logradouro: Yup.string(),
    contatos_end_num: Yup.string(),
    contatos_end_complemento: Yup.string(),
    contatos_end_bairro: Yup.string(),
    contatos_end_cep: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(cepFormat, "Cep incorreto"),
    contatos_end_cidade: Yup.string(),
  });

  const defaultValues: any = useMemo(
    () => ({
      contatos_end_logradouro: aluno?.contatos_end_logradouro,
      contatos_end_num: aluno?.contatos_end_num,
      contatos_end_complemento: aluno?.contatos_end_complemento,
      contatos_end_bairro: aluno?.contatos_end_bairro,
      contatos_end_cep: aluno?.contatos_end_cep,
      contatos_end_cidade: aluno?.contatos_end_cidade,
    }),
    [aluno]
  );

  const {
    control,
    handleSubmit,
    register,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();

      if (defaultValues[e.target.name] === e.target.value) {
        return;
      }

      const dataSubmit: any = {
        id: aluno.id,
        [e.target.name]: e.target.value,
      };

      await dispatch(updateAluno(dataSubmit));
    },
    [dispatch, defaultValues, aluno]
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
            onEnter={() => {
              setFocus("contatos_end_num");
            }}
            onBlur={onSubmit}
          />
          <TextForm
            register={register}
            name="contatos_end_num"
            label="Número"
            control={control}
            errors={errors}
            onEnter={() => {
              setFocus("contatos_end_complemento");
            }}
            onBlur={onSubmit}
          />
          <TextForm
            register={register}
            name="contatos_end_complemento"
            label="Complemento"
            control={control}
            errors={errors}
            width="100%"
            onEnter={() => {
              setFocus("contatos_end_bairro");
            }}
            onBlur={onSubmit}
          />
        </div>
        <div>
          <TextForm
            register={register}
            name="contatos_end_bairro"
            label="Bairro"
            control={control}
            errors={errors}
            onEnter={() => {
              setFocus("contatos_end_cep");
            }}
            onBlur={onSubmit}
          />
          <TextForm
            maskType="cep"
            register={register}
            name="contatos_end_cep"
            label="CEP"
            control={control}
            errors={errors}
            onEnter={() => {
              setFocus("contatos_end_cidade");
            }}
            onBlur={onSubmit}
          />
          <TextForm
            register={register}
            name="contatos_end_cidade"
            label="Cidade"
            control={control}
            errors={errors}
            onBlur={onSubmit}
          />
        </div>
      </Container>
    </form>
  );
};

export default Endereco;
