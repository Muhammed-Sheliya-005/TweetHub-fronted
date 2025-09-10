"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../Auth/Auth";

export default function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { storeTokenInLS } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      router.push("/profile");

      storeTokenInLS(res.data.token);

      alert(res.data.message);
      console.log(res.data);
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">
      {/* Background Glow Circles */}
      <div className="absolute w-[500px] h-[500px] bg-blue-300 rounded-full blur-[150px] opacity-30 top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-400 rounded-full blur-[120px] opacity-30 bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative z-10 bg-white/70 backdrop-blur-xl border border-white/30 p-8 rounded-2xl w-full max-w-md text-blue-900 shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-2">Welcome Back 👋</h2>
        <p className="text-center text-blue-800 mb-8">
          Please login to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Email
            </label>
            <div className="flex items-center px-3 py-2 rounded-lg border border-blue-300 bg-white/50 focus-within:ring-2 focus-within:ring-blue-400">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full bg-transparent outline-none text-blue-900 placeholder-blue-700"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Password
            </label>
            <div className="flex items-center px-3 py-2 rounded-lg border border-blue-300 bg-white/50 focus-within:ring-2 focus-within:ring-blue-400">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none text-blue-900 placeholder-blue-700"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg font-semibold transition transform hover:scale-[1.02] active:scale-95 shadow-lg disabled:opacity-60 text-white"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-blue-900">
          New here?{" "}
          <Link
            href="/signup"
            className="text-blue-700 hover:text-blue-600 font-medium transition"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
