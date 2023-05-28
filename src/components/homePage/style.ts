import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1f1f1f;

  max-width: 453px;

  @media only screen and (max-width: 1050px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 520px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: #515151;

  max-width: 403px;

  margin: 32px 0 48px 0;

  @media only screen and (max-width: 1050px) {
    margin: 16px 0 48px 0;
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 520px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 70px;

  max-width: 453px;

  @media only screen and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Svg = styled.div``;
