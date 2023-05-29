import * as React from "react";
import * as S from "./style";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import { links } from "../../data/links";
import { socialMedias } from "../../data/socialMedias";

export const Footer = () => {
  return (
    <S.Container>
      <S.FooterList>
        {links.map(({ label, link }) => (
          <li key={label}>
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </S.FooterList>

      <S.SocialMedias>
        <S.SocialMediaItem
          href="https://www.facebook.com/lacrei.saude"
          target="_blank"
        >
          <StaticImage
            src="../../assets/facebook-logo.svg"
            alt="facebook logo"
          />
        </S.SocialMediaItem>

        <S.SocialMediaItem
          href="https://www.instagram.com/lacrei.saude/"
          target="_blank"
        >
          <StaticImage
            src="../../assets/instagram-logo.svg"
            alt="instagram logo"
          />
        </S.SocialMediaItem>

        <S.SocialMediaItem
          href="https://www.linkedin.com/company/lacrei"
          target="_blank"
        >
          <StaticImage
            src="../../assets/linkedin-logo.svg"
            alt="linkedin logo"
          />
        </S.SocialMediaItem>
      </S.SocialMedias>

      <S.Span>Desafio Front-End Lacrei</S.Span>
    </S.Container>
  );
};
