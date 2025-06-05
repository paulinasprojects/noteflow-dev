import { useModalContext } from "../context/modal-context";
import { navigationLinks } from "../data/content"
import { Logo } from "./icons";
import { MobileMenu } from "./mobile-menu";
import { MobileMenuIcon } from "./mobile-menu-icon";
import { Modal } from "./modals/modal";
import { SignUpModal } from "./modals/sign-up-modal";

interface NavbarProps {
  children: React.ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  const { setActiveModal } = useModalContext();

  return (
    <header className="bg-gradient-to-bottom py-10 max-xl:py-8 max-lg:pb-24 max-md:pt-11 max-md:pb-24 max-sm:pt-8">
      <nav className="text-primary-50 m-auto flex justify-between max-w-[90rem] px-24 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8 max-md:px-6">
        <a href="#" className="flex items-center gap-x-3 max-md:gap-x-2">
          <Logo className="h-6 max-md:h-5" width={5}/>
          <p className="text-xl font-bold tracking-tight max-xl:text-xl max-md:text-lg/8 max-md:tracking-tighter">NoteFlow</p>
        </a>
        <ul className="flex items-center gap-x-8 max-xl:gap-x-6 max-lg:hidden">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="hover:text-primary-500 transition-properties">
                {link.link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-3 max-lg:hidden">
          <button className="border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 box-border cursor-pointer rounded-full border-2 py-3.5 px-8 font-normal text-lg/8 max-xl:px-6 max-xl:py-3 max-xl:text-base/loose">
            Login
          </button>
          <button 
            className="bg-primary-500 border-primary-500 text-primary-1300 hover:border-primary-50 hover:bg-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 font-normal primary-glow primary-glow-hover text-lg/8 max-xl:px-6 max-xl:py-3 max-xl:text-base/loose" 
            onClick={() => setActiveModal("sign-up")}>
            Get Started
          </button>
        </div>
        <MobileMenuIcon/>
      </nav>
      {children}
        <Modal modal="sign-up">
          <SignUpModal/>
        </Modal>
        <MobileMenu/>
    </header>
  )
}
