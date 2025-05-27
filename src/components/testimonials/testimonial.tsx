import type { testimonialType } from "../../data/types";
import { motion } from "motion/react";
import { Star } from "../icons";

interface Props {
  testimonial: testimonialType;
}

export const Testimonial = ({ testimonial }: Props) => {
  return (
    <motion.li 
      className="bg-primary-1300 rounded-2xl px-8 py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{opacity: 1, y: 0}}
      viewport={{ once: false}}
      transition={{
        ease: "easeInOut",
        duration: 0.5
      }}
    >
      <div className="flex gap-x-1 pb-8">
        {Array.from({length: testimonial.rating}).map((_, i) => (
          <Star className="fill-primary-100" key={i}/>
        ))}
        {Array.from({length: 5 - testimonial.rating}).map((_, i) => (
          <Star key={i}/>
        ))}
      </div>
      <p className="text-primary-50 pb-16 text-lg/loose font-light">{testimonial.description}</p>
      <div className="flex items-center gap-x-6">
        <img src={testimonial.src} alt="Users images" className="h-18 rounded-full" />
        <div>
          <p className="text-primary-500 text-xl/7 font-bold tracking-tight">{testimonial.name}</p>
          <p className="text-primary-75 text-base/loose tracking-tight">{testimonial.title}</p>
        </div>
      </div>
    </motion.li>
  )
}
