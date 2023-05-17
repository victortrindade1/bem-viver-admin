import React, { useMemo } from "react";

import Breadcrumb from "components/Breadcrumb";
import TitleBody from "components/TitleBody";
// import TabsLayout from "components/TabsLayout";

// import { useAppSelector } from "hooks";
// import { selectTurma } from "store/slices/turma";

// import { Container } from './styles';

const InformacoesGerais: React.FC = () => {
  // const turma = useAppSelector(selectTurma);

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

  return (
    <>
      <div>
        <Breadcrumb links={linksBreadcrumb} />
        <TitleBody titleLabel="Informações Gerais" />
      </div>
    </>
  );
};

export default InformacoesGerais;
