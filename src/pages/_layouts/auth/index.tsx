import React from "react";

import { Container } from "./styles";

interface Iauth {
  children: React.ReactNode;
}

const auth = ({ children }: Iauth) => {
  return <Container>{children}</Container>;
};

export default auth;
