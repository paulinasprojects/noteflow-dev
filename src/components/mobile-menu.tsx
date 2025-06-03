import { motion } from "motion/react"
import { Close } from "./icons"
import { navigationLinks } from "../data/content"
import { useMobileMenuContext } from "../context/mobile-menu-context";
import { useModalContext } from "../context/modal-context";

export const MobileMenu = () => {
  const {mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();
  const {setActiveModal} = useModalContext();

  function handleGetStarted() {
    setMobileMenuOpened(false);
    setActiveModal("sign-up")
  }

  return (
    <motion.div className="bg-primary-1300/50 fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-end px-6 pl-28 py-6 backdrop-blur-sm"
      animate={mobileMenuOpened ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          visibility: "hidden",
        },
        visible: {
          opacity: 1,
          visibility: "visible",
        },
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <motion.div className="bg-primary-1400 flex basis-80 flex-col justify-between rounded-2xl bg-[url('/src/assets/Noise.webp')] bg-repeat px-6 py-8"
        animate={mobileMenuOpened ? "visible" : "hidden"}
        variants={{
        hidden: {
          opacity: 0,
          visibility: "hidden",
          x: "100%",
        },
        visible: {
          x: "0%",
          opacity: 1,
          visibility: "visible",
        },
      }}
       transition={{
        duration: 0.25,
        ease: "easeInOut"
      }}
      >
        <div>
          <button className="border-primary-75 hover:bg-primary-75 group transition-properties mr-auto w-fit cursor-pointer rounded-2xl border-2 p-3" onClick={() => setMobileMenuOpened(false)}>
            <Close className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties h-4 w-4" width={2}/>
          </button>
          <ul className="mt-16 flex flex-col gap-y-6">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="text-primary-50 hover:text-primary-500 transition-properties text-lg/8">
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <button className="border-primary-50 transition-properties text-primary-50 hover:bg-primary-50 hover:text-primary-1300 box-border cursor-pointer rounded-full border-2 py-3 px-6 text-base/loose">Login</button>
          <button className="bg-primary-500 border-primary-500 text-primary-1300 hover:border-primary-50 hover:bg-primary-50 transition-properties cursor-pointer rounded-full border-2 px-6 py-3 primary-glow primary-glow-hover text-base/loose text-center" onClick={handleGetStarted}>Get Started</button>
        </div>
      </motion.div>
    </motion.div>
  )
}
