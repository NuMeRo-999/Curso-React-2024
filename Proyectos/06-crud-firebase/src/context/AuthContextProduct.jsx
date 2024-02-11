import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuhtProvider = ({children}) => {
  const [userFirebase, setUserFirebase] = useState(null);

  const singInFirebase = (userData) => {
    setUserFirebase(userData);
  }

  const singOutFirebase = () => {
    setUserFirebase(null);
  }

  return (
    <AuthContext.Provider value={{ userFirebase, setUserFirebase, singInFirebase, singOutFirebase }}>
      {children}
    </AuthContext.Provider>
  )

}

export const AuthContextProduct = () => useContext(AuthContext);
