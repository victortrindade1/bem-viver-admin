import React from "react";

import Breadcrumb from "components/Breadcrumb";
import TitleBody from "components/TitleBody";
import TabsLayout from "components/TabsLayout";

import DadosPessoais from "./DadosPessoais";
import Endereco from "./Endereco";

// import { Container } from './styles';

const Cadastro: React.FC = () => {
  const linksBreadcrumb = [
    {
      url: "/professores",
      label: "Professores",
    },
    {
      url: "",
      label: "Cadastro",
    },
  ];

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
        <Breadcrumb links={linksBreadcrumb} />
        <TitleBody titleLabel="Cadastro" />
        <TabsLayout tabs={tabs} />
      </div>
    </>
  );
};

export default Cadastro;
