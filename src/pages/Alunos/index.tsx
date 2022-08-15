import React from "react";
import { FaUser } from "react-icons/fa";

import TitlePage from "components/TitlePage";
import BodyLayout from "components/BodyLayout";

import { Container } from "./styles";

const links = [
  {
    label: "Novo",
    icon: FaUser,
    url: "/alunos",
  },
];

const Alunos: React.FC = () => {
  return (
    <Container>
      <TitlePage titleLabel={"Alunos"} />
      <BodyLayout links={links}>
        <h2>Consultar Alunos</h2>
      </BodyLayout>
    </Container>
  );
};

export default Alunos;
