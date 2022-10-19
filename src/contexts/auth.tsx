import React, { createContext, useState } from "react";
import signInService from "../services/authService";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn(data: IAuth) {
    const response = await signInService(data);
    setUser(response.data.user);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: {}, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
