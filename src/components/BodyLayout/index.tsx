import React from "react";

import BodyMenu from "./BodyMenu";

import { Container, BodyContainer, BodyMenuContainer } from "./styles";

interface IBodyLayout extends IBodyMenu {
  children: JSX.Element;
}

const BodyLayout: React.FC<IBodyLayout> = ({
  children,
  links,
}: IBodyLayout) => {
  // const breakpoint = useMediaQuery("(max-width:600px)");

  return (
    <Container>
      <BodyMenuContainer>
        {links && <BodyMenu links={links} />}
      </BodyMenuContainer>
      <BodyContainer>{children}</BodyContainer>
    </Container>
  );
};

export default BodyLayout;
