import React from "react";

import { Container } from "./styles";

interface Ichildren {
  children: React.ReactNode;
}

const auth = ({ children }: Ichildren) => {
  return <Container>{children}</Container>;
};

export default auth;
