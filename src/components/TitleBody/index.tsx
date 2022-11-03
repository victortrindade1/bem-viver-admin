import React from "react";

import { Container } from "./styles";

interface ITitleBody {
  titleLabel: string;
}

const TitleBody: React.FC<ITitleBody> = ({ titleLabel }) => {
  return <Container>{titleLabel}</Container>;
};

export default TitleBody;
