import React, { useMemo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { differenceInYears, parse } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectAluno, updateAluno } from "store/slices/aluno";

import AccordionTextInput from "components/AccordionTextInput";
import TextForm from "components/TextForm";

import { Grid, IdadeContainer } from "./styles";

const DadosPessoais: React.FC = () => {
  const dispatch = useAppDispatch();
  const alunoState = useAppSelector(selectAluno);
  const aluno = alunoState.alunoDados;

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    dados_pessoais_rg: Yup.string(),
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
      nome: aluno.nome || "",
      dados_pessoais_rg: aluno.dados_pessoais_rg || "",
      dados_pessoais_cpf: aluno.dados_pessoais_cpf || "",
      dados_pessoais_data_nascimento:
        aluno.dados_pessoais_data_nascimento || "",
      dados_pessoais_num_certidao: aluno.dados_pessoais_num_certidao || "",
      dados_pessoais_folha_certidao: aluno.dados_pessoais_folha_certidao || "",
      dados_pessoais_livro_certidao: aluno.dados_pessoais_livro_certidao || "",
      contatos_pai_nome: aluno.contatos_pai_nome || "",
      contatos_pai_rg: aluno.contatos_pai_rg || "",
      contatos_pai_cpf: aluno.contatos_pai_cpf || "",
      contatos_pai_cnpj: aluno.contatos_pai_cnpj || "",
      contatos_pai_data_nascimento: aluno.contatos_pai_data_nascimento || "",
      contatos_pai_email: aluno.contatos_pai_email || "",
      contatos_mae_nome: aluno.contatos_mae_nome || "",
      contatos_mae_rg: aluno.contatos_mae_rg || "",
      contatos_mae_cpf: aluno.contatos_mae_cpf || "",
      contatos_mae_cnpj: aluno.contatos_mae_cnpj || "",
      contatos_mae_data_nascimento: aluno.contatos_mae_data_nascimento || "",
      contatos_mae_email: aluno.contatos_mae_email || "",
      contatos_resp_nome: aluno.contatos_resp_nome || "",
      contatos_resp_rg: aluno.contatos_resp_rg || "",
      contatos_resp_cpf: aluno.contatos_resp_cpf || "",
      contatos_resp_cnpj: aluno.contatos_resp_cnpj || "",
      contatos_resp_data_nascimento: aluno.contatos_resp_data_nascimento || "",
      contatos_resp_email: aluno.contatos_resp_email || "",
    }),
    [aluno]
  );

  const {
    control,
    formState: { errors },
    register,
    setFocus,
    setValue,
    setError,
    watch,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleIdade = useCallback(() => {
    const bornDate = watch("dados_pessoais_data_nascimento");
    const parsedBornDate = parse(bornDate, "dd/MM/yyyy", new Date());
    let age = differenceInYears(new Date(), parsedBornDate);
    if (isNaN(age)) {
      age = -1;
    }
    setValue("idade", age);
    if (age < 0 || age > 110) {
      // Até 110 anos dá pra estudar!
      setError("dados_pessoais_data_nascimento", {
        message: "Idade incorreta.",
      });
    }
  }, [setError, setValue, watch]);

  useEffect(() => {
    // console.log("aluno:", aluno);
    handleIdade();
  }, [handleIdade]);

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();

      // Não atualiza se não mudar valor
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
    <Grid>
      <div>
        <TextForm
          isRequired
          register={register}
          name="nome"
          label="Nome"
          onEnter={() => {
            setFocus("dados_pessoais_rg");
          }}
          onBlur={onSubmit}
          width="100%"
          control={control}
          errors={errors}
        />
        <TextForm
          register={register}
          name="dados_pessoais_rg"
          label="RG"
          onEnter={() => {
            setFocus("dados_pessoais_cpf");
            // onSubmit(e);
          }}
          onBlur={onSubmit}
          control={control}
          errors={errors}
        />
        <TextForm
          register={register}
          maskType="cpf"
          name="dados_pessoais_cpf"
          label="CPF"
          onEnter={() => {
            setFocus("dados_pessoais_data_nascimento");
          }}
          onBlur={onSubmit}
          control={control}
          errors={errors}
        />
        <IdadeContainer>
          <TextForm
            register={register}
            maskType="date"
            placeholder={"dd/mm/aaaa"}
            name="dados_pessoais_data_nascimento"
            label="Nascimento"
            onEnter={() => {
              setFocus("dados_pessoais_num_certidao");
            }}
            onBlur={(e: any) => {
              handleIdade();
              onSubmit(e);
            }}
            control={control}
            errors={errors}
          />
          <TextForm
            register={register}
            name={"idade"}
            label={"Idade"}
            control={control}
            errors={errors}
            width={"50px"}
            minWidth={"50px"}
            disabled
          />
        </IdadeContainer>

        <TextForm
          register={register}
          name="dados_pessoais_num_certidao"
          label="N° Certidão de Nascimento"
          onEnter={() => {
            setFocus("dados_pessoais_folha_certidao");
          }}
          onBlur={onSubmit}
          width="100%"
          control={control}
          errors={errors}
          type="text"
        />
        <TextForm
          register={register}
          name="dados_pessoais_folha_certidao"
          label="Folha Certidão Nascimento"
          onEnter={() => {
            setFocus("dados_pessoais_livro_certidao");
          }}
          onBlur={onSubmit}
          control={control}
          errors={errors}
        />
        <TextForm
          register={register}
          name="dados_pessoais_livro_certidao"
          label="Livro Certidão Nascimento"
          onEnter={() => {
            setFocus("contatos_pai_nome");
          }}
          onBlur={onSubmit}
          control={control}
          errors={errors}
        />
      </div>
      <div>
        <AccordionTextInput>
          <>
            <TextForm
              register={register}
              name="contatos_pai_nome"
              label="Filiação (Pai)"
              onEnter={() => {
                setFocus("contatos_pai_rg");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              width="100%"
            />
          </>
          <>
            <TextForm
              register={register}
              name="contatos_pai_rg"
              label="RG (Pai)"
              onEnter={() => {
                setFocus("contatos_pai_cpf");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              maskType="cpf"
              name="contatos_pai_cpf"
              label="CPF (Pai)"
              onEnter={() => {
                setFocus("contatos_pai_cnpj");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              maskType="cnpj"
              name="contatos_pai_cnpj"
              label="CNPJ (Pai)"
              onEnter={() => {
                setFocus("contatos_pai_data_nascimento");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              maskType="date"
              placeholder={"dd/mm/aaaa"}
              name="contatos_pai_data_nascimento"
              label="Nascimento (Pai)"
              onEnter={() => {
                setFocus("contatos_pai_email");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              name="contatos_pai_email"
              label="E-mail (Pai)"
              onEnter={() => {
                setFocus("contatos_mae_nome");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              type={"email"}
              width="100%"
            />
          </>
        </AccordionTextInput>
        <AccordionTextInput>
          <>
            <TextForm
              register={register}
              name="contatos_mae_nome"
              label="Filiação (Mãe)"
              onEnter={() => {
                setFocus("contatos_mae_rg");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              width="100%"
            />
          </>
          <>
            <TextForm
              register={register}
              name="contatos_mae_rg"
              label="RG (Mãe)"
              onEnter={() => {
                setFocus("contatos_mae_cpf");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />

            <TextForm
              register={register}
              maskType="cpf"
              name="contatos_mae_cpf"
              label="CPF (Mãe)"
              onEnter={() => {
                setFocus("contatos_mae_cnpj");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              maskType="cnpj"
              name="contatos_mae_cnpj"
              label="CNPJ (Mãe)"
              onEnter={() => {
                setFocus("contatos_mae_data_nascimento");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              maskType="date"
              placeholder={"dd/mm/aaaa"}
              name="contatos_mae_data_nascimento"
              label="Nascimento (Mãe)"
              onEnter={() => {
                setFocus("contatos_mae_email");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              name="contatos_mae_email"
              label="E-mail (Mãe)"
              onEnter={() => {
                setFocus("contatos_resp_nome");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              type={"email"}
              width="100%"
            />
          </>
        </AccordionTextInput>
        <AccordionTextInput>
          <>
            <TextForm
              register={register}
              name="contatos_resp_nome"
              label="Filiação (Responsável)"
              onEnter={() => {
                setFocus("contatos_resp_rg");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              width="100%"
            />
          </>
          <>
            <TextForm
              register={register}
              name="contatos_resp_rg"
              label="RG (Responsável)"
              onEnter={() => {
                setFocus("contatos_resp_cpf");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />

            <TextForm
              register={register}
              maskType="cpf"
              name="contatos_resp_cpf"
              label="CPF (Responsável)"
              onEnter={() => {
                setFocus("contatos_resp_cnpj");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              maskType="cnpj"
              name="contatos_resp_cnpj"
              label="CNPJ (Responsável)"
              onEnter={() => {
                setFocus("contatos_resp_data_nascimento");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              maskType="date"
              placeholder={"dd/mm/aaaa"}
              name="contatos_resp_data_nascimento"
              label="Nascimento (Responsável)"
              onEnter={() => {
                setFocus("contatos_resp_email");
              }}
              onBlur={onSubmit}
              control={control}
              errors={errors}
            />
            <TextForm
              register={register}
              name="contatos_resp_email"
              label="E-mail (Responsável)"
              onBlur={onSubmit}
              control={control}
              errors={errors}
              type={"email"}
              width="100%"
            />
          </>
        </AccordionTextInput>
      </div>
    </Grid>
  );
};

export default DadosPessoais;
