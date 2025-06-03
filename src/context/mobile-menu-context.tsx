import { useContext, createContext, useState } from "react"

type MobileMenuContextType = {
  mobileMenuOpened: boolean;
  setMobileMenuOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenuContext = createContext<MobileMenuContextType>({
  mobileMenuOpened: false,
  setMobileMenuOpened: () => {}
}
);

function MobileMenuContextProvider({children}: {children: React.ReactNode}) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);
  return (
    <MobileMenuContext.Provider value={{mobileMenuOpened, setMobileMenuOpened}}>
      {children}
    </MobileMenuContext.Provider>
  )
}

function useMobileMenuContext() {
  const context = useContext(MobileMenuContext);
    if (context === undefined) {
       throw new Error("useMobileMenuContext must be within a MobileMenuContextProvider")
    }
  
    return context;
}

export {
  useMobileMenuContext,
  MobileMenuContextProvider,
};