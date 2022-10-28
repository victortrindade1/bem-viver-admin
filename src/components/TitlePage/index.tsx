import React from "react";

import { Container } from "./styles";

interface ITitlePage {
  titleLabel: string;
  scrollTop?: number;
}

const TitlePage: React.FC<ITitlePage> = ({
  titleLabel,
  scrollTop,
}: ITitlePage) => {
  if (scrollTop) {
    return <Container scrollTop={scrollTop}>{titleLabel}</Container>;
  }
  return <Container>{titleLabel}</Container>;
};

export default TitlePage;
