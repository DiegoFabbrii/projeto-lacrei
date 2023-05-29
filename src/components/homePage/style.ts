import styled from "styled-components";

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
