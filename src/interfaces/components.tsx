import { ReactNode } from "react";

export interface CardContainerProps {
  header: ReactNode;
  footer: ReactNode;
  body: ReactNode;
  width: string;
  shadow: boolean;
}


export interface LabelWithValueProps {
  errorMessage?: string;
  label: string;
  alignment: 'horizontal' | 'vertical';
  separator: ReactNode;
  valueComponent: ReactNode;
  helperText?: string;
  isRequired?: boolean;
}

export enum ALIGNMENT_TYPE {
  HORIZONTAL="horizontal",
  VERTICAL="vertical"
}
  