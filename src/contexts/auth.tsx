import React, { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import signInService from "../services/authService";
import api from "services/api";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  async function signIn(data: IAuth) {
    const response = await signInService(data);
    // console.log(response);
    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  }

  async function signOut() {
    setUser(null);
    // <Navigate to="/login" replace />;
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
