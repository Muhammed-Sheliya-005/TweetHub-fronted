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

    router.push("/dashboard")

    // localStorage.setItem("token", res.data.token);
    storeTokenInLS(res.data.token);


    // yahan sirf res.data ka use karna hai
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
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600">
      {/* Background Glow Circles */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-30 top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[120px] opacity-30 bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl w-full max-w-md text-white shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-2">Welcome Back 👋</h2>
        <p className="text-center text-slate-300 mb-8">
          Please login to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* email */}
          <div>
            <label className="block text-sm font-medium text-slate-200 mb-1">
              email
            </label>
            <div className="flex items-center px-3 py-2 rounded-lg border border-slate-500 bg-white/5 focus-within:ring-2 focus-within:ring-blue-400">
              
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full bg-transparent outline-none text-white placeholder-slate-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-200 mb-1">
              Password
            </label>
            <div className="flex items-center px-3 py-2 rounded-lg border border-slate-500 bg-white/5 focus-within:ring-2 focus-within:ring-blue-400">
              
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none text-white placeholder-slate-400"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg font-semibold transition transform hover:scale-[1.02] active:scale-95 shadow-lg disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-300">
          New here?{" "}
          <Link
            href="/signup"
            className="text-blue-300 hover:text-blue-200 font-medium transition"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
