import React, { useMemo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import MuiTextInputForm from "components/MuiTextInputForm";

import { Grid } from "./styles";

const ContatosPessoais: React.FC = () => {
  const defaultValues: any = useMemo(
    () => ({
      contatos_pai_tel: "",
      contatos_pai_cel: "",
      contatos_pai_email: "",
      contatos_mae_tel: "",
      contatos_mae_cel: "",
      contatos_mae_email: "",
      contatos_resp_tel: "",
      contatos_resp_cel: "",
      contatos_resp_email: "",
    }),
    []
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

      console.log(event);
    },
    [defaultValues]
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <div>
            <MuiTextInputForm
              name="contatos_pai_tel"
              label="Telefone Pai"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name="contatos_pai_cel"
              label="Celular Pai"
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
          <div>
            <MuiTextInputForm
              name="contatos_mae_tel"
              label="Telefone Mãe"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name="contatos_mae_cel"
              label="Celular Mãe"
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
          <div>
            <MuiTextInputForm
              name="contatos_resp_tel"
              label="Telefone Responsável"
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name="contatos_resp_cel"
              label="Celular Responsável"
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
        </Grid>
      </form>
    </>
  );
};

export default ContatosPessoais;
