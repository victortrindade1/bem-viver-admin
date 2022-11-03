import React, { useState } from "react";

import TitlePage from "components/TitlePage";

import { Container, BodyLayout, Body, Scrollable } from "./styles";
interface ILightSideLayout {
  titleLabel: string;
  children: React.ReactNode;
}

const LightSideLayout: React.FC<ILightSideLayout> = ({
  titleLabel,
  children,
}) => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event: any) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <Container>
      <BodyLayout>
        <Scrollable onScroll={handleScroll}>
          <TitlePage titleLabel={titleLabel} scrollTop={scrollTop} />
          <Body>{children}</Body>
        </Scrollable>
      </BodyLayout>
    </Container>
  );
};

export default LightSideLayout;
