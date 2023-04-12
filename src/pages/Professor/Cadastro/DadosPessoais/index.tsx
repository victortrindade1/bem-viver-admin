import React, { useMemo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks";
import {
  selectProfessor,
  updateProfessor,
  storeProfessor,
} from "store/slices/professor";

import TextForm from "components/TextForm";

import { Container } from "./styles";

const DadosPessoais: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const professorState = useAppSelector(selectProfessor);
  const professor = professorState.professorDados;

  const validationSchema = Yup.object().shape({
    professor_nome: Yup.string().required("Campo obrigatório"),
    professor_rg: Yup.string(),
    professor_cpf: Yup.string()
      .min(14, "CPF incorreto.")
      .max(14, "CPF incorreto."),
    professor_data_nascimento: Yup.string()
      .min(10, "Data incorreta")
      .max(10, "Data incorreta"),
  });

  const defaultValues: any = useMemo(
    () => ({
      professor_nome: professor?.professor_nome || "",
      professor_rg: professor?.professor_rg || "",
      professor_cpf: professor?.professor_cpf || "",
      professor_data_nascimento: professor?.professor_data_nascimento || "",
    }),
    [professor]
  );

  const {
    control,
    formState: { errors },
    register,
    setFocus,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();

      // Não atualiza se não mudar valor
      if (defaultValues[e.target.name] === e.target.value) {
        return;
      }

      const dataSubmit: any = {
        id: professor?.id,
        [e.target.name]: e.target.value,
      };

      if (professor?.id) {
        await dispatch(updateProfessor(dataSubmit));
      } else {
        const response: any = await dispatch(
          storeProfessor({
            professor_nome: e.target.value,
          })
        );

        navigate(`/professor/${response.payload.data.id}/cadastro`);
      }
    },
    [dispatch, defaultValues, professor, navigate]
  );

  // Foco no primeiro input se é novo
  useEffect(() => {
    !professor?.id && setFocus("professor_nome");
  }, [setFocus, professor]);

  return (
    <Container>
      <TextForm
        isRequired
        register={register}
        name="professor_nome"
        label="Nome"
        onEnter={(e: any) => {
          professor?.id ? setFocus("professor_rg") : e.target.blur();
        }}
        onBlur={onSubmit}
        width="100%"
        control={control}
        errors={errors}
      />
      {professor?.id && (
        <>
          <TextForm
            register={register}
            name="professor_rg"
            label="RG"
            onEnter={() => {
              setFocus("professor_cpf");
            }}
            onBlur={onSubmit}
            control={control}
            errors={errors}
          />
          <TextForm
            register={register}
            maskType="cpf"
            name="professor_cpf"
            label="CPF"
            onEnter={() => {
              setFocus("professor_data_nascimento");
            }}
            onBlur={!errors["professor_cpf"] ? onSubmit : null}
            control={control}
            errors={errors}
          />
          <TextForm
            register={register}
            maskType="date"
            placeholder={"dd/mm/aaaa"}
            name="professor_data_nascimento"
            label="Nascimento"
            onBlur={!errors["professor_data_nascimento"] ? onSubmit : null}
            onEnter={() => {
              setFocus("professor_nome");
            }}
            control={control}
            errors={errors}
          />
        </>
      )}
    </Container>
  );
};

export default DadosPessoais;
