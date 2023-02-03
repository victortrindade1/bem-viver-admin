import React from "react";
import { FaUserPlus, FaCommentDollar, FaPaperPlane } from "react-icons/fa";

import DarkSideLayout from "components/DarkSideLayout";
import LightSideLayout from "components/LightSideLayout";
import BodyMenu from "components/BodyMenu";

const Alunos: React.FC = () => {
  const links = [
    {
      label: "Novo",
      Icon: FaUserPlus,
      url: "/alunos/novo",
    },
    {
      label: "Cobranças",
      Icon: FaCommentDollar,
      url: "/alunos",
      // disabled: true,
    },
    {
      label: "Notificações",
      Icon: FaPaperPlane,
      url: "/alunos",
      // disabled: true,
    },
  ];

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
