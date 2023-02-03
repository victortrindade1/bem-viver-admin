import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";

import { Grid } from "./styles";

const ContatosPessoais: React.FC = () => {
  const validationSchema = Yup.object().shape({
    contatos_pai_tel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_pai_cel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_pai_email: Yup.string().email("E-mail incorreto."),
    contatos_mae_tel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_mae_cel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_mae_email: Yup.string().email("E-mail incorreto."),
    contatos_resp_tel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_resp_cel: Yup.string()
      .min(14, "Contato incorreto.")
      .max(15, "Contato incorreto."),
    contatos_resp_email: Yup.string().email("E-mail incorreto."),
  });

  const defaultValues: any = useMemo(
    () => ({
      contatos_pai_tel: "",
      contatos_pai_cel: "",
      contatos_pai_email: "",
      contatos_mae_tel: "",
      contatos_mae_cel: "",
      contatos_mae_email: "",
      contatos_resp_tel: "",
      contatos_resp_cel: "",
      contatos_resp_email: "",
    }),
    []
  );

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    // shouldUnregister: true, // só submita se mudar valor
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = useCallback(
    async (event: any) => {
      try {
        event.preventDefault();

        if (defaultValues[event.target.name] === event.target.value) {
          return;
        }

        console.log(event);
      } catch (error) {
        console.log(error);
      }
    },
    [defaultValues]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <div>
          <MuiTextInputFormMasked
            register={register}
            mask="(99) 99999-9999"
            name="contatos_pai_cel"
            label="Celular Pai"
            control={control}
            errors={errors}
          />
          <MuiTextInputFormMasked
            register={register}
            mask="(99) 9999-9999"
            name="contatos_pai_tel"
            label="Telefone Pai"
            control={control}
            errors={errors}
          />
        </div>
        <div>
          <MuiTextInputFormMasked
            register={register}
            mask="(99) 99999-9999"
            name="contatos_mae_cel"
            label="Celular Mãe"
            control={control}
            errors={errors}
          />
          <MuiTextInputFormMasked
            register={register}
            mask="(99) 9999-9999"
            name="contatos_mae_tel"
            label="Telefone Mãe"
            control={control}
            errors={errors}
          />
        </div>
        <div>
          <MuiTextInputFormMasked
            register={register}
            mask="(99) 99999-9999"
            name="contatos_resp_cel"
            label="Celular Responsável"
            control={control}
            errors={errors}
          />
          <MuiTextInputFormMasked
            register={register}
            mask="(99) 9999-9999"
            name="contatos_resp_tel"
            label="Telefone Responsável"
            control={control}
            errors={errors}
          />
        </div>
      </Grid>
    </form>
  );
};

export default ContatosPessoais;
