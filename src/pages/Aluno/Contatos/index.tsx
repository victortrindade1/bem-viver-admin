import React from "react";

import TabsLayout from "components/TabsLayout";
import TitleBody from "components/TitleBody";

import ContatosPessoais from "./ContatosPessoais";
import AutorizadosABuscar from "./AutorizadosABuscar";

const ContatosAluno: React.FC = () => {
  const tabs = [
    {
      tabLabel: "Contatos Pessoais",
      component: ContatosPessoais,
    },
    {
      tabLabel: "Autorizados a Buscar",
      component: AutorizadosABuscar,
    },
  ];
  return (
    <>
      <div>
        <TitleBody titleLabel="Contatos" />
        <TabsLayout tabs={tabs} />
      </div>
    </>
  );
};

export default ContatosAluno;
