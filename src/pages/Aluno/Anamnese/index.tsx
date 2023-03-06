import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectAluno, updateAluno } from "store/slices/aluno";

import TitleBody from "components/TitleBody";
import TextForm from "components/TextForm";

import { Grid } from "./styles";

const Anamnese: React.FC = () => {
  const dispatch = useAppDispatch();
  const alunoState = useAppSelector(selectAluno);
  const aluno = alunoState.alunoDados;

  const validationSchema = Yup.object().shape({
    anamnese_pediatra: Yup.string(),
    anamnese_contato_pediatra: Yup.string(),
    anamnese_alergias: Yup.string(),
    anamnese_medicacao: Yup.string(),
    anamnese_temperatura_banho: Yup.string(),
    anamnese_observacoes: Yup.string(),
  });

  const defaultValues: any = useMemo(
    () => ({
      anamnese_pediatra: aluno?.anamnese_pediatra || "",
      anamnese_contato_pediatra: aluno?.anamnese_contato_pediatra || "",
      anamnese_alergias: aluno?.anamnese_alergias || "",
      anamnese_medicacao: aluno?.anamnese_medicacao || "",
      anamnese_temperatura_banho: aluno?.anamnese_temperatura_banho || "",
      anamnese_observacoes: aluno?.anamnese_observacoes || "",
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
    <>
      <TitleBody titleLabel="Anamnese" />
      <Grid>
        <div>
          <TextForm
            name={"anamnese_pediatra"}
            label={"Pediatra"}
            width="100%"
            control={control}
            errors={errors}
            register={register}
            onEnter={() => {
              setFocus("anamnese_contato_pediatra");
            }}
            onBlur={onSubmit}
          />
          <TextForm
            maskType="tel"
            name={"anamnese_contato_pediatra"}
            label={"Contato"}
            control={control}
            errors={errors}
            register={register}
            onEnter={() => {
              setFocus("anamnese_alergias");
            }}
            onBlur={onSubmit}
          />
        </div>
        <div>
          <TextForm
            name={"anamnese_alergias"}
            label={"Alergias"}
            control={control}
            errors={errors}
            register={register}
            onEnter={() => {
              setFocus("anamnese_medicacao");
            }}
            onBlur={onSubmit}
            isMultiline={true}
            width="100%"
            minWidth="167px"
          />
          <TextForm
            name={"anamnese_medicacao"}
            label={"Medicação / Horário"}
            control={control}
            errors={errors}
            register={register}
            onEnter={() => {
              setFocus("anamnese_temperatura_banho");
            }}
            onBlur={onSubmit}
            isMultiline={true}
            width="100%"
            minWidth="167px"
          />
        </div>
        <div>
          <TextForm
            name={"anamnese_temperatura_banho"}
            label={"Temperatura Banho"}
            control={control}
            errors={errors}
            register={register}
            onEnter={() => {
              setFocus("anamnese_observacoes");
            }}
            onBlur={onSubmit}
          />
          <TextForm
            name={"anamnese_observacoes"}
            label={"Observações"}
            control={control}
            errors={errors}
            register={register}
            onEnter={() => {
              setFocus("anamnese_pediatra");
            }}
            onBlur={onSubmit}
            isMultiline={true}
            width="100%"
          />
        </div>
      </Grid>
    </>
  );
};

export default Anamnese;
