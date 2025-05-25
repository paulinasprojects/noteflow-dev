import type { questionsTypes } from "../../data/types";

interface Props {
  handleQuestionClick: (id: number) => void;
  category: string;
  questions: questionsTypes;
  activeQuestion: null | number;
}

export const FaqList = ({ handleQuestionClick, category, questions, activeQuestion }: Props) => {
  return (
    <div>FaqList</div>
  )
}
