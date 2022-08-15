import React from "react";

import BodyMenu from "./BodyMenu";

import { Container, BodyContainer } from "./styles";

interface IBodyLayout extends IBodyMenu {
  children: JSX.Element;
}

const BodyLayout: React.FC<IBodyLayout> = ({
  children,
  links,
}: IBodyLayout) => {
  return (
    <Container>
      {links && <BodyMenu links={links} />}
      <BodyContainer>{children}</BodyContainer>
    </Container>
  );
};

export default BodyLayout;
