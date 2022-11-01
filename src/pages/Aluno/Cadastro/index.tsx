import React from "react";
import { FaUserPlus, FaCommentDollar, FaPaperPlane } from "react-icons/fa";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";

import { TitleBody } from "./styles";

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

const CadastroAluno: React.FC = () => {
  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel="Aluno">
        <TitleBody>Cadastro</TitleBody>
      </LightSideLayout>
    </>
  );
};

export default CadastroAluno;
