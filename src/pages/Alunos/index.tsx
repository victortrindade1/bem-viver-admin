import React from "react";
import { FaUserPlus, FaCommentDollar, FaPaperPlane } from "react-icons/fa";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";

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

const Alunos: React.FC = () => {
  return (
    <>
      <DarkSideLayout>{links && <BodyMenu links={links} />}</DarkSideLayout>
      <LightSideLayout titleLabel="Alunos">
        <div></div>
      </LightSideLayout>
    </>
  );
};

export default Alunos;
