import React, { createContext, useState, useEffect, useContext } from "react";
import signInService from "../services/authService";
import api from "services/api";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loadingLogin, setLoadingLogin] = useState(true);

  async function signIn(data: IAuth) {
    const response = await signInService(data);

    setUser(response.data.user);

    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

    // Login persist
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
        setLoadingLogin(false);

        // Token da session da API
        api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;
      }
    }

    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loadingLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
