import React, { createContext, useState, useEffect, useContext } from 'react';


const AuthContext = createContext({ signed: false, user: {}, loading: true });

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(true);

  async function signIn() {
    console.log('deslogar')
    setSigned(false) 
  }

  function signOut() {
    setSigned(false);
    setUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        signed,
        user,
        signIn,

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const {
    signed,
    user,
    signIn,

  } = context;
  return {
    signed,
    user,
    signIn,

  };
}
