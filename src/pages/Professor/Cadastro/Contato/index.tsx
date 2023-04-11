import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectProfessor, updateProfessor } from "store/slices/professor";

import TextForm from "components/TextForm";

import { Container } from "./styles";

const Contato: React.FC = () => {
  const dispatch = useAppDispatch();
  const professorState = useAppSelector(selectProfessor);
  const professor = professorState.professorDados;

  const validationSchema = Yup.object().shape({
    professor_celular: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    professor_telefone: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    professor_email: Yup.string().email(),
  });

  const defaultValues: any = useMemo(
    () => ({
      professor_celular: professor?.professor_celular || "",
      professor_telefone: professor?.professor_telefone || "",
      professor_email: professor?.professor_email || "",
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

      await dispatch(updateProfessor(dataSubmit));
    },
    [dispatch, defaultValues, professor]
  );

  return (
    <Container>
      <TextForm
        register={register}
        name="professor_celular"
        label="Celular"
        maskType="tel"
        onEnter={() => {
          setFocus("professor_telefone");
        }}
        onBlur={!errors["professor_celular"] ? onSubmit : null}
        control={control}
        errors={errors}
      />
      <TextForm
        register={register}
        name="professor_telefone"
        maskType="tel"
        label="Telefone"
        onEnter={() => {
          setFocus("professor_email");
        }}
        onBlur={!errors["professor_telefone"] ? onSubmit : null}
        control={control}
        errors={errors}
      />
      <TextForm
        register={register}
        name="professor_email"
        label="E-mail"
        width="100%"
        onEnter={() => {
          setFocus("professor_celular");
        }}
        onBlur={!errors["professor_email"] ? onSubmit : null}
        control={control}
        errors={errors}
      />
    </Container>
  );
};

export default Contato;
