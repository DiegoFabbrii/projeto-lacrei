import styled from "styled-components";
import { ButtonStyleProps } from ".";

export const Button = styled.button<ButtonStyleProps>`
  width: 192px;
  height: 48px;

  font-size: 1.125rem;
  font-weight: 700;

  background-color: ${({ bgColor }) => bgColor};

  border-radius: 8px;
  border: ${({ borderColor }) => `2px solid ${borderColor}` || "none"};

  cursor: pointer;

  transition: 0.2s;

  :hover {
    filter: brightness(130%);
  }

  a {
    color: ${({ textColor }) => textColor};
  }
`;
