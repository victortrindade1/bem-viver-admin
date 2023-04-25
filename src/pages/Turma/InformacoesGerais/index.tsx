import React, { useMemo } from "react";

import Breadcrumb from "components/Breadcrumb";
import TitleBody from "components/TitleBody";
import TabsLayout from "components/TabsLayout";

import { useAppSelector } from "hooks";
import { selectTurma } from "store/slices/turma";

import Turma from "./Turma";
import Informacoes from "./Informacoes";

// import { Container } from './styles';

const InformacoesGerais: React.FC = () => {
  const turma = useAppSelector(selectTurma);

  const linksBreadcrumb = [
    {
      url: "/turmas",
      label: "Turmas",
    },
    {
      url: "",
      label: "Informações Gerais",
    },
  ];

  const tabsComplete = useMemo(
    () =>
      turma.turmaDados?.id
        ? [
            {
              tabLabel: "Turma",
              component: Turma,
            },
            {
              tabLabel: "Informações",
              component: Informacoes,
            },
          ]
        : [
            {
              tabLabel: "Informações",
              component: Informacoes,
            },
          ],
    [turma.turmaDados?.id]
  );

  return (
    <>
      <div>
        <Breadcrumb links={linksBreadcrumb} />
        <TitleBody titleLabel="Informações Gerais" />
        <TabsLayout tabs={tabsComplete} />
      </div>
    </>
  );
};

export default InformacoesGerais;
