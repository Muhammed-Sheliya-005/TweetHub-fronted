// "use client";

// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 text-white py-8 mt-10">
//       {/* Glass effect */}
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
        
//         {/* Left side - Logo / Name */}
//         <div className="text-center md:text-left">
//           <h2 className="text-2xl font-bold">Simple Text Platform</h2>
//           <p className="text-sm text-slate-300 mt-1">
//             A mini project with Authentication & JWT
//           </p>
//         </div>

//         {/* Middle - Navigation */}
//         <div className="flex gap-6">
//           <Link href="/" className="hover:text-blue-300 transition">Home</Link>
//           <Link href="/login" className="hover:text-blue-300 transition">Login</Link>
//           <Link href="/signup" className="hover:text-blue-300 transition">Signup</Link>
//         </div>

//         {/* Right side - Copyright */}
//         <div className="text-sm text-slate-300 text-center md:text-right">
//           © {new Date().getFullYear()} Simple Platform. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 text-white py-8 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Project Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Simple Text Platform</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A secure text-based platform built with <span className="font-semibold">Next.js</span>, <span className="font-semibold">MongoDB</span>, and <span className="font-semibold">JWT Authentication</span>.  
            <br />  
            Share your thoughts safely with authentication and role-based access.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-pink-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-pink-300 transition">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-pink-300 transition">
                Signup
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-slate-300">For support or feedback:</p>
          <p className="text-sm mt-1">
            <a
              href="mailto:support@simpletext.com"
              className="hover:text-pink-300 transition"
            >
              support@simpletext.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Simple Text Platform. All rights reserved.
      </div>
    </footer>
  );
}
