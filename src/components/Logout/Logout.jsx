"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../Auth/Auth";

export const Logout = () => {
    const router = useRouter();
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();
        router.push("/login")
    }, [LogoutUser]);

    return <p>Logging out...</p>
}