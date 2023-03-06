import React, { useEffect, useState } from "react";

import { Container } from "./styles";

interface ITitlePage {
  titleLabel?: string;
  scrollTop?: number;
}

const TitlePage: React.FC<ITitlePage> = ({
  titleLabel,
  scrollTop,
}: ITitlePage) => {
  const [initialScroll, setInitialScroll] = useState(true);

  useEffect(() => {
    if (scrollTop && scrollTop > 30) {
      setInitialScroll(false);
    }
  }, [scrollTop]);

  return (
    <Container isInitialScroll={initialScroll} scrollTop={scrollTop}>
      {titleLabel}
    </Container>
  );
};

export default TitlePage;
