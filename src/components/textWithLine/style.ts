import styled from "styled-components";

export const ContentContainer = styled.div`
  position: relative;
`;

export const Text = styled.p`
  max-width: 521px;

  font-size: 1.5rem;
  color: #515151;

  margin-top: 32px;
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

    margin-top: 16px;
  }

  @media only screen and (max-width: 520px) {
    text-align: center;
    font-size: 1rem;
  }
`;
