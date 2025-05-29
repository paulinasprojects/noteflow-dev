import { useContext, createContext, useState } from "react"


type ModalContextType = {
  activeModal: string;
  setActiveModal: React.Dispatch<React.SetStateAction<string>>;
};

 const ModalContext = createContext<ModalContextType>({
  activeModal: "",
  setActiveModal: () => {},
});

  function ModalContextProvider ({children}: {children: React.ReactNode}) {
    const [activeModal, setActiveModal] = useState("");

    return (
      <ModalContext.Provider value={{activeModal, setActiveModal}}>
        {children}
      </ModalContext.Provider>
    )
  }


function useModalContext() {
  return useContext(ModalContext)
};


export {
  useModalContext,
  ModalContextProvider,
}