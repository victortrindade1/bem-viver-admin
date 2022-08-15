import React from "react";

import TitlePage from "components/TitlePage";

import { Container } from "./styles";

const Turmas: React.FC = () => {
  return (
    <Container>
      <TitlePage titleLabel={"Turmas"} />
    </Container>
  );
};

export default Turmas;
