import { useState } from "react";
import { frequentlyAskedQuestions } from "../../data/content";
import { FaqList } from "./faq-list";
import classNames from "../../lib/utils";

export const Faqs = () => {
  const [category, setCategory] = useState("General");
  const [activeQuetion, setActiveQuestion] = useState<null | number>(null);

const categoryObj = frequentlyAskedQuestions.filter((obj) => obj.category === category)[0];

const questionsArray = categoryObj.questions;

const handleQuestionClick = (id:number) => id === activeQuetion ? setActiveQuestion(null) : setActiveQuestion(id);

const handleCategoryClick = (category: string) => {
  setActiveQuestion(null);
  setCategory(category);
}


  return (
    <section className="bg-gradient-to-bottom justify-items-center">
      <div className="w-full max-w-[90rem] py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <h2 className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-md:mb-4">Frequently Asked Questions</h2>
        <div className="mb-8 text-xl/loose font-light max-lg:text-lg/8">
          <p className="text-primary-100 text-center">The most commonly asked questions about NoteFlow. <br className="max-md:hidden" />
            Have any other questions? <a href="#" className="underline decoration-1 underline-offset-3">Chat with our expert tech team.</a>
          </p>
        </div>
        <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4 max-lg:mb-18">
          {frequentlyAskedQuestions.map((obj) => (
            <li key={obj.id}>
              <button 
                className={classNames("border-primary-50 text-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 max-xl:px-6 max-xl:text-base/loose",
                  obj.category === category && "bg-primary-500 text-primary-1300 border-primary-500 primary-glow",
                  obj.category !== category && "hover:bg-primary-50 hover:text-primary-1300",
                )}
                onClick={() => handleCategoryClick(obj.category)} 
                >
                  {obj.category}
                </button>
            </li>
          ))}
        </ul>
        <FaqList
          category={category}
          questions={questionsArray}
          activeQuestion={activeQuetion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  )
}
