import styled from "styled-components";

export const Container = styled.header`
  background-color: #eee;
  height: 60px;
`;

export const Navigation = styled.nav`
  max-width: 1238px;
  width: 90%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  @media only screen and (max-width: 529px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;

  font-weight: 700;

  @media only screen and (max-width: 529px) {
    font-size: 0.875rem;
  }
`;
