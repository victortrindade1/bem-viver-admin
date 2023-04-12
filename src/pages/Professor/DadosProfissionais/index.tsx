import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { FaPlus } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectProfessor, updateProfessor } from "store/slices/professor";

import Breadcrumb from "components/Breadcrumb";
import TextForm from "components/TextForm";
import TitleBody from "components/TitleBody";

import { Grid, SecondAcademicContainer } from "./styles";
import Button from "components/Button";

const DadosProfissionais: React.FC = () => {
  const [hasMoreAcademic, setHasMoreAcademic] = useState(false);

  const dispatch = useAppDispatch();
  const professorState = useAppSelector(selectProfessor);
  const professor: any = professorState.professorDados;

  const validationSchema = Yup.object().shape({
    profissional_registro_cfep: Yup.string(),
    profissional_formacao_acad_1: Yup.string(),
    profissional_instituicao_1: Yup.string(),
    profissional_grau_formacao_1: Yup.string(),
    profissional_formacao_acad_2: Yup.string(),
    profissional_instituicao_2: Yup.string(),
    profissional_grau_formacao_2: Yup.string(),
    profissional_num_carteira_trabalho: Yup.string(),
    profissional_serie_carteira_trabalho: Yup.string(),
    profissional_nis_pis: Yup.string(),
  });

  const defaultValues: any = useMemo(
    () => ({
      profissional_registro_cfep: professor?.profissional_registro_cfep || "",
      profissional_formacao_acad_1:
        professor?.profissional_formacao_acad_1 || "",
      profissional_instituicao_1: professor?.profissional_instituicao_1 || "",
      profissional_grau_formacao_1:
        professor?.profissional_grau_formacao_1 || "",
      profissional_formacao_acad_2:
        professor?.profissional_formacao_acad_2 || "",
      profissional_instituicao_2: professor?.profissional_instituicao_2 || "",
      profissional_grau_formacao_2:
        professor?.profissional_grau_formacao_2 || "",
      profissional_num_carteira_trabalho:
        professor?.profissional_num_carteira_trabalho || "",
      profissional_serie_carteira_trabalho:
        professor?.profissional_serie_carteira_trabalho || "",
      profissional_nis_pis: professor?.profissional_nis_pis || "",
    }),
    [professor]
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
      try {
        e.preventDefault();

        if (defaultValues[e.target.name] === e.target.value) {
          return;
        }

        const dataSubmit: any = {
          id: professor.id,
          [e.target.name]: e.target.value,
        };

        await dispatch(updateProfessor(dataSubmit));
      } catch (error) {
        // Esse try catch interage com o usuário. Não tire!
        console.log({ error });
        toast.error("Não foi possível alterar os dados");
      }
    },
    [dispatch, professor, defaultValues]
  );

  const linksBreadcrumb = [
    {
      url: "/professores",
      label: "Professores",
    },
    {
      url: "",
      label: "Dados Profissionais",
    },
  ];

  useEffect(() => {
    professor?.profissional_formacao_acad_2 && setHasMoreAcademic(true);
  }, [professor]);

  return (
    <div>
      <Breadcrumb links={linksBreadcrumb} />
      <TitleBody titleLabel="Dados Profissionais" />
      <Grid>
        <div>
          <TextForm
            register={register}
            name="profissional_registro_cfep"
            label="Registro CFEP"
            onEnter={() => {
              setFocus("profissional_num_carteira_trabalho");
            }}
            onBlur={onSubmit}
            control={control}
            errors={errors}
            width={"200px"}
          />
          <TextForm
            register={register}
            name="profissional_num_carteira_trabalho"
            label="Nº Carteira de Trabalho"
            onEnter={() => {
              setFocus("profissional_serie_carteira_trabalho");
            }}
            onBlur={onSubmit}
            control={control}
            errors={errors}
            width={"200px"}
          />
          <TextForm
            register={register}
            name="profissional_serie_carteira_trabalho"
            label="Série Carteira de Trabalho"
            onEnter={() => {
              setFocus("profissional_nis_pis");
            }}
            onBlur={onSubmit}
            control={control}
            errors={errors}
            width={"200px"}
          />
          <TextForm
            register={register}
            name="profissional_nis_pis"
            label="NIS / PIS"
            onEnter={() => {
              setFocus("profissional_formacao_acad_1");
            }}
            onBlur={onSubmit}
            control={control}
            errors={errors}
            width={"200px"}
          />
        </div>
        <div>
          <TextForm
            register={register}
            name="profissional_formacao_acad_1"
            label="Formação Acadêmica"
            onEnter={() => {
              setFocus("profissional_instituicao_1");
            }}
            onBlur={onSubmit}
            control={control}
            errors={errors}
            width={"100%"}
          />
          <TextForm
            register={register}
            name="profissional_instituicao_1"
            label="Instituição"
            onEnter={() => {
              setFocus("profissional_grau_formacao_1");
            }}
            onBlur={onSubmit}
            control={control}
            errors={errors}
            width={"100%"}
          />
          <TextForm
            register={register}
            name="profissional_grau_formacao_1"
            label="Grau de Formação"
            onEnter={() => {
              setFocus("profissional_formacao_acad_2");
            }}
            onBlur={onSubmit}
            control={control}
            errors={errors}
          />
          {!hasMoreAcademic ? (
            <Button
              label={<FaPlus />}
              onClick={setHasMoreAcademic}
              sx={{
                height: "30px",
                width: "30px !important",
                padding: "0px",
                minWidth: "0px",
              }}
            />
          ) : (
            <SecondAcademicContainer>
              <TextForm
                register={register}
                name="profissional_formacao_acad_2"
                label="Formação Acadêmica 2"
                onEnter={() => {
                  setFocus("profissional_instituicao_2");
                }}
                onBlur={onSubmit}
                control={control}
                errors={errors}
                width={"100%"}
              />
              <TextForm
                register={register}
                name="profissional_instituicao_2"
                label="Instituição 2"
                onEnter={() => {
                  setFocus("profissional_grau_formacao_2");
                }}
                onBlur={onSubmit}
                control={control}
                errors={errors}
                width={"100%"}
              />
              <TextForm
                register={register}
                name="profissional_grau_formacao_2"
                label="Grau de Formação 2"
                onEnter={() => {
                  setFocus("profissional_registro_cfep");
                }}
                onBlur={onSubmit}
                control={control}
                errors={errors}
              />
            </SecondAcademicContainer>
          )}
        </div>
      </Grid>
    </div>
  );
};

export default DadosProfissionais;
