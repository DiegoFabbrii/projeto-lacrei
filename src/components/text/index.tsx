import * as React from "react";
import * as S from "./style";

export interface TextProps {
  children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return <S.Text>{children}</S.Text>;
};
