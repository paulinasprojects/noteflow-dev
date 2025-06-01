import { useState } from "react"
import { testimonials as test } from "../../data/content";
import { TestimonialList } from "./testimonials-list";
import { CaretUp } from "../icons";
import classNames from "../../lib/utils";

export const Testimonials = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="bg-gradient-to-top">
      <div className="m-auto flex max-w-[90rem] flex-col items-center px-24 py-32 max-xl:px-16 max-xl:py-24">
        <div className="mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6">
          <p className="text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8">Testimonials</p>
          <h2 className="text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter max-xl:text-5xl/10">What our AI-powered <br />
            notetakers have to say
          </h2>
          <p className="text-primary-100 px-28 text-center text-xl/loose font-light">NoteFlow has helped 1000&apos;s supercharge their productivity with cutting edge AI note taking tools</p>
        </div>
          <div className="mb-20 grid grid-cols-3 gap-x-6 max-xl:gap-x-4">
            <TestimonialList testimonials={test.slice(0, expanded ? 5 : 2)}/>
            <TestimonialList testimonials={test.slice(5, expanded ? 10 : 7)}/>
            <TestimonialList testimonials={test.slice(10, expanded ? 15 : 12)}/>
          </div>
        <button 
          className="text-primary-50 border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 group cursor-pointer flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 text-lg/8 max-xl:px-6 mx-xl:py-3 max-xl:text-base/loose"
          onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? "Show less" : "Show more"}
            <CaretUp className={classNames(
              "stroke-primary-50 group-hover:stroke-primary-1300 rotate-180 transition-all duration-300",
              expanded && "rotate-360"
            )}
            width={2}
          />
          </button>
      </div>
    </section>
  )
}
