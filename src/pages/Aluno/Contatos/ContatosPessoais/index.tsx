import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectAluno, updateAluno } from "store/slices/aluno";

import TextForm from "components/TextForm";

import { Grid } from "./styles";

const ContatosPessoais: React.FC = () => {
  const dispatch = useAppDispatch();
  const alunoState = useAppSelector(selectAluno);
  const aluno = alunoState.alunoDados;

  const validationSchema = Yup.object().shape({
    contatos_pai_tel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_pai_cel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_pai_email: Yup.string().email("E-mail incorreto."),
    contatos_mae_tel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_mae_cel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_mae_email: Yup.string().email("E-mail incorreto."),
    contatos_resp_tel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_resp_cel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_resp_email: Yup.string().email("E-mail incorreto."),
  });

  const defaultValues: any = useMemo(
    () => ({
      contatos_pai_tel: aluno?.contatos_pai_tel || "",
      contatos_pai_cel: aluno?.contatos_pai_cel || "",
      contatos_pai_email: aluno?.contatos_pai_email || "",
      contatos_mae_tel: aluno?.contatos_mae_tel || "",
      contatos_mae_cel: aluno?.contatos_mae_cel || "",
      contatos_mae_email: aluno?.contatos_mae_email || "",
      contatos_resp_tel: aluno?.contatos_resp_tel || "",
      contatos_resp_cel: aluno?.contatos_resp_cel || "",
      contatos_resp_email: aluno?.contatos_resp_email || "",
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
        id: aluno?.id,
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
          maskType="tel"
          name="contatos_pai_cel"
          label="Celular Pai"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_pai_tel");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          maskType="tel"
          name="contatos_pai_tel"
          label="Telefone Pai"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_mae_cel");
          }}
          onBlur={onSubmit}
        />
      </div>
      <div>
        <TextForm
          register={register}
          maskType="tel"
          name="contatos_mae_cel"
          label="Celular Mãe"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_mae_tel");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          maskType="tel"
          name="contatos_mae_tel"
          label="Telefone Mãe"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_resp_cel");
          }}
          onBlur={onSubmit}
        />
      </div>
      <div>
        <TextForm
          register={register}
          maskType="tel"
          name="contatos_resp_cel"
          label="Celular Responsável"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_resp_tel");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          maskType="tel"
          name="contatos_resp_tel"
          label="Telefone Responsável"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("contatos_pai_cel");
          }}
          onBlur={onSubmit}
        />
      </div>
    </Grid>
  );
};

export default ContatosPessoais;
