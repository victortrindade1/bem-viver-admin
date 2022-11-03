import React from "react";
import { FaUserPlus, FaCommentDollar, FaPaperPlane } from "react-icons/fa";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
import TabsLayout from "components/TabsLayout";
import TitleBody from "components/TitleBody";

import DadosPessoais from "./DadosPessoais";
import Endereco from "./Endereco";

// import { TitleBody } from "./styles";

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

  const links = [
    {
      label: "Novo",
      Icon: FaUserPlus,
      url: "/professores",
    },
    {
      label: "Cobranças",
      Icon: FaCommentDollar,
      url: "/alunos",
    },
    {
      label: "Notificações",
      Icon: FaPaperPlane,
      url: "/alunos",
    },
  ];

  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel="Aluno">
        <TitleBody titleLabel="Cadastro" />
        <TabsLayout tabs={tabs} />
      </LightSideLayout>
    </>
  );
};

export default CadastroAluno;
