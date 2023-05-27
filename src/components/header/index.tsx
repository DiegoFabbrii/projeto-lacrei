import * as React from "react";
import * as S from "./style";
import { Link } from "gatsby";

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Navigation>
        <S.Logo>
          <Link to="/">Lacrei</Link>
        </S.Logo>

        <S.NavList>
          <li>Home</li>
          <li>Pessoa Usuário</li>
          <li>Profissional</li>
        </S.NavList>
      </S.Navigation>
    </S.Container>
  );
};
