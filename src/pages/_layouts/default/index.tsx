import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";

import { Wrapper, BodyChildren } from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <Wrapper>
      <Header />
      <BodyChildren>{children}</BodyChildren>
      <Footer />
    </Wrapper>
  );
}
