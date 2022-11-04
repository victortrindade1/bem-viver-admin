import React, { useMemo, useCallback, useEffect } from "react";
import { FormContainer } from "react-hook-form-mui";

import AccordionTextInput from "components/AccordionTextInput";
import TextInputForm from "components/TextInputForm";

import { Grid } from "./styles";

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

  const handleSubmit = useCallback(
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
        handleSubmit(event);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [handleSubmit]);

  return (
    <>
      <FormContainer
        defaultValues={defaultValues}
        onSuccess={(event) => handleSubmit(event)}
      >
        <Grid>
          <div>
            <TextInputForm
              name="nome"
              label="Nome"
              isFullWidth
              isRequired
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="dados_pessoais_rg"
              label="RG"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="dados_pessoais_cpf"
              label="CPF"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="dados_pessoais_data_nascimento"
              label="Nascimento"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="dados_pessoais_num_certidao"
              label="N° Certidão de Nascimento"
              onHandleSubmit={handleSubmit}
              isFullWidth
            />
            <TextInputForm
              name="dados_pessoais_folha_certidao"
              label="Folha Certidão Nascimento"
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name="dados_pessoais_livro_certidao"
              label="Livro Certidão Nascimento"
              onHandleSubmit={handleSubmit}
            />
          </div>
          <div>
            <AccordionTextInput>
              <>
                <TextInputForm
                  name="contatos_pai_nome"
                  label="Filiação (Pai)"
                  onHandleSubmit={handleSubmit}
                  isFullWidth
                />
              </>
              <>
                <TextInputForm
                  name="contatos_pai_rg"
                  label="RG (Pai)"
                  onHandleSubmit={handleSubmit}
                />

                <TextInputForm
                  name="contatos_pai_cpf"
                  label="CPF (Pai)"
                  onHandleSubmit={handleSubmit}
                />
                <TextInputForm
                  name="contatos_pai_cnpj"
                  label="CNPJ (Pai)"
                  onHandleSubmit={handleSubmit}
                />
                <TextInputForm
                  name="contatos_pai_data_nascimento"
                  label="Nascimento (Pai)"
                  onHandleSubmit={handleSubmit}
                />
                <TextInputForm
                  name="contatos_pai_email"
                  label="E-mail (Pai)"
                  onHandleSubmit={handleSubmit}
                  type={"email"}
                />
              </>
            </AccordionTextInput>
            <AccordionTextInput>
              <>
                <TextInputForm
                  name="contatos_mae_nome"
                  label="Filiação (Mãe)"
                  onHandleSubmit={handleSubmit}
                  isFullWidth
                />
              </>
              <>
                <TextInputForm
                  name="contatos_mae_rg"
                  label="RG (Mãe)"
                  onHandleSubmit={handleSubmit}
                />

                <TextInputForm
                  name="contatos_mae_cpf"
                  label="CPF (Mãe)"
                  onHandleSubmit={handleSubmit}
                />
                <TextInputForm
                  name="contatos_mae_cnpj"
                  label="CNPJ (Mãe)"
                  onHandleSubmit={handleSubmit}
                />
                <TextInputForm
                  name="contatos_mae_data_nascimento"
                  label="Nascimento (Mãe)"
                  onHandleSubmit={handleSubmit}
                />
                <TextInputForm
                  name="contatos_mae_email"
                  label="E-mail (Mãe)"
                  onHandleSubmit={handleSubmit}
                  type={"email"}
                />
              </>
            </AccordionTextInput>
          </div>
        </Grid>
      </FormContainer>
    </>
  );
};

export default DadosPessoais;
