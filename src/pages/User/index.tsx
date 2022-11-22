import React, { useEffect, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "contexts/auth";
import api from "services/api";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";

import { FormWrapper } from "./styles";
import MuiTextInputForm from "components/MuiTextInputForm";

const User: React.FC = () => {
  const { user, updateUser } = useAuth();

  const defaultValues: any = useMemo(
    () => ({
      name: user?.name,
      email: user?.email,
    }),
    [user]
  );

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues,
    // shouldUnregister: true, // só submita se mudar valor
  });

  const onSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();

      if (defaultValues[event.target.name] === event.target.value) {
        return;
      }

      const dataSubmit: any = {
        ...user,
        [event.target.name]: event.target.value,
      };

      await api.put(`/users/${user?.id}`, dataSubmit);

      updateUser(dataSubmit);

      await localStorage.setItem("@AdminAuth:user", JSON.stringify(dataSubmit));
    },
    [updateUser, user, defaultValues]
  );

  // Trigger Enter
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        onSubmit(event);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [onSubmit]);

  return (
    <>
      <DarkSideLayout />
      <LightSideLayout titleLabel="Minha Conta">
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <MuiTextInputForm
              name={"name"}
              label={"NOME"}
              onHandleSubmit={onSubmit}
              width="100%"
              control={control}
            />
            <MuiTextInputForm
              name={"email"}
              label={"E-MAIL"}
              onHandleSubmit={onSubmit}
              width="100%"
              control={control}
              isRequired
              type={"email"}
            />
            <MuiTextInputForm
              name={"password"}
              label={"NOVA SENHA"}
              onHandleSubmit={onSubmit}
              width="100%"
              control={control}
              type={"password"}
            />
            <MuiTextInputForm
              name={"passwordRepeat"}
              label={"CONFIRME A SENHA"}
              onHandleSubmit={onSubmit}
              width="100%"
              control={control}
              type={"password"}
            />
          </form>
        </FormWrapper>
      </LightSideLayout>
    </>
  );
};

export default User;
