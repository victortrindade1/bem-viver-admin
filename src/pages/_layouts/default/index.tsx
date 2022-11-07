import React from "react";

import { ScrollTopProvider } from "contexts/scrollTop";

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
      <BodyChildren>
        <ScrollTopProvider>{children}</ScrollTopProvider>
      </BodyChildren>
      <Footer />
    </Wrapper>
  );
}
