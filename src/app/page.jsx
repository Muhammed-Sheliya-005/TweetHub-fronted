// import Home from '@/components/Home/Home'
// import React from 'react'

// const page = () => {
//   return (
//     <>
//     <Home />
//     </>
//   )
// }

// export default page

// "use client";
// import React from "react";
// import Link from "next/link";


// export default function Home() {
//   return (
//     <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white">
      
//       {/* Overlay effect for style */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl text-center px-6">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
//           Welcome to <span className="text-yellow-400">Simple Text-Based Platform</span>
//         </h1>
//         <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
//           Build beautiful web experiences with Next.js and Tailwind CSS.  
//           Fast, modern, and responsive designs made easy.
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4">
//           <Link
//             href="/about"
//             className="px-6 py-3 rounded-lg bg-yellow-400 text-indigo-900 font-semibold hover:bg-yellow-300 transition duration-300"
//           >
//             Get Started
//           </Link>
//           <Link
//             href="/contact"
//             className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-indigo-900 transition duration-300"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  // Tweets state
  const [tweets, setTweets] = useState([
    { id: 1, user: "Muhammed", text: "Hello sheliya! 🚀" },
    { id: 2, user: "chota", text: "hello chote 🎉" },
        { id: 3, user: "lala", text: "hello brother 🎉" },
  ]);
  const [tweetText, setTweetText] = useState("");
  const [editId, setEditId] = useState(null); // edit mode
  const [editText, setEditText] = useState("");

  // Post tweet handler
  const handlePost = (e) => {
    e.preventDefault();
    if (!tweetText.trim()) return;
    const newTweet = {
      id: tweets.length + 1,
      user: "Guest", // later replace with logged-in user
      text: tweetText,
    };
    setTweets([newTweet, ...tweets]);
    setTweetText("");
  };

  // Delete tweet handler
  const handleDelete = (id) => {
    setTweets(tweets.filter((t) => t.id !== id));
  };

  // Edit tweet handler
  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  // Save edited tweet
  const handleSaveEdit = (id) => {
    setTweets(
      tweets.map((t) =>
        t.id === id ? { ...t, text: editText } : t
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to{" "}
            <span className="text-yellow-400">
              Simple Text-Based Platform
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Post, Edit and Manage your tweets in real-time 🚀
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg bg-yellow-400 text-indigo-900 font-semibold hover:bg-yellow-300 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-indigo-900 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Tweet Section */}
        <div className="bg-white text-gray-900 shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">
            Post a Tweet 📝
          </h2>

          {/* Tweet Form */}
          <form onSubmit={handlePost} className="mb-6">
            <textarea
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
              placeholder="What's happening?"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
            <button
              type="submit"
              className="mt-3 px-5 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
            >
              Post Tweet
            </button>
          </form>

          {/* Tweet List */}
          <div className="space-y-4">
            {tweets.map((t) => (
              <div
                key={t.id}
                className="p-4 border rounded-xl bg-gray-50 shadow-sm"
              >
                <p className="font-semibold text-blue-600">{t.user}</p>

                {/* If in edit mode */}
                {editId === t.id ? (
                  <div>
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleSaveEdit(t.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-1">{t.text}</p>
                )}

                {/* Actions */}
                {editId !== t.id && (
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() => handleEdit(t.id, t.text)}
                      className="px-3 py-1 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}