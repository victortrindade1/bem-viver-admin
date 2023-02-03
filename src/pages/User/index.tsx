import React, { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "hooks";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import MuiTextInputForm from "components/MuiTextInputForm";
// import TextForm from "components/TextForm";
import Button from "components/Button";
import MuiModal from "components/MuiModal";

import { Container } from "./styles";
import { selectUser, updateUser } from "store/slices/auth";

const User: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
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
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  // const errors = useMemo(() => formState.errors, [formState]);

  const onSubmit = useCallback(
    // props pode ser um event do submit do input ou um obj do submit do button
    async (props: any) => {
      console.log("é pra estar aqui 2");
      console.log(props);
      props.target && props.preventDefault();

      // Não atualiza se não mudar valor
      if (props.target) {
        if (defaultValues[props.target.name] === props.target.value) {
          return;
        }
      } else {
        if (defaultValues === props) {
          return;
        }
      }

      let dataSubmit: any = {};

      if (props.target) {
        // Só atualiza um input pelo target
        dataSubmit = {
          ...user,
          [props.target.name]: props.target.value,
          // Tira o foco se não tiver sido redirecionado para outro input
        };
        props.target.blur();
      } else {
        // Atualiza todos inputs pelo submit do button
        dataSubmit = {
          ...user,
          ...props,
        };
      }

      // Pega user atualizado pra usar no reset atualizado
      const responseUpdate: any = await dispatch(updateUser(dataSubmit));
      const updatedUser = responseUpdate.payload.data;

      reset({
        name: updatedUser?.name,
        email: updatedUser?.email,
        oldPassword: "",
        password: "",
        confirmPassword: "",
      });

      setOpenModal(false);
    },
    [dispatch, user, defaultValues, reset]
  );

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
              onEnter={(e: any) => onSubmit(e)}
              width="100%"
              control={control}
              errors={errors}
            />
            <MuiTextInputForm
              register={register}
              name={"email"}
              label={"E-Mail"}
              width="100%"
              control={control}
              errors={errors}
              isRequired
              type={"email"}
              disabled
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
                onEnter={() => setFocus("confirmPassword")}
                control={control}
                errors={errors}
                type={"password"}
              />
              <MuiTextInputForm
                register={register}
                name={"confirmPassword"}
                label={"Confirmar Senha"}
                onEnter={async (e: any) => {
                  await handleSubmit(onSubmit)();
                  errors && e.target.focus();
                }}
                control={control}
                errors={errors}
                type={"password"}
              />
            </MuiModal>
          </>
        </Container>
      </LightSideLayout>
    </>
  );
};

export default User;
