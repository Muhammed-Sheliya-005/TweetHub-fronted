"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../Auth/Auth";
import { Logout } from "../Logout/Logout";

export default function Navigation() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleLogout = () => {
    router.push("/logout");  // ✅ redirect to home (ya /login agar chaho)
  };

  const handleSignupRedirect = () => {
    router.push("/signup");
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white tracking-wide">
          Simple Text Based chatting app
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex gap-6 items-center text-white font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            {isLoggedIn ?
            <li>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
                >
                  Logout
                </button>
              </li>
              : <>
              <li>
              <button
                onClick={handleSignupRedirect}
                type="button"
                className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Sign Up
              </button>
            </li>
            <li>
              <button
                onClick={handleLoginRedirect}
                type="button"
                className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Login
              </button>
            </li>
              
              </>}
          </ul>
        </nav>
      </div>
    </header>
  );
}
