import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { FaPlus } from "react-icons/fa";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "hooks";
import {
  selectProfessor,
  updateProfessor,
  deleteProfessor,
} from "store/slices/professor";

import Breadcrumb from "components/Breadcrumb";
import TextForm from "components/TextForm";
import TitleBody from "components/TitleBody";
import SwitchForm from "components/SwitchForm";
import MuiModal from "components/MuiModal";
import Button from "components/Button";

import {
  Grid,
  SecondAcademicContainer,
  AtivoContainer,
  ExcluirContainer,
} from "./styles";
import theme from "styles/theme";

const DadosProfissionais: React.FC = () => {
  const navigate = useNavigate();

  const [hasMoreAcademic, setHasMoreAcademic] = useState(false);

  // States modal Excluir Professor
  const [openModalExcluir, setOpenModalExcluir] = useState(false);
  const handleOpenModalExcluir = () => {
    setOpenModalExcluir(true);
  };
  const handleCloseModalExcluir = () => setOpenModalExcluir(false);

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
    ativo: Yup.boolean(),
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
      profissional_data_matricula: professor?.profissional_data_matricula || "",
      profissional_data_encerramento:
        professor?.profissional_data_encerramento || "",
      ativo: professor?.ativo || false,
    }),
    [professor]
  );

  const {
    control,
    register,
    setFocus,
    setValue,
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

  // Switch ATIVO/INATIVO
  const onSubmitSwitch = useCallback(
    async (e: any) => {
      e.preventDefault();

      if (defaultValues[e.target.name] === e.target.checked) {
        return;
      }

      const dataSubmit: any = {
        id: professor.id,
        [e.target.name]: e.target.checked,
      };

      if (e.target.checked) {
        dataSubmit.profissional_data_matricula = format(
          new Date(),
          "dd/MM/yyyy"
        );
        setValue(
          "profissional_data_matricula",
          format(new Date(), "dd/MM/yyyy")
        );
      } else {
        dataSubmit.profissional_data_encerramento = format(
          new Date(),
          "dd/MM/yyyy"
        );
        setValue(
          "profissional_data_encerramento",
          format(new Date(), "dd/MM/yyyy")
        );
      }

      await dispatch(updateProfessor(dataSubmit));
    },
    [dispatch, professor, defaultValues, setValue]
  );

  const handleDeleteProfessor = async () => {
    professor.id && (await dispatch(deleteProfessor(professor.id)));
    navigate("/professores");
  };

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
          <TextForm
            register={register}
            name="profissional_data_matricula"
            label="Data de Matrícula"
            maskType="date"
            disabled
            control={control}
            errors={errors}
          />
          {professor?.profissional_data_encerramento && (
            <TextForm
              register={register}
              name="profissional_data_encerramento"
              label="Data de Encerramento"
              maskType="date"
              disabled
              control={control}
              errors={errors}
            />
          )}
          <AtivoContainer>
            <SwitchForm
              label="Professor Ativo"
              name="ativo"
              control={control}
              onChange={onSubmitSwitch}
            />
            {professor?.ativo === false && (
              <ExcluirContainer onClick={handleOpenModalExcluir}>
                Excluir Permanentemente
              </ExcluirContainer>
            )}
          </AtivoContainer>
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
      <MuiModal
        open={openModalExcluir}
        handleClose={handleCloseModalExcluir}
        title="Excluir Permanentemente"
        onSubmit={handleDeleteProfessor}
        icon={<FaExclamationTriangle color={theme.palette.primary.main} />}
        labelButton="EXCLUIR"
      >
        Este professor terá seus dados excluídos permanentemente. Deseja
        continuar?
      </MuiModal>
    </div>
  );
};

export default DadosProfissionais;
