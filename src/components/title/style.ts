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
