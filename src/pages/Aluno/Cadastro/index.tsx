import React from "react";

import TabsLayout from "components/TabsLayout";
import TitleBody from "components/TitleBody";

import DadosPessoais from "./DadosPessoais";
import Endereco from "./Endereco";

const CadastroAluno: React.FC = () => {
  const tabs = [
    {
      tabLabel: "Dados Pessoais",
      component: DadosPessoais,
    },
    {
      tabLabel: "Endereço",
      component: Endereco,
    },
  ];

  return (
    <>
      <TitleBody titleLabel="Cadastro" />
      <TabsLayout tabs={tabs} />
    </>
  );
};

export default CadastroAluno;
