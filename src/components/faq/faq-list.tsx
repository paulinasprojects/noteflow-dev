import { useState } from "react";
import { motion } from "motion/react";
import { Faq } from "./faq";
import type { questionsTypes } from "../../data/types";

interface Props {
  handleQuestionClick: (id: number) => void;
  category: string;
  questions: questionsTypes;
  activeQuestion: null | number;
}

export const FaqList = ({ handleQuestionClick, category, questions, activeQuestion }: Props) => {
  const [inView, setInView] = useState<boolean>(false);

  return (
    <motion.ul
      className="m-auto flex flex-col max-w-[51.625rem] gap-y-14"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      key={category}
      layout
      variants={{
        hidden: { opacity: 0 },
        visible: {
          transition: {
            staggerChildren: 0.25,
            ease: "easeIn",
          }
        },
      }}
      whileInView={{opacity: 1}}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{once: false}}
    >
      {questions.map((question) => (
        <Faq
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  )
}
