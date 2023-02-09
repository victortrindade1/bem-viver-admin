import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import TitleBody from "components/TitleBody";
import TextForm from "components/TextForm";
// import TextForm from "components/TextForm";
// import TextForm from "components/TextForm";

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
            <TextForm
              name={"pediatra"}
              label={"Pediatra"}
              width="100%"
              control={control}
              errors={errors}
              register={register}
            />
            <TextForm
              maskType="tel"
              name={"contato"}
              label={"Contato"}
              control={control}
              errors={errors}
              register={register}
            />
          </div>
          <div>
            <TextForm
              name={"alergias"}
              label={"Alergias"}
              control={control}
              errors={errors}
              register={register}
              isMultiline={true}
              width="100%"
              minWidth="167px"
            />
            <TextForm
              name={"medicacao"}
              label={"Medicação / Horário"}
              control={control}
              errors={errors}
              register={register}
              isMultiline={true}
              width="100%"
              minWidth="167px"
            />
          </div>
          <div>
            <TextForm
              name={"temperatura"}
              label={"Temperatura Banho"}
              control={control}
              errors={errors}
              register={register}
            />
            <TextForm
              name={"observacoes"}
              label={"Observações"}
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
