"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [tweets, setTweets] = useState([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const fetchTweets = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/tweets`);
      setTweets(res.data);
    } catch (err) {
      console.error("Error fetching tweets:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Explore the Tweets 🌌
          </h1>
          <p className="text-lg text-gray-300 mt-3">
            A galaxy of thoughts shared by everyone ✨
          </p>
        </div>

        {/* Tweets Section */}
        <div className="space-y-6">
          {tweets.length === 0 ? (
            <p className="text-center text-gray-300 font-medium text-lg">
              No tweets available...
            </p>
          ) : (
            tweets.map((tweet) => (
              <div
                key={tweet._id}
                className="p-6 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700 hover:scale-[1.02] transition transform duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    {tweet.user?.username?.[0]?.toUpperCase() || "U"}
                  </div>
                  <p className="font-semibold text-gray-100 text-lg">
                    {tweet.user?.username || "Unknown"}
                  </p>
                </div>
                <p className="text-gray-200 text-base leading-relaxed">
                  {tweet.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}



