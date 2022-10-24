import React from "react";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
} from "react-hook-form-mui";

import { useAuth } from "contexts/auth";

import {
  Title,
  LoginButtonContainer,
  LoginButton,
  FormContainerWrapper,
} from "./styles";

const defaultValues = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const { signIn } = useAuth();

  function handleSubmit(data: IAuth) {
    signIn(data);
  }

  return (
    <>
      <Title>Login</Title>
      <FormContainerWrapper>
        <FormContainer
          defaultValues={defaultValues}
          onSuccess={(data: IAuth) => handleSubmit(data)}
        >
          <TextFieldElement
            fullWidth
            variant="standard"
            name="email"
            label="E-MAIL"
            margin="normal"
            required
          />
          <PasswordElement
            fullWidth
            variant="standard"
            name="password"
            label="SENHA"
            margin="normal"
            required
          />
          <LoginButtonContainer>
            <LoginButton type="submit">Entrar</LoginButton>
          </LoginButtonContainer>
        </FormContainer>
      </FormContainerWrapper>
    </>
  );
};

export default Login;
