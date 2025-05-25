import type React from "react";

export type questionsTypes = {
  id: number;
  alt: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  question: string;
  answer: string;
}[];
export type questionType = {
  id: number;
  alt: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  question: string;
  answer: string;
};

export type testimonialsTypes = {
  id: number;
  rating: number;
  description: string;
  src: string;
  name: string;
  title: string;
}[];

export type testimonialType = {
  id: number;
  rating: number;
  description: string;
  src: string;
  name: string;
  title: string;
};
