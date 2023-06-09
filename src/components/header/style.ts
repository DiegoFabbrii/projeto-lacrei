import styled from "styled-components";

export const Container = styled.header`
  background-color: #eee;
`;

export const Navigation = styled.nav`
  max-width: 1238px;
  width: 90%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 8px 0;

  @media only screen and (max-width: 529px) {
    flex-direction: column;
    justify-content: space-evenly;

    padding: 8px 0;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;

  a {
    color: #018762;
    transition: all 0.2s ease 0s;

    :hover {
      color: #00bc88;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;

  font-weight: 700;

  a {
    color: #1f1f1f;

    transition: all 0.2s ease 0s;

    :hover {
      color: #6d6d6d;
    }
  }

  a[aria-current="page"] {
    color: #018762;

    :hover {
      color: #00bc88;
    }
  }

  @media only screen and (max-width: 529px) {
    font-size: 0.875rem;
  }
`;
