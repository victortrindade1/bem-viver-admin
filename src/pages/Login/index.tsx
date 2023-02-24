import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "hooks";

// import { useAuth } from "contexts/auth";
import { signIn } from "store/slices/auth";

import TextForm from "components/TextForm";

import {
  Title,
  LoginButtonContainer,
  LoginButton,
  FormContainerWrapper,
} from "./styles";
import { loadDados } from "store/slices/dadosEscolares";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    register,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  // const { signIn } = useAuth();

  const onSubmit = useCallback(
    async (data: IAuth) => {
      // await signIn(data);
      // console.log("data", data);
      dispatch(signIn(data));
      dispatch(loadDados());
    },
    [dispatch]
  );

  return (
    <>
      <Title>Login</Title>
      <FormContainerWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextForm
            register={register}
            name={"email"}
            label={"E-MAIL"}
            width="100%"
            onEnter={() => setFocus("password")}
            control={control}
            errors={errors}
            isRequired
            type={"email"}
          />
          <TextForm
            register={register}
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
