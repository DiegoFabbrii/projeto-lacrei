import styled from "styled-components";

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
