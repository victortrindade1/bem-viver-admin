import React from "react";

import TitlePage from "components/TitlePage";

import { Container, BodyLayout, Body, Scrollable } from "./styles";
import { useScrollTop } from "contexts/scrollTop";
interface ILightSideLayout {
  titleLabel: string;
  children: React.ReactNode;
}

const LightSideLayout: React.FC<ILightSideLayout> = ({
  titleLabel,
  children,
}) => {
  const { scrollTop, updateScrollTop } = useScrollTop();

  return (
    <Container>
      <BodyLayout>
        <Scrollable
          onScroll={(event) => updateScrollTop(event.currentTarget.scrollTop)}
        >
          <TitlePage titleLabel={titleLabel} scrollTop={scrollTop} />
          <Body>{children}</Body>
        </Scrollable>
      </BodyLayout>
    </Container>
  );
};

export default LightSideLayout;
