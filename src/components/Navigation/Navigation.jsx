"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../Auth/Auth";

export default function Navigation() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    router.push("/logout");
  };

  const handleSignupRedirect = () => {
    router.push("/signup");
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <header className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white tracking-wide">
         TweetHub
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-white font-medium">
          <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 transition-colors duration-300">
            Contact
          </Link>

              {/* ✅ Toggle Buttons */}
          {isLoggedIn && (
            <>
              <button
                className={`px-3 py-1 rounded ${view === "all" ? "bg-yellow-400 text-black" : "bg-blue-500 text-white"}`}
                onClick={() => {
                  setView("all")
                }}
              >
                All Tweets
              </button>
              <button
                className={`px-3 py-1 rounded ${view === "profile" ? "bg-yellow-400 text-black" : "bg-blue-500 text-white"}`}
                onClick={() => {
                  setView("profile")
                }}
              >
                My Profile
              </button>
            </>
          )}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={handleSignupRedirect}
                className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Sign Up
              </button>
              <button
                onClick={handleLoginRedirect}
                className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Login
              </button>
            </>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-300 px-6 pb-4 space-y-4 text-white font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">
            Contact
          </Link>

              {/* ✅ Mobile toggle buttons */}
          {isLoggedIn && (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setView("all")
                }}
                className={`flex-1 px-3 py-1 rounded ${view === "all" ? "bg-yellow-400 text-black" : "bg-blue-500 text-white"}`}
              >
                All Tweets
              </button>
              <button
                onClick={() => {
                  setView("profile")
                }}
                className={`flex-1 px-3 py-1 rounded ${view === "profile" ? "bg-yellow-400 text-black" : "bg-blue-500 text-white"}`}
              >
                My Profile
              </button>
            </div>
          )}

          {isLoggedIn ? (
            <button
              onClick={() => { handleLogout(); setMenuOpen(false); }}
              className="w-full px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => { handleSignupRedirect(); setMenuOpen(false); }}
                className="w-full px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Sign Up
              </button>
              <button
                onClick={() => { handleLoginRedirect(); setMenuOpen(false); }}
                className="w-full px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Login
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
