import React, { useEffect, useCallback, useMemo } from "react";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
  PasswordRepeatElement,
} from "react-hook-form-mui";

import { useAuth } from "contexts/auth";
import api from "services/api";

// import TitlePage from "components/TitlePage";
// import BodyLayout from "components/BodyLayout";

import {
  DarkSideContainer,
  LightSideContainer,
  BodyMenuContainer,
  BodyLayoutContainer,
  Title,
  FormContainerWrapper,
} from "./styles";
import { useState } from "react";

const User: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const { user, updateUser } = useAuth();

  const defaultValues = useMemo(
    () => ({
      name: user?.name,
      email: user?.email,
    }),
    [user]
  );

  const handleSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();

      const dataSubmit: any = {
        ...user,
        [event.target.name]: event.target.value,
      };

      await api.put(`/users/${user?.id}`, dataSubmit);

      updateUser(dataSubmit);

      await localStorage.setItem("@AdminAuth:user", JSON.stringify(dataSubmit));
    },
    [updateUser, user]
  );

  // Trigger Enter
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        handleSubmit(event);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [handleSubmit]);

  const handleScroll = (event: any) => {
    console.log(event.currentTarget.scrollTop);
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <>
      <DarkSideContainer>
        <BodyMenuContainer></BodyMenuContainer>
      </DarkSideContainer>
      <LightSideContainer>
        <BodyLayoutContainer onScroll={handleScroll}>
          <Title scrollTop={scrollTop}>Minha Conta</Title>
          <FormContainerWrapper>
            <FormContainer
              defaultValues={defaultValues}
              onSuccess={(event) => handleSubmit(event)}
            >
              <TextFieldElement
                fullWidth
                variant="standard"
                name="name"
                label="NOME"
                margin="normal"
                onBlurCapture={(event) => handleSubmit(event)}
              />
              <br />
              <TextFieldElement
                fullWidth
                variant="standard"
                name="email"
                label="E-MAIL"
                margin="normal"
                required
                onBlurCapture={(event) => handleSubmit(event)}
              />
              <br />
              <PasswordElement
                fullWidth
                variant="standard"
                name="password"
                label="NOVA SENHA"
                margin="normal"
              />
              <br />
              <PasswordRepeatElement
                passwordFieldName={"password"}
                name="passwordRepeat"
                margin="normal"
                label="CONFIRME A SENHA"
                variant="standard"
                fullWidth
                onBlurCapture={(event) => handleSubmit(event)}
              />
              <br />
              <PasswordRepeatElement
                passwordFieldName={"password"}
                name="passwordRepeat"
                margin="normal"
                label="CONFIRME A SENHA"
                variant="standard"
                fullWidth
                onBlurCapture={(event) => handleSubmit(event)}
              />
              <br />
              <PasswordRepeatElement
                passwordFieldName={"password"}
                name="passwordRepeat"
                margin="normal"
                label="CONFIRME A SENHA"
                variant="standard"
                fullWidth
                onBlurCapture={(event) => handleSubmit(event)}
              />
              <br />
              <PasswordRepeatElement
                passwordFieldName={"password"}
                name="passwordRepeat"
                margin="normal"
                label="CONFIRME A SENHA"
                variant="standard"
                fullWidth
                onBlurCapture={(event) => handleSubmit(event)}
              />
              <br />
              <PasswordRepeatElement
                passwordFieldName={"password"}
                name="passwordRepeat"
                margin="normal"
                label="CONFIRME A SENHA"
                variant="standard"
                fullWidth
                onBlurCapture={(event) => handleSubmit(event)}
              />
            </FormContainer>
          </FormContainerWrapper>
        </BodyLayoutContainer>
      </LightSideContainer>
    </>
  );
};

export default User;
