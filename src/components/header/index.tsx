import * as React from "react";

import * as S from "./style";

import { Link } from "gatsby";

import { links } from "../../data/links";

export const Header = () => {
  return (
    <S.Container>
      <S.Navigation>
        <S.Logo>
          <Link to="/">Lacrei</Link>
        </S.Logo>

        <S.NavList>
          {links.map(({ label, link }) => (
            <li key={label}>
              <Link to={link}>{label}</Link>
            </li>
          ))}
        </S.NavList>
      </S.Navigation>
    </S.Container>
  );
};
