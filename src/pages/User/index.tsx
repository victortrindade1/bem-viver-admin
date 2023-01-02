import React, { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

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
    oldPassword: Yup.string().min(
      6,
      "Password precisa ter no mínimo 6 caracteres."
    ),
    password: Yup.string()
      .min(6, "Password precisa ter no mínimo 6 caracteres.")
      .when("oldPassword", (oldPassword, field) =>
        oldPassword ? field.required("Campo obrigatório.") : field
      ),
    confirmPassword: Yup.string().when("password", (password, field) =>
      password
        ? field
            .required("Campo obrigatório.")
            .oneOf([Yup.ref("password")], "Confirme corretamente a nova senha.")
        : field
    ),
  });

  const { user, updateUser } = useAuth();

  const defaultValues: any = useMemo(
    () => ({
      name: user?.name,
      email: user?.email,
      oldPassword: "",
      password: "",
      confirmPassword: "",
    }),
    [user]
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    setFocus,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = useCallback(
    // props pode ser um event do submit do input ou um obj do submit do button
    async (props: any) => {
      try {
        console.log("on submit");
        props.target && props.preventDefault();

        // Tenho q fazer esse condicional tb pra qnd o props for um obj
        if (props.target) {
          if (defaultValues[props.target.name] === props.target.value) {
            return;
          }
        }

        let dataSubmit: any = {};

        props.target
          ? // Só atualiza um input pelo target
            (dataSubmit = {
              ...user,
              [props.target.name]: props.target.value,
            })
          : // Atualiza todos inputs pelo submit do button
            (dataSubmit = {
              ...user,
              ...props,
            });

        updateUser(dataSubmit);

        await api.put(`/users/${user?.id}`, dataSubmit);

        localStorage.setItem("@AdminAuth:user", JSON.stringify(dataSubmit));

        toast.success("Dados salvos com sucesso!");
      } catch (error) {
        toast.error("Não foi possível salvar.");
      }
    },
    [updateUser, user, defaultValues]
  );

  // const handleEnter = async ({ onSubmit, focusNext }: any) => {
  //   onSubmit && (await onSubmit());
  //   focusNext && setFocus(focusNext);
  // };

  return (
    <>
      <DarkSideLayout />
      <LightSideLayout titleLabel="Minha Conta">
        <Container>
          <>
            <MuiTextInputForm
              register={register}
              name={"name"}
              label={"Nome"}
              // onBlur={onSubmit}
              onEnter={async (e: any) => {
                setFocus("email");
                await onSubmit(e);
                // console.log("set focus");
              }}
              // onEnter={(event: any) =>
              //   handleEnter({
              //     onSubmit: () => onSubmit(event),
              //     focusNext: "email",
              //   })
              // }
              width="100%"
              control={control}
              errors={errors}
            />
            <MuiTextInputForm
              register={register}
              name={"email"}
              label={"E-Mail"}
              onBlur={onSubmit}
              onEnter={onSubmit}
              width="100%"
              control={control}
              errors={errors}
              isRequired
              type={"email"}
            />
            <Button
              label="Alterar senha"
              width="167px"
              handleClick={handleOpenModal}
              margin="40px 0px"
            />
            <MuiModal
              open={openModal}
              handleClose={handleCloseModal}
              title="Cadastre uma nova senha"
              onSubmit={handleSubmit(onSubmit)}
            >
              <>
                <MuiTextInputForm
                  register={register}
                  name={"oldPassword"}
                  label={"Senha Atual"}
                  onEnter={() => setFocus("password")}
                  control={control}
                  errors={errors}
                  type={"password"}
                />
                <MuiTextInputForm
                  register={register}
                  name={"password"}
                  label={"Nova Senha"}
                  // onBlur={onSubmit}
                  onEnter={() => setFocus("confirmPassword")}
                  control={control}
                  errors={errors}
                  type={"password"}
                />
                <MuiTextInputForm
                  register={register}
                  name={"confirmPassword"}
                  label={"Confirmar Senha"}
                  // onSubmit={!errors && onSubmit}
                  // onBlur={onSubmit}
                  // onEnter={onSubmit}
                  control={control}
                  errors={errors}
                  type={"password"}
                />
              </>
            </MuiModal>
          </>
        </Container>
      </LightSideLayout>
    </>
  );
};

export default User;
