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
      <div>
        <TitleBody titleLabel="Cadastro" />
        <TabsLayout tabs={tabs} />
      </div>
    </>
  );
};

export default CadastroAluno;
