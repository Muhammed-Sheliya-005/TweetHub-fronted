"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../Auth/Auth";

export const Logout = () => {
  const router = useRouter();
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();             // ✅ sirf token clear kare
    router.replace("/dashboard");  // ✅ direct dashboard bhejo
  }, []);

  return <p>Logging out...</p>;
};
