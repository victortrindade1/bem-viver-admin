import React from "react";

import BodyMenu from "./BodyMenu";

import { Container, BodyContainer } from "./styles";

interface IBodyLayout extends IBodyMenu {
  children: JSX.Element;
}

const BodyLayout: React.FC<IBodyLayout> = ({
  children,
  links,
  backgroundColor,
}: IBodyLayout) => {
  // const breakpoint = useMediaQuery("(max-width:600px)");

  return (
    <Container>
      {links && <BodyMenu links={links} backgroundColor={backgroundColor} />}
      <BodyContainer backgroundColor={backgroundColor}>
        {children}
      </BodyContainer>
    </Container>
  );
};

export default BodyLayout;
