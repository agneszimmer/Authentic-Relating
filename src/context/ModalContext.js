import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalState = ({ children }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ loginModalOpen, setLoginModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
