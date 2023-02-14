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
import { useAppSelector } from "hooks";
import { selectAluno } from "store/slices/aluno";

const Aluno: React.FC<IChildren> = ({ children }) => {
  const aluno = useAppSelector(selectAluno);

  const links = [
    {
      label: "Cadastro",
      Icon: FaAddressCard,
      url: `/aluno/${aluno.alunoDados.id}/cadastro`,
    },
    {
      label: "Contatos",
      Icon: FaAddressBook,
      url: `/aluno/${aluno.alunoDados.id}/contatos`,
    },
    {
      label: "Dados Escolares",
      Icon: FaGraduationCap,
      url: `/aluno/${aluno.alunoDados.id}/dadosescolares`,
    },
    {
      label: "Anamnese",
      Icon: FaHeartbeat,
      url: `/aluno/${aluno.alunoDados.id}/anamnese`,
    },
    {
      label: "Cobranças",
      Icon: FaMoneyCheckAlt,
      url: "/alunos",
    },
  ];

  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel={aluno.alunoDados.nome}>
        {children}
      </LightSideLayout>
    </>
  );
};

export default Aluno;
