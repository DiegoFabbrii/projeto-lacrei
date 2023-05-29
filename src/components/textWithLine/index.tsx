import * as React from "react";

import * as S from "./style";

import { TextProps } from "../text";

export const TextWithLine = ({ children }: TextProps) => {
  return (
    <S.ContentContainer>
      <S.Text>{children}</S.Text>
    </S.ContentContainer>
  );
};
