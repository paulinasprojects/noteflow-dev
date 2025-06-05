import type { testimonialsTypes } from "../../data/types";
import { Testimonial } from "./testimonial";

interface Props {
  testimonials: testimonialsTypes;
}

export const TestimonialList = ({testimonials}: Props) => {
  return (
    <ul className="flex flex-col gap-y-6 max-xl:gap-y-4 max-lg:nth-[3]:hidden max-sm:nth-[2]:hidden">
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.name}
          testimonial={testimonial}
        />
      ))}
    </ul>
  )
}
