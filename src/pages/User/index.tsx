import React from "react";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
  PasswordRepeatElement,
} from "react-hook-form-mui";

import { Title, FormContainerWrapper } from "./styles";

const defaultValues = {
  name: "",
  email: "",
  newPassword: "",
  confirmPassword: "",
};

const User: React.FC = () => {
  function handleSubmit(data: any) {
    // e.preventDefault();

    console.log(data.target.value);
  }

  return (
    <>
      <Title>Cadastro Administrativo</Title>
      <FormContainerWrapper>
        <FormContainer defaultValues={defaultValues}>
          <TextFieldElement
            fullWidth
            variant="standard"
            name="name"
            label="NOME"
            margin="normal"
            onBlurCapture={(data) => handleSubmit(data)}
          />
          <TextFieldElement
            fullWidth
            variant="standard"
            name="email"
            label="E-MAIL"
            margin="normal"
            required
            onBlurCapture={(data) => handleSubmit(data)}
          />
          <PasswordElement
            fullWidth
            variant="standard"
            name="password"
            label="NOVA SENHA"
            margin="normal"
          />
          <PasswordRepeatElement
            passwordFieldName={"password"}
            name="password-repeat"
            margin="normal"
            label="CONFIRME A SENHA"
            variant="standard"
            fullWidth
            onBlurCapture={(data) => handleSubmit(data)}
          />
        </FormContainer>
      </FormContainerWrapper>
    </>
  );
};

export default User;
