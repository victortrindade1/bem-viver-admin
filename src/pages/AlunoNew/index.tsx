import React from "react";
import { useForm } from "react-hook-form";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import TextForm from "components/TextForm";

import { Container } from "./styles";

const AlunoNew: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    setFocus,
    // reset,
  } = useForm({
    // defaultValues,
    // resolver: yupResolver(validationSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = () => {};

  return (
    <>
      <DarkSideLayout />
      <LightSideLayout titleLabel="Novo Aluno">
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextForm
              register={register}
              name={"nome"}
              label={"Nome Completo"}
              onEnter={() => setFocus("")}
              width="100%"
              control={control}
              errors={errors}
            />
          </form>
        </Container>
      </LightSideLayout>
    </>
  );
};

export default AlunoNew;
