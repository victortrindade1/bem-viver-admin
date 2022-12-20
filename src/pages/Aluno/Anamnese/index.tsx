import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import TitleBody from "components/TitleBody";
import MuiTextInputForm from "components/MuiTextInputForm";
import MuiTextInputFormMasked from "components/MuiTextInputFormMasked";

import { Grid } from "./styles";

const Anamnese: React.FC = () => {
  const validationSchema = Yup.object().shape({
    pediatra: Yup.string(),
  });

  const defaultValues: any = useMemo(
    () => ({
      pediatra: "Celina Silva",
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
    <>
      <TitleBody titleLabel="Anamnese" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <div>
            <MuiTextInputForm
              name={"pediatra"}
              label={"Pediatra"}
              onBlur={onSubmit}
              width="100%"
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputFormMasked
              mask="(99) 99999-9999"
              name={"contato"}
              label={"Contato"}
              onBlurProp={onSubmit}
              control={control}
              errors={errors}
              register={register}
            />
          </div>
          <div>
            <MuiTextInputForm
              name={"alergias"}
              label={"Alergias"}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              register={register}
              isMultiline={true}
              width="100%"
              minWidth="167px"
            />
            <MuiTextInputForm
              name={"medicacao"}
              label={"Medicação / Horário"}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              register={register}
              isMultiline={true}
              width="100%"
              minWidth="167px"
            />
          </div>
          <div>
            <MuiTextInputForm
              name={"temperatura"}
              label={"Temperatura Banho"}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              register={register}
            />
            <MuiTextInputForm
              name={"observacoes"}
              label={"Observações"}
              onBlur={onSubmit}
              control={control}
              errors={errors}
              register={register}
              isMultiline={true}
              width="100%"
            />
          </div>
        </Grid>
      </form>
    </>
  );
};

export default Anamnese;
