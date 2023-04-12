import React, { useMemo } from "react";

import Breadcrumb from "components/Breadcrumb";
import TitleBody from "components/TitleBody";
import TabsLayout from "components/TabsLayout";

// import { useAppSelector } from "hooks";
// import { selectProfessor } from "store/slices/professor";

import DadosPessoais from "./DadosPessoais";
import Contato from "./Contato";
import Endereco from "./Endereco";

// import { Container } from './styles';

const Cadastro: React.FC = () => {
  // const professor = useAppSelector(selectProfessor);

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

  const tabsComplete = useMemo(
    () => [
      {
        tabLabel: "Dados Pessoais",
        component: DadosPessoais,
      },
      {
        tabLabel: "Contato",
        component: Contato,
      },
      {
        tabLabel: "Endereço",
        component: Endereco,
      },
    ],
    []
  );

  return (
    <>
      <div>
        <Breadcrumb links={linksBreadcrumb} />
        <TitleBody titleLabel="Cadastro" />
        <TabsLayout tabs={tabsComplete} />
      </div>
    </>
  );
};

export default Cadastro;
