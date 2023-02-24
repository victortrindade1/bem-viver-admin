import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectAluno, updateAluno } from "store/slices/aluno";
import { selectDadosEscolares } from "store/slices/dadosEscolares";

import TitleBody from "components/TitleBody";
import SelectForm from "components/SelectForm";
import TextForm from "components/TextForm";
import SwitchForm from "components/SwitchForm";

import { Grid } from "./styles";

const DadosEscolares: React.FC = () => {
  const [dados, setDados] = useState({
    sistemas: [],
    anos: [],
    turnos: [],
    turmas: [],
    periodos: [],
    horaentradas: [],
    horasaidas: [],
  });

  const dispatch = useAppDispatch();

  const alunoState = useAppSelector(selectAluno);
  const aluno: any = alunoState.alunoDados;

  const dadosEscolaresState = useAppSelector(selectDadosEscolares);
  const dadosEscolares: any = dadosEscolaresState.dados;

  const validationSchema = Yup.object().shape({
    sistema: Yup.string(),
    ano: Yup.string(),
    turno: Yup.string(),
    turma: Yup.string(),
    periodo: Yup.string(),
    horaentrada: Yup.string(),
    horasaida: Yup.string(),
    matricula: Yup.string(),
    dados_escolares_observacoes: Yup.string(),
    ativo: Yup.boolean(),
  });

  const defaultValues: any = useMemo(
    () => ({
      turma: aluno?.dados_turma?.turma || "",
      periodo: aluno?.dados_periodo?.periodo || "",
      horaentrada: aluno?.dados_horaentrada?.horaentrada || "",
      horasaida: aluno?.dados_horasaida?.horasaida || "",
      matricula: aluno?.matricula || "",
      dados_escolares_observacoes: aluno?.dados_escolares_observacoes || "",
      dataMatricula: aluno?.dados_escolares_data_matricula || "",
      ativo: aluno?.ativo || false,
    }),
    [aluno]
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
          id: aluno.id,
          [e.target.name]: e.target.value,
        };

        await dispatch(updateAluno(dataSubmit));
      } catch (error) {
        // Esse try catch interage com o usuário. Não tire!
        toast.error("Não foi possível alterar os dados");
      }
    },
    [dispatch, aluno, defaultValues]
  );

  const onSubmitSelect = useCallback(
    // Aqui submita apenas o id de cada select.
    // Ex: turma_id: 2
    async (e: any) => {
      e.preventDefault();

      const { id } = dadosEscolares[e.target.name + "s"].find(
        (item: any) => item[e.target.name] === e.target.value
      );

      if (aluno[e.target.name + "_id"] === id) {
        return;
      }

      const dataSubmit: any = {
        id: aluno.id,
        [e.target.name + "_id"]: id,
      };

      await dispatch(updateAluno(dataSubmit));
    },
    [dispatch, aluno, dadosEscolares]
  );

  const onSubmitSwitch = useCallback(
    async (e: any) => {
      e.preventDefault();

      if (defaultValues[e.target.name] === e.target.checked) {
        return;
      }

      const dataSubmit: any = {
        id: aluno.id,
        [e.target.name]: e.target.checked,
      };
      await dispatch(updateAluno(dataSubmit));
    },
    [dispatch, aluno, defaultValues]
  );

  const loadSelects = useCallback(() => {
    setDados({
      turmas: dadosEscolares.turmas.map((item: any) => item.turma),
      sistemas: dadosEscolares.sistemas.map((item: any) => item.sistema),
      anos: dadosEscolares.anos.map((item: any) => item.ano),
      turnos: dadosEscolares.turnos.map((item: any) => item.turno),
      periodos: dadosEscolares.periodos.map((item: any) => item.periodo),
      horaentradas: dadosEscolares.horaentradas.map(
        (item: any) => item.horaentrada
      ),
      horasaidas: dadosEscolares.horasaidas.map((item: any) => item.horasaida),
    });
  }, [dadosEscolares]);

  const turmaOptions = dados.turmas;
  const periodoOptions = dados.periodos;
  const horarioEntradaOptions = dados.horaentradas;
  const horarioSaidaOptions = dados.horasaidas;

  const handleChangeAnoTurnoSistema = useCallback(
    async (e: any) => {
      e.preventDefault();

      // A turma foi mudada pelo usuário
      const turma = await dadosEscolares?.turmas?.find(
        (item: any) => item.turma === e.target.value
      );
      const { dados_ano } = turma;
      const { dados_turno } = turma;

      const ano = dados_ano ? dados_ano.ano : "Indefinido";
      const turno = dados_turno ? dados_turno.turno : "Indefinido";
      const sistema = dados_ano?.dados_sistema
        ? dados_ano.dados_sistema.sistema
        : "Indefinido";
      setValue("ano", ano);
      setValue("turno", turno);
      setValue("sistema", sistema);
    },
    [dadosEscolares.turmas, setValue]
  );

  const handleLoadAnoTurnoSistema = useCallback(() => {
    // Adicionar Ano, Turno e Sistema
    setValue("ano", aluno.dados_turma?.dados_ano?.ano || "Indefinido");
    setValue("turno", aluno.dados_turma?.dados_turno?.turno || "Indefinido");
    setValue(
      "sistema",
      aluno.dados_turma?.dados_ano?.dados_sistema?.sistema || "Indefinido"
    );
  }, [
    aluno.dados_turma?.dados_turno?.turno,
    aluno.dados_turma?.dados_ano?.ano,
    aluno.dados_turma?.dados_ano?.dados_sistema?.sistema,
    setValue,
  ]);

  useEffect(() => {
    loadSelects();
    handleLoadAnoTurnoSistema();
  }, [loadSelects, handleLoadAnoTurnoSistema]);

  return (
    <div>
      <TitleBody titleLabel="Dados Escolares" />
      <Grid>
        <div>
          <SelectForm
            register={register}
            name={"turma"}
            label={"Turma"}
            control={control}
            errors={errors}
            options={turmaOptions}
            onChange={(e: any) => {
              onSubmitSelect(e);
              handleChangeAnoTurnoSistema(e);
            }}
          />
          <TextForm
            register={register}
            name={"ano"}
            label={"Ano"}
            control={control}
            errors={errors}
            disabled
          />
          <TextForm
            register={register}
            name={"turno"}
            label={"Turno"}
            control={control}
            errors={errors}
            disabled
          />
          <TextForm
            register={register}
            name={"sistema"}
            label={"Sistema"}
            control={control}
            errors={errors}
            disabled
          />
        </div>
        <div>
          <SelectForm
            register={register}
            name={"periodo"}
            label={"Período"}
            options={periodoOptions}
            control={control}
            errors={errors}
            onChange={onSubmitSelect}
          />
          <SelectForm
            register={register}
            name={"horaentrada"}
            label={"Horário de Entrada"}
            options={horarioEntradaOptions}
            control={control}
            errors={errors}
            onChange={onSubmitSelect}
          />
          <SelectForm
            register={register}
            name={"horasaida"}
            label={"Horário de Saída"}
            options={horarioSaidaOptions}
            control={control}
            errors={errors}
            onChange={onSubmitSelect}
          />
        </div>
        <div>
          <TextForm
            register={register}
            name={"matricula"}
            label={"Matrícula"}
            control={control}
            errors={errors}
            onEnter={() => {
              setFocus("dados_escolares_observacoes");
            }}
            onBlur={onSubmit}
            // disabled
          />
          <TextForm
            register={register}
            maskType="date"
            name={"dataMatricula"}
            label={"Data de Matrícula"}
            control={control}
            errors={errors}
            disabled
          />
          <SwitchForm
            label="Aluno Ativo"
            name="ativo"
            control={control}
            onChange={onSubmitSwitch}
          />
          <TextForm
            register={register}
            name={"dados_escolares_observacoes"}
            label={"Observações"}
            control={control}
            errors={errors}
            isMultiline={true}
            width="100%"
            onEnter={() => {
              setFocus("matricula");
            }}
            onBlur={onSubmit}
          />
        </div>
      </Grid>
    </div>
  );
};

export default DadosEscolares;
