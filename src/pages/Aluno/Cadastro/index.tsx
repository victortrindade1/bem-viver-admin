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
      <TitleBody
        titleLabel="Cadastro"
        initialScroll={
          window.innerWidth <= 450 ? 62 : window.innerWidth <= 768 ? 72 : 92
        }
        finalScroll={
          window.innerWidth <= 450 ? 845 : window.innerWidth <= 768 ? 880 : 730
        }
      />
      <TabsLayout tabs={tabs} />
    </>
  );
};

export default CadastroAluno;
