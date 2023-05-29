import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { Container } from "../container";
import { Title } from "../title";
import { TextWithLine } from "../textWithLine";

export const UserPage = () => {
  return (
    <Container>
      <div>
        <Title>Pessoa Usuária</Title>
        <TextWithLine>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </TextWithLine>
      </div>

      <StaticImage
        src="../../assets/user-page.svg"
        alt="imagem de ilustração da página pessoa usuária"
        quality={100}
      />
    </Container>
  );
};
