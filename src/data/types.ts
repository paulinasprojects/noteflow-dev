import type React from "react";

export type questionsTypes = {
  id: number;
  alt: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  question: string;
  answer: string;
}[];
