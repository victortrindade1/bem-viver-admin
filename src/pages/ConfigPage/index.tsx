import React from "react";

import TitlePage from "components/TitlePage";

import { Container } from "./styles";

const ConfigPage: React.FC = () => {
  return (
    <Container>
      <TitlePage titleLabel={"Configurações"} />
    </Container>
  );
};

export default ConfigPage;
