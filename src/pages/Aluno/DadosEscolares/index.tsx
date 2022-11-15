import React, { useMemo, useCallback, useEffect } from "react";
import { FormContainer } from "react-hook-form-mui";

import TitleBody from "components/TitleBody";
import MuiSelectForm from "components/MuiSelectForm";

// import { Container } from './styles';

const DadosEscolares: React.FC = () => {
  const defaultValues: any = useMemo(
    () => ({
      sistema: "Escola",
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

  const sistemaOptions = [
    {
      id: "Creche",
      value: "Creche",
    },
    {
      id: "Escola",
      value: "Escola",
    },
    {
      id: "Fundamental",
      value: "Fundamental",
    },
  ];

  return (
    <div>
      <TitleBody titleLabel="Dados Escolares" />
      <FormContainer
        defaultValues={defaultValues}
        onSuccess={(event) => handleSubmit(event)}
      >
        <div>
          <MuiSelectForm
            initialValue={defaultValues.sistema}
            name={"sistema"}
            label={"Sistema"}
            options={sistemaOptions}
            onSubmit={handleSubmit}
          />
        </div>
      </FormContainer>
    </div>
  );
};

export default DadosEscolares;
