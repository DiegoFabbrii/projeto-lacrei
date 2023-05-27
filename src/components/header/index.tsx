import * as React from "react";
import * as S from "./style";
import { Link } from "gatsby";

export const Header = () => {
  return (
    <S.Container>
      <S.Navigation>
        <S.Logo>
          <Link to="/">Lacrei</Link>
        </S.Logo>

        <S.NavList>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/pessoa-usuaria">Pessoa Usuário</Link>
          </li>

          <li>
            <Link to="/profissional">Profissional</Link>
          </li>
        </S.NavList>
      </S.Navigation>
    </S.Container>
  );
};
