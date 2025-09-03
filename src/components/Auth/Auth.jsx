"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // ❌ direct localStorage call hata diya

  // ✅ localStorage ko useEffect ke andar access kiya (sirf client pe chalega)
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // ✅ token state bhi update karo
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIN", isLoggedIn);

  const LogoutUser = () => {
    setToken(null); // ✅ "" ke jagah null use karo
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return AuthContextValue;
};
