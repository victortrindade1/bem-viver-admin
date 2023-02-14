import React, { useMemo, useEffect, useCallback, useState } from "react";
import { differenceInYears, parse, format } from "date-fns";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch } from "hooks";
import { storeAluno } from "store/slices/aluno";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import TextForm from "components/TextForm";
import Button from "components/Button";

import api from "services/api";
import { dateFormat } from "utils/yup";

import {
  Container,
  IdadeContainer,
  ButtonContainer,
  PreMatriculaContainer,
  PreLinkButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

const AlunoNew: React.FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [preIsVisible, setPreIsVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    dados_pessoais_data_nascimento: Yup.string().matches(
      dateFormat,
      "Data incorreta"
    ),
    matricula: Yup.string().required("Campo obrigatório"),
    dados_escolares_data_matricula: Yup.string()
      .when("dados_escolares_data_pre_matricula", (otherField, field) =>
        otherField
          ? field // Aceita string vazia ou date
              .nullable()
              .transform((curr: any, orig: any) => (orig === "" ? null : curr))
          : field.required("Campo obrigatório")
      )
      .matches(dateFormat, "Data incorreta"),
    dados_escolares_data_pre_matricula: Yup.string()
      // Aceita string vazia ou date
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(dateFormat, "Data incorreta"),
  });

  const defaultValues: any = useMemo(
    () => ({
      nome: "",
      dados_pessoais_data_nascimento: "",
      matricula: "",
      dados_escolares_data_matricula: format(new Date(), "dd/MM/yyyy"),
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
    setValue,
    setError,
    // reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleIdade = (e: any) => {
    const date = parse(e.target.value, "dd/MM/yyyy", new Date());
    let age = differenceInYears(new Date(), date);
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
  };

  const onSubmit = async (alunoDados: AlunoDados, e: any) => {
    const response: any = await dispatch(storeAluno(alunoDados));

    navigate(`/aluno/${response.payload.data.id}/cadastro`);
  };

  const onError = (errors: any, e: any) => console.log(errors, e);

  const newMatricula = useCallback(async () => {
    const newMatricula = await api.post("/alunos/novo/matricula");

    setValue("matricula", newMatricula.data);
  }, [setValue]);

  useEffect(() => {
    newMatricula();
  }, [newMatricula]);

  const handleOnClickPreMatricula = () => {
    if (!preIsVisible) {
      setValue(
        "dados_escolares_data_pre_matricula",
        format(new Date(), "dd/MM/yyyy")
      );
      setValue("dados_escolares_data_matricula", "");
    } else {
      setValue("dados_escolares_data_pre_matricula", "");
      setValue(
        "dados_escolares_data_matricula",
        format(new Date(), "dd/MM/yyyy")
      );
    }
    setPreIsVisible(!preIsVisible);
  };

  return (
    <>
      <DarkSideLayout />
      <LightSideLayout titleLabel="Novo Aluno">
        <Container>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
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
            <IdadeContainer>
              <TextForm
                register={register}
                maskType="date"
                placeholder={"dd/mm/aaaa"}
                name={"dados_pessoais_data_nascimento"}
                label={"Data de Nascimento"}
                onEnter={() => setFocus("matricula")}
                control={control}
                errors={errors}
                onBlur={(e: any) => handleIdade(e)}
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
              name={"matricula"}
              label={"Matrícula"}
              control={control}
              errors={errors}
              onEnter={() => setFocus("dados_escolares_data_matricula")}
            />
            <TextForm
              register={register}
              maskType="date"
              placeholder={"dd/mm/aaaa"}
              name={"dados_escolares_data_matricula"}
              label={"Data da Matrícula"}
              control={control}
              errors={errors}
              // onEnter={() => {}}
            />
            <PreLinkButton onClick={handleOnClickPreMatricula}>
              Pré-Matrícula
            </PreLinkButton>
            {preIsVisible && (
              <PreMatriculaContainer>
                <TextForm
                  register={register}
                  maskType="date"
                  placeholder={"dd/mm/aaaa"}
                  name={"dados_escolares_data_pre_matricula"}
                  label={"Data da Pré-Matrícula"}
                  control={control}
                  errors={errors}
                  // onEnter={() => {}}
                />
              </PreMatriculaContainer>
            )}
            <ButtonContainer>
              <Button label="Prosseguir" type="submit" />
            </ButtonContainer>
          </form>
        </Container>
      </LightSideLayout>
    </>
  );
};

export default AlunoNew;
