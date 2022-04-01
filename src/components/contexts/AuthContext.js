import React ,{  useContext } from 'react';

export default React.createContext({});


const AuthContext = React.createContext()

export function AuthProvider({children, value}) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}