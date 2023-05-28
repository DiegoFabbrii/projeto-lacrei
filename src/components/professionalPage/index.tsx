import * as React from "react";

import { Container } from "../container";

import { StaticImage } from "gatsby-plugin-image";

import * as S from "./style";

export const ProfessionalPage = () => {
  return (
    <Container>
      <div>
        <S.Title>Profissional</S.Title>

        <S.ContentContainer>
          <S.Text>
            Buscamos recrutar pessoas profissionais da saúde que entendam as
            necessidades e se comprometam com o bem-estar da comunidade
            LGBTQIAPN+
          </S.Text>
        </S.ContentContainer>
      </div>

      <StaticImage
        src="../../assets/professional-page.svg"
        alt="imagem de ilustração da página pessoa profissional"
        quality={100}
      />
    </Container>
  );
};
