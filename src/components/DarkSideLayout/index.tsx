import React from "react";
import { IChildren } from "types/layout";

import { Container, BodyMenuContainer } from "./styles";

const DarkSideLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <Container>
      <BodyMenuContainer>{children}</BodyMenuContainer>
    </Container>
  );
};

export default DarkSideLayout;
