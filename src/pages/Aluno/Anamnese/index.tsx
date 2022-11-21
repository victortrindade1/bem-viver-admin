import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";

import TitleBody from "components/TitleBody";
import MuiTextInputForm from "components/MuiTextInputForm";

import { Grid } from "./styles";

const Anamnese: React.FC = () => {
  const defaultValues: any = useMemo(
    () => ({
      pediatra: "Celina Silva",
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

  // // Trigger Enter
  // useEffect(() => {
  //   const keyDownHandler = (event: any) => {
  //     if (event.key === "Enter") {
  //       handleSubmit(event);
  //     }
  //   };

  //   document.addEventListener("keydown", keyDownHandler);

  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //   };
  // }, [handleSubmit]);

  return (
    <>
      <TitleBody titleLabel="Anamnese" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <div>
            <MuiTextInputForm
              name={"pediatra"}
              label={"Pediatra"}
              onHandleSubmit={onSubmit}
              width="100%"
              control={control}
            />
            <MuiTextInputForm
              name={"contato"}
              label={"Contato"}
              onHandleSubmit={onSubmit}
              control={control}
            />
          </div>
          <div>
            <MuiTextInputForm
              name={"alergias"}
              label={"Alergias"}
              onHandleSubmit={onSubmit}
              control={control}
              isMultiline={true}
              width="100%"
              minWidth="167px"
            />
            <MuiTextInputForm
              name={"medicacao"}
              label={"Medicação / Horário"}
              onHandleSubmit={onSubmit}
              control={control}
              isMultiline={true}
              width="100%"
              minWidth="167px"
            />
          </div>
          <div>
            <MuiTextInputForm
              name={"temperatura"}
              label={"Temperatura Banho"}
              onHandleSubmit={onSubmit}
              control={control}
            />
            <MuiTextInputForm
              name={"observacoes"}
              label={"Observações"}
              onHandleSubmit={onSubmit}
              control={control}
              isMultiline={true}
              width="100%"
            />
          </div>
        </Grid>
      </form>
    </>
  );
};

export default Anamnese;
