import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import TextForm from "components/TextForm";

import { Container } from "./styles";

const AlunoNew: React.FC = () => {
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    dados_pessoais_data_nascimento: Yup.string()
      .min(10, "Data incorreta")
      .max(10, "Data incorreta"),
    matricula: Yup.string().required("Campo obrigatório"),
    dados_escolares_data_matricula: Yup.string()
      .min(10, "Data incorreta")
      .max(10, "Data incorreta")
      .when("dados_escolares_data_pre_matricula", (otherField, field) =>
        otherField ? field : field.required("Campo obrigatório")
      ),
    dados_escolares_data_pre_matricula: Yup.string()
      .min(10, "Data incorreta")
      .max(10, "Data incorreta"),
  });

  const defaultValues: any = useMemo(
    () => ({
      nome: "",
      dados_pessoais_data_nascimento: "",
      matricula: "",
      dados_escolares_data_matricula: "",
      dados_escolares_data_pre_matricula: "",
    }),
    []
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    setFocus,
    // reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = () => {};

  return (
    <>
      <DarkSideLayout />
      <LightSideLayout titleLabel="Novo Aluno">
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextForm
              register={register}
              name={"nome"}
              label={"Nome Completo"}
              onEnter={() => {
                setFocus("dados_pessoais_data_nascimento");
              }}
              width="100%"
              control={control}
              errors={errors}
            />
            <TextForm
              maskType="date"
              placeholder={"dd/mm/aaaa"}
              register={register}
              name={"dados_pessoais_data_nascimento"}
              label={"Data de Nascimento"}
              onEnter={() => setFocus("")}
              control={control}
              errors={errors}
            />
          </form>
        </Container>
      </LightSideLayout>
    </>
  );
};

export default AlunoNew;
