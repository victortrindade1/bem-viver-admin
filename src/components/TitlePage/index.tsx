import React from "react";

import { Container } from "./styles";

interface ITitlePage {
  titleLabel: string;
}

const TitlePage: React.FC<ITitlePage> = ({ titleLabel }: ITitlePage) => {
  return (
    <Container>
      <h1>{titleLabel}</h1>
    </Container>
  );
};

export default TitlePage;
