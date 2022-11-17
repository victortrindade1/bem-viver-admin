import React, { useMemo, useEffect, useCallback } from "react";
import { FormContainer } from "react-hook-form-mui";

import TitleBody from "components/TitleBody";
import TextInputForm from "components/TextInputForm";

import { Grid } from "./styles";

const Anamnese: React.FC = () => {
  const defaultValues: any = useMemo(
    () => ({
      pediatra: "Celina Silva",
    }),
    []
  );

  const handleSubmit = useCallback(
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
      <FormContainer
        defaultValues={defaultValues}
        onSuccess={(event) => handleSubmit(event)}
      >
        <Grid>
          <div>
            <TextInputForm
              name={"pediatra"}
              label={"Pediatra"}
              onHandleSubmit={handleSubmit}
              width="100%"
            />
            <TextInputForm
              name={"contato"}
              label={"Contato"}
              onHandleSubmit={handleSubmit}
            />
          </div>
          <div>
            <TextInputForm
              name={"alergias"}
              label={"Alergias"}
              onHandleSubmit={handleSubmit}
              isMultiline={true}
              width="100%"
              minWidth="167px"
            />
            <TextInputForm
              name={"medicacao"}
              label={"Medicação / Horário"}
              onHandleSubmit={handleSubmit}
              isMultiline={true}
              width="100%"
              minWidth="167px"
            />
          </div>
          <div>
            <TextInputForm
              name={"temperatura"}
              label={"Temperatura Banho"}
              onHandleSubmit={handleSubmit}
            />
            <TextInputForm
              name={"observacoes"}
              label={"Observações"}
              onHandleSubmit={handleSubmit}
              isMultiline={true}
              width="100%"
            />
          </div>
        </Grid>
      </FormContainer>
    </>
  );
};

export default Anamnese;
