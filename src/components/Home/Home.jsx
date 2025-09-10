// "use client";
// import React from "react";
// import Link from "next/link";

// export default function Home() {
//   const sampleTweets = [
//     { id: 1, user: "Alice", text: "Just shared my first tweet! 🚀" },
//     { id: 2, user: "Bob", text: "Exploring new ideas today! 🌟" },
//     { id: 3, user: "Charlie", text: "This platform is amazing! 🎉" },
//   ];

//   return (
//     <main className="relative min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-white text-gray-900">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-white/10" />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-sky-400">
//             Welcome to TweetHub
//           </h1>
//           <p className="text-lg md:text-xl mb-8 text-blue-900/90 leading-relaxed">
//             Discover, Share and Explore trending tweets instantly 🚀
//           </p>

//           <Link
//             href="/dashboard"
//             className="px-6 py-3 rounded-lg bg-cyan-300 text-blue-900 font-semibold hover:bg-cyan-400 transition duration-300"
//           >
//             Join the Conversation
//           </Link>
//         </div>

//         {/* Trending Tweets Preview */}
//         <div className="grid md:grid-cols-3 gap-6 mt-12">
//           {sampleTweets.map((tweet) => (
//             <div
//               key={tweet.id}
//               className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform cursor-pointer"
//             >
//               <p className="text-gray-900 font-bold mb-2">{tweet.user}</p>
//               <p className="text-gray-700">{tweet.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* ✅ Join the Journey Section */}
//         <div className="mt-20 rounded-3xl p-12 text-center text-gray-900 shadow-lg bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 transform transition duration-500 hover:scale-105">
//           <h2 className="text-4xl font-bold mb-4 drop-shadow-md">
//             Join the Journey Today!
//           </h2>
//           <p className="text-lg mb-6">
//             Start your adventure and become part of a growing community.
//           </p>
//           <Link
//             href="/signup"
//             className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition duration-300"
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  const sampleTweets = [
    { id: 1, user: "Alice", text: "Just shared my first tweet! 🚀" },
    { id: 2, user: "Bob", text: "Exploring new ideas today! 🌟" },
    { id: 3, user: "Charlie", text: "This platform is amazing! 🎉" },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-white text-gray-900">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-blue-700">
            Welcome to TweetHub
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
            Discover, Share and Explore trending tweets instantly 🚀
          </p>

          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition duration-300"
          >
            Join the Conversation
          </Link>
        </div>

        {/* Trending Tweets Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {sampleTweets.map((tweet) => (
            <div
              key={tweet.id}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <p className="font-bold mb-2 text-blue-800">{tweet.user}</p>
              <p className="text-gray-700">{tweet.text}</p>
            </div>
          ))}
        </div>

        {/* ✅ Join the Journey Section */}
        <div className="mt-20 rounded-3xl p-12 text-center shadow-lg bg-gradient-to-r from-cyan-100 via-blue-100 to-white transform transition duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-md text-blue-800">
            Join the Journey Today!
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Start your adventure and become part of a growing community.
          </p>
          <Link
            href="/signup"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
