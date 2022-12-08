import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import MuiButton from "@mui/material/Button";

import { useAuth } from "contexts/auth";

import api from "services/api";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import MuiTextInputForm from "components/MuiTextInputForm";
import Button from "components/Button";
import MuiModal from "components/MuiModal";

import { Container } from "./styles";

const User: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório."),
    email: Yup.string()
      .email("E-mail incorreto.")
      .required("Campo obrigatório."),
    password: Yup.string(),
    passwordRepeat: Yup.string(),
  });

  const { user, updateUser } = useAuth();

  const defaultValues: any = useMemo(
    () => ({
      name: user?.name,
      email: user?.email,
      password: "",
      passwordRepeat: "",
    }),
    [user]
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
    register,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
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

      await updateUser(dataSubmit);

      await api.put(`/users/${user?.id}`, dataSubmit);

      await localStorage.setItem("@AdminAuth:user", JSON.stringify(dataSubmit));

      setFocus("email");
    },
    [updateUser, user, defaultValues, setFocus]
  );

  return (
    <>
      <DarkSideLayout />
      <LightSideLayout titleLabel="Minha Conta">
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <MuiTextInputForm
              register={register}
              name={"name"}
              // key="name"
              label={"NOME"}
              onHandleSubmit={onSubmit}
              width="100%"
              control={control}
              errors={errors}
            />
            <MuiTextInputForm
              register={register}
              // key="email"
              name={"email"}
              label={"E-MAIL"}
              onHandleSubmit={onSubmit}
              width="100%"
              control={control}
              errors={errors}
              isRequired
              type={"email"}
            />

            <Button
              label="ALTERAR SENHA"
              width="167px"
              handleClick={handleOpenModal}
              margin="40px 0px"
            />
            <MuiModal
              open={openModal}
              handleClose={handleCloseModal}
              title="Cadastre uma nova senha"
            >
              <>
                <MuiTextInputForm
                  register={register}
                  name={"oldPassword"}
                  label={"SENHA ATUAL"}
                  onHandleSubmit={onSubmit}
                  // width="100%"
                  control={control}
                  errors={errors}
                  type={"password"}
                />
                <MuiTextInputForm
                  register={register}
                  name={"password"}
                  label={"NOVA SENHA"}
                  onHandleSubmit={onSubmit}
                  // width="100%"
                  control={control}
                  errors={errors}
                  type={"password"}
                />
                <MuiTextInputForm
                  register={register}
                  name={"passwordRepeat"}
                  label={"CONFIRME A SENHA"}
                  onHandleSubmit={onSubmit}
                  // width="100%"
                  control={control}
                  errors={errors}
                  type={"password"}
                />
              </>
            </MuiModal>
          </form>
        </Container>
      </LightSideLayout>
    </>
  );
};

export default User;
