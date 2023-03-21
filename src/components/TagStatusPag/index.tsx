import React from "react";

import { statusPagamento } from "constants/statusPag";

import { Container } from "./styles";

interface ITagStatusPag {
  label: string;
}

const TagStatusPag: React.FC<ITagStatusPag> = ({ label = "" }) => {
  const setStatusColor = (label: string) => {
    const statusEncontrado = statusPagamento.reduce(
      (acumulador: any, valorAtual: any) => {
        if (valorAtual.status === label) {
          return valorAtual;
        }
        return acumulador;
      },
      null
    );
    return statusEncontrado ? statusEncontrado.color : null;
  };

  const color = setStatusColor(label);

  return (
    <>{label ? <Container color={color}>{label}</Container> : <div>-</div>}</>
  );
};

export default TagStatusPag;
