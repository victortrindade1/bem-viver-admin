import React from "react";

import TitlePage from "components/TitlePage";

import { Container } from "./styles";

const Financeiro: React.FC = () => {
  return (
    <Container>
      <TitlePage titleLabel="Financeiro" />
    </Container>
  );
};

export default Financeiro;
