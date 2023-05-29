import styled from "styled-components";

export const Container = styled.footer`
  max-width: 1238px;
  width: 90vw;

  margin: 0 auto;
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 40px;

  margin-top: 32px;

  a {
    color: #1f1f1f;

    :hover {
      filter: brightness(170%);
    }
  }

  [aria-current="page"] {
    font-weight: 700;
  }

  @media only screen and (max-width: 520px) {
    flex-direction: column;
    gap: 5px;

    font-size: 0.875rem;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 40px;

  margin: 28px 0;
`;

export const SocialMediaItem = styled.a`
  transition: 0.2s;
  :hover {
    color: #6d6d6d;
  }
`;

export const Span = styled.span`
  color: #515151;
  font-size: 0.75rem;

  margin-bottom: 8px;
`;
