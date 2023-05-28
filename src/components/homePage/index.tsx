import * as React from "react";
import * as S from "./style";

import { Button } from "../button";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import { Container } from "../container";

export const HomePage = () => {
  return (
    <Container>
      <div>
        <S.Title>Boas vindas a Lacrei Saúde</S.Title>

        <S.Text>
          Uma plataforma segura e acolhedora para a comunidade LGBTQIAPN+
        </S.Text>

        <S.ButtonsContainer>
          <Button bgColor="#018762" textColor="#fff">
            <Link to="/pessoa-usuaria">Pessoa Usuária</Link>
          </Button>

          <Button bgColor="#fff" borderColor="#018762" textColor="#018762">
            <Link to="/pessoa-profissional">Profissional</Link>
          </Button>
        </S.ButtonsContainer>
      </div>

      <S.Svg>
        <StaticImage
          src="../../assets/home.svg"
          alt="Imagem ilustrativa da página inicial"
          quality={100}
        />
      </S.Svg>
    </Container>
  );
};
