import { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
    const [audio, setAudio] = useState(null);

  return (
    <Context.Provider
      value={{audio, setAudio}}
    >
      {children}
    </Context.Provider>
  );
};
export default Context;