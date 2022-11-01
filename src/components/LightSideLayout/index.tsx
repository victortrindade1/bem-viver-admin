import React, { useState } from "react";

import TitlePage from "components/TitlePage";

import { Container, BodyLayout, Body } from "./styles";
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
      <BodyLayout onScroll={handleScroll}>
        <TitlePage titleLabel={titleLabel} scrollTop={scrollTop} />
        <Body>{children}</Body>
      </BodyLayout>
    </Container>
  );
};

export default LightSideLayout;
