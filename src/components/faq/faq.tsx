import { motion } from "motion/react";
import type { questionType } from "../../data/types";
import { CaretUp } from "../icons";

interface Props {
   question: questionType;
   activeQuestion: null | number;
   handleQuestionClick: (id: number) => void;
}

export const Faq = ({ question, activeQuestion, handleQuestionClick }: Props) => {
  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li 
      variants={itemVariants}
      className="shrink-0 grow-0"
    >
      <button className="flex w-full cursor-pointer items-center" onClick={() => handleQuestionClick(question.id)}>
        <div className="border-primary-50 mr-6 rounded-xl border-2 p-3.5">
          <question.Icon  className="stroke-primary-50"/>
        </div>
        <p className="text-primary-50 mr-auto pr-4 text-left text-xl/loose font-medium tracking-tight">{question.question}</p>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center">
          <CaretUp
            activeQuestion={activeQuestion === question.id}
            className="stroke-primary-50"
            width={2.5}
          />
        </div>
      </button>
      <motion.p className="text-primary-100 pt-0 pr-14 pl-20 text-lg/8 font-light"
        initial={ {opacity: 0, maxHeight: 0, visibility: "hidden"} }
        animate={activeQuestion === question.id ? {
          opacity: 1,
          maxHeight: "300px",
          visibility: "visible",
          paddingTop: "1rem",
        } : {

        }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        layout
      >
        {question.answer}
      </motion.p>
    </motion.li>
  )
}
