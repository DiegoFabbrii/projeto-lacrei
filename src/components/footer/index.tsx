import * as React from "react";
import * as S from "./style";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

export const Footer = () => {
  return (
    <S.Container>
      <S.FooterList>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/pessoa-usuaria">Pessoa Usuário</Link>
        </li>

        <li>
          <Link to="/pessoa-profissional">Profissional</Link>
        </li>
      </S.FooterList>
      <S.SocialMedias>
        <S.SocialMediaItem href="https://www.facebook.com/lacrei.saude">
          <StaticImage
            src="../../assets/facebook-logo.svg"
            alt="facebook logo"
          />
        </S.SocialMediaItem>

        <S.SocialMediaItem href="https://www.instagram.com/lacrei.saude/">
          <StaticImage
            src="../../assets/instagram-logo.svg"
            alt="instagram logo"
          />
        </S.SocialMediaItem>

        <S.SocialMediaItem href="https://www.linkedin.com/company/lacrei">
          <StaticImage
            src="../../assets/linkedin-logo.svg"
            alt="linkedin logo"
          />
        </S.SocialMediaItem>
      </S.SocialMedias>
    </S.Container>
  );
};
