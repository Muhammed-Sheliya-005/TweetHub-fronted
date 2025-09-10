"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "../Auth/Auth";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { storeTokenInLS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        { username, email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      router.push("/login");
      storeTokenInLS(res.data.token);

      alert(res.data.message);
      console.log(res.data);
    } catch (err) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong!");
      }
      console.log(err);
    }
  };

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* Signup Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-blue-900 mb-6">
          Create an Account
        </h1>

        {/* Username */}
        <label className="block text-sm font-medium text-blue-900 mb-2">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
        />

        {/* Email */}
        <label className="block text-sm font-medium text-blue-900 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
        />

        {/* Password */}
        <label className="block text-sm font-medium text-blue-900 mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6"
        />

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-500 transition duration-300 shadow-lg"
        >
          Sign Up
        </button>

        {/* Login Redirect */}
        <p className="text-center text-blue-900 text-sm mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline text-blue-700 hover:text-blue-600"
          >
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
