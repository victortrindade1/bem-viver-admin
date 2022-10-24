import React from "react";

import {
  Container,
  DarkSideContainer,
  DarkSide,
  LogoStyled,
  Text,
  LightSideContainer,
  LightSide,
} from "./styles";

interface Ichildren {
  children: React.ReactNode;
}

const auth = ({ children }: Ichildren) => {
  return (
    <Container>
      <DarkSideContainer>
        <DarkSide>
          <LogoStyled />
          <Text>Sistema Administrativo</Text>
        </DarkSide>
      </DarkSideContainer>
      <LightSideContainer>
        <LightSide>{children}</LightSide>
      </LightSideContainer>
    </Container>
  );
};

export default auth;
