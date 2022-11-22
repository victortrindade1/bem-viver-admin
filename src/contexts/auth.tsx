import React, { createContext, useState, useEffect, useContext } from "react";
import signInService from "../services/authService";
import api from "services/api";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  async function signIn(data: IAuth) {
    const response = await signInService(data);

    setUser(response.data.user);

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

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

  function updateUser(data: IUser) {
    setUser(data);
  }

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem("@AdminAuth:user");
      const storagedToken = await localStorage.getItem("@AdminAuth:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));

        // Token da session da API
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(
          storagedToken
        )}`;
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
