import React, { useMemo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import AccordionTextInput from "components/AccordionTextInput";
import MuiTextInputForm from "components/MuiTextInputForm";

import { Grid } from "./styles";
import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";

const DadosPessoais: React.FC = () => {
  const defaultValues: any = useMemo(
    () => ({
      nome: "teste",
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
              name="nome"
              label="Nome"
              // placeholder="Nome do aluno"
              width="100%"
              isRequired
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name="dados_pessoais_rg"
              label="RG"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputFormMasked
              mask="999.999.999-99"
              name="dados_pessoais_cpf"
              label="CPF"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputFormMasked
              mask="99/99/9999"
              name="dados_pessoais_data_nascimento"
              label="Nascimento"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name="dados_pessoais_num_certidao"
              label="N° Certidão de Nascimento"
              onHandleSubmit={onSubmit}
              control={control}
              width="100%"
            />
            <MuiTextInputForm
              name="dados_pessoais_folha_certidao"
              label="Folha Certidão Nascimento"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name="dados_pessoais_livro_certidao"
              label="Livro Certidão Nascimento"
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
          <div>
            <AccordionTextInput>
              <>
                <MuiTextInputForm
                  name="contatos_pai_nome"
                  label="Filiação (Pai)"
                  onHandleSubmit={onSubmit}
                  control={control}
                  width="100%"
                />
              </>
              <>
                <MuiTextInputForm
                  name="contatos_pai_rg"
                  label="RG (Pai)"
                  onHandleSubmit={onSubmit}
                  control={control}
                />
                <MuiTextInputFormMasked
                  mask="999.999.999-99"
                  name="contatos_pai_cpf"
                  label="CPF (Pai)"
                  onHandleSubmit={onSubmit}
                  control={control}
                />
                <MuiTextInputFormMasked
                  mask="99.999.999/9999-99"
                  name="contatos_pai_cnpj"
                  label="CNPJ (Pai)"
                  onHandleSubmit={onSubmit}
                  control={control}
                />
                <MuiTextInputFormMasked
                  mask="99/99/9999"
                  name="contatos_pai_data_nascimento"
                  label="Nascimento (Pai)"
                  onHandleSubmit={onSubmit}
                  control={control}
                />
                <MuiTextInputForm
                  name="contatos_pai_email"
                  label="E-mail (Pai)"
                  onHandleSubmit={onSubmit}
                  control={control}
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
                  onHandleSubmit={onSubmit}
                  control={control}
                  width="100%"
                />
              </>
              <>
                <MuiTextInputForm
                  name="contatos_mae_rg"
                  label="RG (Mãe)"
                  onHandleSubmit={onSubmit}
                  control={control}
                />

                <MuiTextInputFormMasked
                  mask="999.999.999-99"
                  name="contatos_mae_cpf"
                  label="CPF (Mãe)"
                  onHandleSubmit={onSubmit}
                  control={control}
                />
                <MuiTextInputFormMasked
                  mask="99.999.999/9999-99"
                  name="contatos_mae_cnpj"
                  label="CNPJ (Mãe)"
                  onHandleSubmit={onSubmit}
                  control={control}
                />
                <MuiTextInputFormMasked
                  mask="99/99/9999"
                  name="contatos_mae_data_nascimento"
                  label="Nascimento (Mãe)"
                  onHandleSubmit={onSubmit}
                  control={control}
                />
                <MuiTextInputForm
                  name="contatos_mae_email"
                  label="E-mail (Mãe)"
                  onHandleSubmit={onSubmit}
                  control={control}
                  type={"email"}
                  width="100%"
                />
              </>
            </AccordionTextInput>
          </div>
        </Grid>
        {/* </FormContainer> */}
      </form>
    </>
  );
};

export default DadosPessoais;
