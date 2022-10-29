import React, { useEffect, useCallback, useMemo } from "react";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
  PasswordRepeatElement,
} from "react-hook-form-mui";

import { useAuth } from "contexts/auth";
import api from "services/api";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";

import { FormWrapper } from "./styles";

const User: React.FC = () => {
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

  return (
    <>
      <DarkSideLayout />
      <LightSideLayout titleLabel="Minha Conta">
        <FormWrapper>
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
          </FormContainer>
        </FormWrapper>
      </LightSideLayout>
    </>
  );
};

export default User;
