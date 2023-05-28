import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
