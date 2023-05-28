import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../container";

import * as S from "./style";

export const UserPage = () => {
  return (
    <Container>
      <div>
        <S.Title>Pessoa Usuária</S.Title>
        <S.ContentContainer>
          <S.Text>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora.
          </S.Text>
        </S.ContentContainer>
      </div>

      <StaticImage
        src="../../assets/user-page.svg"
        alt="imagem de ilustração da página pessoa usuária"
        quality={100}
      />
    </Container>
  );
};
