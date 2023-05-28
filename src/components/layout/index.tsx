import * as React from "react";
import GlobalStyle from "../../styles/Global";

import { Header } from "../header";
import { Footer } from "../footer";

import * as S from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <Header />
      <S.Container>{children}</S.Container>
      <Footer />
    </S.Wrapper>
  );
};
