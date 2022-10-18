import React from "react";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
} from "react-hook-form-mui";

// import { TextField } from "@mui/material";
// import { useForm, SubmitHandler } from "react-hook-form";
// import InputAdornment from "@mui/material/InputAdornment";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import IconButton from "@mui/material/IconButton";

// import PasswordInput from "components/PasswordInput";
// import { FormInputText } from "components/FormComponents/FormInputText";

import {
  Container,
  DarkSideContainer,
  DarkSide,
  LogoStyled,
  Text,
  LightSideContainer,
  LightSide,
  Title,
  LoginButtonContainer,
  LoginButton,
  FormContainerWrapper,
} from "./styles";

interface IFormInput {
  name: string;
  password: string;
}

const defaultValues = {
  name: "",
  password: "",
};

const Login: React.FC = () => {
  const handleSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <Container>
      <DarkSideContainer>
        <DarkSide>
          <LogoStyled />
          <Text>Sistema Administrativo</Text>
        </DarkSide>
      </DarkSideContainer>
      <LightSideContainer>
        <LightSide>
          <Title>Login</Title>
          <FormContainerWrapper>
            <FormContainer
              defaultValues={defaultValues}
              onSuccess={handleSubmit}
            >
              <TextFieldElement
                fullWidth
                variant="standard"
                name="name"
                label="NOME"
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
        </LightSide>
      </LightSideContainer>
    </Container>
  );
};

export default Login;
