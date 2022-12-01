import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "contexts/auth";
import MuiTextInputForm from "components/MuiTextInputForm";

import {
  Title,
  LoginButtonContainer,
  LoginButton,
  FormContainerWrapper,
} from "./styles";

const Login: React.FC = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const { signIn } = useAuth();

  const onSubmit = useCallback(
    async (data: IAuth) => {
      await signIn(data);
    },
    [signIn]
  );

  return (
    <>
      <Title>Login</Title>
      <FormContainerWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MuiTextInputForm
            name={"email"}
            label={"E-MAIL"}
            width="100%"
            control={control}
            errors={errors}
            isRequired
            type={"email"}
          />
          <MuiTextInputForm
            name={"password"}
            label={"SENHA"}
            width="100%"
            control={control}
            errors={errors}
            isRequired
            type={"password"}
          />
          <LoginButtonContainer>
            <LoginButton type="submit">Entrar</LoginButton>
          </LoginButtonContainer>
        </form>
      </FormContainerWrapper>
    </>
  );
};

export default Login;
