import React from "react";

import TitlePage from "components/TitlePage";

import { Container } from "./styles";

const Professores: React.FC = () => {
  return (
    <Container>
      <TitlePage titleLabel="Professores" />
    </Container>
  );
};

export default Professores;
