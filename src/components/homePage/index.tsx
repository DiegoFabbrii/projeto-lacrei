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
          <Link to="/pessoa-usuaria">
            <Button bgColor="#018762" textColor="#fff">
              Pessoa Usuária
            </Button>
          </Link>

          <Link to="/pessoa-profissional">
            <Button bgColor="#fff" borderColor="#018762" textColor="#018762">
              Profissional
            </Button>
          </Link>
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
