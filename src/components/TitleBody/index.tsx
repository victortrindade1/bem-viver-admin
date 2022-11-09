import React, { useState, useEffect } from "react";

import { useScrollTop } from "contexts/scrollTop";

import { Container, HiddenTitle } from "./styles";

interface ITitleBody {
  titleLabel: string;
}

/**
 * Só funciona legal se todo o bloco estiver entre divs
 */
const TitleBody: React.FC<ITitleBody> = ({ titleLabel }) => {
  const { scrollTop } = useScrollTop();
  const [initialScroll, setInitialScroll] = useState<any>(0);
  const [finalScroll, setFinalScroll] = useState<any>(9999);

  useEffect(() => {
    const element = document.getElementById(titleLabel);

    setInitialScroll(
      element?.parentElement && element?.parentElement?.offsetTop
    );
    setFinalScroll(
      element?.parentElement &&
        element?.parentElement?.offsetHeight + element?.parentElement?.offsetTop
    );
  }, [titleLabel]);

  return (
    <>
      <Container>{titleLabel}</Container>
      <HiddenTitle
        scrollTop={scrollTop}
        initialScroll={initialScroll}
        finalScroll={finalScroll}
        id={titleLabel}
      >
        {titleLabel}
      </HiddenTitle>
    </>
  );
};

export default TitleBody;
