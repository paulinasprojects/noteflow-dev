import type { questionType } from "../../data/types";

interface Props {
   question: questionType;
   activeQuestion: null | number;
   handleQuestionClick: (id: number) => void;
}

export const Faq = ({ question, activeQuestion, handleQuestionClick }: Props) => {
  return (
    <div>Faq</div>
  )
}
