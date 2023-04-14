import React, { useMemo } from "react";

import Breadcrumb from "components/Breadcrumb";
import TitleBody from "components/TitleBody";
import TabsLayout from "components/TabsLayout";

import Materias from "./Materias";
import Turmas from "./Turmas";

// import { Container } from './styles';

const DadosEscolares: React.FC = () => {
  const linksBreadcrumb = [
    {
      url: "/professores",
      label: "Professores",
    },
    {
      url: "",
      label: "Dados Escolares",
    },
  ];

  const tabs = useMemo(
    () => [
      {
        tabLabel: "Matérias",
        component: Materias,
      },
      {
        tabLabel: "Turmas",
        component: Turmas,
      },
    ],
    []
  );

  return (
    <>
      <div>
        <Breadcrumb links={linksBreadcrumb} />
        <TitleBody titleLabel="Dados Escolares" />
        <TabsLayout tabs={tabs} />
      </div>
    </>
  );
};

export default DadosEscolares;
