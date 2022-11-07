import React from "react";

import { useScrollTop } from "contexts/scrollTop";

import { Container } from "./styles";

interface ITitleBody {
  titleLabel: string;
  initialScroll?: number;
  finalScroll?: number;
}

const TitleBody: React.FC<ITitleBody> = ({
  titleLabel,
  initialScroll = 0,
  finalScroll,
}) => {
  const { scrollTop } = useScrollTop();

  return (
    <Container
      scrollTop={scrollTop}
      initialScroll={initialScroll}
      finalScroll={finalScroll}
    >
      {titleLabel}
    </Container>
  );
};

export default TitleBody;
