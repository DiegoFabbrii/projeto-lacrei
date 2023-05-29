import * as React from "react";

import { Container } from "../container";

import { StaticImage } from "gatsby-plugin-image";

import { Title } from "../title";
import { TextWithLine } from "../textWithLine";

export const ProfessionalPage = () => {
  return (
    <Container>
      <div>
        <Title>Profissional</Title>

        <TextWithLine>
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </TextWithLine>
      </div>

      <StaticImage
        src="../../assets/professional-page.svg"
        alt="imagem de ilustração da página pessoa profissional"
        quality={100}
      />
    </Container>
  );
};
