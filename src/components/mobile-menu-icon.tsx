import { motion } from "motion/react";
import { Menu } from "./icons";
import { useMobileMenuContext } from "../context/mobile-menu-context";

export const MobileMenuIcon = () => {
  const {mobileMenuOpened, setMobileMenuOpened} = useMobileMenuContext();
  return (
    <motion.button 
      animate={{
        rotate: mobileMenuOpened ? 90 : 0,
      }}
      transition={{duration: 0.2, ease: "easeInOut"}}
      className="hidden justify-center items-center max-lg:flex cursor-pointer"
      onClick={() => setMobileMenuOpened(true)}
      >
      <Menu className="stroke-primary-50 h-7 w-7" width={2}/>
    </motion.button>
  )
}
