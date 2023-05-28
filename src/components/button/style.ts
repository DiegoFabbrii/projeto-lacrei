import styled from "styled-components";
import { ButtonStyleProps } from ".";

export const Button = styled.button<ButtonStyleProps>`
  width: 192px;
  height: 48px;

  font-size: 1.125rem;
  font-weight: 700;

  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 8px;
  border: ${({ borderColor }) => `2px solid ${borderColor}`};

  cursor: pointer;

  transition: 0.2s;

  :hover {
    filter: brightness(130%);
  }
`;
