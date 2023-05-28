import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
  color: #1f1f1f;

  @media only screen and (max-width: 1040px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 520px) {
    text-align: center;
    font-size: 1.75rem;
  }
`;

export const ContentContainer = styled.div`
  position: relative;

  margin-top: 32px;
`;

export const Text = styled.p`
  max-width: 521px;

  font-size: 1.5rem;
  color: #515151;

  margin-left: 18px;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 4px;
    height: 100%;

    background-color: #018762;
  }

  @media only screen and (max-width: 1040px) {
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 520px) {
    text-align: center;
    font-size: 1rem;
  }
`;
