import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectAluno, updateAluno } from "store/slices/aluno";

import TextForm from "components/TextForm";

import { Grid } from "./styles";

const AutorizadosABuscar: React.FC = () => {
  const dispatch = useAppDispatch();
  const alunoState = useAppSelector(selectAluno);
  const aluno = alunoState.alunoDados;

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
      contatos_buscar1_nome: aluno.contatos_buscar1_nome || "",
      contatos_buscar1_parentesco: aluno.contatos_buscar1_parentesco || "",
      contatos_buscar1_contato: aluno.contatos_buscar1_contato || "",
      contatos_buscar2_nome: aluno.contatos_buscar2_nome || "",
      contatos_buscar2_parentesco: aluno.contatos_buscar2_parentesco || "",
      contatos_buscar2_contato: aluno.contatos_buscar2_contato || "",
      contatos_buscar3_nome: aluno.contatos_buscar3_nome || "",
      contatos_buscar3_parentesco: aluno.contatos_buscar3_parentesco || "",
      contatos_buscar3_contato: aluno.contatos_buscar3_contato || "",
    }),
    [aluno]
  );

  const {
    control,
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
    [dispatch, aluno, defaultValues]
  );

  return (
    <Grid>
      <div>
        <TextForm
          register={register}
          width="100%"
          name="contatos_buscar1_nome"
          label="Nome 1"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_buscar1_parentesco");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          name="contatos_buscar1_parentesco"
          label="Grau de Parentesco"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_buscar1_contato");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          maskType="tel"
          name="contatos_buscar1_contato"
          label="Contato"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_buscar2_nome");
          }}
          onBlur={onSubmit}
        />
      </div>
      <div>
        <TextForm
          register={register}
          width="100%"
          name="contatos_buscar2_nome"
          label="Nome 2"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_buscar2_parentesco");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          name="contatos_buscar2_parentesco"
          label="Grau de Parentesco"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_buscar2_contato");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          maskType="tel"
          name="contatos_buscar2_contato"
          label="Contato"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_buscar3_nome");
          }}
          onBlur={onSubmit}
        />
      </div>
      <div>
        <TextForm
          register={register}
          width="100%"
          name="contatos_buscar3_nome"
          label="Nome 3"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_buscar3_parentesco");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          name="contatos_buscar3_parentesco"
          label="Grau de Parentesco"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_buscar3_contato");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          maskType="tel"
          name="contatos_buscar3_contato"
          label="Contato"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_buscar1_nome");
          }}
          onBlur={onSubmit}
        />
      </div>
    </Grid>
  );
};

export default AutorizadosABuscar;
