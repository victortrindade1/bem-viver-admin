import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import AccordionTextInput from "components/AccordionTextInput";
import MuiTextInputForm from "components/MuiTextInputForm";
import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";

import { Grid } from "./styles";
import { useAppDispatch, useAppSelector } from "hooks";
import { selectAluno, updateAluno } from "store/slices/aluno";

const DadosPessoais: React.FC = () => {
  const dispatch = useAppDispatch();
  const aluno = useAppSelector(selectAluno);

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
      nome: aluno?.nome,
      dados_pessoais_rg: aluno?.dados_pessoais_rg,
      dados_pessoais_cpf: aluno?.dados_pessoais_cpf,
      dados_pessoais_data_nascimento: aluno?.dados_pessoais_data_nascimento,
      dados_pessoais_num_certidao: aluno?.dados_pessoais_num_certidao,
      dados_pessoais_folha_certidao: aluno?.dados_pessoais_folha_certidao,
      dados_pessoais_livro_certidao: aluno?.dados_pessoais_livro_certidao,
      contatos_pai_nome: aluno?.contatos_pai_nome,
      contatos_pai_rg: aluno?.contatos_pai_rg,
      contatos_pai_cpf: aluno?.contatos_pai_cpf,
      contatos_pai_cnpj: aluno?.contatos_pai_cnpj,
      contatos_pai_data_nascimento: aluno?.contatos_pai_data_nascimento,
      contatos_pai_email: aluno?.contatos_pai_email,
      contatos_mae_nome: aluno?.contatos_mae_nome,
      contatos_mae_rg: aluno?.contatos_mae_rg,
      contatos_mae_cpf: aluno?.contatos_mae_cpf,
      contatos_mae_cnpj: aluno?.contatos_mae_cnpj,
      contatos_mae_data_nascimento: aluno?.contatos_mae_data_nascimento,
      contatos_mae_email: aluno?.contatos_mae_email,
      contatos_resp_nome: aluno?.contatos_resp_nome,
      contatos_resp_rg: aluno?.contatos_resp_rg,
      contatos_resp_cpf: aluno?.contatos_resp_cpf,
      contatos_resp_cnpj: aluno?.contatos_resp_cnpj,
      contatos_resp_data_nascimento: aluno?.contatos_resp_data_nascimento,
      contatos_resp_email: aluno?.contatos_resp_email,
    }),
    [aluno]
  );

  const {
    control,
    // handleSubmit,
    formState: { errors },
    register,
    setFocus,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = useCallback(
    // props pode ser um event do submit do input ou um obj do submit do button
    (props: any) => {
      props.target && props.preventDefault();

      // Não atualiza se não mudar valor
      if (props.target) {
        if (defaultValues[props.target.name] === props.target.value) {
          return;
        }
      } else {
        if (defaultValues === props) {
          return;
        }
      }

      let dataSubmit: any = {};

      if (props.target) {
        // Só atualiza um input pelo target
        dataSubmit = {
          ...aluno,
          [props.target.name]: props.target.value,
          // Tira o foco se não tiver sido redirecionado para outro input
        };
        props.target.blur();
      } else {
        // Atualiza todos inputs pelo submit do button
        dataSubmit = {
          ...aluno,
          ...props,
        };
      }

      dispatch(updateAluno(dataSubmit));
    },
    [dispatch, aluno, defaultValues]
  );

  return (
    // Ainda não sei se é ou não necessário a tag <form>
    // Será se for preciso usar um reset geral, mas talvez não precise se a cada
    // vez essa tela for alimentada pelo state. Qnd precisar, eu vejo.
    // <form onSubmit={handleSubmit(onSubmit)}>
    <Grid>
      <div>
        <MuiTextInputForm
          isRequired
          register={register}
          name="nome"
          label="Nome"
          onEnter={(e: any) => {
            setFocus("dados_pessoais_rg");
            onSubmit(e);
          }}
          width="100%"
          control={control}
          errors={errors}
        />
        <MuiTextInputForm
          register={register}
          name="dados_pessoais_rg"
          label="RG"
          onEnter={(e: any) => {
            setFocus("dados_pessoais_cpf");
            onSubmit(e);
          }}
          control={control}
          errors={errors}
        />
        <MuiTextInputFormMasked
          register={register}
          mask="999.999.999-99"
          name="dados_pessoais_cpf"
          label="CPF"
          control={control}
          errors={errors}
        />
        <MuiTextInputFormMasked
          mask="99/99/9999"
          name="dados_pessoais_data_nascimento"
          label="Nascimento"
          control={control}
          errors={errors}
          register={register}
        />
        <MuiTextInputForm
          register={register}
          name="dados_pessoais_num_certidao"
          label="N° Certidão de Nascimento"
          control={control}
          errors={errors}
          width="100%"
        />
        <MuiTextInputForm
          name="dados_pessoais_folha_certidao"
          label="Folha Certidão Nascimento"
          control={control}
          errors={errors}
          register={register}
        />
        <MuiTextInputForm
          name="dados_pessoais_livro_certidao"
          label="Livro Certidão Nascimento"
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
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputFormMasked
              mask="999.999.999-99"
              name="contatos_pai_cpf"
              label="CPF (Pai)"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputFormMasked
              mask="99.999.999/9999-99"
              name="contatos_pai_cnpj"
              label="CNPJ (Pai)"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputFormMasked
              mask="99/99/9999"
              name="contatos_pai_data_nascimento"
              label="Nascimento (Pai)"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputForm
              name="contatos_pai_email"
              label="E-mail (Pai)"
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
              control={control}
              errors={errors}
              register={register}
            />

            <MuiTextInputFormMasked
              mask="999.999.999-99"
              name="contatos_mae_cpf"
              label="CPF (Mãe)"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputFormMasked
              mask="99.999.999/9999-99"
              name="contatos_mae_cnpj"
              label="CNPJ (Mãe)"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputFormMasked
              mask="99/99/9999"
              name="contatos_mae_data_nascimento"
              label="Nascimento (Mãe)"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputForm
              name="contatos_mae_email"
              label="E-mail (Mãe)"
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
              control={control}
              errors={errors}
              register={register}
            />

            <MuiTextInputFormMasked
              mask="999.999.999-99"
              name="contatos_resp_cpf"
              label="CPF (Responsável)"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputFormMasked
              mask="99.999.999/9999-99"
              name="contatos_resp_cnpj"
              label="CNPJ (Responsável)"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputFormMasked
              mask="99/99/9999"
              name="contatos_resp_data_nascimento"
              label="Nascimento (Responsável)"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputForm
              name="contatos_resp_email"
              label="E-mail (Responsável)"
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
    // </form>
  );
};

export default DadosPessoais;
