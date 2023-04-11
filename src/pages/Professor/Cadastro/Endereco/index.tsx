import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectProfessor, updateProfessor } from "store/slices/professor";

import TextForm from "components/TextForm";

import { cepFormat } from "utils/yup";

import { Container } from "./styles";
import axios from "axios";

const Endereco: React.FC = () => {
  const dispatch = useAppDispatch();
  const professorState = useAppSelector(selectProfessor);
  const professor = professorState.professorDados;

  const validationSchema = Yup.object().shape({
    contatos_end_logradouro: Yup.string(),
    contatos_end_num: Yup.string(),
    contatos_end_complemento: Yup.string(),
    contatos_end_bairro: Yup.string(),
    contatos_end_cep: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(cepFormat, "Cep incorreto"),
    contatos_end_cidade: Yup.string(),
  });

  const defaultValues: any = useMemo(
    () => ({
      end_logradouro: professor?.end_logradouro || "",
      end_num: professor?.end_num || "",
      end_complemento: professor?.end_complemento || "",
      end_bairro: professor?.end_bairro || "",
      end_cep: professor?.end_cep || "",
      end_cidade: professor?.end_cidade || "",
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
      e.preventDefault();

      if (defaultValues[e.target.name] === e.target.value) {
        return;
      }

      const dataSubmit: any = {
        id: professor?.id,
        [e.target.name]: e.target.value,
      };

      await dispatch(updateProfessor(dataSubmit));
    },
    [dispatch, professor, defaultValues]
  );

  const handleCep = async (e: any) => {
    e.preventDefault();

    let cep = e.target.value;
    cep = cep.replace("-", "");

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (!response.data.erro) {
        setFocus("end_logradouro");
        setValue("end_logradouro", response.data.logradouro);

        setFocus("end_bairro");
        setValue("end_bairro", response.data.bairro);

        setFocus("end_cidade");
        setValue(
          "end_cidade",
          `${response.data.localidade} - ${response.data.uf}`
        );

        setFocus("end_num");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div>
        <TextForm
          maskType="cep"
          register={register}
          name="end_cep"
          label="CEP"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("end_logradouro");
          }}
          onBlur={(e: any) => {
            handleCep(e);
            onSubmit(e);
          }}
          width={"90px"}
        />
        <TextForm
          register={register}
          name="end_logradouro"
          label="Logradouro"
          width="100%"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("end_num");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          name="end_num"
          label="Número"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("end_complemento");
          }}
          onBlur={onSubmit}
          width={"90px"}
        />
      </div>
      <div>
        <TextForm
          register={register}
          name="end_complemento"
          label="Complemento"
          control={control}
          errors={errors}
          width="100%"
          onEnter={() => {
            setFocus("end_bairro");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          name="end_bairro"
          label="Bairro"
          control={control}
          errors={errors}
          onEnter={() => {
            setFocus("end_cidade");
          }}
          onBlur={onSubmit}
        />
        <TextForm
          register={register}
          name="end_cidade"
          label="Cidade"
          placeholder="Cidade - UF"
          control={control}
          errors={errors}
          onBlur={onSubmit}
          onEnter={() => {
            setFocus("end_cep");
          }}
          width="100%"
        />
      </div>
    </Container>
  );
};

export default Endereco;
