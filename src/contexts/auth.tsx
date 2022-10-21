import React, { createContext, useState, useEffect } from "react";
import signInService from "../services/authService";
import api from "services/api";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  async function signIn(data: IAuth) {
    const response = await signInService(data);

    setUser(response.data.user);

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    await localStorage.setItem(
      "@AdminAuth:user",
      JSON.stringify(response.data.user)
    );
    await localStorage.setItem(
      "@AdminAuth:token",
      JSON.stringify(response.data.token)
    );
  }

  async function signOut() {
    await localStorage.clear();

    setUser(null);
  }

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem("@AdminAuth:user");
      const storagedToken = await localStorage.getItem("@AdminAuth:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
