"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-white py-8 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Project Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Simple Text Platform</h2>
          <p className="text-sm text-white/90 leading-relaxed">
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
              <Link href="/" className="hover:text-blue-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-700 transition">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-blue-700 transition">
                Signup
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-white/90">For support or feedback:</p>
          <p className="text-sm mt-1">
            <a
              href="mailto:support@simpletext.com"
              className="hover:text-blue-700 transition"
            >
              support@simpletext.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Simple Text Platform. All rights reserved.
      </div>
    </footer>
  );
}
