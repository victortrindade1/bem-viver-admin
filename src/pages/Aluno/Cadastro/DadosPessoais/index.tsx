import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import AccordionTextInput from "components/AccordionTextInput";
import MuiTextInputForm from "components/MuiTextInputForm";
import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";

import { Grid } from "./styles";

const DadosPessoais: React.FC = () => {
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    dados_pessoais_rg: Yup.string().min(14, "RG incorreto."),
    dados_pessoais_cpf: Yup.string()
      .min(14, "CPF incorreto.")
      .max(14, "CPF incorreto."),
    dados_pessoais_data_nascimento: Yup.string()
      .min(10, "Data incorreta")
      .max(10, "Data incorreta"),
    dados_pessoais_num_certidao: Yup.string(),
    dados_pessoais_folha_certidao: Yup.string(),
    dados_pessoais_livro_certidao: Yup.string(),
    contatos_pai_nome: Yup.string(),
    contatos_pai_rg: Yup.string(),
    contatos_pai_cpf: Yup.string()
      .min(14, "CPF incorreto.")
      .max(14, "CPF incorreto."),
    contatos_pai_cnpj: Yup.string()
      .min(18, "CNPJ incorreto.")
      .max(18, "CNPJ incorreto."),
    contatos_pai_data_nascimento: Yup.string()
      .min(10, "Data incorreta")
      .max(10, "Data incorreta"),
    contatos_pai_email: Yup.string().email("E-mail incorreto."),
    contatos_mae_nome: Yup.string(),
    contatos_mae_rg: Yup.string(),
    contatos_mae_cpf: Yup.string()
      .min(14, "CPF incorreto.")
      .max(14, "CPF incorreto."),
    contatos_mae_cnpj: Yup.string()
      .min(18, "CNPJ incorreto.")
      .max(18, "CNPJ incorreto."),
    contatos_mae_data_nascimento: Yup.string()
      .min(10, "Data incorreta")
      .max(10, "Data incorreta"),
    contatos_mae_email: Yup.string().email("E-mail incorreto."),
    contatos_resp_nome: Yup.string(),
    contatos_resp_rg: Yup.string(),
    contatos_resp_cpf: Yup.string()
      .min(14, "CPF incorreto.")
      .max(14, "CPF incorreto."),
    contatos_resp_cnpj: Yup.string()
      .min(18, "CNPJ incorreto.")
      .max(18, "CNPJ incorreto."),
    contatos_resp_data_nascimento: Yup.string()
      .min(10, "Data incorreta")
      .max(10, "Data incorreta"),
    contatos_resp_email: Yup.string().email("E-mail incorreto."),
  });

  const defaultValues: any = useMemo(
    () => ({
      nome: "Teste",
      dados_pessoais_rg: "",
      dados_pessoais_cpf: "",
      dados_pessoais_data_nascimento: "",
      dados_pessoais_num_certidao: "",
      dados_pessoais_folha_certidao: "",
      dados_pessoais_livro_certidao: "",
      contatos_pai_nome: "",
      contatos_pai_rg: "",
      contatos_pai_cpf: "",
      contatos_pai_cnpj: "",
      contatos_pai_data_nascimento: "",
      contatos_pai_email: "",
      contatos_mae_nome: "",
      contatos_mae_rg: "",
      contatos_mae_cpf: "",
      contatos_mae_cnpj: "",
      contatos_mae_data_nascimento: "",
      contatos_mae_email: "",
      contatos_resp_nome: "",
      contatos_resp_rg: "",
      contatos_resp_cpf: "",
      contatos_resp_cnpj: "",
      contatos_resp_data_nascimento: "",
      contatos_resp_email: "",
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
        console.log(errors);
      } catch (error) {
        console.log(error);
      }
    },
    [defaultValues, errors]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <div>
          <MuiTextInputForm
            register={register}
            name="nome"
            label="Nome"
            width="100%"
            isRequired
            onBlur={onSubmit}
            control={control}
            errors={errors}
          />
          <MuiTextInputForm
            name="dados_pessoais_rg"
            register={register}
            label="RG"
            onBlur={onSubmit}
            control={control}
            errors={errors}
          />
          <MuiTextInputFormMasked
            register={register}
            mask="999.999.999-99"
            name="dados_pessoais_cpf"
            label="CPF"
            onBlurProp={onSubmit}
            control={control}
            errors={errors}
          />
          <MuiTextInputFormMasked
            mask="99/99/9999"
            name="dados_pessoais_data_nascimento"
            label="Nascimento"
            onBlurProp={onSubmit}
            control={control}
            errors={errors}
            register={register}
          />
          <MuiTextInputForm
            register={register}
            name="dados_pessoais_num_certidao"
            label="N° Certidão de Nascimento"
            onBlur={onSubmit}
            control={control}
            errors={errors}
            width="100%"
          />
          <MuiTextInputForm
            name="dados_pessoais_folha_certidao"
            label="Folha Certidão Nascimento"
            onBlur={onSubmit}
            control={control}
            errors={errors}
            register={register}
          />
          <MuiTextInputForm
            name="dados_pessoais_livro_certidao"
            label="Livro Certidão Nascimento"
            onBlur={onSubmit}
            control={control}
            errors={errors}
            register={register}
          />
        </div>
        <div>
          <AccordionTextInput>
            <>
              <MuiTextInputForm
                name="contatos_pai_nome"
                label="Filiação (Pai)"
                onBlur={onSubmit}
                control={control}
                errors={errors}
                register={register}
                width="100%"
              />
            </>
            <>
              <MuiTextInputForm
                name="contatos_pai_rg"
                label="RG (Pai)"
                onBlur={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputFormMasked
                mask="999.999.999-99"
                name="contatos_pai_cpf"
                label="CPF (Pai)"
                onBlurProp={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputFormMasked
                mask="99.999.999/9999-99"
                name="contatos_pai_cnpj"
                label="CNPJ (Pai)"
                onBlurProp={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputFormMasked
                mask="99/99/9999"
                name="contatos_pai_data_nascimento"
                label="Nascimento (Pai)"
                onBlurProp={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputForm
                name="contatos_pai_email"
                label="E-mail (Pai)"
                onBlur={onSubmit}
                control={control}
                errors={errors}
                register={register}
                type={"email"}
                width="100%"
              />
            </>
          </AccordionTextInput>
          <AccordionTextInput>
            <>
              <MuiTextInputForm
                name="contatos_mae_nome"
                label="Filiação (Mãe)"
                onBlur={onSubmit}
                control={control}
                errors={errors}
                register={register}
                width="100%"
              />
            </>
            <>
              <MuiTextInputForm
                name="contatos_mae_rg"
                label="RG (Mãe)"
                onBlur={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />

              <MuiTextInputFormMasked
                mask="999.999.999-99"
                name="contatos_mae_cpf"
                label="CPF (Mãe)"
                onBlurProp={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputFormMasked
                mask="99.999.999/9999-99"
                name="contatos_mae_cnpj"
                label="CNPJ (Mãe)"
                onBlurProp={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputFormMasked
                mask="99/99/9999"
                name="contatos_mae_data_nascimento"
                label="Nascimento (Mãe)"
                onBlurProp={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputForm
                name="contatos_mae_email"
                label="E-mail (Mãe)"
                onBlur={onSubmit}
                control={control}
                errors={errors}
                register={register}
                type={"email"}
                width="100%"
              />
            </>
          </AccordionTextInput>
          <AccordionTextInput>
            <>
              <MuiTextInputForm
                name="contatos_resp_nome"
                label="Filiação (Responsável)"
                onBlur={onSubmit}
                control={control}
                errors={errors}
                register={register}
                width="100%"
              />
            </>
            <>
              <MuiTextInputForm
                name="contatos_resp_rg"
                label="RG (Responsável)"
                onBlur={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />

              <MuiTextInputFormMasked
                mask="999.999.999-99"
                name="contatos_resp_cpf"
                label="CPF (Responsável)"
                onBlurProp={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputFormMasked
                mask="99.999.999/9999-99"
                name="contatos_resp_cnpj"
                label="CNPJ (Responsável)"
                onBlurProp={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputFormMasked
                mask="99/99/9999"
                name="contatos_resp_data_nascimento"
                label="Nascimento (Responsável)"
                onBlurProp={onSubmit}
                control={control}
                errors={errors}
                register={register}
              />
              <MuiTextInputForm
                name="contatos_resp_email"
                label="E-mail (Responsável)"
                onBlur={onSubmit}
                control={control}
                errors={errors}
                register={register}
                type={"email"}
                width="100%"
              />
            </>
          </AccordionTextInput>
        </div>
      </Grid>
    </form>
  );
};

export default DadosPessoais;
