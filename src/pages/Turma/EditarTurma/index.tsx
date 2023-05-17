import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectDadosEscolares } from "store/slices/dadosEscolares";
import {
  selectTurma,
  updateTurma,
  // cleanAno,
} from "store/slices/turma";

import TextForm from "components/TextForm";
import Breadcrumb from "components/Breadcrumb";
import TitleBody from "components/TitleBody";

import { Container } from "./styles";

const EditarTurma: React.FC = () => {
  const dispatch = useAppDispatch();

  const turmaState = useAppSelector(selectTurma);
  const turmaRedux = turmaState.turmaDados;

  const dadosEscolaresState = useAppSelector(selectDadosEscolares);
  const dadosEscolares: any = dadosEscolaresState.dados;

  const sistemaOptions = dadosEscolares.sistemas.map(
    (item: any) => item.sistema
  );

  const [anoOptions, setAnoOptions] = useState(
    dadosEscolares.anos
      .filter(
        (item: any) => item.sistema_id === turmaRedux?.dados_ano?.sistema_id
      )
      .map((item: any) => item.ano)
  );

  const turnoOptions = dadosEscolares.turnos.map((item: any) => item.turno);

  const validationSchema = Yup.object().shape({
    turma: Yup.string().required("Campo obrigatório"),
    turno: Yup.string().required("Campo obrigatório"),
    ano: Yup.string().required("Campo obrigatório"),
    sistema: Yup.string().required("Campo obrigatório"),
  });

  const defaultValues: any = useMemo(
    () => ({
      turma: turmaRedux?.turma || "",
      turno: turmaRedux?.dados_turno?.turno || "",
      ano: turmaRedux?.dados_ano?.ano || "",
      sistema: turmaRedux?.dados_ano?.dados_sistema?.sistema || "",
    }),
    [
      turmaRedux?.dados_ano?.ano,
      turmaRedux?.dados_ano?.dados_sistema?.sistema,
      turmaRedux?.dados_turno?.turno,
      turmaRedux?.turma,
    ]
  );

  const {
    control,
    formState: { errors },
    register,
    setFocus,
    setValue,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const linksBreadcrumb = [
    {
      url: "/turmas",
      label: "Turmas",
    },
    {
      url: "",
      label: "Editar Turma",
    },
  ];

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();

      // Não atualiza se não mudar valor
      if (defaultValues[e.target.name] === e.target.value) {
        return;
      }

      const ano =
        e.target.name === "ano"
          ? dadosEscolares.anos.find((item: any) => item.ano === e.target.value)
          : turmaRedux?.dados_ano;

      const turno =
        e.target.name === "turno"
          ? dadosEscolares.turnos.find(
              (item: any) => item.turno === e.target.value
            )
          : turmaRedux?.dados_turno;

      const turma =
        e.target.name === "turma" ? e.target.value : turmaRedux?.turma;

      const dataSubmit = {
        id: turmaRedux?.id,
        turma: turma,
        turno_id: turno?.id,
        ano_id: ano?.id,
      };

      await dispatch(updateTurma(dataSubmit));
    },
    [
      dadosEscolares.anos,
      dadosEscolares.turnos,
      defaultValues,
      dispatch,
      turmaRedux?.dados_ano,
      turmaRedux?.dados_turno,
      turmaRedux?.id,
      turmaRedux?.turma,
    ]
  );

  const updateAnosOptions = useCallback(
    (e: any) => {
      // Atualiza opções de anos disponíveis
      const sistema = dadosEscolares?.sistemas?.find(
        (item: any) => item.sistema === e.target.value
      );

      setValue("ano", "");

      setAnoOptions(
        dadosEscolares.anos
          .filter((item: any) => item.sistema_id === sistema.id)
          .map((item: any) => {
            return item.ano;
          })
      );
    },
    [dadosEscolares.anos, dadosEscolares?.sistemas, setValue]
  );

  // Foco no primeiro input se é novo
  useEffect(() => {
    !turmaRedux?.id && setFocus("turma");
  }, [setFocus, turmaRedux]);

  return (
    <div>
      <Breadcrumb links={linksBreadcrumb} />
      <TitleBody titleLabel="Editar Turma" />

      <Container>
        {turmaRedux?.id && (
          <>
            <TextForm
              isSelect
              register={register}
              name={"sistema"}
              label={"Sistema"}
              control={control}
              errors={errors}
              options={sistemaOptions}
              onChange={(e: any) => {
                updateAnosOptions(e);
              }}
            />
            <TextForm
              isSelect
              register={register}
              name={"ano"}
              label={"Ano"}
              control={control}
              errors={errors}
              options={anoOptions}
              onChange={onSubmit}
            />
            <TextForm
              isSelect
              register={register}
              name={"turno"}
              label={"Turno"}
              control={control}
              errors={errors}
              options={turnoOptions}
              onChange={onSubmit}
            />
          </>
        )}
        <TextForm
          isRequired
          register={register}
          name="turma"
          label="Nome"
          onEnter={(e: any) => {
            turmaRedux?.id ? setFocus("turno") : e.target.blur();
          }}
          onBlur={onSubmit}
          // width="100%"
          control={control}
          errors={errors}
        />
      </Container>
    </div>
  );
};

export default EditarTurma;
