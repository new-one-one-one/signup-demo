import { ReactNode } from "react";

export interface CardContainerProps {
    header: ReactNode;
    footer: ReactNode;
    body: ReactNode;
    width: string;
    shadow: boolean;
  }
  