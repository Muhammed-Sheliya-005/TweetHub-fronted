// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function SignupPage() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const input = {
//     width: "100%", padding: "10px 12px", borderRadius: 8,
//     background: "#222", color: "#fff", border: "1px solid #444", outline: "none",
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//     if (username && email && password) {
//       alert("Signup successful! ");
//       router.push("/login"); // redirect to login page
//     } else {
//       alert("Please fill all fields!");
//     }
//   };

//   return (
    
      
//     <main style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#111"}}>
//       <form onSubmit={handleSubmit} style={{width:360,padding:24,background:"#1f2937",borderRadius:16,boxShadow:"0 10px 25px rgba(0,0,0,.3)"}}>
//         <h1 style={{textAlign:"center",color:"#fff",marginBottom:16}}>registration</h1>

//         <label style={{color:"#fff"}}>Username:</label>
//         <input style={input} placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)} />

//         <label style={{color:"#fff",marginTop:12,display:"block"}}>Email:</label>
//         <input type="email" style={input} placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />

//         <label style={{color:"#fff",marginTop:12,display:"block"}}>Password:</label>
//         <input type="password" style={input} placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />

//         <button type="submit" style={{marginTop:16,width:"100%",padding:"10px 12px",borderRadius:8,border:"none",background:"#2563eb",color:"#fff",cursor:"pointer"}}>
//           signup
//         </button>

//         {/* Link to login */}
//         <div style={{textAlign:"center",marginTop:12,fontSize:14,color:"#cbd5e1"}}>
//           Already Singup?{" "}
//           <Link href="/login" style={{textDecoration:"underline"}}>
//             Login
//           </Link>
//         </div>
//       </form>
//     </main>
    
    
//   );
// }

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
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* Signup Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-purple-900 mb-6">
          Create an Account
        </h1>

        {/* Username */}
        <label className="block text-sm font-medium text-purple-900 mb-2">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-purple-100 text-purple-900 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
        />

        {/* Email */}
        <label className="block text-sm font-medium text-purple-900 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-purple-100 text-purple-900 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
        />

        {/* Password */}
        <label className="block text-sm font-medium text-purple-900 mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-purple-100 text-purple-900 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
        />

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-semibold px-4 py-3 rounded-lg hover:bg-purple-400 transition duration-300 shadow-lg"
        >
          Sign Up
        </button>

        {/* Login Redirect */}
        <p className="text-center text-purple-900 text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="underline text-purple-700 hover:text-purple-600">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
