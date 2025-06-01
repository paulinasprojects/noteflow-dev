import { footerCols } from "../data/content";
import { Logo } from "./icons";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-bottom">
      <div className="m-auto flex max-w-[90rem] justify-between px-24 py-32 max-xl:px-16 max-xl:py-24">

        <div className="">
          <a href="#" className="flex items-center gap-x-3">
            <Logo className="stroke-primary-500" width={5}/>
            <p className="text-primary-50 text-xl font-bold tracking-tight">NoteFlow</p>
          </a>
        </div>

        <div className="grid grid-cols-[repeat(4,max-content)] gap-x-24 max-xl:gap-x-18">
          {footerCols.map((col) => (
            <div className="" key={col.id}>
              <p className="text-primary-50 mb-8 text-xl/loose font-semibold">{col.category}</p>
              <ul className="flex flex-col gap-y-4">
                {col.links.map((link, i) => (
                  <li key={i} className="cursor-pointer">
                    <a href="#" className="text-primary-50 hover:text-primary-500 transition-properties text-lg/8 font-light max-xl:text-base/loose">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
