import React from "react";
import { FaUserPlus, FaCommentDollar, FaPaperPlane } from "react-icons/fa";

import TitlePage from "components/TitlePage";
import BodyLayout from "components/BodyLayout";

import { Container } from "./styles";
import theme from "styles/theme";

const links = [
  {
    label: "Novo",
    Icon: FaUserPlus,
    url: "/alunos",
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

const Alunos: React.FC = (props) => {
  console.tron.log(props);
  return (
    <Container>
      <TitlePage titleLabel={"Alunos"} />
      <BodyLayout links={links} backgroundColor={theme.logo.azul}>
        <h2>Consultar Alunos</h2>
      </BodyLayout>
    </Container>
  );
};

export default Alunos;
