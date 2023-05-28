import * as React from "react";
import * as S from "./style";

export interface ButtonStyleProps {
  bgColor: string;
  textColor: string;
  borderColor?: string;
  children: React.ReactNode;
}

export const Button = ({
  bgColor,
  textColor,
  borderColor = bgColor,
  children,
}: ButtonStyleProps) => {
  return (
    <S.Button bgColor={bgColor} borderColor={borderColor} textColor={textColor}>
      {children}
    </S.Button>
  );
};
