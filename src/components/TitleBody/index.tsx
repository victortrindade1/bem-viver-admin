import React, { useState, useEffect } from "react";

import { useScrollTop } from "contexts/scrollTop";

import { Container, HiddenTitle } from "./styles";

interface ITitleBody {
  titleLabel: string;
  editedInitialScroll?: number | null;
  customFinalScroll?: number | null;
}

/**
 * Só funciona legal se todo o bloco estiver entre divs
 */
const TitleBody: React.FC<ITitleBody> = ({
  titleLabel,
  editedInitialScroll,
  customFinalScroll,
}) => {
  const { scrollTop } = useScrollTop();
  const [initialScroll, setInitialScroll] = useState<any>(0);
  const [finalScroll, setFinalScroll] = useState<any>(9999);

  const element = document.getElementById(titleLabel);
  // const nextElement = element?.parentElement?.nextElementSibling;

  useEffect(() => {
    setInitialScroll(
      editedInitialScroll
        ? editedInitialScroll
        : element?.parentElement && element?.parentElement?.offsetTop
    );
    setFinalScroll(
      customFinalScroll
        ? customFinalScroll
        : element?.parentElement &&
            element?.parentElement?.offsetHeight +
              element?.parentElement?.offsetTop
    );
  }, [element?.parentElement, customFinalScroll, editedInitialScroll]);

  // useEffect(() => {
  //   changedInitialScroll && setInitialScroll(changedInitialScroll);
  //   changedFinalScroll && setFinalScroll(changedFinalScroll);
  // }, [changedInitialScroll, changedFinalScroll]);

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
