import React, { useMemo, useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectDadosEscolares } from "store/slices/dadosEscolares";
import { storeTurma } from "store/slices/turma";

import Breadcrumb from "components/Breadcrumb";
import TextForm from "components/TextForm";
import Button from "components/Button";

import { Container, ButtonContainer } from "./styles";

interface SubmitTurma {
  turma: string;
  sistema: string;
  ano: string;
  turno: string;
}

const NovaTurma: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const dadosEscolaresState = useAppSelector(selectDadosEscolares);
  const dadosEscolares: any = dadosEscolaresState.dados;

  const sistemaOptions = dadosEscolares.sistemas.map(
    (item: any) => item.sistema
  );

  const [anoOptions, setAnoOptions] = useState([]);

  const turnoOptions = dadosEscolares.turnos.map((item: any) => item.turno);

  const validationSchema = Yup.object().shape({
    turma: Yup.string().required("Campo obrigatório"),
    turno: Yup.string().required("Campo obrigatório"),
    ano: Yup.string().required("Campo obrigatório"),
    sistema: Yup.string().required("Campo obrigatório"),
  });

  const defaultValues: any = useMemo(
    () => ({
      turma: "",
      turno: "",
      ano: "",
      sistema: "",
    }),
    []
  );

  const {
    control,
    formState: { errors },
    register,
    setFocus,
    handleSubmit,
    setValue,
    clearErrors,
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
      label: "Nova Turma",
    },
  ];

  const updateAnosOptions = useCallback(
    (e: any) => {
      clearErrors(["sistema"]);
      setValue("sistema", e.target.value);

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
    [clearErrors, dadosEscolares.anos, dadosEscolares?.sistemas, setValue]
  );

  // Foco no primeiro input se é novo
  useEffect(() => {
    setFocus("turma");
  }, [setFocus]);

  const onError = (errors: any, e: any) => console.log(errors, e);

  const onSubmit = async (turmaDados: SubmitTurma, e: any) => {
    e.preventDefault();

    const ano = dadosEscolares.anos.find(
      (item: any) =>
        item.ano === turmaDados.ano &&
        item.dados_sistema.sistema === turmaDados.sistema
    );

    const turno = dadosEscolares.turnos.find(
      (item: any) => item.turno === turmaDados.turno
    );

    const dataSubmit = {
      turma: turmaDados.turma,
      turno_id: turno?.id,
      ano_id: ano?.id,
    };

    const response: any = await dispatch(storeTurma(dataSubmit));

    navigate(`/turma/${response.payload.data.id}/informacoes`);
  };

  return (
    <div>
      <Breadcrumb links={linksBreadcrumb} />
      <Container>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <TextForm
            isRequired
            register={register}
            name="turma"
            label="Nome"
            // onEnter={(e: any) => {
            //   turmaRedux?.id ? setFocus("turno") : e.target.blur();
            // }}
            // onBlur={onSubmit}
            // width="100%"
            control={control}
            errors={errors}
          />
          <TextForm
            isRequired
            isSelect
            register={register}
            name={"sistema"}
            label={"Sistema"}
            control={control}
            errors={errors}
            options={sistemaOptions}
            onChange={updateAnosOptions}
          />
          <TextForm
            isRequired
            isSelect
            register={register}
            name={"ano"}
            label={"Ano"}
            control={control}
            errors={errors}
            options={anoOptions}
            // onChange={onSubmit}
          />
          <TextForm
            isRequired
            isSelect
            register={register}
            name={"turno"}
            label={"Turno"}
            control={control}
            errors={errors}
            options={turnoOptions}
            // onChange={onSubmit}
          />
          <ButtonContainer>
            <Button label="Prosseguir" type="submit" />
          </ButtonContainer>
        </form>
      </Container>
    </div>
  );
};

export default NovaTurma;
