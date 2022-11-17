import React from "react";
import {
  FaAddressCard,
  FaAddressBook,
  FaGraduationCap,
  FaHeartbeat,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";
import { IChildren } from "types/layout";

const links = [
  {
    label: "Cadastro",
    Icon: FaAddressCard,
    url: "/aluno/1/cadastro",
  },
  {
    label: "Contatos",
    Icon: FaAddressBook,
    url: "/aluno/1/contatos",
  },
  {
    label: "Dados Escolares",
    Icon: FaGraduationCap,
    url: "/aluno/1/dadosescolares",
  },
  {
    label: "Anamnese",
    Icon: FaHeartbeat,
    url: "/aluno/1/anamnese",
  },
  {
    label: "Cobranças",
    Icon: FaMoneyCheckAlt,
    url: "/alunos",
  },
  {
    label: "fewfefe",
    Icon: FaMoneyCheckAlt,
    url: "/alunos",
  },
  {
    label: "hrthht",
    Icon: FaMoneyCheckAlt,
    url: "/alunos",
  },
  {
    label: "sdqwdwd",
    Icon: FaMoneyCheckAlt,
    url: "/alunos",
  },
];

const Aluno: React.FC<IChildren> = ({ children }) => {
  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel="Fulano Azeredo Trindade Torres">
        {children}
      </LightSideLayout>
    </>
  );
};

export default Aluno;
